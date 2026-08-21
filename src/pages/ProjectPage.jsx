import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import { CASE_STUDIES } from "../data/content.js";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = CASE_STUDIES.find((c) => c.slug === slug);

  if (!project) return <Navigate to="/" replace />;

  const otherProjects = CASE_STUDIES.filter((c) => c.slug !== slug);

  return (
    <>
      <Navbar />
      <div className="section" style={{ paddingTop: 64 }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <ScrollReveal>
            <Link
              to="/"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--text-soft)",
                display: "inline-flex",
                gap: 6,
              }}
            >
              ← Back to case studies
            </Link>

            <div style={{ marginTop: 24 }}>
              <span className="pill">{project.tag}</span>
              <h1 style={{ fontSize: "clamp(30px, 4.4vw, 46px)", fontWeight: 600, marginTop: 18, lineHeight: 1.12 }}>
                {project.title}
              </h1>
              <p style={{ marginTop: 18, fontSize: 17, color: "var(--text-soft)", lineHeight: 1.7, maxWidth: 640 }}>
                {project.overview}
              </p>
              {project.productUrl && (
                <a
                  href={project.productUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ marginTop: 20, width: "fit-content" }}
                >
                  Visit Product ↗
                </a>
              )}
            </div>
          </ScrollReveal>

          <div style={{ marginTop: 56, display: "grid", gap: 40 }}>
            <ScrollReveal>
              <Block title="Problem" body={project.problem} />
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <Block title="Engineering approach" body={project.approach} />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <SectionLabel>Architecture visualization</SectionLabel>
                <ArchitectureStrip technologies={project.technologies} />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <div>
                <SectionLabel>Technologies</SectionLabel>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                  {project.technologies.map((t) => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <div>
                <SectionLabel>Responsibilities</SectionLabel>
                <ul style={{ marginTop: 12, paddingLeft: 20, color: "var(--text-soft)", lineHeight: 1.9 }}>
                  {project.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <Block title="Outcome" body={project.outcome} />
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <Block title="Future improvements" body={project.future} />
            </ScrollReveal>
          </div>

          <div style={{ marginTop: 72, borderTop: "1px solid var(--border)", paddingTop: 40 }}>
            <SectionLabel>Other case studies</SectionLabel>
            <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
              {otherProjects.map((p) => (
                <Link key={p.slug} to={`/projects/${p.slug}`} className="btn">
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function SectionLabel({ children }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--accent-teal)",
      }}
    >
      {children}
    </div>
  );
}

function Block({ title, body }) {
  return (
    <div>
      <SectionLabel>{title}</SectionLabel>
      <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.75, color: "var(--text)" }}>{body}</p>
    </div>
  );
}

function ArchitectureStrip({ technologies }) {
  return (
    <div
      className="glass-panel"
      style={{
        marginTop: 14,
        padding: "24px 20px",
        display: "flex",
        alignItems: "center",
        gap: 10,
        flexWrap: "wrap",
        overflow: "hidden",
      }}
    >
      {technologies.map((t, i) => (
        <div key={t} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              padding: "8px 14px",
              borderRadius: 10,
              background: "var(--bg-panel)",
            }}
          >
            {t}
          </span>
          {i < technologies.length - 1 && (
            <span style={{ color: "var(--text-soft)", fontSize: 13 }}>→</span>
          )}
        </div>
      ))}
    </div>
  );
}
