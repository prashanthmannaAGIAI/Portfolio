import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { SITE_CONFIG } from "../data/config.js";

const LINKS = [
  { label: "About", id: "about" },
  { label: "Experience", id: "journey" },
  { label: "Stack", id: "stack" },
  { label: "Case Studies", id: "case-studies" },
  { label: "AI Lab", id: "ai-lab" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.35s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 76,
        }}
      >
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "0.04em",
          }}
        >
          PRASHANTH<span style={{ color: "var(--accent-teal)" }}>.AI</span>{" "}
          <span style={{ color: "var(--text-soft)" }}>// INFRA</span>
        </a>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--text-soft)",
          }}
          className="nav-desktop"
        >
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => goTo(l.id)}
              style={{
                background: "none",
                border: "none",
                color: "inherit",
                padding: 0,
                fontFamily: "inherit",
                fontSize: "inherit",
                letterSpacing: "inherit",
              }}
              className="nav-link"
            >
              {l.label}
            </button>
          ))}
          <a
            href={SITE_CONFIG.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ padding: "9px 18px", fontSize: 11 }}
          >
            Resume
          </a>
        </nav>

        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            background: "none",
            border: "none",
            padding: 8,
          }}
        >
          <span style={{ width: 22, height: 2, background: "var(--text)", display: "block" }} />
          <span style={{ width: 22, height: 2, background: "var(--text)", display: "block" }} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{
              overflow: "hidden",
              background: "rgba(255,255,255,0.98)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div className="container" style={{ display: "flex", flexDirection: "column", padding: "8px 32px 24px" }}>
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => goTo(l.id)}
                  style={{
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    padding: "12px 0",
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--text)",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {l.label}
                </button>
              ))}
              <a
                href={SITE_CONFIG.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ marginTop: 18, justifyContent: "center" }}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link { transition: color 0.2s ease; }
        .nav-link:hover { color: var(--text); }
        @media (max-width: 1000px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
