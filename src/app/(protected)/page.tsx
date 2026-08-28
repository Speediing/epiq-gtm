import { CompareTable } from "@/components/CompareTable";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { JobSection } from "@/components/JobSection";
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
          <section className="hero">
            <div>
              <p className="eyebrow">A working agent team for Epiq sellers</p>
              <h1>The follow-up is ready before the day moves on.</h1>
              <p className="hero-intro">
                Grok Bot watches for the work around a sale, opens the right
                tools on its own computer, and brings back a draft for you to
                check. You stay in control of anything that gets sent.
              </p>
            </div>
          </section>

          <section className="usecase-framing">
            <p className="eyebrow">Three illustrative use cases</p>
            <h2>
              Start with three moments that can eat a seller&apos;s week.
            </h2>
            <p>
              These are proposed workflows, not claims about Epiq&apos;s current
              process.
            </p>
          </section>

          <div className="metric-grid">
            {JOBS.map((job) => (
              <a
                key={job.id}
                className="metric-card"
                href={`#${job.id}`}
              >
                <div className="metric-card-top">
                  <p>Sample {String(job.number).padStart(2, "0")}</p>
                </div>
                <h2>{job.title}</h2>
                <p className="metric-trigger">Starts when {job.trigger.toLowerCase()}</p>
              </a>
            ))}
          </div>
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
      </div>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Epiq x SpaceXAI</p>
          <p>Illustrative Grok Bot workflows for Epiq GTM</p>
        </div>
        <address className="footer-contact">
          <p>Your Cursor contact</p>
          <strong>Griffin Hewitt</strong>
          <a href="mailto:griffin.hewitt@cursor.com">
            griffin.hewitt@cursor.com
          </a>
        </address>
      </footer>
    </main>
  );
}
