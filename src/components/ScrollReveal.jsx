import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
  once = true,
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
