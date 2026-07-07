"use client";

import { useEffect, useRef, useCallback } from 'react';

interface UseScrollFrameSequenceProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  containerRef: React.RefObject<HTMLElement | null>;
  totalFrames: number;
  path: string;
  fileNamePattern: (index: number) => string;
  disabled?: boolean;
}

/**
 * A hook that manages a scroll-driven image sequence on a canvas.
 * It handles preloading, scroll mapping, and responsive drawing with object-fit: cover logic.
 */
export function useScrollFrameSequence({
  canvasRef,
  containerRef,
  totalFrames,
  path,
  fileNamePattern,
  disabled = false,
}: UseScrollFrameSequenceProps) {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  const drawImage = useCallback((index: number) => {
    if (disabled) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Find the closest loaded frame (prefer current, then look backwards)
    let imgToDraw = imagesRef.current[index];

    const isImageLoaded = (img: HTMLImageElement | undefined) =>
      img && img.complete && img.naturalWidth !== 0;

    if (!isImageLoaded(imgToDraw)) {
      // Look backwards for the last successfully loaded frame
      for (let i = index - 1; i >= 0; i--) {
        if (isImageLoaded(imagesRef.current[i])) {
          imgToDraw = imagesRef.current[i];
          break;
        }
      }
    }

    // If still no image, try looking forwards
    if (!isImageLoaded(imgToDraw)) {
      for (let i = index + 1; i < totalFrames; i++) {
        if (isImageLoaded(imagesRef.current[i])) {
          imgToDraw = imagesRef.current[i];
          break;
        }
      }
    }

    if (!isImageLoaded(imgToDraw)) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = imgToDraw.naturalWidth;
    const imgHeight = imgToDraw.naturalHeight;

    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > canvasRatio) {
      drawWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
    } else {
      drawHeight = canvasWidth / imgRatio;
      offsetY = (canvasHeight - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(imgToDraw, offsetX, offsetY, drawWidth, drawHeight);
  }, [canvasRef, totalFrames, disabled]);

  useEffect(() => {
    if (disabled) return;

    const loadRemaining = () => {
      for (let i = 1; i <= totalFrames; i++) {
        if (imagesRef.current[i - 1]) continue;

        const img = new Image();
        img.src = `${path}/${fileNamePattern(i)}`;
        imagesRef.current[i - 1] = img;
        img.onload = () => {
          if (frameIndexRef.current === i - 1) {
            if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
            rafIdRef.current = requestAnimationFrame(() => drawImage(frameIndexRef.current));
          }
        };
      }
    };

    let loadedFirstBatch = 0;
    const firstBatchSize = Math.min(15, totalFrames);

    for (let i = 1; i <= firstBatchSize; i++) {
      const img = new Image();
      img.src = `${path}/${fileNamePattern(i)}`;
      imagesRef.current[i - 1] = img;
      img.onload = () => {
        loadedFirstBatch++;
        if (i === 1) {
          if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
          rafIdRef.current = requestAnimationFrame(() => drawImage(0));
        }
        if (loadedFirstBatch === firstBatchSize) {
          loadRemaining();
        }
      };
      img.onerror = () => {
        loadedFirstBatch++;
        if (loadedFirstBatch === firstBatchSize) {
          loadRemaining();
        }
      };
    }

    return () => {
      // imagesRef.current = []; // We might want to keep them if disabled changes back, but usually it won't
    };
  }, [totalFrames, path, fileNamePattern, drawImage, disabled]);

  useEffect(() => {
    if (disabled) return;

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      drawImage(frameIndexRef.current);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [drawImage, canvasRef, disabled]);

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = rect.height - window.innerHeight;

      if (scrollHeight <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / scrollHeight));
      const frameIndex = Math.min(totalFrames - 1, Math.floor(progress * (totalFrames - 1)));

      if (frameIndex !== frameIndexRef.current) {
        frameIndexRef.current = frameIndex;
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = requestAnimationFrame(() => drawImage(frameIndex));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalFrames, drawImage, containerRef, disabled]);
}
