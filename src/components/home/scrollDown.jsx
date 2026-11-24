const ScrollDown = () => {
  return (
    <a
      href="#qualification"
      className="mx-auto mt-16 flex w-fit items-center gap-3 text-zinc-500 transition-colors duration-300 hover:text-violet-300"
    >
      <div className="flex h-9 w-6 items-start justify-center rounded-full border border-zinc-600 p-1.5">
        <span className="h-2 w-1 rounded-full bg-violet-400 animate-bounce" />
      </div>

      <span className="text-xs font-medium tracking-widest uppercase">
        Scroll to explore
      </span>

      <i className="uil uil-arrow-down text-lg" />
    </a>
  );
};

export default ScrollDown;
