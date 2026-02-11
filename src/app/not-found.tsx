import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-20">
      <Container className="text-center">
        <h1 className="text-7xl font-bold text-brand-500">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">
          Page Not Found
        </h2>
        <p className="mt-2 text-[var(--muted)]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Back to Home
        </Link>
      </Container>
    </section>
  );
}
