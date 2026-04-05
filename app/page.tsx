import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import CategoryFilter from "./components/CategoryFilter";
import AnimationWrapper from "./components/AnimationWrapper";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/jcebermudo",
    icon: "/icons/github.svg",
    alt: "GitHub",
    size: { w: 20, h: 16 },
  },
  {
    href: "https://x.com/jcebermudo",
    icon: "/icons/x.svg",
    alt: "X",
    size: { w: 20, h: 14 },
  },
  {
    href: "https://www.linkedin.com/in/jcebermudo/",
    icon: "/icons/linkedin.svg",
    alt: "LinkedIn",
    size: { w: 20, h: 16 },
  },
  {
    href: "mailto:jcebermudo@gmail.com",
    icon: "/icons/email.svg",
    alt: "Email",
    size: { w: 20, h: 14 },
  },
];

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen px-6 py-20 max-w-[720px] mx-auto">
      <AnimationWrapper>
        {/* Profile */}
        <div className="mb-12">
          <Image
            src="/images/pfp.png"
            alt="James Bermudo"
            width={40}
            height={40}
            className="rounded-full mb-4 select-none"
          />
          <h1 className="text-[2rem] font-normal leading-tight mb-3">
            The Playground
          </h1>
          <p className="text-[0.9375rem] text-[var(--fg-muted)] leading-relaxed mb-4 max-w-[480px]">
            James Bermudo. CS student at ADMU, SWE intern at{" "}
            <a
              href="https://anycase.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--fg)] underline underline-offset-2 decoration-[var(--fg-subtle)] hover:decoration-[var(--fg)] transition-colors"
            >
              Anycase.ai
            </a>
            . Interested in LLMs, AI, and Math.
          </p>

          {/* Social links */}
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.alt}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-50 hover:opacity-100 transition-opacity"
                aria-label={link.alt}
              >
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={link.size.w}
                  height={link.size.h}
                  className="select-none"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Writing section */}
        <div>
          <p className="font-mono text-[0.75rem] uppercase tracking-wider text-[var(--fg-muted)] mb-5">
            Writing
          </p>
          <CategoryFilter posts={posts} />
        </div>
      </AnimationWrapper>
    </main>
  );
}
