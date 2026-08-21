import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "../data/config.js";

function buildLinks(email, subject = "") {
  const encodedSubject = encodeURIComponent(subject);
  return [
    {
      label: "Gmail",
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}`,
    },
    {
      label: "Outlook.com",
      href: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodedSubject}`,
    },
    {
      label: "Yahoo Mail",
      href: `https://compose.mail.yahoo.com/?to=${email}&subject=${encodedSubject}`,
    },
    {
      label: "Default mail app",
      href: `mailto:${email}${subject ? `?subject=${encodedSubject}` : ""}`,
    },
  ];
}

export default function EmailButton({ className = "btn btn-primary", subject = "", children = "Email" }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const links = buildLinks(SITE_CONFIG.email, subject);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  return (
    <div ref={rootRef} style={{ position: "relative", display: "inline-block" }}>
      <button
        type="button"
        className={className}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {children}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.16 }}
            role="menu"
            className="glass-panel"
            style={{
              position: "absolute",
              top: "calc(100% + 10px)",
              left: 0,
              minWidth: 200,
              padding: 8,
              zIndex: 50,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Default mail app" ? undefined : "_blank"}
                rel="noreferrer"
                role="menuitem"
                onClick={() => setOpen(false)}
                style={{
                  padding: "10px 12px",
                  borderRadius: 10,
                  fontSize: 13.5,
                  color: "var(--text)",
                  display: "block",
                }}
                className="email-menu-item"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .email-menu-item:hover { background: var(--bg-panel); }
      `}</style>
    </div>
  );
}
