import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal.jsx";
import { AI_KNOWLEDGE_BASE, AI_FALLBACK_ANSWER } from "../data/content.js";

const SUGGESTED = [
  "What does Prashanth do?",
  "What is his current role?",
  "What is his AI-agent work?",
  "How can I contact him?",
];

// ------------------------------------------------------------
// Answer resolution.
//
// Today this runs entirely locally against a structured
// knowledge base (see src/data/content.js) — no network call,
// no API key, nothing exposed to the browser.
//
// To connect a real LLM later, replace the body of
// `resolveAnswer` with a call to your own backend endpoint,
// e.g.:
//
//   async function resolveAnswer(question) {
//     const res = await fetch("/api/assistant", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ question }),
//     });
//     const data = await res.json();
//     return data.answer;
//   }
//
// Your backend (not this frontend) is where the Anthropic /
// OpenAI / Gemini API key should live. Never call a model
// provider directly from client-side JavaScript with a key
// embedded in it.
// ------------------------------------------------------------
async function resolveAnswer(question) {
  const normalized = question.toLowerCase();
  const match = AI_KNOWLEDGE_BASE.find((entry) =>
    entry.keywords.some((kw) => normalized.includes(kw))
  );
  // Simulated latency so the interface reads as a live system, not a lookup table.
  await new Promise((r) => setTimeout(r, 420));
  return match ? match.answer : AI_FALLBACK_ANSWER;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text:
        "Hello. I'm the AI interface for Prashanth's portfolio. Ask me about his cloud experience, DevOps journey, AI-agent work, technologies, goals or hobbies.",
    },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  const send = async (text) => {
    const question = (text ?? input).trim();
    if (!question || thinking) return;

    setMessages((m) => [...m, { role: "user", text: question }]);
    setInput("");
    setThinking(true);

    const answer = await resolveAnswer(question);

    setMessages((m) => [...m, { role: "assistant", text: answer }]);
    setThinking(false);
  };

  return (
    <section id="ai-lab" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="eyebrow">AI PORTFOLIO ASSISTANT</div>
          <h2 className="section-heading" style={{ marginTop: 16 }}>
            Ask Prashanth AI.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            className="glass-panel"
            style={{
              marginTop: 40,
              maxWidth: 680,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "18px 22px",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--accent-teal), var(--accent-blue))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 600,
                  fontSize: 13,
                }}
              >
                PA
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Prashanth AI</div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--text-soft)",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--accent-green)",
                    }}
                  />
                  Online
                </div>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="scrollbar-thin"
              style={{
                padding: "20px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                maxHeight: 340,
                overflowY: "auto",
              }}
            >
              <AnimatePresence initial={false}>
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                      maxWidth: "82%",
                      background: m.role === "user" ? "var(--text)" : "var(--bg-panel)",
                      color: m.role === "user" ? "#fff" : "var(--text)",
                      padding: "10px 14px",
                      borderRadius: 14,
                      fontSize: 14,
                      lineHeight: 1.55,
                    }}
                  >
                    {m.text}
                  </motion.div>
                ))}
              </AnimatePresence>

              {thinking && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    alignSelf: "flex-start",
                    padding: "10px 14px",
                    borderRadius: 14,
                    background: "var(--bg-panel)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--text-soft)",
                  }}
                >
                  thinking…
                </motion.div>
              )}
            </div>

            <div style={{ padding: "12px 16px", display: "flex", gap: 8, flexWrap: "wrap" }}>
              {SUGGESTED.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="pill"
                  style={{ background: "var(--bg-panel)", border: "none" }}
                >
                  {q}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              style={{
                display: "flex",
                gap: 10,
                padding: "16px 20px",
                borderTop: "1px solid var(--border)",
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about his AWS experience, AI-agent work, hobbies…"
                aria-label="Ask Prashanth AI a question"
                style={{
                  flexGrow: 1,
                  border: "1px solid var(--border-strong)",
                  borderRadius: "999px",
                  padding: "12px 16px",
                  fontSize: 14,
                  fontFamily: "inherit",
                  background: "var(--bg-soft)",
                }}
              />
              <button type="submit" className="btn btn-primary" disabled={thinking}>
                Ask
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
