import type { Metadata } from "next";
import ExternalLink from "../components/ExternalLink";
import { personJsonLd } from "../personJsonLd";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: { absolute: "Samuel Cole — Resume" },
  description: "Founding engineer and CTO. I make things from scratch.",
  alternates: {
    canonical: "/resume",
    types: { "text/markdown": "/samuel-cole-resume.md" },
  },
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
    <div className={styles.viewport}>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires raw script content
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <main className={styles.page}>
        <div className={styles.meta}>
          <div className={styles.metaRow}>
            <span className={styles.prompt}>$ ls</span>
            <span className={styles.metaInfo}>
              v.2026.04 · last updated apr 2026
            </span>
          </div>
          <div className={styles.metaFiles}>
            <a
              className={styles.tag}
              href="/samuel-cole-resume.pdf"
              target="_blank"
              rel="noopener"
            >
              samuel-cole-resume.pdf
            </a>
            <a
              className={styles.tag}
              href="/samuel-cole-resume-bw.pdf"
              target="_blank"
              rel="noopener"
            >
              samuel-cole-resume-bw.pdf
            </a>
            <a
              className={styles.tag}
              href="/samuel-cole-resume.md"
              target="_blank"
              rel="noopener"
            >
              samuel-cole-resume.md
            </a>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.prompt}>$ cat samuel-cole-resume.md</span>
          </div>
        </div>

        <header className={styles.masthead}>
          <h1 className={styles.name}>Samuel Cole</h1>
          <span className={styles.heart} aria-hidden="true">
            ♥
          </span>
          <p className={styles.tagline}>
            Founding engineer and CTO. I make things from scratch.
          </p>

          <div className={styles.contact}>
            <a href="mailto:sam@samuelcole.name">sam@samuelcole.name</a>
            <span className={styles.sep} aria-hidden="true">
              ·
            </span>
            <a href="tel:+17189743543">(718)&nbsp;974-3543</a>
            <span className={styles.sep} aria-hidden="true">
              ·
            </span>
            <a
              href="https://www.samuelcole.name"
              target="_blank"
              rel="noopener"
            >
              samuelcole.name
            </a>
            <span className={styles.sep} aria-hidden="true">
              ·
            </span>
            <a
              href="https://github.com/samuelcole"
              target="_blank"
              rel="noopener"
            >
              github.com/samuelcole
            </a>
            <span className={styles.sep} aria-hidden="true">
              ·
            </span>
            <a
              href="https://www.linkedin.com/in/samuelcole"
              target="_blank"
              rel="noopener"
            >
              linkedin.com/in/samuelcole
            </a>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <ol className={styles.entries}>
            <li className={`${styles.entry} ${styles.current}`}>
              <div className={styles.num}>6</div>
              <div className={styles.body}>
                <h3 className={styles.company}>
                  <span className={styles.pip} aria-hidden="true" />
                  <ExternalLink href="https://www.foodhelpline.org">
                    Lemontree
                  </ExternalLink>
                </h3>
                <p className={styles.role}>CTO</p>
                <p className={styles.desc}>
                  Transformed a NYC helpline serving a handful of people a day
                  into a food-access system helping{" "}
                  <strong>
                    over a million people across 11 regions in 2025
                  </strong>
                  . Built an LLM pipeline (Gemini Flash) that{" "}
                  <strong>2.5×'d call volume</strong> for a 3–5-person team
                  across Pakistan, the Philippines, and Kenya. Mentored an
                  engineer; owned strategy, budget, and infrastructure.
                </p>
              </div>
              <div className={styles.dates}>
                2021&nbsp;– <span className={styles.present}>Present</span>
              </div>
            </li>

            <li className={styles.entry}>
              <div className={styles.num}>5</div>
              <div className={styles.body}>
                <h3 className={styles.company}>
                  <ExternalLink href="https://www.actblue.com">
                    ActBlue
                  </ExternalLink>
                </h3>
                <p className={styles.role}>Senior Software Engineer</p>
                <p className={styles.desc}>
                  At the Democratic fundraising platform: rewrote the main
                  donation-form server (Ruby Sinatra → Node; ops later lifted it
                  to AWS unchanged) and the company's PCI tokenizer. Solo, built
                  a new embed from scratch at{" "}
                  <strong>100% test coverage</strong>. Contributions scaled from{" "}
                  <strong>~$1B to over $8B</strong>. Embed powered the Biden
                  presidential campaign, the NAACP, Everytown, and more.
                </p>
              </div>
              <div className={styles.dates}>2017 – 2021</div>
            </li>

            <li className={styles.entry}>
              <div className={styles.num}>4</div>
              <div className={styles.body}>
                <h3 className={styles.company}>
                  <ExternalLink href="https://www.emburse.com/products/abacus">
                    Abacus
                  </ExternalLink>
                </h3>
                <p className={styles.role}>Full-Stack Engineer</p>
                <p className={styles.desc}>
                  One of 5 engineers building tools for enterprises to manage
                  employee spending. Shipped receipt view, a redesigned search
                  and faceting system, automated flight metadata, and trip-level
                  grouping. <em>Acquired by Emburse.</em>
                </p>
              </div>
              <div className={styles.dates}>2015 – 2017</div>
            </li>

            <li className={styles.entry}>
              <div className={styles.num}>3</div>
              <div className={styles.body}>
                <h3 className={styles.company}>
                  <ExternalLink href="https://www.reddit.com/r/indie/comments/zi6u04/any_previous_jukely_users_out_there/">
                    Jukely
                  </ExternalLink>
                </h3>
                <p className={styles.role}>Lead Web Engineer</p>
                <p className={styles.desc}>
                  Employee #8 at a live-music subscription startup. Built the
                  client-side app from scratch in React / webpack / Reflux;
                  contributed to the Rails API, including the company's first
                  Stripe integration. When the CEO announced a Canada launch a
                  week out with no code written,{" "}
                  <strong>
                    shipped full-stack currency and localization, on time
                  </strong>
                  .
                </p>
              </div>
              <div className={styles.dates}>2014 – 2015</div>
            </li>

            <li className={styles.entry}>
              <div className={styles.num}>2</div>
              <div className={styles.body}>
                <h3 className={styles.company}>
                  <ExternalLink href="https://www.kickstarter.com">
                    Kickstarter
                  </ExternalLink>
                </h3>
                <p className={styles.role}>Software Engineer</p>
                <p className={styles.desc}>
                  <strong>Employee #12</strong>, one of the first two full-time
                  engineers; joined pre-launch. Owned the client side as
                  Kickstarter scaled from $28M in annual pledges to{" "}
                  <strong>crossing $1B cumulative</strong> (March 2014), with
                  22,000+ projects funded in 2014 alone. Built the front-end of
                  the multistep project editor (still the basic shape of today's
                  flow), site search, custom text editors, creator messaging /
                  backer tools, admin tooling, and the first mainstream HTML5
                  video player.
                </p>
              </div>
              <div className={styles.dates}>2010 – 2014</div>
            </li>

            <li className={styles.entry}>
              <div className={styles.num}>1</div>
              <div className={styles.body}>
                <h3 className={styles.company}>
                  <ExternalLink href="https://patch.com">Patch</ExternalLink>
                </h3>
                <p className={styles.role}>Front-End Web Engineer</p>
                <p className={styles.desc}>
                  First front-end engineer; joined before the company had a
                  name. Built the CMS and front-end architecture that scaled to{" "}
                  <strong>
                    hundreds of small-town news sites across America
                  </strong>
                  , plus a system for rendering highly customized neighborhood
                  maps. <em>Acquired by AOL.</em>
                </p>
              </div>
              <div className={styles.dates}>2008 – 2010</div>
            </li>

            <li className={styles.entry}>
              <div className={styles.num}>0</div>
              <div className={styles.body}>
                <h3 className={styles.company}>
                  <ExternalLink href="https://www.rit.edu">
                    Rochester Institute of Technology
                  </ExternalLink>
                </h3>
                <p className={styles.role}>B.S., Multidisciplinary Studies</p>
                <p className={styles.desc}>
                  Computer Science & Literature; minor in Creative Writing.
                </p>
              </div>
              <div className={styles.dates}>2004 – 2008</div>
            </li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <dl className={styles.skills}>
            <dt>Languages</dt>
            <dd>
              TypeScript<span className={styles.sep}>·</span>Node.js
              <span className={styles.sep}>·</span>Next.js
              <span className={styles.sep}>·</span>React
              <span className={styles.sep}>·</span>Ruby on Rails
            </dd>
            <dt>Infra & Data</dt>
            <dd>
              Postgres<span className={styles.sep}>·</span>Prisma
              <span className={styles.sep}>·</span>Redis
              <span className={styles.sep}>·</span>AWS (RDS, ECS)
              <span className={styles.sep}>·</span>Vercel
              <span className={styles.sep}>·</span>GitHub Actions
              <span className={styles.sep}>·</span>ETL pipelines
            </dd>
            <dt>APIs & AI</dt>
            <dd>
              Mapbox<span className={styles.sep}>·</span>Twilio
              <span className={styles.sep}>·</span>Google Cloud
              <span className={styles.sep}>·</span>Vertex AI (Gemini)
              <span className={styles.sep}>·</span>AI SDK
              <span className={styles.sep}>·</span>LLM agents
            </dd>
          </dl>
        </section>

        <footer className={styles.colophon}>
          <span>{"// EOF"}</span>
          <span>© samuel cole 2005–{new Date().getFullYear()}</span>
          <span className={styles.heartMini} aria-hidden="true">
            ♥
          </span>
        </footer>
      </main>
    </div>
  );
}
