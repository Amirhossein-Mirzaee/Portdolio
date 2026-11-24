import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Scrollup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 560);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="#home"
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          whileHover={{ y: -5, scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-7 right-7 z-50 flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-blue-400/30 bg-[#101827]/90 text-blue-300 shadow-[0_8px_30px_rgba(37,99,235,0.2)] backdrop-blur-xl transition-colors duration-300 hover:border-blue-400/60 hover:bg-blue-500/20 hover:text-cyan-300"
        >
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10" />

          <ArrowUp
            size={21}
            strokeWidth={2.5}
            className="relative transition-transform duration-300"
          />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default Scrollup;
