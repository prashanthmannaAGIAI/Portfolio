import ScrollReveal from "./ScrollReveal.jsx";
import { CAREER } from "../data/content.js";

export default function CareerTimeline() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="eyebrow">CAREER JOURNEY</div>
          <h2 className="section-heading" style={{ marginTop: 16 }}>
            Operations → Multi-cloud → AI agents in production.
          </h2>
        </ScrollReveal>

        <div style={{ marginTop: 64, position: "relative" }}>
          <div
            aria-hidden
            className="timeline-rail"
            style={{
              position: "absolute",
              left: 11,
              top: 12,
              bottom: 12,
              width: 2,
              background:
                "linear-gradient(180deg, var(--accent-teal), var(--accent-blue), var(--accent-violet))",
              opacity: 0.35,
            }}
          />

          {CAREER.map((role, i) => (
            <ScrollReveal key={role.company} delay={i * 0.1}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "24px 1fr",
                  gap: 28,
                  marginBottom: 56,
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center", paddingTop: 6 }}>
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "var(--bg)",
                      border: "2px solid var(--accent-teal)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                    }}
                  >
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent-teal)" }} />
                  </div>
                </div>

                <div className="glass-panel" style={{ padding: "28px 30px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      flexWrap: "wrap",
                      gap: 10,
                    }}
                  >
                    <h3 style={{ fontSize: 22, fontWeight: 600, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                      {role.company}
                      {role.current && (
                        <span className="pill" style={{ color: "var(--accent-green)", borderColor: "rgba(22,128,75,0.35)" }}>
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent-green)" }} />
                          Current
                        </span>
                      )}
                    </h3>
                    <span className="pill">{role.year}</span>
                  </div>

                  <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
                    {role.roles.map((r, idx) => (
                      <span
                        key={r}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 12,
                          color: idx === role.roles.length - 1 ? "var(--accent-teal)" : "var(--text-soft)",
                        }}
                      >
                        {r}
                        {idx < role.roles.length - 1 && <span style={{ margin: "0 6px" }}>→</span>}
                      </span>
                    ))}
                    {role.location && (
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-soft)" }}>
                        · {role.location}
                      </span>
                    )}
                  </div>

                  <p style={{ marginTop: 16, color: "var(--text-soft)", lineHeight: 1.7, fontSize: 15 }}>
                    {role.summary}
                  </p>

                  {role.products && (
                    <div style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {role.products.map((p) => (
                        <span key={p} className="pill">{p}</span>
                      ))}
                    </div>
                  )}

                  <ul style={{ marginTop: 18, paddingLeft: 20, color: "var(--text-soft)", fontSize: 14, lineHeight: 1.9 }}>
                    {role.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div style={{ marginTop: 18, display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {role.technologies.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 11,
                          padding: "5px 10px",
                          borderRadius: 8,
                          background: "var(--bg-panel)",
                          color: "var(--text)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
