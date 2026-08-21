import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal.jsx";
import { CASE_STUDIES } from "../data/content.js";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="eyebrow">CASE STUDIES</div>
          <h2 className="section-heading" style={{ marginTop: 16 }}>
            Work, translated into systems.
          </h2>
        </ScrollReveal>

        <div
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
            gap: 22,
          }}
        >
          {CASE_STUDIES.map((cs, i) => (
            <ScrollReveal key={cs.slug} delay={(i % 3) * 0.08}>
              <Link to={`/projects/${cs.slug}`} style={{ display: "block", height: "100%" }}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="glass-panel"
                  style={{
                    padding: "30px 26px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                      color: "var(--text-soft)",
                    }}
                  >
                    {cs.tag}
                  </span>
                  <h3 style={{ fontSize: 20, fontWeight: 600 }}>{cs.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--text-soft)", lineHeight: 1.65, flexGrow: 1 }}>
                    {cs.short}
                  </p>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--accent-teal)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    View case study →
                  </span>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
