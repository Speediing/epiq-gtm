import type { Artifact, DemoMessage, SlideCard } from "@/data/types";
import type { ComputerBeat } from "@/data/screens";
import { SAMPLE_FOLLOWUP_SLIDES } from "@/data/jobs";
import { ArtifactCard } from "./ArtifactCard";
import { HeardSlide } from "./HeardSlide";

function asSlides(artifact?: Artifact) {
  return artifact?.kind === "slides" ? artifact : null;
}

function asGmail(artifact?: Artifact) {
  return artifact?.kind === "gmail" ? artifact : null;
}

function asOnePager(artifact?: Artifact) {
  return artifact?.kind === "one-pager" ? artifact : null;
}

export function SiteScreen({
  beat,
  message,
  account,
  sent,
}: {
  beat: ComputerBeat;
  message?: DemoMessage;
  account: string;
  sent: boolean;
}) {
  const artifact = message?.artifact;

  switch (beat.site) {
    case "granola":
      return <CallNotesScreen account={account} />;
    case "figma":
      return <BriefScreen account={account} artifact={artifact} />;
    case "gmail":
      return (
        <EmailScreen account={account} artifact={asGmail(artifact)} sent={sent} />
      );
    case "research":
      return <ResearchScreen account={account} />;
    case "page":
      return <PageScreen account={account} onePager={asOnePager(artifact)} />;
    case "gdoc":
      return <DocumentScreen account={account} artifact={artifact} />;
    default: {
      const exhaustive: never = beat.site;
      return exhaustive;
    }
  }
}

function CallNotesScreen({ account }: { account: string }) {
  return (
    <div className="site site-granola">
      <header>
        <strong>Working call note</strong>
        <span>Illustrative workflow</span>
      </header>
      <p className="site-time">{account} call in progress</p>
      <ul>
        <li>
          <span>Open</span> Questions that need an approved Epiq source
        </li>
        <li>
          <span>Owner</span> People to confirm before the next meeting
        </li>
        <li>
          <span>Proof</span> Material the seller can send with confidence
        </li>
        <li>
          <span>Next</span> One action for the customer and one for Epiq
        </li>
      </ul>
    </div>
  );
}

function BriefScreen({
  account,
  artifact,
}: {
  account: string;
  artifact?: Artifact;
}) {
  const slides = asSlides(artifact);
  const cards: SlideCard[] = slides?.cards ?? SAMPLE_FOLLOWUP_SLIDES;

  return (
    <div className="site site-figma">
      <header>
        <span className="figma-logo">F</span>
        <strong>{slides?.title || `${account} follow-up brief`}</strong>
        <em>Draft</em>
      </header>
      <div className="figma-board">
        <HeardSlide slides={cards} size="sm" />
      </div>
    </div>
  );
}

function EmailScreen({
  account,
  artifact,
  sent,
}: {
  account: string;
  artifact: ReturnType<typeof asGmail>;
  sent: boolean;
}) {
  return (
    <div className="site site-gmail">
      <header>
        <strong>Email</strong>
        <em>{sent ? "Sent with approval" : "Draft, not sent"}</em>
      </header>
      <p>
        <span>To</span>
        {artifact?.to || `${account} contact`}
      </p>
      <p>
        <span>Subject</span>
        {artifact?.subject || `${account} follow-up`}
      </p>
      <div>
        {artifact?.body ||
          "The draft stays here until the Epiq seller and owner approve it."}
      </div>
    </div>
  );
}

function DocumentScreen({
  account,
  artifact,
}: {
  account: string;
  artifact?: Artifact;
}) {
  return (
    <div className="site site-gdoc">
      <header>
        <strong>Working document</strong>
        <span>{artifact?.title || `${account} working brief`}</span>
      </header>
      <article>
        {artifact ? (
          <ArtifactCard artifact={artifact} />
        ) : (
          <>
            <p>
              <b>Open questions.</b> Items the customer raised that still need
              an approved answer.
            </p>
            <p>
              <b>Source trail.</b> Every proposed answer stays beside the page
              or document that supports it.
            </p>
            <p>
              <b>Next step.</b> One owner and one useful action for the next
              meeting.
            </p>
          </>
        )}
      </article>
    </div>
  );
}

function ResearchScreen({ account }: { account: string }) {
  return (
    <div className="site site-research">
      <header>
        <strong>{account}</strong>
        <span>Sources open on the agent computer</span>
      </header>
      <p className="site-time">Illustrative research workspace</p>
      <ul>
        <li>
          <span>Website</span> Relevant public language saved with its URL
        </li>
        <li>
          <span>Filing</span> Possible business trigger marked for review
        </li>
        <li>
          <span>News</span> Dated context for a useful first message
        </li>
        <li>
          <span>Check</span> Seller confirms the idea before it becomes outreach
        </li>
      </ul>
    </div>
  );
}

function PageScreen({
  account,
  onePager,
}: {
  account: string;
  onePager: ReturnType<typeof asOnePager>;
}) {
  return (
    <div className="site site-page">
      <header>
        <strong>Account page</strong>
        <em>Draft, not live</em>
      </header>
      <h4>{onePager?.title || `A useful first conversation for ${account}`}</h4>
      {onePager ? (
        onePager.sections.map((section) => (
          <p key={section.heading}>
            <b>{section.heading}.</b> {section.body}
          </p>
        ))
      ) : (
        <>
          <p>
            <b>Public signal.</b> The source and the possible business issue sit
            together.
          </p>
          <p>
            <b>Possible fit.</b> A short point for the seller to check before
            using.
          </p>
          <p>
            <b>Next step.</b> Confirm the person and priority before sending.
          </p>
        </>
      )}
    </div>
  );
}
