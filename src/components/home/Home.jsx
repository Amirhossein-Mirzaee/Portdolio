import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Send,
  Mail,
  Code2,
  Sparkles,
  Layers3,
  Cpu,
  Globe2,
} from "lucide-react";

import profileImg from "../../assets/profile.jpeg";
import { GitHubIcon } from "../../assets/icons/icons";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const technologies = [
  { name: "React", position: "left-[2%] top-[18%]", icon: Code2 },
  { name: "TypeScript", position: "right-[0%] top-[32%]", icon: Layers3 },
  { name: "Next.js", position: "bottom-[20%] left-[0%]", icon: Globe2 },
  { name: "WebSockets", position: "bottom-[12%] right-[3%]", icon: Cpu },
];

const socials = [
  {
    href: "https://github.com/Amirhossein-Mirzaee",
    icon: GitHubIcon,
    label: "GitHub",
  },
  {
    href: "https://t.me/amirhossein_mirzaee",
    icon: Send,
    label: "Telegram",
  },
  {
    href: "mailto:amir2021zx@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

const Home = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#080B12] px-5 pb-20 pt-32 sm:px-8 lg:px-12"
    >
      {/* Background lighting */}
      <div className="pointer-events-none absolute -left-52 top-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-blue-600/[0.12] blur-[150px]" />
      <div className="pointer-events-none absolute -right-52 bottom-0 -z-10 h-[600px] w-[600px] rounded-full bg-indigo-600/[0.12] blur-[160px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[150px]" />

      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Hero content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative z-10 order-2 lg:order-1"
          >
            <motion.div variants={item}>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/[0.07] px-4 py-2.5 backdrop-blur-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                <span className="text-xs font-medium tracking-wide text-blue-100/80">
                  Available for new opportunities
                </span>

                <Sparkles size={14} className="text-blue-400" />
              </div>
            </motion.div>

            <motion.p
              variants={item}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-blue-400"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-7xl lg:text-[76px] xl:text-[88px]"
            >
              Amirhossein
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text pb-3 text-transparent">
                Mirzaee<span className="text-blue-400">.</span>
              </span>
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <span className="h-px w-10 bg-blue-500" />

              <h2 className="text-base font-medium tracking-wide text-slate-200 sm:text-lg">
                Frontend Developer
              </h2>

              <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-300">
                React · Next.js
              </span>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-sm leading-8 text-slate-400 sm:text-base"
            >
              I transform complex ideas into elegant digital experiences.
              Building high-performance applications, scalable architectures,
              and intuitive interfaces with a passion for clean code and
              thoughtful engineering.
            </motion.p>

            {/* Actions */}
            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_15px_50px_rgba(37,99,235,0.4)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">Let's collaborate</span>

                <ArrowUpRight
                  size={18}
                  className="relative transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#project"
                className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-7 py-4 text-sm font-medium text-slate-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/[0.08] hover:text-white"
              >
                Explore my work
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={item}
              className="mt-12 flex flex-wrap items-center gap-5"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-600">
                Find me on
              </span>

              <div className="h-5 w-px bg-white/10" />

              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 35 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="order-1 mx-auto w-full max-w-[470px] lg:order-2"
          >
            <div className="relative mx-auto aspect-square w-full max-w-[440px]">
              {/* Orbital rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[3%] rounded-full border border-dashed border-blue-400/15"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[12%] rounded-full border border-blue-300/[0.08]"
              />

              {/* Glow */}
              <div className="absolute inset-[14%] rounded-full bg-blue-500/20 blur-[80px]" />

              {/* Main profile card */}
              <div className="absolute inset-[16%] overflow-hidden rounded-[2rem] border border-white/10 bg-[#101827] shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                <img
                  src={profileImg}
                  alt="Amirhossein Mirzaee"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* Image overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-[#080B12]/10 to-[#080B12]/20" />

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-indigo-500/20" />

                {/* Decorative grid */}
                <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:35px_35px]" />

                {/* Name and role */}

                {/* Bottom information */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur-xl sm:bottom-4 sm:left-4 sm:right-4 sm:p-4">
                  <div>
                    <p className="text-[10px] text-slate-400">My approach</p>

                    <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                      Design · Code · Experience
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-400/20 bg-blue-500/15 p-2 text-blue-400">
                    <Code2 size={20} />
                  </div>
                </div>
              </div>

              {/* Floating technology badges */}
              {technologies.map(({ name, position, icon: Icon }, index) => (
                <motion.div
                  key={name}
                  animate={{
                    y: [0, index % 2 === 0 ? -10 : 10, 0],
                  }}
                  transition={{
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute ${position} z-20 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#111827]/90 px-3 py-2.5 shadow-xl shadow-black/30 backdrop-blur-xl sm:flex`}
                >
                  <Icon size={16} className="text-blue-400" />

                  <span className="text-[11px] font-medium text-slate-200">
                    {name}
                  </span>
                </motion.div>
              ))}

              {/* Orbit accents */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-[10%] top-[20%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(103,232,249,0.8)]"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute bottom-[18%] right-[12%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.9)]"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="mx-auto mt-20 flex w-fit flex-col items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-slate-600 transition-colors hover:text-blue-400"
        >
          Scroll to discover
          <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/15 p-1.5">
            <motion.span
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1 rounded-full bg-blue-400"
            />
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default Home;
