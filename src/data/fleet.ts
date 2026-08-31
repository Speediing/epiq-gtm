import type { JobId } from "./types";

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  screen: string;
  color: string;
  jobId?: JobId;
  mark?: string;
  seat?: boolean;
};

export const FLEET: FleetBot[] = [
  {
    id: "rep",
    name: "You",
    blurb: "The seller sets the direction and approves anything that leaves Epiq.",
    screen: "Review queue",
    color: "#C5D2D6",
    mark: "YOU",
    seat: true,
  },
  {
    id: "call",
    name: "Agent 01",
    blurb: "Follows the call and prepares the follow-up brief.",
    screen: "Call notes and Docs",
    jobId: "call-brief",
    color: "#32B09F",
  },
  {
    id: "answer",
    name: "Agent 02",
    blurb: "Checks approved sources and routes a response for review.",
    screen: "Knowledge and email",
    jobId: "answer-room",
    color: "#E36669",
  },
  {
    id: "account",
    name: "Agent 03",
    blurb: "Reviews public signals and prepares a useful first touch.",
    screen: "Browser and CRM",
    jobId: "account-open",
    color: "#005B8F",
  },
];
