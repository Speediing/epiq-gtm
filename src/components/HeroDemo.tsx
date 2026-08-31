"use client";

import { useState } from "react";
import { HERO_JOBS } from "@/data/hero-jobs";

function GrokMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#111" />
      <rect
        x="8"
        y="10"
        width="5"
        height="12"
        rx="2.5"
        fill="#fff"
        transform="rotate(-18 10.5 16)"
      />
      <rect
        x="19"
        y="10"
        width="5"
        height="12"
        rx="2.5"
        fill="#fff"
        transform="rotate(-18 21.5 16)"
      />
    </svg>
  );
}

function ComputerIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <rect
        x="3"
        y="4"
        width="18"
        height="13"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function HeroDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = HERO_JOBS[activeIndex];

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">A working agent team for Epiq sellers</p>
        <h1 id="hero-title">The work around the sale keeps moving.</h1>
        <p className="hero-intro">
          Each Grok Bot agent has its own computer. It can follow the work,
          prepare the draft, and bring it back for review while the seller
          stays with the customer.
        </p>

        <div
          className="hero-phone-jobs"
          role="tablist"
          aria-label="Illustrative Epiq agent routines"
        >
          {HERO_JOBS.map((job, index) => (
            <button
              key={job.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              className={index === activeIndex ? "is-active" : undefined}
              onClick={() => setActiveIndex(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {job.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hero-bot-demo">
        <div className="hero-bot-demo-label">
          <span className="background-agent-pulse" aria-hidden />
          Illustrative workflow
        </div>
        <div className="hero-phone">
          <div className="notch hero-phone-notch" aria-hidden />
          <header className="header hero-phone-header">
            <span className="hero-phone-back" aria-hidden>
              ‹
            </span>
            <span
              className="hero-phone-avatar"
              style={{ "--agent-color": active.color } as React.CSSProperties}
            >
              <GrokMark />
            </span>
            <div className="hero-phone-who">
              <strong>{active.agent}</strong>
              <span>
                <i />
                Working
              </span>
            </div>
            <span className="hero-phone-computer" title={active.status}>
              <ComputerIcon />
            </span>
          </header>

          <div
            className="thread hero-phone-thread"
            role="tabpanel"
            aria-live="polite"
          >
            <p className="hero-phone-day">Today</p>
            {active.messages.map((message) =>
              message.from === "system" ? (
                <p key={message.id} className="hero-phone-system">
                  {message.body}
                </p>
              ) : (
                <div
                  key={message.id}
                  className={`hero-phone-message ${
                    message.from === "you" ? "is-you" : "is-bot"
                  }`}
                >
                  {message.from === "bot" ? (
                    <span className="hero-message-face">
                      <GrokMark />
                    </span>
                  ) : null}
                  <p>{message.body}</p>
                </div>
              ),
            )}

            <article className="hero-phone-artifact">
              <span>Ready for review</span>
              <strong>{active.label}</strong>
              <p>{active.status}</p>
              <button type="button">Open draft</button>
            </article>
          </div>

          <footer className="composer hero-phone-composer">
            <span aria-hidden>+</span>
            <p>Message {active.agent}</p>
            <span aria-hidden>◉</span>
          </footer>
          <div className="hero-phone-home" aria-hidden />
        </div>
      </div>
    </section>
  );
}
