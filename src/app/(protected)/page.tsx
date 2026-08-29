import { CompareTable } from "@/components/CompareTable";
import { HeroDemo } from "@/components/HeroDemo";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { JobSection } from "@/components/JobSection";
import { QuoteWall } from "@/components/QuoteWall";
import { RosterChart } from "@/components/RosterChart";
import { SiteNav } from "@/components/SiteNav";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top">
      <div className="hero-watercolor">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-watercolor-image"
          src="/brand/epiq-watercolor-header.png"
          alt=""
        />
        <SiteNav />
        <div className="hero-paper-pin">
          <p>Epiq x SpaceXAI</p>
          <strong>A working agent team for Epiq GTM</strong>
          <span>Plans work. Opens tools. Returns finished drafts.</span>
        </div>
      </div>

      <div className="report">
        <div className="report-hero">
          <HeroTelemetry />
          <HeroDemo />
          <RosterChart />
        </div>

        <div id="jobs">
          {JOBS.map((job) => (
            <JobSection key={job.id} job={job} />
          ))}
        </div>
      </div>

      <div className="orbit-break" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/epiq-watercolor-header.png" alt="" />
      </div>

      <div className="report">
        <CompareTable />
        <QuoteWall />
      </div>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Epiq x SpaceXAI</p>
          <p>Illustrative Grok Bot workflows for Epiq GTM</p>
        </div>
        <address className="footer-contact">
          <p>Your Cursor contact</p>
          <strong>Griffin Hewitt</strong>
          <a href="mailto:griffin.hewitt@cursdor.com">
            griffin.hewitt@cursdor.com
          </a>
        </address>
      </footer>
    </main>
  );
}
