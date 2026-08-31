export type HeroJobMessage = {
  id: string;
  from: "you" | "bot" | "system";
  body: string;
};

export type HeroJob = {
  id: string;
  label: string;
  agent: string;
  status: string;
  color: string;
  messages: HeroJobMessage[];
};

export const HERO_JOBS: HeroJob[] = [
  {
    id: "call-follow-up",
    label: "Call follow-up",
    agent: "Call-side agent",
    status: "Working in notes and Docs",
    color: "#32b09f",
    messages: [
      {
        id: "call-1",
        from: "system",
        body: "Illustrative Epiq customer call ended. Follow-up routine started.",
      },
      {
        id: "call-2",
        from: "bot",
        body: "I separated open questions, source needs, owners, and the next step.",
      },
      {
        id: "call-3",
        from: "bot",
        body: "The brief and email are ready for your review. Nothing has been sent.",
      },
    ],
  },
  {
    id: "client-questions",
    label: "Client questions",
    agent: "Answer-room agent",
    status: "Working in sources and email",
    color: "#e36669",
    messages: [
      {
        id: "questions-1",
        from: "you",
        body: "Turn this client thread into a sourced response.",
      },
      {
        id: "questions-2",
        from: "bot",
        body: "I opened the approved Epiq materials and marked the items that need an owner.",
      },
      {
        id: "questions-3",
        from: "bot",
        body: "A clean reply is in draft with every source attached.",
      },
    ],
  },
  {
    id: "account-research",
    label: "Account research",
    agent: "Account agent",
    status: "Working in the browser",
    color: "#005b8f",
    messages: [
      {
        id: "research-1",
        from: "system",
        body: "An account entered the Epiq seller list. Research routine started.",
      },
      {
        id: "research-2",
        from: "bot",
        body: "I saved the company site, public filing, and recent news beside the account idea.",
      },
      {
        id: "research-3",
        from: "bot",
        body: "The first-touch draft is ready. The person and priority still need your check.",
      },
    ],
  },
  {
    id: "proposal-refresh",
    label: "Proposal refresh",
    agent: "Proposal agent",
    status: "Working in slides",
    color: "#f9c565",
    messages: [
      {
        id: "proposal-1",
        from: "you",
        body: "Refresh the proposal with the latest approved material.",
      },
      {
        id: "proposal-2",
        from: "bot",
        body: "I kept the customer-specific pages and replaced the old service language.",
      },
      {
        id: "proposal-3",
        from: "bot",
        body: "The new version is ready beside a short change note.",
      },
    ],
  },
  {
    id: "rfp-workspace",
    label: "RFP workspace",
    agent: "Response agent",
    status: "Working in the response library",
    color: "#6b8190",
    messages: [
      {
        id: "rfp-1",
        from: "system",
        body: "A new response workbook arrived. Draft routine started.",
      },
      {
        id: "rfp-2",
        from: "bot",
        body: "I matched answerable rows to approved Epiq sources and flagged the rest.",
      },
      {
        id: "rfp-3",
        from: "bot",
        body: "The working copy is ready for the response owner.",
      },
    ],
  },
  {
    id: "event-follow-up",
    label: "Event follow-up",
    agent: "Event agent",
    status: "Working in notes and CRM",
    color: "#32b09f",
    messages: [
      {
        id: "event-1",
        from: "you",
        body: "Prepare a useful follow-up for the people we met.",
      },
      {
        id: "event-2",
        from: "bot",
        body: "I grouped the notes by account and kept only the context the seller recorded.",
      },
      {
        id: "event-3",
        from: "bot",
        body: "Drafts are parked by account. You choose which conversations continue.",
      },
    ],
  },
  {
    id: "renewal-brief",
    label: "Renewal brief",
    agent: "Renewal agent",
    status: "Working across account files",
    color: "#e36669",
    messages: [
      {
        id: "renewal-1",
        from: "system",
        body: "Renewal review opened. Brief routine started.",
      },
      {
        id: "renewal-2",
        from: "bot",
        body: "I pulled the open actions, customer contacts, and approved service material into one note.",
      },
      {
        id: "renewal-3",
        from: "bot",
        body: "The brief shows what is known and what the Epiq team still needs to confirm.",
      },
    ],
  },
  {
    id: "weekly-plan",
    label: "Weekly account plan",
    agent: "Planning agent",
    status: "Working in CRM and Docs",
    color: "#005b8f",
    messages: [
      {
        id: "weekly-1",
        from: "you",
        body: "Set up the account review for this week.",
      },
      {
        id: "weekly-2",
        from: "bot",
        body: "I brought the open customer work, source links, and next actions into one view.",
      },
      {
        id: "weekly-3",
        from: "bot",
        body: "The review is ready. Owners and sending decisions stay with the Epiq team.",
      },
    ],
  },
];
