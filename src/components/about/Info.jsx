import { motion } from "framer-motion";
import {
  Award,
  BriefcaseBusiness,
  MessageCircle,
  ArrowUpRight,
  Radio,
} from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "4+",
    title: "Years of Experience",
    description: "Building digital products",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    icon: BriefcaseBusiness,
    value: "03",
    title: "Companies",
    description: "Professional experience",
    gradient: "from-cyan-400 to-blue-500",
  },
];

const Info = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 backdrop-blur-xl transition-colors duration-300 hover:border-blue-400/30 hover:bg-white/[0.06]"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/[0.08] blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

            <div className="relative flex items-start justify-between">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-10 text-white shadow-lg shadow-blue-500/10`}
              >
                <Icon size={21} />
              </div>

              <ArrowUpRight
                size={17}
                className="text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
              />
            </div>

            <div className="relative mt-6">
              <h3
                className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-4xl font-bold tracking-tight text-transparent`}
              >
                {item.value}
              </h3>

              <p className="mt-2 text-sm font-semibold text-white">
                {item.title}
              </p>

              <span className="mt-1 block text-xs text-slate-500">
                {item.description}
              </span>
            </div>

            <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
          </motion.div>
        );
      })}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.24 }}
        whileHover={{ y: -5 }}
        className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/[0.07] sm:col-span-2"
      >
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-400/[0.08] blur-3xl" />

        <div className="relative">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
              Available
            </span>
          </div>

          <h3 className="mt-3 text-xl font-bold text-white">Online 24/7</h3>

          <p className="mt-1 text-xs text-slate-400">
            Available for communication
          </p>
        </div>

        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
          <MessageCircle size={23} />
          <Radio
            size={13}
            className="absolute -right-1 -top-1 text-emerald-300"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
