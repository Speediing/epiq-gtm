import type { StoryBeat } from "@/data/types";
import { ArtifactCard } from "./ArtifactCard";
import { HeardSlide } from "./HeardSlide";

export function ChapterPayoff({
  beat,
  value,
}: {
  beat: StoryBeat;
  wash?: string;
  value?: string;
}) {
  const slides = beat.slides;
  const artifact = beat.artifact;

  if (!slides?.length && !artifact) return null;

  return (
    <div className="chapter-payoff">
      <p className="payoff-label">
        {beat.when ? <span>{beat.when}</span> : null}
        {beat.label}
      </p>
      <div className="artifact-frame">
        <div className="artifact-frame-bar">
          <span className="background-agent-pulse" aria-hidden />
          <strong>Finished artifact</strong>
          <span>Ready for review</span>
        </div>
        {slides?.length ? (
          <HeardSlide slides={slides} size="lg" />
        ) : artifact?.kind === "slides" ? (
          <HeardSlide slides={artifact.cards} size="lg" />
        ) : artifact ? (
          <ArtifactCard artifact={artifact} />
        ) : null}
      </div>
      {value ? <p className="leave-value">{value}</p> : null}
    </div>
  );
}
