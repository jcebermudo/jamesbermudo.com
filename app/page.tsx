export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white flex flex-col md:items-center">
      <div className="flex flex-col md:flex-row w-full md:max-w-6xl">
      {/* Left column */}
      <div className="w-full md:w-80 shrink-0 md:border-r border-black/20 px-6 pt-8 pb-4 md:px-10 md:pt-28 md:sticky md:top-0 md:h-screen">
        <h1 className="text-[22px] font-medium select-none">Playground Log</h1>
        <p className="mt-1 text-base select-none">by James Bermudo</p>
        <a
          href="https://github.com/jcebermudo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block select-none"
        >
          <img src="/github.svg" alt="GitHub" width={20} height={20} />
        </a>
      </div>

      {/* Right column */}
      <div className="flex-1 pt-4 md:pt-28 px-6 md:px-12 pb-12">
        <div className="max-w-2xl space-y-4 text-base leading-relaxed">
          <p>
            This is a small corner of the internet where I write my learning
            notes on math, AI, and other things that interest me. I started
            this blog to teach myself the concepts I need for AI research and
            engineering.
          </p>
          <p>
            I&apos;m a software engineer at{" "}
            <a
              href="https://anycase.ai"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anycase.ai
            </a>,{" "}
            where I help build AI tools for Filipino lawyers. I also study
            computer science at Ateneo de Manila University.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
