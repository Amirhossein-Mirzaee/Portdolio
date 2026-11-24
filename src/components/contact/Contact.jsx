import { motion } from "framer-motion";
import {
  Mail,
  Send,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { GitHubIcon } from "../../assets/icons/icons";

const contactMethods = [
  {
    title: "Email",
    subtitle: "Let's discuss opportunities",
    value: "amir2021zx@gmail.com",
    href: "mailto:amir2021zx@gmail.com?subject=Mail%20from%20Portfolio",
    action: "Send an email",
    icon: Mail,
    accent: "from-blue-500 to-cyan-400",
    glow: "bg-blue-500/10",
  },
  {
    title: "GitHub",
    subtitle: "Explore my code and projects",
    value: "Amirhossein-Mirzaee",
    href: "https://github.com/Amirhossein-Mirzaee",
    action: "Visit GitHub",
    icon: GitHubIcon,
    accent: "from-slate-300 to-blue-400",
    glow: "bg-slate-400/10",
  },
  {
    title: "Telegram",
    subtitle: "Let's have a conversation",
    value: "@amirhossein_mirzaee",
    href: "https://t.me/amirhossein_mirzaee",
    action: "Message me",
    icon: Send,
    accent: "from-cyan-400 to-blue-500",
    glow: "bg-cyan-500/10",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
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
            Get In Touch
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let's Build
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Something Great.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Have an interesting project, a new opportunity, or just want to
            connect? I'm always open to meaningful conversations.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;

            return (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.title === "Email" ? undefined : "_blank"}
                rel={
                  method.title === "Email" ? undefined : "noopener noreferrer"
                }
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.055] hover:shadow-[0_20px_60px_rgba(37,99,235,0.1)] sm:p-8"
              >
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full ${method.glow} blur-[70px] transition-all duration-500 group-hover:scale-150`}
                />

                <div className="relative">
                  <div className="mb-8 flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-gradient-to-br ${method.accent} bg-opacity-10 text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon size={25} />
                    </div>

                    <ArrowUpRight
                      size={22}
                      className="text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-300">
                    {method.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {method.subtitle}
                  </p>

                  <div className="mt-7 border-t border-white/[0.07] pt-5">
                    <p className="break-all text-sm font-medium text-slate-300">
                      {method.value}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all duration-300 group-hover:gap-3">
                      {method.action}
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-blue-400/15 bg-gradient-to-br from-blue-500/[0.10] via-white/[0.025] to-indigo-500/[0.10] p-8 text-center sm:p-12"
        >
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
              <MessageCircle size={25} />
            </div>

            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Have a project in mind?
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-400">
              Let's turn your ideas into something exceptional. Feel free to
              reach out and let's explore what we can build together.
            </p>

            <a
              href="mailto:amir2021zx@gmail.com?subject=Let's%20Work%20Together"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/40"
            >
              Start a Conversation
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-xs tracking-wide text-slate-600">
            © {new Date().getFullYear()} Amirhossein Mirzaee. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
