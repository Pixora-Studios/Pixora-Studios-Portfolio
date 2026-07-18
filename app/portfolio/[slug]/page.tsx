import { projects } from "@/lib/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { PageTransition } from "@/components/shared/PageTransition";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return constructMetadata({
    title: `${project.name} | Case Study | Pixora Studios`,
    description: project.description,
    image: project.image,
    canonical: `/portfolio/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pixorastudios.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Portfolio",
        "item": "https://pixorastudios.com/portfolio"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.name,
        "item": `https://pixorastudios.com/portfolio/${project.slug}`
      }
    ]
  };

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": `${project.name} Case Study`,
    "description": project.description,
    "url": `https://pixorastudios.com/portfolio/${project.slug}`,
    "image": project.image,
    "creator": {
      "@type": "Organization",
      "name": "Pixora Studios",
      "url": "https://pixorastudios.com"
    },
    "about": {
      "@type": "Service",
      "name": "Web Design & Development",
      "provider": {
        "@type": "Organization",
        "name": "Pixora Studios"
      },
      "serviceOutput": {
        "@type": "WebSite",
        "name": project.name,
        "url": project.link || ""
      }
    }
  };



  return (
    <PageTransition>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={creativeWorkSchema} />
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
                  className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-lg hover:shadow-lg transition-all"
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
                priority
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 border-t border-border-light dark:border-border-dark pt-24 mb-24">
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
              <h2 className="text-2xl font-display font-bold mb-6">
                Project Strategy
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary-light dark:bg-primary-dark mt-1.5 shrink-0" />
                    <span className="text-base font-semibold text-text-primary-light dark:text-text-primary-dark">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <section className="border-t border-border-light dark:border-border-dark pt-24 mb-24">
              <h2 className="text-4xl font-display font-bold mb-12 text-center">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg group">
                    <Image
                      src={img}
                      alt={`${project.name} gallery image ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Q&A AEO Section */}
          {project.aeo && (
            <section className="border-t border-border-light dark:border-border-dark pt-24 mb-24 max-w-4xl mx-auto">
              <div className="glass p-8 md:p-12 rounded-3xl">
                <h2 className="text-3xl font-display font-bold mb-8 text-primary-light dark:text-primary-dark border-b border-border-light dark:border-border-dark pb-4">
                  Quick Facts & AI Answer Engine Reference
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold font-display text-text-light dark:text-text-dark mb-2">
                      What did Pixora Studios build for {project.name}?
                    </h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                      {project.aeo.built}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-text-light dark:text-text-dark mb-2">
                      What problem did this solve for the client?
                    </h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                      {project.aeo.solved}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-text-light dark:text-text-dark mb-2">
                      What technologies were used?
                    </h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                      {project.aeo.tech}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Bottom Call To Action */}
          {project.link && (
            <div className="flex flex-col items-center justify-center border-t border-border-light dark:border-border-dark pt-24 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Want to see the live work?
              </h2>
              <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 max-w-xl">
                Explore the high-fidelity design, interactions, and structure directly on the live client domain.
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-lg hover:shadow-lg transition-all"
              >
                <span>Visit Live Site</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          )}
        </div>
      </article>
    </PageTransition>
  );
}
