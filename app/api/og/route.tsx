import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get('title') || 'Pixora Studios';
    const description = searchParams.get('description') || 'Web Development Company in Bhubaneswar';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#050505',
            color: 'white',
            padding: '40px 80px',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Background pattern */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'radial-gradient(circle at 2px 2px, #1a1a1a 1px, transparent 0)',
              backgroundSize: '24px 24px',
              opacity: 0.5,
            }}
          />

          {/* Glow effect */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
            }}
          >
             <div style={{
               fontSize: 48,
               fontWeight: 900,
               background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
               backgroundClip: 'text',
               color: 'transparent',
               marginRight: 16,
               letterSpacing: '-0.05em',
             }}>
               PIXORA
             </div>
             <div style={{ fontSize: 48, fontWeight: 300, letterSpacing: '0.1em' }}>STUDIOS</div>
          </div>

          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 24,
              letterSpacing: '-0.03em',
              padding: '0 40px',
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: 32,
              color: '#a1a1aa',
              maxWidth: '900px',
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            {description}
          </div>

          <div style={{
            position: 'absolute',
            bottom: 60,
            display: 'flex',
            fontSize: 24,
            color: '#fbbf24',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            pixorastudios.in
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
