import { motion } from "framer-motion";
import {
  Code2,
  Layers3,
  Braces,
  Radio,
  Network,
  Database,
  ChartNoAxesCombined,
  Workflow,
  Package,
  Terminal,
  Gauge,
  MessagesSquare,
  Building2,
  Server,
  Sparkles,
  ArrowUpRight,
  Zap,
} from "lucide-react";

const technicalSkills = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript ES6+", category: "Language" },
  { name: "Vite", category: "Build Tools" },
  { name: "React Query / TanStack Query", category: "State & Data" },
  { name: "Redux Toolkit", category: "State Management" },
  { name: "Zustand", category: "State Management" },
  { name: "Material UI", category: "UI Libraries" },
  { name: "Ant Design", category: "UI Libraries" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "CSS Modules", category: "Styling" },
  { name: "REST APIs", category: "API Integration" },
  { name: "Axios", category: "API Integration" },
  { name: "WebSockets", category: "Real-time" },
];

const expertise = [
  {
    name: "Real-time Data Pipelines",
    description: "Live prices, order books and data streaming",
    icon: Radio,
  },
  {
    name: "WebSocket Applications",
    description: "Real-time messaging and in-app chat systems",
    icon: MessagesSquare,
  },
  {
    name: "Monorepo Architecture",
    description: "Shared B2C and B2B application architecture",
    icon: Layers3,
  },
  {
    name: "Reusable Component Libraries",
    description: "40+ shared UI components and design tokens",
    icon: Package,
  },
  {
    name: "Financial Data Visualization",
    description: "Interactive charts using Chart.js and Recharts",
    icon: ChartNoAxesCombined,
  },
  {
    name: "Swagger API Automation",
    description: "API integration and automated endpoint workflows",
    icon: Terminal,
  },
  {
    name: "Frontend Performance",
    description: "Optimized rendering and high-performance interfaces",
    icon: Gauge,
  },
  {
    name: "Legacy System Modernization",
    description: "Maintaining and refactoring MVC applications",
    icon: Server,
  },
  {
    name: "Cross-functional Collaboration",
    description: "Agile sprints, code reviews and team development",
    icon: Workflow,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const SkillCard = ({ name, category, index }) => {
  return (
    <motion.div
      variants={cardAnimation}
      whileHover={{ y: -5, scale: 1.015 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-colors duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.06]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.07] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-400 transition-colors duration-300 group-hover:bg-blue-500/20">
            <Code2 size={18} />
          </div>

          <div className="min-w-0">
            <h4 className="truncate text-sm font-medium text-slate-200 transition-colors group-hover:text-white">
              {name}
            </h4>

            <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
              {category}
            </p>
          </div>
        </div>

        <span className="shrink-0 text-xs font-semibold tabular-nums text-blue-400/70">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
};

const ExpertiseCard = ({ name, description, icon: Icon }) => {
  return (
    <motion.div
      variants={cardAnimation}
      whileHover={{ y: -4, x: 3 }}
      className="group flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-500/[0.05]"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-400/[0.06] text-blue-400 transition-all duration-300 group-hover:from-blue-500/25 group-hover:to-cyan-400/15 group-hover:text-cyan-300">
        <Icon size={18} />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="text-xs font-semibold leading-5 text-slate-200 transition-colors group-hover:text-white sm:text-sm">
          {name}
        </h4>

        <p className="mt-1 text-[11px] leading-5 text-slate-500">
          {description}
        </p>
      </div>

      <ArrowUpRight
        size={15}
        className="mt-1 shrink-0 text-slate-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
      />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-[#080B12] px-5 py-28 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute -left-48 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/[0.09] blur-[150px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[150px]" />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.07] px-4 py-2">
            <Sparkles size={14} className="text-blue-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-300">
              My technical stack
            </span>
          </div>

          <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Expertise.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Technologies and engineering practices I use to build scalable
            applications, real-time platforms, and production-ready interfaces.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0D1421]/80 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-8"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/[0.08] blur-[70px]" />

            <div className="relative mb-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                  <Braces size={23} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Technical Stack
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Technologies, frameworks & tools
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="relative grid gap-3 sm:grid-cols-2"
            >
              {technicalSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  category={skill.category}
                  index={index}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0D1421]/80 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-8"
          >
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/[0.07] blur-[70px]" />

            <div className="relative mb-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-400">
                  <Layers3 size={23} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Engineering Expertise
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Architecture & practical experience
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="relative grid gap-3 sm:grid-cols-2"
            >
              {expertise.map((skill) => (
                <ExpertiseCard
                  key={skill.name}
                  name={skill.name}
                  description={skill.description}
                  icon={skill.icon}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-6 text-center backdrop-blur-xl sm:flex-row sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10 text-cyan-300">
              <Zap size={21} />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">
                Always learning. Always building.
              </h4>
              <p className="mt-1 text-xs text-slate-500">
                Turning complex engineering challenges into reliable digital
                experiences.
              </p>
            </div>
          </div>

          <a
            href="#project"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-blue-400 transition-colors hover:text-cyan-300"
          >
            Explore my projects
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
