import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
  Sparkles,
  Code2,
} from "lucide-react";

import vpn from "../../assets/vpn.png";
import onlineshop from "../../assets/online-shop.png";
import expence from "../../assets/expense.png";
import dark from "../../assets/dark.png";
import music from "../../assets/music-player.png";
import weather from "../../assets/weather.png";
import bmi from "../../assets/bmi.png";

const projects = [
  {
    id: "01",
    title: "Expense Tracker",
    category: "Finance Management",
    description:
      "A financial tracking application designed to help users manage expenses and monitor their spending.",
    image: expence,
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    url: "https://expense-trackerr-dusky.vercel.app/",
    type: "React",
  },
  {
    id: "02",
    title: "VPN Landing Page",
    category: "Web Application",
    description:
      "A modern VPN service website featuring a polished interface and responsive layouts.",
    image: vpn,
    technologies: ["React", "Tailwind CSS"],
    url: "https://vpn-sale-amirhoseeis-projects.vercel.app/",
    type: "React",
  },
  {
    id: "03",
    title: "Online Shop",
    category: "E-commerce",
    description:
      "An online shopping experience focused on clean product presentation and intuitive navigation.",
    image: onlineshop,
    technologies: ["React", "JavaScript", "CSS"],
    url: "https://online-shop-roan-psi.vercel.app/",
    type: "React",
  },
  {
    id: "04",
    title: "Music Player",
    category: "Interactive Application",
    description:
      "A music player interface with interactive controls and a streamlined listening experience.",
    image: music,
    technologies: ["JavaScript", "HTML", "CSS"],
    url: "https://music-player-gules-omega.vercel.app/",
    type: "JavaScript",
  },
  {
    id: "05",
    title: "Dark Mode UI",
    category: "UI / UX",
    description:
      "A lightweight interface demonstrating theme customization and dark mode functionality.",
    image: dark,
    technologies: ["JavaScript", "CSS", "HTML"],
    url: "https://dark-mode-omega-lime.vercel.app/",
    type: "JavaScript",
  },
  {
    id: "06",
    title: "Weather App",
    category: "API Integration",
    description:
      "A weather application that presents weather information through a clean and responsive interface.",
    image: weather,
    technologies: ["React", "REST API", "CSS"],
    url: "https://weather-app-delta-ashen.vercel.app/",
    type: "React",
  },
  {
    id: "07",
    title: "BMI Calculator",
    category: "Utility Application",
    description:
      "A simple BMI calculator built with an interactive interface and responsive design.",
    image: bmi,
    technologies: ["React", "Vite", "CSS"],
    url: "https://bmi-with-vite.vercel.app/",
    type: "React",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0D1421]/90 shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-colors duration-500 hover:border-blue-400/30"
    >
      {/* Project image */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.title}`}
        className="relative block aspect-[16/10] overflow-hidden bg-[#111827]"
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Image overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B12]/90 via-black/10 to-black/10 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

        <div className="absolute inset-0 bg-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Project number */}
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-xl">
          <span className="text-[10px] font-semibold tracking-widest text-blue-300">
            PROJECT
          </span>
          <span className="text-[10px] font-semibold text-white">
            {project.id}
          </span>
        </div>

        {/* Project category */}
        <div className="absolute bottom-5 left-5">
          <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-medium tracking-wide text-white/90 backdrop-blur-xl">
            {project.category}
          </span>
        </div>

        {/* Hover action */}
        <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-blue-600 text-white opacity-0 shadow-lg shadow-blue-600/30 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ExternalLink size={18} />
        </div>
      </a>

      {/* Project details */}
      <div className="relative p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-blue-300">
              {project.title}
            </h3>

            <p className="mt-3 min-h-[66px] text-xs leading-6 text-slate-400 sm:text-sm">
              {project.description}
            </p>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-400">
            {project.type === "React" ? (
              <Layers3 size={19} />
            ) : (
              <Code2 size={19} />
            )}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-white/[0.07] bg-white/[0.035] px-2.5 py-1.5 text-[10px] font-medium text-slate-400 transition-colors group-hover:border-blue-400/15 group-hover:text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Visit project */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-5 text-xs font-semibold text-slate-300 transition-colors hover:text-blue-400"
        >
          <span>Explore project</span>

          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </a>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 via-cyan-300 to-indigo-500 transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section
      id="project"
      className="relative isolate overflow-hidden bg-[#080B12] px-5 py-28 sm:px-8 lg:px-12"
    >
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute -left-48 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/[0.09] blur-[150px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-500/[0.08] blur-[150px]" />

      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.div
            variants={cardVariants}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
              Selected work
            </span>

            <Sparkles size={15} className="text-cyan-300" />
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          >
            <div>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Things I've{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  built.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-slate-400 sm:text-base">
                A collection of projects where ideas meet code. Each project
                represents a different challenge, experiment, and opportunity to
                build something meaningful.
              </p>
            </div>

            <div className="flex items-center gap-4 self-start rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-4 backdrop-blur-xl lg:self-auto">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                <Code2 size={21} />
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">
                  {String(projects.length).padStart(2, "0")}
                </p>
                <p className="text-[10px] font-medium uppercase tracking-widest text-slate-500">
                  Projects showcased
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-6 py-7 text-center backdrop-blur-xl sm:flex-row sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
              <Sparkles size={22} />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Have an interesting project in mind?
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Let's turn your idea into something exceptional.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Let's work together
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
