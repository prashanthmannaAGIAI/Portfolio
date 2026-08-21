import { SITE_CONFIG } from "../data/config.js";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "32px 0" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "var(--text-soft)",
        }}
      >
        <span>© {new Date().getFullYear()} {SITE_CONFIG.name}</span>
        <span>{SITE_CONFIG.title}</span>
      </div>
    </footer>
  );
}
