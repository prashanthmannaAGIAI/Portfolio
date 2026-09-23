import ScrollReveal from "./ScrollReveal.jsx";
import { SUMMARY } from "../data/content.js";
import { SITE_CONFIG } from "../data/config.js";

const FOCUS = [
  {
    title: "Deploy AI",
    color: "var(--accent-violet)",
    body: "Containerized AI agents with secure model / API access, autoscaling, monitoring, and rollback.",
  },
  {
    title: "Build",
    color: "var(--accent-blue)",
    body: "Multi-cloud on AWS, Azure, and GCP with Terraform, Kubernetes (GKE / EKS / AKS), and CI/CD.",
  },
  {
    title: "Secure",
    color: "var(--accent-teal)",
    body: "Least-privilege IAM, secrets and KMS, WAF, SAST, OPA — compliance-aware for regulated, KYC workloads.",
  },
  {
    title: "Lead",
    color: "var(--accent-green)",
    body: "Release and incident management, FinOps, stakeholders — and growth strategy with Marketing & Strategy.",
  },
];

const FACTS = [
  { label: "Current role", value: `${SITE_CONFIG.role} · ${SITE_CONFIG.currentCompany}` },
  { label: "Based in", value: SITE_CONFIG.location },
  { label: "Availability", value: SITE_CONFIG.availability },
  { label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div
          className="about-grid"
          style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: 56, alignItems: "start" }}
        >
          <ScrollReveal>
            <div className="eyebrow">ABOUT</div>
            <h2 className="section-heading" style={{ marginTop: 16 }}>
              From datacenter operations to AI agents in production.
            </h2>
            <p style={{ marginTop: 24, color: "var(--text-soft)", fontSize: 16.5, lineHeight: 1.8, maxWidth: 680 }}>
              {SUMMARY}
            </p>

            <div
              style={{
                marginTop: 36,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
              }}
            >
              {FOCUS.map((f) => (
                <div key={f.title} style={{ borderLeft: `2px solid ${f.color}`, paddingLeft: 16 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: f.color }}>{f.title}</h3>
                  <p style={{ marginTop: 6, fontSize: 14, lineHeight: 1.6, color: "var(--text-soft)" }}>{f.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-panel" style={{ padding: "28px 26px" }}>
              <dl style={{ margin: 0, display: "flex", flexDirection: "column", gap: 18 }}>
                {FACTS.map((f) => (
                  <div key={f.label}>
                    <dt
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--text-soft)",
                      }}
                    >
                      {f.label}
                    </dt>
                    <dd style={{ margin: "6px 0 0", fontSize: 15, fontWeight: 500, wordBreak: "break-word" }}>
                      {f.href ? <a href={f.href}>{f.value}</a> : f.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href={SITE_CONFIG.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ marginTop: 26, width: "100%", justifyContent: "center" }}
              >
                Download Resume (PDF)
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </section>
  );
}
