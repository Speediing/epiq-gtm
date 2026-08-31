import type { SlideCard } from "@/data/types";

export function HeardSlide({
  slides,
  size = "lg",
}: {
  slides: SlideCard[];
  size?: "sm" | "lg";
  wash?: string;
}) {
  return (
    <div className={`leave leave-heard size-${size}`}>
      <article className="heard-slide">
        <header className="heard-bar">
          <span>Illustrative customer follow-up</span>
          <span>Draft for seller review</span>
        </header>
        <div className="heard-main">
          <p className="heard-tag">Epiq x SpaceXAI</p>
          <h3>One clear brief for the next conversation</h3>
          <ol>
            {slides.map((slide) => (
              <li key={slide.n}>
                <p className="heard-quote">{slide.title}</p>
                <p>{slide.body}</p>
              </li>
            ))}
          </ol>
        </div>
        <footer className="heard-map">
          <p>Seller keeps control</p>
          <ul>
            <li>
              <strong>Sources:</strong> attached
            </li>
            <li>
              <strong>Owners:</strong> marked for review
            </li>
            <li>
              <strong>Sending:</strong> blocked until approval
            </li>
          </ul>
        </footer>
      </article>
    </div>
  );
}
