import type { Artifact, CroJob, SlideCard } from "./types";

export const SAMPLE_FOLLOWUP_SLIDES: SlideCard[] = [
  {
    n: 1,
    kicker: "Illustrative call brief",
    voice: "them",
    title: "Business issue",
    body: "The customer need, written in plain language and checked against the call notes.",
  },
  {
    n: 2,
    kicker: "Source trail",
    voice: "us",
    title: "Proof to bring",
    body: "The approved Epiq material that answers the open question, with a link back to its source.",
  },
  {
    n: 3,
    kicker: "Owner and action",
    voice: "them",
    title: "Next meeting",
    body: "One clear owner, one decision to make, and the material the customer should receive first.",
  },
];

const SAMPLE_RESPONSE: Extract<Artifact, { kind: "redlines" }> = {
  kind: "redlines",
  title: "Example client request",
  paperTitle: "Questions to resolve",
  from: "Illustrative request from client procurement",
  marks: [
    {
      text: "Which Epiq service best fits this request?",
      note: "Match the request to approved service material and keep the source beside the answer.",
      take: true,
    },
    {
      text: "What supports the response?",
      note: "Attach the approved page or internal document. Leave any unsupported wording out.",
      take: true,
    },
    {
      text: "Who should approve the reply?",
      note: "Route the draft to the named Epiq owner before anything is sent.",
      take: false,
    },
  ],
  reply: {
    to: "Example client procurement",
    subject: "Requested information and next step",
    body:
      "Hi,\n\nWe pulled the requested information into one note and linked each answer to its source. The draft is with the right Epiq owner for review. Once approved, I will send the final response and propose the next step.\n\nBest,",
  },
};

const SAMPLE_OUTREACH: Extract<Artifact, { kind: "outbound" }> = {
  kind: "outbound",
  title: "Example client account brief",
  account: "Example client",
  hypothesis: [
    {
      k: "Why this account",
      body: "A public change points to work that may need legal operations support. The source is saved for review.",
    },
    {
      k: "Why now",
      body: "The timing comes from a dated public signal, not from a generic sequence.",
    },
    {
      k: "Who may care",
      body: "Start with the role closest to the work. Confirm the person before outreach.",
    },
  ],
  evidence: [
    {
      source: "Company website",
      finding: "Relevant public language saved with its page link and access date.",
    },
    {
      source: "Public filing",
      finding: "A possible business trigger marked for seller review.",
    },
    {
      source: "Recent news",
      finding: "A dated signal that can support a useful first message.",
    },
  ],
  targets: [
    {
      name: "Legal operations lead",
      role: "Role to confirm",
      why: "Closest to the proposed workflow. The seller confirms the person before sending.",
    },
  ],
  page: {
    headline: "A useful first conversation for Example client",
    body:
      "A short page built from reviewed public sources. It explains the possible issue, why Epiq may be relevant, and one practical next step.",
  },
};

export const JOBS: CroJob[] = [
  {
    id: "call-brief",
    number: 1,
    title: "Leave the call with the follow-up ready",
    trigger: "A customer call starts",
    backgroundAction: "Following the call and preparing the next-step pack",
    problem:
      "The call ends, then the seller has to turn notes into a clear follow-up while the rest of the day keeps moving.",
    botJob:
      "An agent follows the call, opens the working files on its computer, and builds a draft brief for the seller to check.",
    storyboard: [
      {
        when: "Call opens",
        label: "The agent joins the workflow and starts a clean working note.",
        scene: "call",
        visual: {
          kind: "live-call",
          title: "Illustrative customer call",
          people: [
            { initials: "AE", name: "Epiq seller" },
            { initials: "CL", name: "Client" },
            { initials: "GB", name: "Grok Bot" },
          ],
        },
      },
      {
        when: "While you talk",
        label: "It separates open questions, source needs, owners, and next steps.",
        scene: "notes",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Open questions", answer: "Ready for review" },
            { name: "Approved sources", answer: "Links attached" },
            { name: "Next step", answer: "Owner identified" },
          ],
          status: "Working note ready",
        },
      },
      {
        when: "Before the next task",
        label: "A customer-ready brief is waiting. You decide what leaves Epiq.",
        scene: "deck",
        artifact: {
          kind: "slides",
          title: "Illustrative follow-up brief",
          cards: SAMPLE_FOLLOWUP_SLIDES,
        },
      },
    ],
    unlock:
      "The seller reviews a finished starting point instead of rebuilding the call from scratch.",
    outcome:
      "Call notes become a clear follow-up pack while the seller stays with the customer.",
    demo: {
      title: "Call-side agent",
      subtitle: "Call to reviewed follow-up",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "call",
          name: "Call-side agent",
          role: "bot",
          persona: "Builds the follow-up while the conversation is still fresh",
          color: "#32B09F",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "call",
          kind: "routine",
          body:
            "Illustrative customer call opened. I am keeping a working note and checking for open questions, owners, and source needs.",
        },
        {
          id: "m2",
          from: "call",
          kind: "text",
          body:
            "The draft structure is ready. I kept assumptions out and marked anything that still needs an Epiq owner.",
        },
        {
          id: "m3",
          from: "call",
          kind: "draft",
          draftLabel: "Follow-up brief",
          artifact: {
            kind: "slides",
            title: "Illustrative follow-up brief",
            cards: SAMPLE_FOLLOWUP_SLIDES,
          },
        },
        {
          id: "m4",
          from: "call",
          kind: "draft",
          draftLabel: "Email to the customer",
          artifact: {
            kind: "gmail",
            title: "Follow-up email",
            to: "Example client contact",
            subject: "Your open questions and proposed next step",
            body:
              "Hi,\n\nI pulled the open questions, source material, and proposed next step into one short brief. I will confirm the remaining owner before I send the final version.\n\nBest,",
          },
        },
        {
          id: "m5",
          from: "call",
          kind: "system",
          body: "Nothing sent. The brief and email stay in draft until you approve them.",
        },
      ],
    },
  },
  {
    id: "answer-room",
    number: 2,
    title: "Answer detailed client questions without the chase",
    trigger: "A customer question lands",
    backgroundAction: "Checking approved sources and drafting a response",
    problem:
      "A detailed client question can send the seller across email, chat, old documents, and several internal teams.",
    botJob:
      "An agent opens the approved sources on its computer, keeps a trail for every answer, and routes a clean draft to the right owner.",
    storyboard: [
      {
        when: "Request arrives",
        label: "The agent reads the thread and turns it into a short answer list.",
        scene: "inspect",
        visual: {
          kind: "procurement-email",
          sender: "Example client procurement",
          subject: "Service and approval questions",
          detail: "Illustrative request",
        },
      },
      {
        when: "In the background",
        label: "It searches only approved places and keeps every source attached.",
        scene: "map",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Service material", answer: "Source attached" },
            { name: "Prior response", answer: "Language checked" },
            { name: "Internal owner", answer: "Approval routed" },
          ],
          status: "Source trail complete",
        },
      },
      {
        when: "Ready for review",
        label: "The final frame is the artifact: questions, sources, and a reply draft.",
        scene: "send",
        artifact: SAMPLE_RESPONSE,
      },
    ],
    unlock:
      "The seller has one sourced draft to review instead of a loose chain of internal messages.",
    outcome:
      "A client question becomes a sourced response with the right approval path.",
    demo: {
      title: "Answer-room agent",
      subtitle: "Question to sourced draft",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "answer",
          name: "Answer-room agent",
          role: "bot",
          persona: "Finds approved source material and prepares the response",
          color: "#E36669",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "answer",
          kind: "routine",
          body:
            "Illustrative client request detected. I split the thread into answerable questions and items that need an owner.",
        },
        {
          id: "m2",
          from: "answer",
          kind: "text",
          body:
            "The approved sources are attached to the working note. I left unsupported language out of the reply.",
        },
        {
          id: "m3",
          from: "answer",
          kind: "draft",
          draftLabel: "Questions and source trail",
          artifact: SAMPLE_RESPONSE,
        },
        {
          id: "m4",
          from: "answer",
          kind: "draft",
          draftLabel: "Email reply",
          artifact: {
            kind: "gmail",
            title: "Reply to procurement",
            to: SAMPLE_RESPONSE.reply.to,
            subject: SAMPLE_RESPONSE.reply.subject,
            body: SAMPLE_RESPONSE.reply.body,
          },
        },
        {
          id: "m5",
          from: "answer",
          kind: "system",
          body: "Nothing sent. The Epiq owner reviews the reply first.",
        },
      ],
    },
  },
  {
    id: "account-open",
    number: 3,
    title: "Open an account with research already done",
    trigger: "An account enters the seller's list",
    backgroundAction: "Reviewing public signals and preparing a first touch",
    problem:
      "Good outreach starts with a reason to contact this account. That work is easy to delay when research, writing, and review all sit with the seller.",
    botJob:
      "An agent uses its computer to review public sources, write a testable account idea, and prepare drafts that stay parked for approval.",
    storyboard: [
      {
        when: "Account added",
        label: "The agent opens the company site, public filings, and recent news.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Example client",
          sources: ["Company site", "Public filing", "Recent news"],
          signal: "Possible legal operations need",
        },
      },
      {
        when: "After sources are checked",
        label: "It writes a simple account idea and shows the evidence behind it.",
        scene: "notes",
        visual: {
          kind: "three-why",
          items: [
            { label: "Why this account", answer: "Public signal saved" },
            { label: "Why now", answer: "Timing tied to source" },
            { label: "Who may care", answer: "Role to confirm" },
          ],
        },
      },
      {
        when: "Ready for your click",
        label: "The final frame is the artifact: research, a useful angle, and drafts.",
        scene: "send",
        artifact: SAMPLE_OUTREACH,
      },
    ],
    unlock:
      "Every draft starts from reviewed evidence, with the seller in control of the final message.",
    outcome:
      "A target account becomes a reviewable brief and first-touch draft.",
    demo: {
      title: "Account agent",
      subtitle: "Public research to first-touch draft",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "account",
          name: "Account agent",
          role: "bot",
          persona: "Researches a target account and prepares a useful first touch",
          color: "#005B8F",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "account",
          kind: "routine",
          body:
            "Example client entered the list. I am reviewing public sources and saving the links beside each possible signal.",
        },
        {
          id: "m2",
          from: "account",
          kind: "text",
          body:
            "The account idea is ready for review. It is a proposal, not a claim about the customer.",
        },
        {
          id: "m3",
          from: "account",
          kind: "draft",
          draftLabel: "Account brief",
          artifact: {
            kind: "packet",
            title: "Example client account idea",
            fields: SAMPLE_OUTREACH.hypothesis.map((item) => ({
              label: item.k,
              value: item.body,
            })),
          },
        },
        {
          id: "m4",
          from: "account",
          kind: "draft",
          draftLabel: "Evidence and role",
          artifact: {
            kind: "packet",
            title: "Sources to review",
            fields: [
              ...SAMPLE_OUTREACH.evidence.map((item) => ({
                label: item.source,
                value: item.finding,
              })),
              ...SAMPLE_OUTREACH.targets.map((target) => ({
                label: target.name,
                value: target.why,
              })),
            ],
          },
        },
        {
          id: "m5",
          from: "account",
          kind: "draft",
          draftLabel: "First-touch email",
          artifact: {
            kind: "gmail",
            title: "Example client first touch",
            to: "Role to confirm",
            subject: "A possible legal operations priority",
            body:
              "Hi,\n\nI saw a public change that may create more work for your legal operations team. I pulled the source and a short view of where Epiq may help. If the priority is real, would a brief conversation be useful?\n\nBest,",
          },
        },
        {
          id: "m6",
          from: "account",
          kind: "draft",
          draftLabel: "Account page",
          artifact: {
            kind: "one-pager",
            title: SAMPLE_OUTREACH.page.headline,
            eyebrow: "Illustrative account page",
            sections: [
              {
                heading: "Public signal",
                body: "The reviewed source and the possible business issue sit together.",
              },
              {
                heading: "Why Epiq may fit",
                body: "A short, plain-language point for the seller to check before using.",
              },
              {
                heading: "Next step",
                body: "Confirm the person and the priority. Then decide whether to send.",
              },
            ],
          },
        },
        {
          id: "m7",
          from: "account",
          kind: "system",
          body: "Nothing sent. Research and drafts stay parked until you approve them.",
        },
      ],
    },
  },
];

export function getJob(id: string): CroJob | undefined {
  return JOBS.find((job) => job.id === id);
}
