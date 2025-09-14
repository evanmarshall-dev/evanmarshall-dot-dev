import type { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import type { Project } from "@/types";
import projectsData from "@/data/projects.json";
import styles from "./page.module.css";

interface PageProps {
  params: { slug: string };
}

function findProject(slug: string): Project | undefined {
  const { projects } = projectsData as { projects: Project[] };
  return projects.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const project = findProject(params.slug);
  if (!project) return { title: "Project Not Found" };

  const url = `https://www.evanmarshall.dev/projects/${project.slug}`;
  const title = `${project.title} | Projects`;
  const description = project.description;
  const images = project.images?.length
    ? project.images
    : ["/images/og-image.jpg"];

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      images: images.map((u) => ({ url: u })),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const cookieStore = await cookies();
  const nonce = cookieStore.get("__csp_nonce")?.value || "";

  const project = findProject(params.slug);
  if (!project) {
    return (
      <div className={styles.page}>
        <h1 className="sr-only">Project Not Found</h1>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: "Not found" },
          ]}
        />
        <div className={styles.container}>
          <p>Sorry, this project could not be found.</p>
          <Link href="/projects">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <h1 className="sr-only">{project.title}</h1>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      <article className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.description}>
            {project.longDescription || project.description}
          </p>
        </header>

        {/* Hero image */}
        {project.images?.[0] && (
          <div className={styles.heroImage}>
            <Image
              src={project.images[0]}
              alt=""
              width={1200}
              height={630}
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
        )}

        {/* Meta */}
        <dl className={styles.meta}>
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>{project.category}</dd>
          </div>
          {project.technologies?.length ? (
            <div>
              <dt>Tech</dt>
              <dd>
                <ul className={styles.techList}>
                  {project.technologies.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ) : null}
        </dl>

        {/* Links */}
        <div className={styles.links}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: project.title,
              url: `https://www.evanmarshall.dev/projects/${project.slug}`,
              description: project.description,
              image: project.images || [],
              datePublished: `${project.year}-01-01`,
              inLanguage: "en-CA",
            }),
          }}
        />
      </article>
    </div>
  );
}
