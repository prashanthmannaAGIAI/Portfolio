import { motion } from "framer-motion";
import AIHeroNetwork from "./AIHeroNetwork.jsx";
import { SITE_CONFIG } from "../data/config.js";
import EmailButton from "./EmailButton.jsx";
import prashanthPhoto from "../assets/prashanth-photo.jpg";

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        paddingTop: 76,
        overflow: "hidden",
      }}
    >
      {/* Ambient background tints */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(60% 50% at 15% 20%, rgba(8,127,122,0.06), transparent), radial-gradient(50% 40% at 85% 75%, rgba(118,83,199,0.06), transparent)",
          zIndex: 0,
        }}
      />

      <div
        className="container hero-grid"
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: 56,
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* LEFT: Photo */}
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: -60, zIndex: 0 }}>
            <AIHeroNetwork className="hero-network" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative", zIndex: 1 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "relative",
                borderRadius: 28,
                padding: 3,
                background:
                  "linear-gradient(140deg, rgba(8,127,122,0.55), rgba(53,104,201,0.4), rgba(118,83,199,0.45))",
                boxShadow: "0 30px 70px -20px rgba(16,32,45,0.25)",
                maxWidth: 420,
              }}
            >
              <div
                style={{
                  borderRadius: 25,
                  overflow: "hidden",
                  background: "var(--bg)",
                }}
              >
                <img
                  src={prashanthPhoto}
                  alt="Prashanth Manna, DevOps and Cloud Engineer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    aspectRatio: "4 / 5",
                    display: "block",
                  }}
                />
              </div>
            </motion.div>

            <div
              className="pill"
              style={{
                marginTop: 18,
                background: "rgba(255,255,255,0.85)",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--accent-green)",
                  boxShadow: "0 0 0 3px rgba(22,128,75,0.15)",
                }}
              />
              SYSTEMS ONLINE
            </div>

            <p
              style={{
                marginTop: 14,
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.08em",
                color: "var(--text-soft)",
                lineHeight: 1.8,
              }}
            >
              AWS · GCP · AI AGENTS
              <br />
              SECURITY · AUTOMATION
            </p>
          </motion.div>
        </div>

        {/* RIGHT: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="eyebrow">AI-DRIVEN CLOUD &amp; DEVOPS ENGINEERING</div>

          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 600,
              lineHeight: 1.08,
              marginTop: 18,
            }}
          >
            Engineering the <span className="gradient-text">systems</span> behind{" "}
            <span className="gradient-text">intelligent</span> products.
          </h1>

          <p
            style={{
              marginTop: 24,
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--text-soft)",
              maxWidth: 560,
            }}
          >
            Prashanth Manna — DevOps &amp; Cloud Engineer building automated delivery, multi-cloud
            infrastructure and AI-native operations across AWS and Google Cloud. From enterprise
            operations to autonomous engineering workflows.
          </p>

          <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
            <EmailButton subject="Let's talk about infrastructure">Start a Conversation</EmailButton>
            <a href={SITE_CONFIG.linkedin} target="_blank" rel="noreferrer" className="btn">
              LinkedIn
            </a>
            <button onClick={() => scrollTo("architecture")} className="btn">
              Explore the System
            </button>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: left; }
          .hero-network { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
