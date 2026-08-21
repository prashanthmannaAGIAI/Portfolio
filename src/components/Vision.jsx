import ScrollReveal from "./ScrollReveal.jsx";
import { VISION } from "../data/content.js";

const TAG_COLOR = {
  VISION: "var(--accent-teal)",
  "RESEARCH DIRECTION": "var(--accent-blue)",
  "FUTURE PRODUCT": "var(--accent-violet)",
  HOBBIES: "var(--accent-green)",
};

export default function Vision() {
  return (
    <section id="vision" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="eyebrow">LONG-TERM VISION</div>
          <h2 className="section-heading" style={{ marginTop: 16 }}>
            Build systems that outlive the hype.
          </h2>
        </ScrollReveal>

        <div
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {VISION.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.08}>
              <div
                className="glass-panel"
                style={{ padding: "30px 26px", height: "100%", display: "flex", flexDirection: "column", gap: 14 }}
              >
                <span
                  className="pill"
                  style={{ width: "fit-content", color: TAG_COLOR[v.tag] }}
                >
                  {v.tag}
                </span>
                <h3 style={{ fontSize: 19, fontWeight: 600 }}>{v.title}</h3>
                <p style={{ fontSize: 14.5, color: "var(--text-soft)", lineHeight: 1.7 }}>{v.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
