import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X, Code2 } from "lucide-react";

const navigation = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#project", label: "Projects" },
  { href: "#qualification", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const current = navigation
        .map(({ href }) => document.querySelector(href))
        .filter(Boolean)
        .filter((section) => section.getBoundingClientRect().top <= 180)
        .at(-1);

      if (current) {
        setActiveNav(`#${current.id}`);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleNavigation = (href) => {
    setActiveNav(href);
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 md:px-8">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        aria-label="Main navigation"
        className={`relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-5 py-3.5 transition-all duration-500 md:px-7 ${
          isScrolled
            ? "border-white/10 bg-[#080B12]/95 shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "border-white/[0.07] bg-[#080B12]/65 backdrop-blur-xl"
        }`}
      >
        <a
          href="#home"
          onClick={() => handleNavigation("#home")}
          className="group flex items-center gap-3"
          aria-label="Amirhossein Mirzaee - Home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-indigo-500/10 text-blue-300 transition-all duration-300 group-hover:border-blue-400/50 group-hover:shadow-lg group-hover:shadow-blue-500/20">
            <Code2 size={20} />
          </div>

          <div>
            <span className="block text-base font-bold tracking-tight text-white">
              AM<span className="text-blue-400">.</span>
            </span>
            <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Frontend Developer
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => handleNavigation(href)}
              aria-current={activeNav === href ? "location" : undefined}
              className={`relative rounded-xl px-3.5 py-2.5 text-xs font-medium transition-colors duration-300 ${
                activeNav === href
                  ? "text-white"
                  : "text-slate-500 hover:text-white"
              }`}
            >
              {activeNav === href && (
                <motion.span
                  layoutId="active-navigation"
                  className="absolute inset-0 rounded-xl border border-blue-400/10 bg-blue-500/[0.10]"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10">{label}</span>
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={() => handleNavigation("#contact")}
          className="group hidden items-center gap-2 rounded-xl border border-blue-400/20 bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-blue-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/40 hover:shadow-blue-500/30 lg:flex"
        >
          Let's Talk
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="flex"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 -z-10 bg-black/70 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#101725]/95 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl lg:hidden"
            >
              <div className="mb-3 flex items-center justify-between border-b border-white/[0.07] px-3 py-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Navigation
                </span>

                <span className="text-[10px] font-medium text-blue-400">
                  AM / PORTFOLIO
                </span>
              </div>

              <div className="flex flex-col gap-1">
                {navigation.map(({ href, label }, index) => (
                  <motion.a
                    key={href}
                    href={href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.045 }}
                    onClick={() => handleNavigation(href)}
                    aria-current={activeNav === href ? "location" : undefined}
                    className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm transition-all duration-300 ${
                      activeNav === href
                        ? "border border-blue-400/10 bg-blue-500/10 text-blue-300"
                        : "border border-transparent text-slate-400 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <span>{label}</span>

                    <ArrowUpRight
                      size={15}
                      className={`transition-all duration-300 ${
                        activeNav === href
                          ? "text-blue-400"
                          : "text-slate-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
                      }`}
                    />
                  </motion.a>
                ))}
              </div>

              <div className="mt-3 border-t border-white/[0.07] pt-3">
                <a
                  href="#contact"
                  onClick={() => handleNavigation("#contact")}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition-all hover:shadow-blue-500/25"
                >
                  Let's Talk
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
