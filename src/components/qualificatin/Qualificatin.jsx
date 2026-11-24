import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  CalendarDays,
  MapPin,
  Sparkles,
  ArrowUpRight,
  Building2,
  Layers3,
  Palette,
  Radio,
  Database,
  Workflow,
} from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Aseman Sooye Parsian",
    location: "Tehran, Iran",
    date: "2022 · 9 months",
    type: "Professional Experience",
    description: [
      "Contributed to developing and improving a digital waybill management system using React and Tailwind CSS.",
      "Participated in agile sprints and Git-based code review workflows.",
    ],
    technologies: ["React.js", "Tailwind CSS", "Git", "Agile"],
  },
  {
    title: "Frontend Developer",
    company: "DGEA",
    location: "Tehran, Iran",
    date: "2022 – 2025 · 2 years 9 months",
    type: "Professional Experience",
    description: [
      "Core developer on a hybrid platform combining a text-based social network with a full cryptocurrency exchange.",
      "Built WebSocket-driven pipelines for real-time prices, order books, and in-app chat with sub-second latency.",
      "Developed a real-time in-app messaging system using WebSockets for instant peer-to-peer communication.",
      "Developed financial charts and data tables using Chart.js and Recharts for live market visualization.",
      "Optimized social feed performance with Infinite Scroll and built key UI using MUI components.",
    ],
    technologies: ["React.js", "WebSockets", "Chart.js", "Recharts", "MUI"],
  },
  {
    title: "Frontend Developer",
    company: "Arsess Financial Information Company",
    location: "Tehran, Iran",
    date: "2025 – 2026 · 1 year",
    type: "Professional Experience",
    description: [
      "Developed frontend architecture for B2C and B2B applications in a shared monorepo, eliminating duplication across projects.",
      "Integrated Swagger-based API automation so new backend endpoints were instantly available in the codebase.",
      "Built and maintained a shared UI component library with 40+ reusable components and versioned design tokens.",
      "Implemented Next.js and TypeScript performance patterns for faster load times.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Monorepo",
      "Swagger",
      "Component Architecture",
    ],
  },
  {
    title: "Frontend Developer",
    company: "FANAP Operation Company",
    location: "Tehran, Iran",
    date: "2026 – Present",
    type: "Professional Experience",
    current: true,
    description: [
      "Developed, maintained, and supported legacy MVC-based applications, focusing on performance, bug resolution, and system stability.",
      "Modernized existing legacy systems through code quality improvements and new features based on business requirements.",
      "Maintained and refactored codebases to improve readability, maintainability, and compatibility.",
      "Collaborated with the development team to analyze requirements and deliver software improvements.",
    ],
    technologies: ["MVC", "JavaScript", "Frontend Maintenance", "Refactoring"],
  },
];

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    description: "Programming languages and modern syntax",
    skills: ["JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers3,
    description: "Frontend frameworks and development tools",
    skills: ["React.js", "Vite", "Next.js", "React Query", "TanStack Query"],
  },
  {
    title: "Styling & UI",
    icon: Palette,
    description: "Building consistent and responsive interfaces",
    skills: ["Material UI", "Tailwind CSS", "CSS Modules", "Ant Design"],
  },
  {
    title: "APIs & Real-time",
    icon: Radio,
    description: "Data communication and real-time applications",
    skills: ["REST APIs", "Axios", "WebSockets"],
  },
  {
    title: "State Management",
    icon: Database,
    description: "Managing application state and data flow",
    skills: ["Redux & RTK", "Zustand"],
  },
];

const Qualificatin = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section
      id="qualification"
      className="relative overflow-hidden bg-[#080B12] px-4 py-28 text-white sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
            <Sparkles size={14} />
            Career & Expertise
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            My Professional
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Over 4 years of building modern web applications, working with
            real-time systems, and developing scalable frontend architectures.
          </p>
        </motion.div>

        <div className="mb-16 flex justify-center">
          <div className="inline-flex rounded-2xl border border-white/[0.08] bg-white/[0.035] p-1.5 backdrop-blur-xl">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-8 ${
                activeTab === "experience"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BriefcaseBusiness size={17} />
              Experience
            </button>

            <button
              onClick={() => setActiveTab("skills")}
              className={`flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-8 ${
                activeTab === "skills"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Code2 size={17} />
              Technical Skills
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "experience" ? (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-blue-500 via-indigo-500/60 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

              <div className="space-y-10">
                {experiences.map((item, index) => (
                  <motion.div
                    key={item.company}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.12, duration: 0.5 }}
                    className={`relative flex items-start gap-4 sm:w-[calc(50%+20px)] ${
                      index % 2 === 0
                        ? "sm:mr-auto sm:flex-row-reverse"
                        : "sm:ml-auto"
                    }`}
                  >
                    <div className="relative z-10 mt-7 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-400/40 bg-[#101827] shadow-[0_0_25px_rgba(59,130,246,0.2)]">
                      <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.055] hover:shadow-[0_15px_50px_rgba(37,99,235,0.08)] sm:p-7">
                        <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/[0.08] blur-3xl transition-all duration-500 group-hover:bg-blue-500/[0.15]" />

                        <div className="relative">
                          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                            <span className="rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-300">
                              {item.type}
                            </span>

                            {item.current && (
                              <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                                Current
                              </span>
                            )}
                          </div>

                          <h3 className="text-lg font-bold leading-snug text-white transition-colors group-hover:text-blue-300 sm:text-xl">
                            {item.title}
                          </h3>

                          <div className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                            <Building2
                              size={14}
                              className="shrink-0 text-blue-400"
                            />
                            {item.company}
                          </div>

                          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
                            <span className="flex items-center gap-1.5">
                              <CalendarDays size={13} />
                              {item.date}
                            </span>

                            <span className="flex items-center gap-1.5">
                              <MapPin size={13} />
                              {item.location}
                            </span>
                          </div>

                          <ul className="mt-5 space-y-3">
                            {item.description.map((description) => (
                              <li
                                key={description}
                                className="flex gap-2.5 text-sm leading-7 text-slate-400"
                              >
                                <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                {description}
                              </li>
                            ))}
                          </ul>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {item.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-lg border border-white/[0.07] bg-white/[0.04] px-2.5 py-1.5 text-[11px] font-medium text-slate-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                              0{index + 1} / 0{experiences.length}
                            </span>

                            <ArrowUpRight
                              size={17}
                              className="text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {skillGroups.map((group, index) => {
                const Icon = group.icon;

                return (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.055]"
                  >
                    <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/[0.08] blur-3xl transition-all group-hover:bg-blue-500/[0.15]" />

                    <div className="relative">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/[0.08] text-blue-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-400/[0.15]">
                        <Icon size={22} />
                      </div>

                      <h3 className="text-lg font-bold text-white transition-colors group-hover:text-blue-300">
                        {group.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {group.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-white/[0.07] bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-blue-400/30 hover:text-blue-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col justify-center rounded-2xl border border-blue-400/15 bg-gradient-to-br from-blue-500/[0.09] to-indigo-500/[0.08] p-7 sm:col-span-2 lg:col-span-1"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
                  <Workflow size={22} />
                </div>

                <h3 className="text-xl font-bold text-white">
                  Engineering Mindset
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Focused on scalable architecture, reusable components,
                  real-time data, maintainable code, and high-performance
                  frontend applications.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-20 max-w-3xl rounded-3xl border border-blue-400/15 bg-gradient-to-br from-blue-500/[0.09] via-white/[0.025] to-indigo-500/[0.08] p-8 text-center sm:p-10"
        >
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
            <Code2 size={23} />
          </div>

          <h3 className="text-xl font-bold text-white sm:text-2xl">
            Always Learning. Always Building.
          </h3>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-400">
            I enjoy solving complex problems and turning ideas into scalable,
            reliable, and impactful digital products.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30"
          >
            Let's Connect
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Qualificatin;
