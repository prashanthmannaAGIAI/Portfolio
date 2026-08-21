import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal.jsx";
import { SITE_CONFIG } from "../data/config.js";

const LANGUAGE_COLOR = {
  JavaScript: "#e0b400",
  TypeScript: "#3568c9",
  Python: "#087f7a",
  HTML: "#7653c7",
  CSS: "#16804b",
  Shell: "#60727e",
};

export default function GitHubRadar() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);

  const fetchRepos = useCallback(async () => {
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch(
        `https://api.github.com/users/${SITE_CONFIG.githubUsername}/repos?sort=updated&per_page=6`
      );
      if (!res.ok) {
        throw new Error(res.status === 404 ? "GitHub user not found." : `GitHub API error (${res.status}).`);
      }
      const data = await res.json();
      setRepos(Array.isArray(data) ? data : []);
      setStatus("success");
    } catch (e) {
      setError(e.message || "Something went wrong while syncing GitHub.");
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <section id="github" className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <ScrollReveal>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div>
              <div className="eyebrow">GITHUB // OPEN SOURCE RADAR</div>
              <h2 className="section-heading" style={{ marginTop: 16 }}>
                Live from GitHub, not a snapshot.
              </h2>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={fetchRepos} className="btn" disabled={status === "loading"}>
                {status === "loading" ? "Syncing…" : "Sync GitHub"}
              </button>
              <a
                href={`https://github.com/${SITE_CONFIG.githubUsername}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Open GitHub Profile
              </a>
            </div>
          </div>
        </ScrollReveal>

        <div style={{ marginTop: 40 }}>
          {status === "loading" && repos.length === 0 && (
            <div style={{ display: "flex", gap: 10, color: "var(--text-soft)", fontFamily: "var(--font-mono)", fontSize: 13 }}>
              <SpinnerDot /> Fetching repositories for @{SITE_CONFIG.githubUsername}…
            </div>
          )}

          {status === "error" && (
            <div
              className="glass-panel"
              style={{ padding: "22px 24px", color: "var(--text-soft)", fontSize: 14 }}
            >
              Couldn't sync GitHub right now — {error} You can still browse the profile directly.
            </div>
          )}

          {repos.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 18,
              }}
            >
              {repos.map((repo, i) => (
                <ScrollReveal key={repo.id} delay={(i % 3) * 0.06}>
                  <motion.a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -5 }}
                    className="glass-panel"
                    style={{
                      display: "block",
                      padding: "22px 22px",
                      height: "100%",
                    }}
                  >
                    <h3 style={{ fontSize: 16, fontWeight: 600, wordBreak: "break-word" }}>{repo.name}</h3>
                    <p
                      style={{
                        marginTop: 10,
                        fontSize: 13.5,
                        color: "var(--text-soft)",
                        lineHeight: 1.6,
                        minHeight: 40,
                      }}
                    >
                      {repo.description || "No description provided."}
                    </p>

                    <div
                      style={{
                        marginTop: 16,
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        fontFamily: "var(--font-mono)",
                        fontSize: 11.5,
                        color: "var(--text-soft)",
                      }}
                    >
                      {repo.language && (
                        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span
                            style={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              background: LANGUAGE_COLOR[repo.language] || "var(--accent-teal)",
                            }}
                          />
                          {repo.language}
                        </span>
                      )}
                      <span>★ {repo.stargazers_count}</span>
                      <span>⑂ {repo.forks_count}</span>
                    </div>

                    <div style={{ marginTop: 10, fontSize: 11, color: "var(--text-soft)", fontFamily: "var(--font-mono)" }}>
                      Updated {new Date(repo.updated_at).toLocaleDateString()}
                    </div>
                  </motion.a>
                </ScrollReveal>
              ))}
            </div>
          )}

          {status === "success" && repos.length === 0 && (
            <div className="glass-panel" style={{ padding: "22px 24px", color: "var(--text-soft)", fontSize: 14 }}>
              No public repositories found for @{SITE_CONFIG.githubUsername} yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SpinnerDot() {
  return (
    <motion.span
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      style={{
        width: 12,
        height: 12,
        borderRadius: "50%",
        border: "2px solid var(--border-strong)",
        borderTopColor: "var(--accent-teal)",
        display: "inline-block",
      }}
    />
  );
}
