import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/constants";

export const metadata = {
  title: "About",
  description: "About Phuoc Le - DevOps Engineer and author of phuocle.me.",
};

const skills = [
  {
    category: "Cloud & Infrastructure",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
    items: [
      { name: "AWS", percent: 90 },
      { name: "Terraform", percent: 85 },
      { name: "Kubernetes", percent: 88 },
      { name: "GCP", percent: 75 },
      { name: "CloudFormation", percent: 80 },
    ],
  },
  {
    category: "CI/CD & Automation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    items: [
      { name: "GitHub Actions", percent: 90 },
      { name: "Jenkins", percent: 80 },
      { name: "GitLab CI", percent: 82 },
      { name: "Ansible", percent: 85 },
      { name: "Bash", percent: 92 },
    ],
  },
  {
    category: "Monitoring & Observability",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    items: [
      { name: "Prometheus", percent: 85 },
      { name: "Grafana", percent: 88 },
      { name: "Datadog", percent: 78 },
      { name: "ELK Stack", percent: 80 },
      { name: "PagerDuty", percent: 75 },
    ],
  },
  {
    category: "Programming",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: [
      { name: "Python", percent: 82 },
      { name: "Bash/Shell", percent: 92 },
      { name: "Go", percent: 65 },
      { name: "Node.js", percent: 70 },
      { name: "YAML/HCL", percent: 90 },
    ],
  },
];

const timeline = [
  {
    year: "Present",
    title: "Senior DevOps Engineer",
    description:
      "Building and maintaining cloud infrastructure at scale. Automating everything, sharing knowledge through phuocle.me.",
  },
  {
    year: "2022",
    title: "DevOps Engineer",
    description:
      "Migrated monolith to microservices on Kubernetes. Implemented GitOps workflows with ArgoCD and Terraform.",
  },
  {
    year: "2020",
    title: "Systems Administrator",
    description:
      "Managed Linux servers, implemented monitoring with Prometheus/Grafana. Started automating with Ansible and Docker.",
  },
  {
    year: "2018",
    title: "Started the Journey",
    description:
      "First steps into the world of Linux and networking. Fell in love with infrastructure and automation.",
  },
];

export default function AboutPage() {
  return (
    <section className="relative py-16 sm:py-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-brand-500/5 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-secondary-500/5 blur-[120px]" />
        <div className="absolute left-0 bottom-1/4 h-[300px] w-[300px] rounded-full bg-accent-500/5 blur-[120px]" />
      </div>

      <Container className="max-w-5xl">
        {/* Header */}
        <div className="mb-16 stagger-1">
          <span className="section-label">About</span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Hey! I&apos;m{" "}
            <span className="gradient-text">Phuoc Le</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            DevOps Engineer passionate about cloud infrastructure, automation, and
            building reliable systems. I believe in sharing knowledge to help
            others and deepen my own understanding.
          </p>
        </div>

        {/* What I Do - Full width card */}
        <div className="mb-10 stagger-2">
          <div className="gradient-border rounded-2xl bg-[var(--card)] p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 via-secondary-500 to-accent-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h2 className="text-xl font-bold">What I Do</h2>
            </div>
            <div className="space-y-4 text-[var(--muted)] leading-relaxed">
              <p>
                I&apos;m a DevOps Engineer focused on designing and maintaining
                scalable cloud infrastructure. My day-to-day involves building
                CI/CD pipelines, managing Kubernetes clusters, and automating
                everything that can be automated.
              </p>
              <p>
                <span className="font-semibold text-[var(--foreground)]">
                  phuocle.me
                </span>{" "}
                was created to share knowledge, hands-on experience, and lessons
                learned from working in production environments. I write about
                DevOps, cloud infrastructure, and engineering best practices.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section - Full width */}
        <div className="mb-10 stagger-3">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 via-secondary-500 to-accent-500 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 className="text-xl font-bold">Tech Stack</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.category} className="glow-card p-6">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500/10 via-secondary-500/10 to-accent-500/10 text-brand-500">
                    {group.icon}
                  </span>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-500">
                    {group.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-[var(--foreground)]">
                          {item.name}
                        </span>
                        <span className="text-xs font-semibold text-[var(--muted)]">
                          {item.percent}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline - Full width */}
        <div className="mb-10 stagger-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 via-secondary-500 to-accent-500 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h2 className="text-xl font-bold">Journey</h2>
          </div>
          <div className="space-y-1">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className="group relative flex gap-6 pb-8 last:pb-0"
              >
                {/* Line */}
                {i < timeline.length - 1 && (
                  <div className="absolute left-[19px] top-10 h-[calc(100%-16px)] w-px bg-gradient-to-b from-brand-500 via-secondary-500 to-accent-500 opacity-40" />
                )}
                {/* Dot */}
                <div className="relative mt-1.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 via-secondary-500 to-accent-500 shadow-lg shadow-brand-500/25 transition-all group-hover:shadow-xl group-hover:shadow-brand-500/40 group-hover:scale-110">
                  <div className="h-2.5 w-2.5 rounded-full bg-white" />
                </div>
                {/* Content */}
                <div className="gradient-border rounded-2xl bg-[var(--card)] p-5 flex-1 transition-all group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-brand-500/5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                    {item.year}
                  </span>
                  <h3 className="mt-1 font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact + Blog CTA side by side */}
        <div className="grid gap-5 sm:grid-cols-2 stagger-5">
          {/* Contact */}
          <div className="glow-card p-6 sm:p-8">
            <h2 className="text-lg font-bold">Contact</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Want to connect or have a question? Feel free to reach out!
            </p>
            <div className="mt-5 space-y-3">
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="flex items-center gap-3 rounded-lg p-2.5 text-sm font-medium text-[var(--muted)] transition-all hover:bg-brand-500/5 hover:text-brand-500"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.161V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                </span>
                {siteConfig.author.email}
              </a>
              <a
                href={siteConfig.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg p-2.5 text-sm font-medium text-[var(--muted)] transition-all hover:bg-brand-500/5 hover:text-brand-500"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </span>
                GitHub
              </a>
            </div>
          </div>

          {/* Blog CTA */}
          <div className="glow-card flex flex-col items-center justify-center p-6 sm:p-8 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/10 via-secondary-500/10 to-accent-500/10 text-brand-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <p className="font-semibold text-lg">Read my blog?</p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              DevOps, cloud infra, CI/CD & more.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/blog"
                className="btn-shimmer inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold text-white"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Read Blog
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
              <a
                href={siteConfig.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold text-brand-500"
              >
                <span className="relative z-10 flex items-center gap-2">
                  GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5zm4.943-.25a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0V6.81l-6.22 6.22a.75.75 0 11-1.06-1.06l6.22-6.22h-4.19a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
