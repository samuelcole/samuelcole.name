import type { Metadata } from "next";
import Link from "next/link";
import ExternalLink from "../components/ExternalLink";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "resume",
  description:
    "Samuel Cole — founding engineer and CTO. Resume and work history.",
};

export default function Resume() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.backLink}>
          ← samuelcole.name
        </Link>
        <div className={styles.downloads}>
          <a href="/samuel-cole-resume.pdf">pdf (color)</a>
          <a href="/samuel-cole-resume-bw.pdf">pdf (b&w)</a>
          <a href="/samuel-cole-resume.md">markdown</a>
        </div>
      </nav>

      <header className={styles.header}>
        <h1>Samuel Cole</h1>
        <p className={styles.tagline}>
          Founding engineer and CTO. I make things from scratch.
        </p>
        <div className={styles.contact}>
          <span>
            <ExternalLink href="mailto:sam@samuelcole.name">
              sam@samuelcole.name
            </ExternalLink>
          </span>
          <span>(718) 974-3543</span>
          <span>
            <ExternalLink href="https://github.com/samuelcole">
              github.com/samuelcole
            </ExternalLink>
          </span>
          <span>
            <ExternalLink href="https://www.linkedin.com/in/samuelcole">
              linkedin.com/in/samuelcole
            </ExternalLink>
          </span>
        </div>
      </header>

      <section className={styles.section}>
        <h2>Experience</h2>

        <div className={styles.entry}>
          <h3>
            <ExternalLink href="https://www.foodhelpline.org">
              Lemontree
            </ExternalLink>
          </h3>
          <div className={styles.role}>CTO</div>
          <time>2021–present</time>
          <p>
            Joined as founding engineer and grew into CTO of a tech non-profit
            connecting people to free food. Designed and scaled an AI-assisted
            helpline to 20,000+ daily users across 11 regions. Built an
            intelligence pipeline combining field reports, agentic web research,
            and human sourcing to maintain real-time ground truth on food access.
            Built a client intelligence layer that carries full conversation
            context across interactions. Only two engineers at peak.
          </p>
        </div>

        <div className={styles.entry}>
          <h3>
            <ExternalLink href="https://www.actblue.com">ActBlue</ExternalLink>
          </h3>
          <div className={styles.role}>Senior Software Engineer</div>
          <time>2017–2021</time>
          <p>
            Hired as a senior client side engineer to the Donor Experience team.
            Re-wrote the form server from a Ruby Sinatra app to a Node app,
            while refactoring and tidying up client-side code. Mentored engineers
            and led technical projects, including an embeddable form used by the
            Biden presidential campaign and nonprofits like the NAACP and
            Everytown.
          </p>
        </div>

        <div className={styles.entry}>
          <h3>
            <ExternalLink href="https://www.emburse.com/products/abacus">
              Abacus
            </ExternalLink>
          </h3>
          <div className={styles.role}>Full Stack Engineer</div>
          <time>2015–2017</time>
          <p>
            Hired as a full stack engineer focused on the client side. Built
            products to help enterprise customers visualize and manage employee
            spending, including: receipt view; redesigned search/faceting tools;
            automated flight metadata; and grouping by trips.
          </p>
        </div>

        <div className={styles.entry}>
          <h3>
            <ExternalLink href="https://www.reddit.com/r/indie/comments/zi6u04/any_previous_jukely_users_out_there/">
              Jukely
            </ExternalLink>
          </h3>
          <div className={styles.role}>Lead Web Engineer</div>
          <time>2014–2015</time>
          <p>
            Hired as lead web engineer and 8th employee, built a client side app
            in React with webpack and Reflux. Created the web client which
            allowed people to subscribe in many cities across three countries and
            discover live music events. Helped out with the Ruby on Rails API
            where needed, including the first version of the Stripe integrations
            to handle paid subscriptions.
          </p>
        </div>

        <div className={styles.entry}>
          <h3>
            <ExternalLink href="https://www.kickstarter.com">
              Kickstarter
            </ExternalLink>
          </h3>
          <div className={styles.role}>Software Engineer</div>
          <time>2010–2014</time>
          <p>
            Hired as first client side engineer and 12th employee. Created
            things including: site search, custom text editors, video players,
            the process for creating a project, tools for project creators to
            manage messages and backers, and tools for administrators to review,
            publish, and feature projects. Mentored less-experienced engineers
            and less-technical folks in JavaScript.
          </p>
        </div>

        <div className={styles.entry}>
          <h3>
            <ExternalLink href="https://patch.com">Patch</ExternalLink>
          </h3>
          <div className={styles.role}>Front End Web Engineer</div>
          <time>2008–2010</time>
          <p>
            Hired as first front end engineer, designed and architected the front
            end development patterns that scaled the product to 100s of small
            towns across America. Helped build a CMS that included features
            including media management, authorship, layout and taxonomies. Also
            built a system for rendering highly customized maps.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Education</h2>
        <div className={styles.education}>
          <strong>Rochester Institute of Technology</strong>
          {" — "}
          <time>2004–2008</time>
          <br />
          B.S., Multidisciplinary Studies: Computer Science & Literature; minor
          in Creative Writing
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© samuel cole 2005–{new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
