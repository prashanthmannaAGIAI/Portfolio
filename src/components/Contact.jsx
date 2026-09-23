import ScrollReveal from "./ScrollReveal.jsx";
import EmailButton from "./EmailButton.jsx";
import { SITE_CONFIG } from "../data/config.js";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <ScrollReveal>
          <div
            className="glass-panel"
            style={{
              padding: "72px 40px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
              background:
                "linear-gradient(135deg, rgba(8,127,122,0.06), rgba(53,104,201,0.05), rgba(118,83,199,0.06))",
            }}
          >
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              LET'S BUILD
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 600, maxWidth: 720 }}>
              Let’s build resilient, automated infrastructure.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                letterSpacing: "0.06em",
                color: "var(--text-soft)",
                textTransform: "uppercase",
              }}
            >
              Cloud · DevOps · AI Agents · Automation · Infrastructure
            </p>
            <p style={{ color: "var(--text-soft)", fontSize: 15, maxWidth: 560, lineHeight: 1.7 }}>
              Based in {SITE_CONFIG.location} · {SITE_CONFIG.availability}. Open to Senior DevOps,
              multi-cloud platform engineering, and AI agent deployment roles.
            </p>

            <div style={{ display: "flex", gap: 14, marginTop: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <EmailButton subject="Let's build something resilient">Email</EmailButton>
              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noreferrer" className="btn">
                LinkedIn
              </a>
              <a
                href={"https://github.com/" + SITE_CONFIG.githubUsername}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                GitHub
              </a>
              <a href={SITE_CONFIG.resumeUrl} target="_blank" rel="noreferrer" className="btn">
                Resume ↓
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
