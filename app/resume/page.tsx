import type { Metadata } from "next";
import Link from "next/link";
import ExternalLink from "../components/ExternalLink";
import { personJsonLd } from "../personJsonLd";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "resume",
  description:
    "Samuel Cole — founding engineer and CTO. Resume and work history.",
  alternates: { canonical: "/resume" },
};

const { "@context": _context, ...personNode } = personJsonLd;
const profileJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    personNode,
    {
      "@type": "ProfilePage",
      url: "https://www.samuelcole.name/resume",
      mainEntity: { "@id": "https://www.samuelcole.name/#person" },
    },
  ],
};

export default function Resume() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires raw script content
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
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
          <span>
            <ExternalLink href="tel:+17189743543">(718) 974-3543</ExternalLink>
          </span>
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
            Transformed a local NYC helpline serving a handful of people a day
            into a food access system that helped over a million people across
            11 regions in 2025 with a small team. Managed an offshore
            contracting team, mentored an engineer, and owned technical and
            product strategy, budget, and infrastructure spend.
          </p>
        </div>

        <div className={styles.entry}>
          <h3>
            <ExternalLink href="https://www.actblue.com">ActBlue</ExternalLink>
          </h3>
          <div className={styles.role}>Senior Software Engineer</div>
          <time>2017–2021</time>
          <p>
            At the Democratic fundraising platform: rewrote the main donation
            form server (Ruby Sinatra → Node; ops later lifted it to AWS
            unchanged) and the company's PCI tokenizer. Solo, built a new embed
            from scratch at 100% test coverage. Contributions scaled from ~$1B
            to over $8B. Embed powered the Biden presidential campaign, the
            NAACP, Everytown, and more.
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
            One of 5 engineers building tools for enterprises to manage employee
            spending. Shipped receipt view, a redesigned search and faceting
            system, automated flight metadata, and trip-level grouping. Acquired
            by Emburse.
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
            Employee #8 at a live-music subscription startup. Built the
            client-side app from scratch in React / webpack / Reflux;
            contributed to the Rails API, including the company's first Stripe
            integration. When the CEO announced a Canada launch a week out with
            no code written, shipped full-stack currency and localization, on
            time.
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
            Employee #12, one of the first two full-time engineers; joined
            pre-launch. Owned the client side as Kickstarter scaled from $28M in
            annual pledges to crossing $1B cumulative (March 2014), with 22,000+
            projects funded in 2014 alone. Built the front-end of the multistep
            project editor (still the basic shape of today's flow), site search,
            custom text editors, creator messaging/backer tools, admin tooling,
            and the first mainstream HTML5 video player.
          </p>
        </div>

        <div className={styles.entry}>
          <h3>
            <ExternalLink href="https://patch.com">Patch</ExternalLink>
          </h3>
          <div className={styles.role}>Front End Web Engineer</div>
          <time>2008–2010</time>
          <p>
            First front-end engineer; joined before the company had a name.
            Built the CMS and front-end architecture that scaled to hundreds of
            small-town news sites across America, plus a system for rendering
            highly customized neighborhood maps. Acquired by AOL.
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

      <section className={styles.section}>
        <h2>Skills</h2>
        <ul className={styles.skills}>
          <li>
            <strong>Languages & Frameworks:</strong> TypeScript · Node.js ·
            Next.js · React · Ruby on Rails
          </li>
          <li>
            <strong>Infra & Data:</strong> Postgres · Prisma · Redis · AWS (RDS,
            ECS) · Vercel · GitHub Actions · ETL pipelines
          </li>
          <li>
            <strong>APIs & AI:</strong> Mapbox · Twilio · Google Cloud · Vertex
            AI (Gemini) · AI SDK · RAG · LLM agents
          </li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <p>© samuel cole 2005–{new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
