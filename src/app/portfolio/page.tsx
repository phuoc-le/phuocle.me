import Link from "next/link";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Portfolio",
  description: "Featured projects and infrastructure work by Phuoc Le.",
};

const projects = [
  {
    title: "Cloud Infrastructure Platform",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z" clipRule="evenodd" />
      </svg>
    ),
    bullets: [
      "Multi-account AWS infrastructure with Terraform",
      "VPC networking, EKS clusters, RDS databases",
      "Automated security compliance scanning",
      "Infrastructure cost optimization",
    ],
    tags: ["AWS", "Terraform", "Kubernetes", "Python"],
    featured: true,
  },
  {
    title: "GitOps CI/CD Pipeline",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.882a.75.75 0 00-.926.94 7.5 7.5 0 01-12.548 3.364l-1.903-1.903h3.183a.75.75 0 000-1.5H3.977a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.523-.328z" clipRule="evenodd" />
      </svg>
    ),
    bullets: [
      "End-to-end GitOps workflow with GitHub Actions & ArgoCD",
      "Automated builds, tests, and security scanning",
      "Zero-downtime deployments to Kubernetes",
      "Helm-based environment promotion strategy",
    ],
    tags: ["GitHub Actions", "ArgoCD", "Helm", "Docker"],
    featured: true,
  },
  {
    title: "phuocle.me",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.781 7.024c-.898.199-1.83.3-2.781.3-.951 0-1.883-.1-2.781-.3A17.152 17.152 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
      </svg>
    ),
    bullets: [
      "Personal DevOps blog built with Next.js 15",
      "Velite MDX for content management",
      "Tailwind CSS v4 with custom design system",
      "Statically generated, deployed via CI/CD pipeline",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    link: "https://phuocle.me",
    github: "https://github.com/phuocle/phuocle.me",
  },
  {
    title: "Monitoring & Alerting Stack",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
      </svg>
    ),
    bullets: [
      "Production monitoring with Prometheus & Grafana",
      "Custom dashboards and SLO tracking",
      "Alertmanager with PagerDuty integration",
      "On-call rotation and escalation policies",
    ],
    tags: ["Prometheus", "Grafana", "Alertmanager", "Docker"],
  },
  {
    title: "Infrastructure Automation Toolkit",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
      </svg>
    ),
    bullets: [
      "Ansible playbooks for server provisioning",
      "Configuration management at scale",
      "Automated log rotation and backup strategies",
      "Custom Bash tooling for operational tasks",
    ],
    tags: ["Ansible", "Bash", "Linux", "Python"],
  },
  {
    title: "Container Registry & Image Pipeline",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
      </svg>
    ),
    bullets: [
      "Private container registry with automated builds",
      "Vulnerability scanning with Trivy",
      "Image promotion across dev, staging, and production",
      "ECR lifecycle policies and cost management",
    ],
    tags: ["Docker", "Trivy", "GitHub Actions", "ECR"],
  },
];

export default function PortfolioPage() {
  return (
    <section className="relative py-16 sm:py-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-brand-500/5 blur-[100px] animate-float" />
        <div className="absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-accent-500/5 blur-[80px] animate-float [animation-delay:3s]" />
      </div>

      <Container className="max-w-5xl">
        {/* Page header */}
        <div className="mb-16">
          <span className="section-label">Portfolio</span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Projects & Infrastructure
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[var(--muted)]">
            A selection of infrastructure projects and tools I&apos;ve built and contributed to.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`glow-card group p-6 sm:p-8 ${project.featured ? "sm:col-span-2" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="gradient-text-static shrink-0">
                      {project.icon}
                    </span>
                    <h2 className={`font-bold tracking-tight transition-colors group-hover:text-brand-500 ${project.featured ? "text-xl sm:text-2xl" : "text-lg"}`}>
                      {project.title}
                    </h2>
                    {project.featured && (
                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-500 via-secondary-500 to-accent-500 px-2.5 py-0.5 text-xs font-semibold text-white">
                        Featured
                      </span>
                    )}
                  </div>

                  <ul className={`mt-3 space-y-1.5 ${project.featured ? "text-base" : "text-sm"}`}>
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 leading-relaxed text-[var(--muted)]">
                        <span className="mt-0.5 shrink-0 text-brand-500 font-semibold" aria-hidden="true">&#x203A;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tech-tag"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External link icon */}
                <div className="mt-1 shrink-0 text-[var(--muted-foreground)] opacity-0 transition-all group-hover:opacity-100 group-hover:text-brand-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Links */}
              {(project.link || project.github) && (
                <div className="mt-6 flex items-center gap-4 border-t border-[var(--border)] pt-5">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                        <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5zm4.03-.28a.75.75 0 011.06 0l5 5a.75.75 0 11-1.06 1.06L10 8.06l-.72.72a.75.75 0 01-1.06-1.06l2.5-2.5z" clipRule="evenodd" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Source Code
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="glow-card inline-block p-8 sm:p-10">
            <p className="text-lg font-semibold">Want to collaborate or see more?</p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Reach out via GitHub or email to chat.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://github.com/phuocle"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub Profile
                </span>
              </a>
              <Link
                href="/about"
                className="btn-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                <span className="relative z-10">About Me</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
