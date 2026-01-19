import ExternalLink from "./components/ExternalLink";
import ScrollIndicator from "./components/ScrollIndicator";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>samuel cole</h1>
      </header>
      <main className={styles.main}>
        <ScrollIndicator />
        <article>
          <p>i make things. mostly websites.</p>
        </article>
        <article>
          <time>2008–2010</time>
          <h2>
            <ExternalLink href="https://patch.com">patch.com</ExternalLink>
          </h2>
          <p>
            in the summer of '08, i moved to new york city, and started my first
            job as the first front-end engineer at a startup that was building a
            yet-unnamed network of local news sites. we ended up calling it
            patch, and later sold it to aol.
          </p>
        </article>
        <article>
          <time>2010–2014</time>
          <h2>
            <ExternalLink href="https://www.kickstarter.com">
              kickstarter.com
            </ExternalLink>
          </h2>
          <p>
            a few of my friends started building a new website that would let
            artists raise money from their communities to fund their creative
            projects. as a creator myself, i was thrilled to empower that
            mission, so i joined them as the twelfth employee and third
            engineer.
          </p>
        </article>
        <article>
          <time>2014–2015</time>
          <h2>
            <ExternalLink href="https://www.reddit.com/r/indie/comments/zi6u04/any_previous_jukely_users_out_there/">
              jukely.com
            </ExternalLink>
          </h2>
          <p>
            once kickstarter was established, i was looking for new ways to
            empower artists, and one of my friends had started a company
            designed to bring people out to live music events, with a particular
            focus on discovering bands at their beginning of their careers. it
            began as an iphone app, so they brought me on to build their website
            as the lead web engineer.
          </p>
        </article>
        <article>
          <time>2015–2017</time>
          <h2>
            <ExternalLink href="https://www.emburse.com/products/abacus">
              abacus.com
            </ExternalLink>
          </h2>
          <p>
            from my experience at kickstarter, i knew that once creative
            projects got to a certain point and spun into their own companies,
            they needed a whole suite of supporting software. i was thrilled to
            help build financial products for young companies.
          </p>
        </article>
        <article>
          <time>2017–2021</time>
          <h2>
            <ExternalLink href="https://www.actblue.com">
              actblue.com
            </ExternalLink>
          </h2>
          <p>
            during the 2016 election, i got involved with all-virtual volunteer
            groups of technical folks that were building technology to help
            progressive campaigns win elections. in 2017 i started looking for a
            way to do that work full time, and i found actblue, a non-profit
            tech company that builds a fundraising platform for progressives,
            which perfectly fit both my background and my ideals.
          </p>
        </article>
        <article>
          <time>2021–</time>
          <h2>
            <ExternalLink href="https://www.foodhelpline.org">
              lemontree
            </ExternalLink>
          </h2>
          <p>
            once i had worked in political fundraising for a full election cycle
            (and helped elect a president!), i wanted to go back to my roots of
            building a non-profit tech company from day one. so i joined
            lemontree as the founding engineer, to build a platform that
            connects people to free food in their communities.
          </p>
        </article>
        <article>
          <ul className={styles.links}>
            <li>
              <ExternalLink href="https://github.com/samuelcole">
                github
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.linkedin.com/in/samuelcole">
                linkedin
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="mailto:sam@samuelcole.name">
                email
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.goodreads.com/user/show/131140-samuel">
                goodreads
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="/heart.png">heart</ExternalLink>
            </li>
          </ul>
        </article>
      </main>
      <footer className={styles.footer}>
        <p>© samuel cole 2005–{new Date().getFullYear()}</p>
        <p>thank you for visiting</p>
      </footer>
    </div>
  );
}
