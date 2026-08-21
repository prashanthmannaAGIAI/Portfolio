import ScrollReveal from "./ScrollReveal.jsx";

const NODE_STYLE = {
  fontFamily: "var(--font-mono)",
  fontSize: 12,
  letterSpacing: "0.05em",
};

function Node({ x, y, label, color = "var(--text)", w = 118, h = 46 }) {
  return (
    <g transform={`translate(${x - w / 2}, ${y - h / 2})`}>
      <rect
        width={w}
        height={h}
        rx={12}
        fill="rgba(255,255,255,0.9)"
        stroke="var(--border-strong)"
        strokeWidth="1"
      />
      <text
        x={w / 2}
        y={h / 2 + 4}
        textAnchor="middle"
        style={{ ...NODE_STYLE, fill: color, textTransform: "uppercase" }}
      >
        {label}
      </text>
    </g>
  );
}

function Packet({ pathD, color, duration = 3, delay = 0 }) {
  return (
    <circle r="4" fill={color}>
      <animateMotion dur={`${duration}s`} repeatCount="indefinite" path={pathD} begin={`${delay}s`} />
    </circle>
  );
}

function Edge({ d, dashed = false }) {
  return (
    <path
      d={d}
      fill="none"
      stroke="var(--border-strong)"
      strokeWidth={1.4}
      strokeDasharray={dashed ? "4 6" : "none"}
    />
  );
}

function EdgeLabel({ x, y, children, color = "var(--text-soft)" }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 9.5,
        letterSpacing: "0.08em",
        fill: color,
        textTransform: "uppercase",
      }}
    >
      {children}
    </text>
  );
}

export default function CloudArchitecture() {
  // Path definitions (viewBox 0 0 900 680)
  const userToAgent = "M450,58 L450,122";
  const agentToCicd = "M450,168 L450,222";
  const cicdToAws = "M450,268 Q450,300 340,330 L300,352";
  const cicdToGcp = "M450,268 Q450,300 560,330 L600,352";
  const awsToApp = "M300,378 Q300,420 400,436 L440,452";
  const gcpToApp = "M600,378 Q600,420 500,436 L460,452";
  const appToDb = "M450,478 L450,530";

  const securityToCicd = "M170,300 Q300,300 424,244";
  const securityToAws = "M170,320 Q220,360 264,364";
  const securityToGcp = "M170,320 Q500,400 636,364";
  const securityToApp = "M170,340 Q300,460 408,462";

  return (
    <section id="architecture" className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <ScrollReveal>
          <div className="eyebrow">LIVE SYSTEM VISUALIZATION</div>
          <h2 className="section-heading" style={{ marginTop: 16 }}>
            A cloud nervous system.
          </h2>
          <p style={{ marginTop: 16, color: "var(--text-soft)", maxWidth: 620, fontSize: 16, lineHeight: 1.7 }}>
            A simplified view of how a request travels from a user through automation, security
            checks, and infrastructure — all the way to the data layer.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            className="glass-panel"
            style={{ marginTop: 48, padding: "24px 12px", overflow: "hidden" }}
          >
            <svg viewBox="0 0 900 680" style={{ width: "100%", height: "auto", display: "block" }}>
              {/* Edges */}
              <Edge d={userToAgent} />
              <Edge d={agentToCicd} />
              <Edge d={cicdToAws} />
              <Edge d={cicdToGcp} />
              <Edge d={awsToApp} />
              <Edge d={gcpToApp} />
              <Edge d={appToDb} />
              <Edge d={securityToCicd} dashed />
              <Edge d={securityToAws} dashed />
              <Edge d={securityToGcp} dashed />
              <Edge d={securityToApp} dashed />

              {/* Edge labels */}
              <EdgeLabel x={520} y={95}>Live Telemetry</EdgeLabel>
              <EdgeLabel x={555} y={195}>Deployment Events</EdgeLabel>
              <EdgeLabel x={230} y={420}>Automation</EdgeLabel>
              <EdgeLabel x={175} y={278} color="var(--accent-teal)">Security Gate</EdgeLabel>
              <EdgeLabel x={175} y={598} color="var(--accent-teal)">Policy Check</EdgeLabel>

              {/* Packets */}
              <Packet pathD={userToAgent} color="#3568c9" duration={2.4} />
              <Packet pathD={agentToCicd} color="#087f7a" duration={2.2} delay={0.4} />
              <Packet pathD={cicdToAws} color="#3568c9" duration={2.8} delay={0.8} />
              <Packet pathD={cicdToGcp} color="#7653c7" duration={2.8} delay={1.1} />
              <Packet pathD={awsToApp} color="#3568c9" duration={2.6} delay={1.6} />
              <Packet pathD={gcpToApp} color="#7653c7" duration={2.6} delay={1.9} />
              <Packet pathD={appToDb} color="#16804b" duration={2} delay={2.2} />

              {/* Nodes */}
              <Node x={450} y={40} label="User" />
              <Node x={450} y={145} label="AI Agent" color="var(--accent-violet)" />
              <Node x={450} y={245} label="CI/CD" color="var(--accent-blue)" />
              <Node x={300} y={365} label="AWS" color="var(--accent-teal)" />
              <Node x={600} y={365} label="GCP" color="var(--accent-blue)" />
              <Node x={450} y={465} label="Application" />
              <Node x={450} y={555} label="Database" color="var(--accent-green)" />
              <Node
                x={130}
                y={330}
                label="Security"
                color="var(--accent-teal)"
                w={130}
                h={130}
              />
            </svg>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
