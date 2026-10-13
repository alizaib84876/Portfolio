import { useEffect, useId, useRef, useState } from "react";
import { profile } from "../data";

type Turn = { role: "user" | "assistant"; content: string };

const STARTERS = [
  "What role are you looking for?",
  "How does DyslexAI recognize handwriting?",
  "What did you build at Al-Hafiz Protein Farms?",
  "Which project shows your MLOps work?",
];

function MessageText({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/[^\s)]+)/g);
  return parts.map((part, index) =>
    part.startsWith("http") ? (
      <a key={index} href={part.replace(/[.,]$/, "")} target="_blank" rel="noreferrer">
        {part}
      </a>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}

export function ChatWidget() {
  const titleId = useId();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const threadRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);
  const [turns, setTurns] = useState<Turn[]>([]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const thread = threadRef.current;
    if (thread) thread.scrollTop = thread.scrollHeight;
  }, [turns, pending, open]);

  async function ask(text: string) {
    const question = text.trim();
    if (!question || pending) return;
    const history = [...turns, { role: "user" as const, content: question }];
    setTurns(history);
    setDraft("");
    setPending(true);
    try {
      const response = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: history.slice(-16).map((turn) => ({ role: turn.role, content: turn.content })),
        }),
      });
      const payload = (await response.json()) as { reply?: string; error?: string };
      const answer = payload.reply || payload.error || `Email ${profile.email} and I will answer directly.`;
      setTurns([...history, { role: "assistant", content: answer }]);
    } catch {
      setTurns([
        ...history,
        { role: "assistant", content: `I could not reach the chat. Email ${profile.email}.` },
      ]);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="chat-dock">
      {open ? (
        <section className="chat-panel" role="dialog" aria-modal="false" aria-labelledby={titleId}>
          <header className="chat-head">
            <div>
              <div className="chat-kicker">Portfolio</div>
              <h2 id={titleId}>Ask about my work</h2>
            </div>
            <button type="button" className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
              ×
            </button>
          </header>
          <div className="chat-thread" ref={threadRef}>
            {turns.length === 0 ? (
              <div className="chat-empty">
                <p>I answer questions about my work. A follow-up stays on the same topic.</p>
                <div className="chat-starters">
                  {STARTERS.map((prompt) => (
                    <button key={prompt} type="button" onClick={() => ask(prompt)}>
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              turns.map((turn, index) => (
                <p key={`${turn.role}-${index}`} className={`chat-msg ${turn.role}`}>
                  <MessageText text={turn.content} />
                </p>
              ))
            )}
            {pending ? <p className="chat-msg assistant pending">Thinking...</p> : null}
          </div>
          <form
            className="chat-form"
            onSubmit={(event) => {
              event.preventDefault();
              void ask(draft);
            }}
          >
            <label className="sr-only" htmlFor="chat-question">
              Question about Muhammad Ali Zaib
            </label>
            <textarea
              id="chat-question"
              ref={inputRef}
              rows={2}
              maxLength={600}
              value={draft}
              placeholder="Ask about a project or role"
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  void ask(draft);
                }
              }}
            />
            <button type="submit" disabled={pending || !draft.trim()}>
              Send
            </button>
          </form>
        </section>
      ) : null}
      <button
        type="button"
        className="chat-launcher"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close chat" : "Ask about my work"}
      </button>
    </div>
  );
}
