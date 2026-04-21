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
            Founding engineer, now CTO, at a tech non-profit connecting people
            to free food. Designed and scaled an AI-assisted helpline to 20,000+
            daily users across 11 regions with a peak team of two engineers.
            Built an intelligence pipeline combining field reports, agentic web
            research, and human sourcing to maintain real-time ground truth on
            food access. Shipped a client intelligence layer that carries full
            conversation context across every interaction.
          </p>
        </div>

        <div className={styles.entry}>
          <h3>
            <ExternalLink href="https://www.actblue.com">ActBlue</ExternalLink>
          </h3>
          <div className={styles.role}>Senior Software Engineer</div>
          <time>2017–2021</time>
          <p>
            Donor Experience team at the Democratic fundraising platform;
            cumulative contributions processed grew from ~$1B to over $8B during
            my four years. Rewrote the contribution form server from a Ruby
            Sinatra app to Node, refactoring client-side code along the way.
            Led the embeddable form used by the Biden presidential campaign,
            the NAACP, and Everytown.
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
            One of 4–5 engineers building tools for enterprises to manage
            employee spending. Shipped receipt view, a redesigned search and
            faceting system, automated flight metadata, and trip-level
            grouping.
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
            Lead web engineer, employee #8 at a live-music subscription
            startup. Built the client-side app from scratch in React / webpack
            / Reflux — the surface users used to subscribe and discover events
            across three countries. Extended the Rails API where needed,
            including the first Stripe integration for paid subscriptions.
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
            Employee #12, one of the first two full-time engineers. Owned the
            client side as Kickstarter grew from $28M in annual pledges to
            crossing $1B in cumulative pledges (March 2014), with 22,000+
            projects successfully funded in 2014 alone. Built site search,
            custom text editors, video players, the project-creation flow,
            creator tools for messages and backers, and admin review/publish/
            feature tooling.
          </p>
        </div>

        <div className={styles.entry}>
          <h3>
            <ExternalLink href="https://patch.com">Patch</ExternalLink>
          </h3>
          <div className={styles.role}>Front End Web Engineer</div>
          <time>2008–2010</time>
          <p>
            First front-end engineer. Designed the front-end architecture that
            scaled the product to hundreds of small-town sites across America.
            Built the CMS (media, authorship, layout, taxonomies) and a system
            for rendering highly customized maps.
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
