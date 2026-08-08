import { motion, useScroll, useSpring } from "framer-motion";

// Barra fina de progresso de leitura no topo.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed inset-x-0 top-0 z-50 h-[3px] bg-gold"
    />
  );
}
