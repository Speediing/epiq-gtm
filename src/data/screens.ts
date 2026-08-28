import type { JobId } from "./types";

export type SiteKind =
  | "granola"
  | "figma"
  | "gmail"
  | "gdoc"
  | "research"
  | "page";

export type ChromeTab = {
  id: string;
  host: string;
  label: string;
};

export type ComputerBeat = {
  pill: string;
  host: string;
  path?: string;
  title: string;
  site: SiteKind;
  tabs: ChromeTab[];
};

const notes = { id: "notes", host: "granola.app", label: "Call notes" };
const docs = { id: "docs", host: "docs.google.com", label: "Docs" };
const mail = { id: "mail", host: "mail.google.com", label: "Email" };
const sources = {
  id: "sources",
  host: "docs.google.com",
  label: "Sources",
};
const web = { id: "web", host: "example.com", label: "Public web" };

export const SCREENS: Record<JobId, Record<string, ComputerBeat>> = {
  "call-brief": {
    m1: {
      pill: "Opening the working note",
      host: "granola.app",
      path: "/notes/example-client",
      title: "Example client call",
      site: "granola",
      tabs: [notes, docs, mail],
    },
    m2: {
      pill: "Building the follow-up structure",
      host: "docs.google.com",
      path: "/document/d/example-client-brief",
      title: "Example client follow-up",
      site: "gdoc",
      tabs: [notes, docs, mail],
    },
    m3: {
      pill: "Formatting the brief",
      host: "figma.com",
      path: "/file/example-client-follow-up",
      title: "Illustrative follow-up brief",
      site: "figma",
      tabs: [notes, docs, mail],
    },
    m4: {
      pill: "Drafting the customer email",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [notes, docs, mail],
    },
    m5: {
      pill: "Drafts parked for review",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [notes, docs, mail],
    },
  },
  "answer-room": {
    m1: {
      pill: "Reading the customer request",
      host: "mail.google.com",
      path: "/mail/u/0/#inbox",
      title: "Inbox",
      site: "gmail",
      tabs: [mail, sources, docs],
    },
    m2: {
      pill: "Checking approved source material",
      host: "docs.google.com",
      path: "/approved-material",
      title: "Approved material",
      site: "research",
      tabs: [mail, sources, docs],
    },
    m3: {
      pill: "Writing the sourced response",
      host: "docs.google.com",
      path: "/document/d/example-client-response",
      title: "Example client response",
      site: "gdoc",
      tabs: [mail, sources, docs],
    },
    m4: {
      pill: "Preparing the reply",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [mail, sources, docs],
    },
    m5: {
      pill: "Waiting for the Epiq owner",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [mail, sources, docs],
    },
  },
  "account-open": {
    m1: {
      pill: "Reviewing public sources",
      host: "example.com",
      path: "/",
      title: "Example client",
      site: "research",
      tabs: [web, docs, mail],
    },
    m2: {
      pill: "Saving the source trail",
      host: "example.com",
      path: "/news",
      title: "Example client news",
      site: "research",
      tabs: [web, docs, mail],
    },
    m3: {
      pill: "Writing the account idea",
      host: "docs.google.com",
      path: "/document/d/example-client-idea",
      title: "Example client account idea",
      site: "gdoc",
      tabs: [web, docs, mail],
    },
    m4: {
      pill: "Checking evidence and audience",
      host: "docs.google.com",
      path: "/document/d/example-client-sources",
      title: "Sources to review",
      site: "gdoc",
      tabs: [web, docs, mail],
    },
    m5: {
      pill: "Drafting a first touch",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [web, docs, mail],
    },
    m6: {
      pill: "Building the account page",
      host: "example-client.epiq.page",
      path: "/legal-operations",
      title: "For Example client",
      site: "page",
      tabs: [web, docs, mail],
    },
    m7: {
      pill: "Drafts parked for review",
      host: "example-client.epiq.page",
      path: "/legal-operations",
      title: "For Example client",
      site: "page",
      tabs: [web, docs, mail],
    },
  },
};

export function beatFor(
  jobId: JobId,
  messageId: string | undefined,
): ComputerBeat | undefined {
  if (!messageId) return undefined;
  return SCREENS[jobId]?.[messageId];
}
