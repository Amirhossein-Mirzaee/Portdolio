const Data = () => {
  return (
    <div className="max-w-2xl">
      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2">
        <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
        <span className="text-xs font-medium tracking-wide text-violet-300">
          FRONTEND DEVELOPER
        </span>
      </div>

      <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
        Amirhossein
        <span className="mt-2 block bg-gradient-to-r from-violet-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
          Mirzaee.
        </span>
      </h1>

      <h2 className="mt-7 text-xl font-medium text-zinc-300 sm:text-2xl">
        Building digital experiences that make a difference.
      </h2>

      <p className="mt-5 max-w-xl text-sm leading-8 text-zinc-400 sm:text-base">
        4+ years building high-performance web applications for real-time
        trading platforms and AI-driven SaaS products. Specialized in React,
        Next.js and TypeScript, with a passion for clean architecture and
        exceptional user experiences.
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-4">
        <a
          href="#contact"
          className="group inline-flex items-center gap-3 rounded-xl bg-violet-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-400 hover:shadow-violet-500/30"
        >
          Let's work together
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </a>

        <a
          href="#project"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-violet-400/40 hover:bg-white/[0.06] hover:text-white"
        >
          View my work
        </a>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((item) => (
          <span
            key={item}
            className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-2 text-xs font-medium text-zinc-400"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Data;
