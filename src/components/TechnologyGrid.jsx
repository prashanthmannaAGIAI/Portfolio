import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal.jsx";
import { TECHNOLOGIES } from "../data/content.js";

const CATEGORY_COLOR = {
  Cloud: "var(--accent-blue)",
  Automation: "var(--accent-teal)",
  "CI/CD": "var(--accent-teal)",
  Operations: "var(--accent-violet)",
  AI: "var(--accent-violet)",
};

export default function TechnologyGrid() {
  return (
    <section id="stack" className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <ScrollReveal>
          <div className="eyebrow">TECHNOLOGY MATRIX</div>
          <h2 className="section-heading" style={{ marginTop: 16 }}>
            The stack behind the automation.
          </h2>
        </ScrollReveal>

        <div
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
            gap: 18,
          }}
        >
          {TECHNOLOGIES.map((tech, i) => (
            <ScrollReveal key={tech.name} delay={(i % 4) * 0.06}>
              <motion.div
                whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="glass-panel"
                style={{
                  padding: "22px 20px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  borderTop: `2px solid ${CATEGORY_COLOR[tech.category] || "var(--accent-teal)"}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: "var(--bg-panel)",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 600,
                    fontSize: 14,
                    color: CATEGORY_COLOR[tech.category] || "var(--accent-teal)",
                  }}
                >
                  {tech.name.slice(0, 2).toUpperCase()}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600 }}>{tech.name}</h3>
                <p style={{ fontSize: 13.5, color: "var(--text-soft)", lineHeight: 1.6, flexGrow: 1 }}>
                  {tech.description}
                </p>
                <span
                  className="pill"
                  style={{ width: "fit-content", color: CATEGORY_COLOR[tech.category] }}
                >
                  {tech.category}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
