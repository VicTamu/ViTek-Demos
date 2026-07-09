import type { Metadata } from "next";

import "./luxe.css";

/**
 * Client mockup — The Luxe Beauty & Esthetic Room (Round Rock, TX).
 * Hidden sales concept, not indexed (see root layout robots).
 *
 * TODO before sending to owner:
 *  - Swap BOOKSY_URL for their real Booksy page (Google listing links to booksy.com).
 *  - Drop in their real studio/work photos where noted.
 */

const BOOKSY_URL = "https://booksy.com";
const PHONE_DISPLAY = "(512) 983-7101";
const PHONE_HREF = "tel:+15129837101";
const ADDRESS = "102 E Old Bowman Rd Ste D, Round Rock, TX 78664";
const MAP_EMBED =
  "https://www.google.com/maps?q=102+E+Old+Bowman+Rd+Ste+D+Round+Rock+TX+78664&output=embed";

export const metadata: Metadata = {
  title: "The Luxe Beauty & Esthetic Room — Round Rock, TX",
  description:
    "Beauty, hair, and esthetics in Round Rock, TX. Book your appointment at The Luxe.",
  robots: { index: false, follow: false },
};

const services = [
  { n: "01", h: "Hair", p: "Precision cuts, color, and silk presses tailored to you." },
  { n: "02", h: "Barbering", p: "Clean fades, bald fades, and classic cuts for all ages." },
  { n: "03", h: "Esthetics", p: "Facials, brows, and waxing in a calm, spotless studio." },
  { n: "04", h: "Nails", p: "Polished, personalized manicures start to finish." },
];

const stylists = [
  {
    initial: "N",
    name: "Nayeli",
    role: "Hair & Barbering",
    p: '"My go-to for a quick, clean cut — ask for Nayeli!"',
  },
  {
    initial: "M",
    name: "Mitzy",
    role: "Color & Styling",
    p: '"She listened to exactly what I wanted. I walked out feeling confident."',
  },
];

const reviews = [
  {
    q: "Amazing experience from start to finish. The studio is beautiful, clean, and very relaxing.",
    who: "Monica R.",
  },
  {
    q: "My hair turned out even better than I expected. Completely personalized service.",
    who: "Elizabeth R.",
  },
  {
    q: "100% a great experience from walking in the door to the final cut. The staff are rockstars.",
    who: "Alex C.",
  },
];

export default function LuxeMockup() {
  return (
    <main className="luxe">
      {/* NAV */}
      <header className="nav">
        <div className="wrap nav-inner">
          <div className="brand">
            The <span>Luxe</span>
          </div>
          <div className="nav-actions">
            <a className="nav-phone" href={PHONE_HREF}>
              {PHONE_DISPLAY}
            </a>
            <a className="btn btn-gold" href={BOOKSY_URL} target="_blank" rel="noreferrer">
              Book Now
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="monogram" aria-hidden>
          L
        </div>
        <div className="wrap">
          <p className="eyebrow" data-reveal style={{ animationDelay: "0.05s" }}>
            Round Rock, Texas · Women-Owned
          </p>
          <div data-reveal style={{ animationDelay: "0.15s" }}>
            <span className="stars">★★★★★</span>
          </div>
          <h1 data-reveal style={{ animationDelay: "0.25s" }}>
            Beauty that lives up <br />
            to its <em>name.</em>
          </h1>
          <p className="sub" data-reveal style={{ animationDelay: "0.4s" }}>
            A boutique hair &amp; esthetics studio in Round Rock — where a perfect
            5.0 reputation meets a space you actually want to sit in.
          </p>
          <div className="hero-actions" data-reveal style={{ animationDelay: "0.5s" }}>
            <a className="btn btn-gold" href={BOOKSY_URL} target="_blank" rel="noreferrer">
              Book an Appointment
            </a>
            <a className="btn btn-ghost" href={PHONE_HREF}>
              Call the Studio
            </a>
          </div>
          <div className="hero-badges" data-reveal style={{ animationDelay: "0.6s" }}>
            <span>
              <b>5.0</b> Rating
            </span>
            <span>
              <b>52</b> Five-Star Reviews
            </span>
            <span>
              <b>Women</b>-Owned
            </span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">What We Do</p>
            <h2>Services</h2>
            <p>Full-service beauty under one roof, done with intention and care.</p>
          </div>
          <div className="cards">
            {services.map((s) => (
              <article className="card" key={s.n}>
                <span className="num">{s.n}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STYLISTS */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Your Artists</p>
            <h2>Meet the Team</h2>
            <p>Talented hands who make every visit feel personal.</p>
          </div>
          <div className="stylists">
            {stylists.map((st) => (
              <article className="stylist" key={st.name}>
                <div className="avatar" aria-hidden>
                  {st.initial}
                </div>
                <div>
                  <span>{st.role}</span>
                  <h4>{st.name}</h4>
                  <p>{st.p}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">5.0 on Google</p>
            <h2>Loved by Round Rock</h2>
          </div>
          <div className="quotes">
            {reviews.map((r) => (
              <figure className="quote" key={r.who}>
                <div className="qs">★★★★★</div>
                <blockquote>
                  <p>{r.q}</p>
                </blockquote>
                <cite>— {r.who}</cite>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section>
        <div className="wrap visit">
          <div>
            <p className="eyebrow">Come See Us</p>
            <h2 className="serif" style={{ fontSize: "2.4rem", margin: "0.6rem 0 0" }}>
              Visit the Studio
            </h2>
            <div className="rows">
              <div className="row">
                <span>Address</span>
                <span>{ADDRESS}</span>
              </div>
              <div className="row">
                <span>Phone</span>
                <span>{PHONE_DISPLAY}</span>
              </div>
              <div className="row">
                <span>Hours</span>
                <span>Tue–Sat · 10am–7pm</span>
              </div>
              <div className="row">
                <span>Booking</span>
                <span>Online via Booksy</span>
              </div>
            </div>
            <div style={{ marginTop: "1.75rem" }}>
              <a className="btn btn-gold" href={BOOKSY_URL} target="_blank" rel="noreferrer">
                Book on Booksy
              </a>
            </div>
          </div>
          <div className="map">
            <iframe
              title="The Luxe Beauty & Esthetic Room location"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final">
        <div className="wrap">
          <div className="box">
            <p className="eyebrow">Ready When You Are</p>
            <h2>Your appointment awaits.</h2>
            <p>Book online in seconds and treat yourself to the full Luxe experience.</p>
            <a className="btn btn-gold" href={BOOKSY_URL} target="_blank" rel="noreferrer">
              Book an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <div className="wrap">
          <div className="brand" style={{ fontSize: "1.25rem" }}>
            The <span>Luxe</span>
          </div>
          <p style={{ marginTop: "0.75rem" }}>
            {ADDRESS} · {PHONE_DISPLAY}
          </p>
          <p className="concept">
            Website concept designed by <b>ViTek Systems</b> · vitecollabs@gmail.com
          </p>
        </div>
      </footer>
    </main>
  );
}
