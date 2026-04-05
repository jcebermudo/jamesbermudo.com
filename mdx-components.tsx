import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-[1.75rem] font-normal mt-10 mb-4 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-[1.25rem] font-normal mt-8 mb-3 leading-snug">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[1.0625rem] font-normal mt-6 mb-2 leading-snug">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="my-5 leading-[1.75]">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="underline underline-offset-2 decoration-[var(--fg-subtle)] hover:decoration-[var(--fg)] transition-colors"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="my-5 pl-6 list-disc space-y-1 leading-[1.75]">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-5 pl-6 list-decimal space-y-1 leading-[1.75]">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-[1.75]">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="my-5 pl-4 border-l-2 border-[var(--fg-subtle)] text-[var(--fg-muted)] italic">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded text-[0.875em] bg-[var(--code-bg)] font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-6 p-5 rounded-lg overflow-x-auto text-[0.875rem] leading-relaxed bg-[var(--code-bg)] font-mono">
        {children}
      </pre>
    ),
    hr: () => (
      <hr className="my-10 border-t border-[var(--fg-subtle)]" />
    ),
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto">
        <table className="w-full text-[0.9375rem] border-collapse">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="px-3 py-2 text-left font-normal border-b border-[var(--fg-subtle)] text-[var(--fg-muted)] text-[0.8125rem] uppercase tracking-wide font-mono">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-3 py-2 border-b border-[var(--fg-subtle)]">
        {children}
      </td>
    ),
    ...components,
  };
}
