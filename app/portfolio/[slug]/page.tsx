import { projects } from "@/lib/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { PageTransition } from "@/components/shared/PageTransition";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} | Case Study | Pixora Studios`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PageTransition>
      <article className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 text-text-muted-dark hover:text-primary-light dark:hover:text-primary-dark mb-12 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-primary-light dark:text-primary-dark font-mono text-sm uppercase tracking-widest mb-4 block">
                {project.industry}
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
                {project.name}
              </h1>
              <p className="text-xl text-text-muted-light dark:text-text-muted-dark mb-12">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-12">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 rounded-full glass border border-border-light dark:border-border-dark text-sm font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-lg"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 border-t border-border-light dark:border-border-dark pt-24">
            <div className="md:col-span-2 space-y-16">
              <section>
                <h2 className="text-3xl font-display font-bold mb-6">The Challenge</h2>
                <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                  {project.challenge}
                </p>
              </section>
              <section>
                <h2 className="text-3xl font-display font-bold mb-6">Our Solution</h2>
                <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                  {project.solution}
                </p>
              </section>
              <section>
                <h2 className="text-3xl font-display font-bold mb-6">Key Features</h2>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3 text-lg">
                      <span className="w-2 h-2 rounded-full bg-primary-light dark:bg-primary-dark" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            <div className="glass p-8 rounded-3xl h-fit">
              <h2 className="text-2xl font-display font-bold mb-6">Project Results</h2>
              <ul className="space-y-6">
                {project.results.map((result, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="text-3xl font-display font-bold text-primary-light dark:text-primary-dark mb-2">
                      {result.split(" ")[0]}
                    </span>
                    <span className="text-text-muted-light dark:text-text-muted-dark">
                      {result.split(" ").slice(1).join(" ")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
