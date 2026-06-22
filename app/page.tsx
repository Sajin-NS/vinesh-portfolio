import React from "react";
import FadeInSection from "./components/fade-in-section";
import MobileMenu from "./components/mobile-menu";

export default function Home() {
  const menuLinks = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Noise overlay */}
      <div className="grain" />

      {/* Marquee ticker */}
      <div className="marquee">
        <span>
          Brand Design · Creative Marketing · Hospitality Campaigns · AI Visual Direction · Social Content Systems · Pitch Deck Visuals · Brand Design · Creative Marketing · Hospitality Campaigns · AI Visual Direction · Social Content Systems · Pitch Deck Visuals · 
        </span>
      </div>

      {/* Navigation Header */}
      <header>
        <nav className="nav">
          <a className="brand" href="#">
            Vinesh<i>Studio</i>
          </a>
          <div className="menu">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          {/* Desktop Call to Action */}
          <div className="nav-cta hidden lg:block">
            <a className="btn dark" href="#contact">
              Let’s Connect
            </a>
          </div>
          {/* Mobile hamburger menu */}
          <MobileMenu links={menuLinks} />
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-grid">
            <div>
              <div className="intro">
                <span className="dot" /> UAE-based creative marketer & brand designer
              </div>
              <h1>
                Building brands from <span>idea</span> to impact
              </h1>
              <p className="hero-copy">
                I shape brand identities, campaign visuals, social systems, pitch decks, and AI-powered creative direction for hospitality, lifestyle, and digital-first businesses.
              </p>
              <div className="hero-actions">
                <a className="btn dark" href="#work">
                  View Selected Work
                </a>
                <a className="btn" href="#services">
                  What I Do
                </a>
              </div>
            </div>

            <div className="collage" aria-label="Portfolio visual collage">
              <div className="tile t1" data-label="Hospitality" />
              <div className="tile t2" data-label="Digital Product" />
              <div className="tile t3" data-label="Campaigns" />
              <div className="tile t4" data-label="AI Visuals" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <FadeInSection id="about" className="section">
          <div className="section-head">
            <div className="kicker">Positioning</div>
            <div>
              <h2>
                Not just design. <em>Direction.</em>
              </h2>
              <p className="lead">
                I help brands move from basic visuals to a sharper creative system — the idea, the look, the content, and the final presentation working together.
              </p>
            </div>
          </div>

          <div className="clients">
            <div className="client">SoSocial</div>
            <div className="client">
              Capital<br />Motion
            </div>
            <div className="client">
              Cafe Del<br />Mar
            </div>
            <div className="client">VERSUS</div>
            <div className="client">
              Tiki<br />Pacifico
            </div>
            <div className="client">
              Brand<br />Folio
            </div>
            <div className="client">
              LinkedIn<br />Content
            </div>
            <div className="client">
              AI<br />Visuals
            </div>
            <div className="client">
              Hospitality<br />Decks
            </div>
            <div className="client">
              Logo<br />Systems
            </div>
            <div className="client">
              Social<br />Campaigns
            </div>
            <div className="client">
              App<br />Stories
            </div>
          </div>
        </FadeInSection>

        {/* Work Section */}
        <FadeInSection id="work" className="section">
          <div className="section-head">
            <div className="kicker">Selected Work</div>
            <div>
              <h2>
                Projects with <em>business</em> behind the visuals.
              </h2>
              <p className="lead">
                A cleaner portfolio should show fewer projects, but with stronger case-study storytelling: challenge, idea, execution, and output.
              </p>
            </div>
          </div>

          <div className="work-list">
            <article className="project">
              <div>
                <span className="project-tag">Brand Strategy / Hospitality</span>
                <h3>VERSUS Premium Sports Lounge</h3>
              </div>
              <div className="thumb" />
              <p>
                Brand concept, logo direction, ambience visuals, pitch deck storytelling, and premium sports lounge positioning.
              </p>
              <div className="arrow">↗</div>
            </article>

            <article className="project">
              <div>
                <span className="project-tag">Social System / LinkedIn B2B</span>
                <h3>SoSocial Brand & Campaigns</h3>
              </div>
              <div className="thumb" />
              <p>
                Creative positioning, LinkedIn content, B2B storytelling, app visuals, and loyalty/payment communication.
              </p>
              <div className="arrow">↗</div>
            </article>

            <article className="project">
              <div>
                <span className="project-tag">Event Design / Campaign</span>
                <h3>Cafe Del Mar Season Finale</h3>
              </div>
              <div className="thumb" />
              <p>
                Event campaign direction, social poster system, poolside mood, and high-energy hospitality communication.
              </p>
              <div className="arrow">↗</div>
            </article>

            <article className="project">
              <div>
                <span className="project-tag">Content System / Brand Folio</span>
                <h3>Capital Motion Social System</h3>
              </div>
              <div className="thumb" />
              <p>
                Corporate LinkedIn visuals, awards communication, restaurant marketing content, and portfolio brand presence.
              </p>
              <div className="arrow">↗</div>
            </article>
          </div>
        </FadeInSection>

        {/* Stats Section */}
        <FadeInSection className="section">
          <div className="stats">
            <div className="stat">
              <strong>10+</strong>
              <span>Years across UAE creative, marketing, social, and hospitality communication.</span>
            </div>
            <div className="stat">
              <strong>5</strong>
              <span>Core strengths: brand, campaign, social content, web design, and AI visual direction.</span>
            </div>
            <div className="stat">
              <strong>50+</strong>
              <span>Campaign, pitch, and web visuals shaped across restaurant, nightlife, and product contexts.</span>
            </div>
            <div className="stat">
              <strong>1</strong>
              <span>Simple goal: make brands look sharper, clearer, and more premium.</span>
            </div>
          </div>
        </FadeInSection>

        {/* Services Section */}
        <FadeInSection id="services" className="section">
          <div className="approach">
            <div className="approach-copy">
              <p>Creative marketing is not decoration. It is how people decide if a brand is worth their time.</p>
              <small>
                My approach combines business understanding, visual taste, social media thinking, and AI-assisted speed. The output should not only look good — it should make the brand easier to understand, present, and sell.
              </small>
            </div>

            <div className="services">
              <div className="service">
                <b>01</b>
                <div>
                  <h3>Brand Identity & Visual Systems</h3>
                  <p>Logo direction, typography, colors, tone, brand assets, and presentation-ready identity systems.</p>
                </div>
              </div>

              <div className="service">
                <b>02</b>
                <div>
                  <h3>Campaign & Social Content</h3>
                  <p>Launch posts, LinkedIn creatives, restaurant campaigns, award announcements, and content grids.</p>
                </div>
              </div>

              <div className="service">
                <b>03</b>
                <div>
                  <h3>Hospitality Pitch Visuals</h3>
                  <p>Deck covers, venue concepts, moodboards, event visuals, and premium presentation storytelling.</p>
                </div>
              </div>

              <div className="service">
                <b>04</b>
                <div>
                  <h3>AI Visual Direction</h3>
                  <p>High-quality AI-assisted images, campaign mockups, concept renders, and experimental content ideas.</p>
                </div>
              </div>

              <div className="service">
                <b>05</b>
                <div>
                  <h3>Web Development & Digital Products</h3>
                  <p>Modern, responsive websites, Next.js applications, portfolio platforms, and interactive user experiences designed to convert.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Testimonials Section */}
        <FadeInSection className="section">
          <div className="section-head">
            <div className="kicker">Proof Style</div>
            <div>
              <h2>
                What people should <em>feel</em> from the work.
              </h2>
            </div>
          </div>

          <div className="testimonials">
            <div className="quote">
              <p>“He understands the idea, the brand mood, and the business need — not just the design file.”</p>
              <small>Hospitality / Campaign Direction</small>
            </div>
            <div className="quote">
              <p>“Fast with visuals, sharp with positioning, and always pushing the brand to look more premium.”</p>
              <small>Brand & Social Content</small>
            </div>
            <div className="quote">
              <p>“The biggest strength is connecting strategy, content, and design into one clean presentation.”</p>
              <small>Pitch Deck & Creative Direction</small>
            </div>
          </div>
        </FadeInSection>
      </main>

      {/* Footer Section */}
      <footer id="contact">
        <div className="footer-inner">
          <div className="kicker">Don’t be shy</div>
          <h2>Let’s build something sharper for your brand.</h2>
          <div style={{ marginTop: "34px" }}>
            <a
              className="btn"
              style={{
                background: "var(--cream)",
                color: "var(--dark)",
                borderColor: "var(--cream)",
              }}
              href="mailto:hello@vichufolio.com"
            >
              Let’s Connect
            </a>
          </div>

          <div className="contact-grid">
            <div>
              <b>Email</b>
              hello@vichufolio.com
            </div>
            <div>
              <b>Based In</b>
              UAE / Kerala · Available for selected brand, campaign, and creative direction projects.
            </div>
          </div>

          <div className="bottom">
            <div>© 2026 Vinesh Studio / VichuFolio</div>
            <div>Making brands look sharper, one visual system at a time.</div>
          </div>
        </div>
      </footer>
    </>
  );
}
