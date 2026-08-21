import ScrollReveal from "./ScrollReveal.jsx";
import { EDUCATION, CERTIFICATIONS, AWARD } from "../data/content.js";

export default function Credentials() {
  return (
    <section className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <ScrollReveal>
          <div className="eyebrow">CREDENTIALS</div>
          <h2 className="section-heading" style={{ marginTop: 16 }}>
            Education, certifications &amp; recognition.
          </h2>
        </ScrollReveal>

        <div
          style={{
            marginTop: 44,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          <ScrollReveal>
            <div className="glass-panel" style={{ padding: "28px 26px", height: "100%" }}>
              <span className="pill" style={{ color: "var(--accent-blue)" }}>Education</span>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 16 }}>{EDUCATION.degree}</h3>
              <p style={{ marginTop: 8, color: "var(--text-soft)", fontSize: 14 }}>
                {EDUCATION.institution} · {EDUCATION.year}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="glass-panel" style={{ padding: "28px 26px", height: "100%" }}>
              <span className="pill" style={{ color: "var(--accent-teal)" }}>Certifications</span>
              <ul style={{ marginTop: 16, paddingLeft: 18, color: "var(--text-soft)", fontSize: 14, lineHeight: 1.8 }}>
                {CERTIFICATIONS.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <div className="glass-panel" style={{ padding: "28px 26px", height: "100%" }}>
              <span className="pill" style={{ color: "var(--accent-violet)" }}>Award</span>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 16 }}>{AWARD.title}</h3>
              <p style={{ marginTop: 8, color: "var(--text-soft)", fontSize: 14, lineHeight: 1.7 }}>
                {AWARD.description}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
