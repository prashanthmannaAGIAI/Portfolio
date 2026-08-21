import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal.jsx";

const LOG_LINES = [
  { text: "agent.observe()", type: "call" },
  { text: "Collecting infrastructure telemetry...", type: "info" },
  { text: "✓ 148 signals received", type: "success" },
  { text: "", type: "blank" },
  { text: "agent.analyze()", type: "call" },
  { text: "Checking deployment drift + policy state...", type: "info" },
  { text: "✓ No critical security violations", type: "success" },
  { text: "", type: "blank" },
  { text: "agent.plan()", type: "call" },
  { text: "Generating controlled remediation...", type: "info" },
  { text: "", type: "blank" },
  { text: "agent.validate()", type: "call" },
  { text: "Policy gates passed", type: "success" },
  { text: "", type: "blank" },
  { text: "agent.execute()", type: "call" },
  { text: "Deployment verified", type: "success" },
  { text: "", type: "blank" },
  { text: "agent.report()", type: "call" },
  { text: "Human-readable outcome generated", type: "info" },
  { text: "", type: "blank" },
  { text: "SYSTEM READY", type: "ready" },
];

const COLOR = {
  call: "#7fd6c9",
  info: "#c9d3da",
  success: "#6bd08a",
  ready: "#3568c9",
  blank: "transparent",
};

export default function DevOpsTerminal() {
  const [visibleCount, setVisibleCount] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    let i = 0;
    let timeout;

    const tick = () => {
      i += 1;
      setVisibleCount(i % (LOG_LINES.length + 6));
      const delay = i % (LOG_LINES.length + 6) === 0 ? 1400 : 340;
      timeout = setTimeout(tick, delay);
    };

    timeout = setTimeout(tick, 340);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [visibleCount]);

  const shown = LOG_LINES.slice(0, Math.min(visibleCount, LOG_LINES.length));

  return (
    <section className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <ScrollReveal>
          <div className="eyebrow">AUTONOMOUS OPERATIONS LOOP</div>
          <h2 className="section-heading" style={{ marginTop: 16 }}>
            Watching the agent think.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            style={{
              marginTop: 40,
              maxWidth: 720,
              borderRadius: 18,
              overflow: "hidden",
              background: "#0d1620",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 16px",
                background: "#111e29",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
              <span
                style={{
                  marginLeft: 12,
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                prashanth@ai-ops // autonomous-loop
              </span>
            </div>

            <div
              ref={scrollRef}
              className="scrollbar-thin"
              style={{
                padding: "20px 22px",
                height: 340,
                overflowY: "auto",
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                lineHeight: 1.9,
              }}
            >
              {shown.map((line, i) => (
                <div key={i} style={{ color: COLOR[line.type], minHeight: 22 }}>
                  {line.type === "blank" ? "\u00A0" : line.text}
                </div>
              ))}
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 15,
                  background: "#7fd6c9",
                  animation: "blink 1s steps(1) infinite",
                }}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}
