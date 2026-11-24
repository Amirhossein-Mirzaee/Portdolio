import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Mail, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../../assets/icons/icons";

const Footer = () => {
  const navigation = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#project" },
    { label: "Experience", href: "#qualification" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/Amirhossein-Mirzaee",
      icon: GitHubIcon,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/amirhossein-mirzaee-9b652b27a/",
      icon: LinkedInIcon,
    },
    {
      label: "Email",
      href: "mailto:amir2021zx@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#080B12] px-4 pb-8 pt-16 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-12 border-b border-white/[0.07] pb-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#home" className="group inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-300 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400/40">
                <Code2 size={23} />
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  Amirhossein
                  <span className="text-blue-400">.</span>
                </h2>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Frontend Developer
                </span>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Building high-performance web applications, scalable frontend
              architectures, and meaningful digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
              Quick Navigation
            </h3>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    <span className="h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-4" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
              Let's Connect
            </h3>

            <p className="mb-6 text-sm leading-7 text-slate-400">
              Have a project or an interesting opportunity? Let's get in touch.
            </p>

            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.label === "Email" ? undefined : "_blank"}
                    rel={
                      social.label === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.label}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-slate-400 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-blue-300 hover:shadow-[0_8px_25px_rgba(37,99,235,0.12)]"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>

            <a
              href="mailto:amir2021zx@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-cyan-300"
            >
              amir2021zx@gmail.com
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-5 pt-8 text-center sm:flex-row sm:text-left"
        >
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-300">
              Amirhossein Mirzaee
            </span>
            . All rights reserved.
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition-colors hover:text-blue-400"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.035] transition-all group-hover:border-blue-400/30 group-hover:bg-blue-400/10">
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
