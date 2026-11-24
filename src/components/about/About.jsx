import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Code2,
  Layers3,
  Workflow,
  Sparkles,
  Terminal,
  Cpu,
  Zap,
} from "lucide-react";

import AboutImg from "../../assets/IMG_20230805_162734_936.jpg";
import CV from "../../assets/cv.pdf";
import Info from "./Info";

const ease = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

const highlights = [
  {
    number: "01",
    icon: Layers3,
    title: "Scalable Architecture",
    description:
      "Creating maintainable applications through reusable components, modular systems, and thoughtful architecture.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Real-time Experiences",
    description:
      "Building responsive interfaces powered by WebSockets, dynamic data, and efficient application state.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Clean Engineering",
    description:
      "Writing structured, reliable code with an emphasis on performance, readability, and maintainability.",
  },
];

const technologies = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "WebSockets",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#080B12] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="pointer-events-none absolute -left-48 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/[0.09] blur-[150px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-500/[0.09] blur-[150px]" />

      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "65px 65px",
        }}
      />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              About Me
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl"
          >
            Engineering ideas.
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text pb-2 text-transparent">
              Creating experiences.
            </span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <p className="max-w-xl text-sm leading-8 text-slate-400 sm:text-base">
              A closer look at my journey, engineering mindset, and passion for
              building digital products that make an impact.
            </p>

            <span className="hidden text-xs font-medium tracking-[0.2em] text-slate-600 sm:block">
              01 / ABOUT
            </span>
          </motion.div>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
            className="relative mx-auto w-full max-w-[420px]"
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20 blur-2xl" />

            <div className="absolute -right-3 -top-3 h-28 w-28 rounded-tr-[2rem] border-r border-t border-blue-400/50" />

            <div className="absolute -bottom-3 -left-3 h-28 w-28 rounded-bl-[2rem] border-b border-l border-cyan-400/40" />

            <div className="relative rounded-[2rem] border border-white/10 bg-[#101725] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={AboutImg}
                  alt="Portrait of Amirhossein Mirzaee"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-transparent to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/20" />

                <div className="absolute bottom-7 left-6 right-6">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-black/40 px-3 py-2 backdrop-blur-xl">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                      <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                    </span>

                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                      Available for opportunities
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Amirhossein
                    <span className="text-blue-300"> Mirzaee.</span>
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-300">
                    Frontend Developer
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-6 top-12 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#111827]/95 p-4 shadow-xl backdrop-blur-xl sm:flex"
            >
              <div className="rounded-xl border border-blue-400/15 bg-blue-500/15 p-3 text-blue-400">
                <Terminal size={21} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">4+ Years</p>
                <p className="mt-1 text-xs text-slate-400">Experience</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -right-5 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#111827]/95 p-4 shadow-xl backdrop-blur-xl sm:flex"
            >
              <div className="rounded-xl border border-cyan-400/15 bg-cyan-500/15 p-3 text-cyan-400">
                <Sparkles size={21} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">Modern UI</p>
                <p className="mt-1 text-xs text-slate-400">Product focused</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="flex flex-col"
          >
            <motion.div variants={itemVariants}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 text-xs font-medium text-blue-300">
                <Code2 size={14} />A developer with a product mindset
              </div>

              <h3 className="max-w-xl text-2xl font-semibold leading-snug text-white sm:text-3xl">
                Turning complex ideas into{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  powerful web experiences.
                </span>
              </h3>

              <p className="mt-6 text-sm leading-8 text-slate-400 sm:text-base">
                I'm a Frontend Developer with 4+ years of experience building
                high-performance web applications for real-time trading
                platforms and AI-driven SaaS products.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-400 sm:text-base">
                My expertise includes React.js, Next.js, and TypeScript, with a
                strong focus on WebSocket-driven data pipelines, monorepo
                architecture, and scalable component systems. I enjoy solving
                challenging engineering problems and creating interfaces that
                feel intuitive, fast, and reliable.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-2"
            >
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-blue-400/30 hover:text-blue-300"
                >
                  {technology}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="my-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-xl sm:p-6"
            >
              <Info />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href={CV}
                download="Amirhossein-Mirzaee-CV.pdf"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/40"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">Download Resume</span>

                <ArrowDownToLine
                  size={17}
                  className="relative transition-transform group-hover:translate-y-1"
                />
              </a>

              <a
                href="#project"
                className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-4 text-sm font-semibold text-slate-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/[0.08] hover:text-white"
              >
                Explore Projects
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-28"
        >
          <motion.div
            variants={itemVariants}
            className="mb-9 flex items-end justify-between gap-5"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-500" />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                  What I bring to the table
                </p>
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                How I approach development
              </h3>
            </div>

            <Sparkles
              className="mb-1 hidden text-blue-400 sm:block"
              size={28}
            />
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.number}
                  variants={itemVariants}
                  whileHover={{ y: -7 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0D1421]/80 p-7 backdrop-blur-xl transition-all duration-500 hover:border-blue-400/30 hover:bg-blue-500/[0.05] hover:shadow-[0_20px_60px_rgba(37,99,235,0.08)]"
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/[0.08] blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

                  <div className="relative flex items-center justify-between">
                    <div className="rounded-xl border border-blue-400/20 bg-blue-500/10 p-3 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <span className="text-xs font-semibold tracking-[0.2em] text-slate-600">
                      {feature.number}
                    </span>
                  </div>

                  <h4 className="relative mt-8 text-lg font-semibold text-white">
                    {feature.title}
                  </h4>

                  <p className="relative mt-3 text-sm leading-7 text-slate-400">
                    {feature.description}
                  </p>

                  <div className="relative mt-7 h-px w-10 bg-gradient-to-r from-blue-500 to-cyan-300 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-blue-400/15 bg-gradient-to-br from-blue-500/[0.10] via-white/[0.025] to-indigo-500/[0.10] p-7 sm:p-9"
        >
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-[100px]" />

          <div className="relative flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <div className="rounded-2xl border border-cyan-400/15 bg-cyan-500/10 p-4 text-cyan-300">
                <Cpu size={25} />
              </div>

              <div>
                <h4 className="text-base font-semibold text-white sm:text-lg">
                  Building with purpose. Engineering with passion.
                </h4>

                <p className="mt-2 text-sm text-slate-400">
                  Focused on meaningful products and better digital experiences.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-300 transition-all hover:border-blue-400/40 hover:bg-blue-500/20 hover:text-cyan-300"
            >
              Let's connect
              <Zap
                size={16}
                className="transition-transform group-hover:scale-125"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
