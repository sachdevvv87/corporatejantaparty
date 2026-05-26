/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

/* ============================================================
   CORPORATE JANTA PARTY (CJP)
   Original satirical political party design for India's
   overworked corporate workforce. Editorial newsprint aesthetic.
   ============================================================ */

const TICKER_ITEMS = [
  "BREAKING — Reply-all officially classified as cyberterrorism under new CJP draft bill",
  "EXCLUSIVE — Manager spotted using 'circle back' for 47th time this quarter",
  "DEVELOPING — Calendar invite sent for meeting to discuss frequency of meetings",
  "ALERT — Pay hike of 4.2% issued; inflation laughs in 6.8%",
  "JUST IN — Free pizza promised in exchange for unpaid weekend deployment",
  "POLL — 91% of employees say 'quick sync' is neither quick nor a sync",
];

const STATS = [
  { value: "6.2", unit: "Cr", label: "Potential card-carrying members across India Inc." },
  { value: "94", unit: "%", label: "Of working professionals report 'meeting fatigue'" },
  { value: "11.3", unit: "hrs", label: "Average working day after the 9-hour 'standard'" },
  { value: "∞", unit: "", label: "Unread Slack notifications since onboarding" },
];

const DEMANDS = [
  {
    no: "01",
    title: "The Meetings-as-Emails Act",
    sub: "If it could have been an email, it shall be an email.",
    body: "All standups, syncs, catch-ups, and check-ins of duration under 14 minutes are to be legally converted into a Slack message. Repeat offenders face mandatory attendance at their own calendar.",
  },
  {
    no: "02",
    title: "Inflation-Beating Hikes",
    sub: "A 4% raise is not a raise. It is a polite paycut.",
    body: "Annual increments shall by law exceed the inflation rate by no less than three (3) percentage points. Bell-curve performance ratings to be cremated with state honours.",
  },
  {
    no: "03",
    title: "The Reply-All Prohibition",
    sub: "First strike: warning. Second strike: public hearing.",
    body: "Reply-all to chains of 40+ recipients to be treated as an act of workplace violence. Cake announcements and 'thanks' replies exempt only on Fridays.",
  },
  {
    no: "04",
    title: "Right to Work From Anywhere",
    sub: "Including the bathroom, where most decisions are made.",
    body: "Permanent constitutional right to work from home, hometown, hill station, or hospital. Mandatory office attendance permitted only when free lunch is genuinely provided.",
  },
  {
    no: "05",
    title: "Linguistic Cleanup",
    sub: "Synergy. Bandwidth. Touch base. All banned.",
    body: "Corporate vocabulary purification scheme. Use of the phrase 'low-hanging fruit' carries a fine of ₹500 payable to the nearest intern. 'Per my last email' constitutes an admission of guilt.",
  },
];

const ELIGIBILITY = [
  "Have said 'per my last email' while visibly seething",
  "Own at least one work hoodie you never asked for",
  "Have eaten lunch at your desk this week",
  "Have laughed bitterly at 'we are a family' in a townhall",
  "Have considered LinkedIn a personality",
  "Have replied to a 9:47pm email within 8 minutes",
];

const FAQS = [
  {
    q: "Is this a real political party?",
    a: "Define 'real'. Define 'political'. Define 'party'. We have a logo, a manifesto, and approximately as much policy clarity as the average state government. You decide.",
  },
  {
    q: "Will joining CJP affect my appraisal?",
    a: "Almost certainly. We anticipate a strongly worded HR email within 48 hours of card receipt. Frame it. Mount it. Hang it in the war room.",
  },
  {
    q: "What is the membership fee?",
    a: "One (1) anecdote about a meeting that should have been an email. Premium tier members may submit two.",
  },
  {
    q: "Where can I attend a rally?",
    a: "At the next all-hands. Look for the colleague with the most pained smile. That is your local CJP chapter secretary.",
  },
  {
    q: "Is the leadership accepting donations?",
    a: "We accept all forms of currency, including but not limited to: unused leave days, gift vouchers from 2019 town halls, and the silent rage of the bell-curved.",
  },
];

/* ============================================================ */

function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker__label">BULLETIN</div>
      <div className="ticker__track">
        <div className="ticker__inner">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
            <span className="ticker__item" key={i}>
              <span className="ticker__dot" /> {t}
            </span>
          ))}
        </div>
      </div>
      <div className="ticker__date">EST. 2026 · NEW DELHI</div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav__logo">
        <span className="nav__mark"><img src="assets/tumbler.png" alt="" /></span>
        <span>
          <span className="nav__name">Corporate Janta Party</span>
          <span className="nav__tag">कॉर्पोरेट जनता पार्टी</span>
        </span>
      </a>
      <div className="nav__links">
        <a href="#manifesto">Manifesto</a>
        <a href="#eligibility">Eligibility</a>
        <a href="#join">Membership</a>
        <a href="#faq">FAQ</a>
      </div>
      <a href="#join" className="nav__cta">Join the Party →</a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__left">
        <div className="hero__eyebrow">
          <span className="dot dot--red" />
          A POLITICAL MOVEMENT · FILED UNDER SATIRE
        </div>
        <h1 className="hero__title">
          A new party for the<br />
          <em>permanently exhausted.</em>
        </h1>
        <p className="hero__lede">
          They came for the unemployed and called them cockroaches. Then they
          came for the employed and called us <em>resources</em>. The
          <strong> Corporate Janta Party</strong> is the political home of every
          Indian who has died a little inside during a Monday morning standup.
        </p>
        <div className="hero__ctas">
          <a href="#join" className="btn btn--primary">Get your party card →</a>
          <a href="#manifesto" className="btn btn--ghost">Read the manifesto</a>
        </div>
        <div className="hero__meta">
          <div>
            <div className="hero__meta-num">21.9M+</div>
            <div className="hero__meta-lab">Followers the original got in 5 days</div>
          </div>
          <div>
            <div className="hero__meta-num">5,000+</div>
            <div className="hero__meta-lab">Membership applications since launch</div>
          </div>
          <div>
            <div className="hero__meta-num">0</div>
            <div className="hero__meta-lab">Meetings held to organise this</div>
          </div>
        </div>
      </div>

      <div className="hero__right">
        <Poster />
      </div>
    </section>
  );
}

function Poster() {
  return (
    <div className="poster">
      <div className="poster__top">
        <div className="poster__row">
          <span>OFFICIAL POSTER</span>
          <span>NO. 001 / 2026</span>
        </div>
        <div className="poster__row poster__row--big">
          <span>★ CJP ★</span>
        </div>
      </div>

      <div className="poster__art">
        <div className="poster__seal">
          <div className="poster__seal-inner">
            <img src="assets/tumbler.png" alt="Corporate Janta Party symbol" className="poster__seal-tumbler" />
          </div>
        </div>
        <div className="poster__rays" />
        <div className="poster__sym">
          <span>— OFFICIAL PARTY SYMBOL —</span>
          <strong>THE TUMBLER</strong>
          <em>"40 oz. of solidarity. Refilled daily at the office water cooler."</em>
        </div>
      </div>

      <div className="poster__title">
        <span className="poster__title-line">A PARTY</span>
        <span className="poster__title-line poster__title-line--em"><em>OF, BY, &amp; FOR</em></span>
        <span className="poster__title-line">THE OVERWORKED</span>
      </div>

      <div className="poster__bottom">
        <div className="poster__quote">
          "If the 9-to-5 has become 9-to-9,<br />
          then democracy itself is on overtime."
        </div>
        <div className="poster__sig">— FOUNDING DECLARATION</div>
        <div className="poster__stamp">
          <div className="poster__stamp-ring">
            <span>★ APPROVED · CJP CENTRAL ★</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsBar() {
  return (
    <section className="stats">
      <div className="stats__lead">
        <div className="stats__eyebrow">— BY THE NUMBERS</div>
        <h3 className="stats__h">The state of the corporate <em>aam aadmi</em>.</h3>
      </div>
      <div className="stats__grid">
        {STATS.map((s, i) => (
          <div className="stat" key={i}>
            <div className="stat__value">
              {s.value}<span className="stat__unit">{s.unit}</span>
            </div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="manifesto" id="manifesto">
      <div className="section-head">
        <div className="section-head__no">II.</div>
        <div>
          <div className="section-head__eyebrow">— THE MANIFESTO</div>
          <h2 className="section-head__title">
            Five demands, drafted between<br /><em>two unnecessary meetings.</em>
          </h2>
        </div>
      </div>

      <div className="demands">
        {DEMANDS.map((d) => (
          <article className="demand" key={d.no}>
            <div className="demand__no">{d.no}</div>
            <div className="demand__body">
              <h3 className="demand__title">{d.title}</h3>
              <div className="demand__sub"><em>{d.sub}</em></div>
              <p className="demand__text">{d.body}</p>
            </div>
            <div className="demand__seal">★</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Eligibility() {
  const [checked, setChecked] = useState({});
  const total = ELIGIBILITY.length;
  const count = Object.values(checked).filter(Boolean).length;
  const verdict =
    count === 0 ? "Awaiting your testimony" :
    count <= 2 ? "Probationary member" :
    count <= 4 ? "Card-carrying comrade" :
    count <= 5 ? "Senior cadre" :
    "FOUNDING MEMBER — Central Committee invitation incoming";

  return (
    <section className="eligibility" id="eligibility">
      <div className="section-head section-head--light">
        <div className="section-head__no">III.</div>
        <div>
          <div className="section-head__eyebrow">— ARE YOU ONE OF US?</div>
          <h2 className="section-head__title">
            The eligibility test. <em>No HR present.</em>
          </h2>
        </div>
      </div>

      <div className="elig">
        <div className="elig__list">
          {ELIGIBILITY.map((item, i) => (
            <label className={`check ${checked[i] ? "check--on" : ""}`} key={i}>
              <span className="check__box">{checked[i] ? "✓" : ""}</span>
              <input
                type="checkbox"
                checked={!!checked[i]}
                onChange={(e) => setChecked({ ...checked, [i]: e.target.checked })}
              />
              <span className="check__text">{item}</span>
            </label>
          ))}
        </div>

        <aside className="elig__verdict">
          <div className="elig__counter">
            <div className="elig__count">{count}<span>/{total}</span></div>
            <div className="elig__count-lab">SYMPTOMS DECLARED</div>
          </div>
          <div className="elig__bar">
            <div className="elig__bar-fill" style={{ width: `${(count / total) * 100}%` }} />
          </div>
          <div className="elig__verdict-lab">— PROVISIONAL VERDICT</div>
          <div className="elig__verdict-text"><em>{verdict}</em></div>
          <a href="#join" className="btn btn--primary btn--block">Claim your card →</a>
        </aside>
      </div>
    </section>
  );
}

function JoinForm() {
  const [form, setForm] = useState({
    name: "", role: "", company: "", city: "", grievance: "", oath: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [cardNo] = useState(() => 4821 + Math.floor(Math.random() * 9999));

  const grievances = [
    "Pick your primary grievance...",
    "Reply-all carpet bombing",
    "Quarterly bell-curve trauma",
    "Mandatory 'fun' Fridays",
    "Return-to-office mandate",
    "'Quick sync' that was 47 minutes",
    "Manager calls during dinner",
    "Below-inflation increment",
    "LinkedIn humblebrag pollution",
  ];

  const submit = (e) => {
    e.preventDefault();
    if (form.name && form.grievance && form.grievance !== grievances[0] && form.oath) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section className="join" id="join">
        <div className="join__card-result">
          <div className="card">
            <div className="card__strip">
              <span>OFFICIAL · COMRADE CARD</span>
              <span>CENTRAL COMMITTEE</span>
            </div>
            <div className="card__body">
              <div className="card__seal"><img src="assets/tumbler.png" alt="" /></div>
              <div className="card__no">No. CJP-{cardNo}</div>
              <div className="card__name">{form.name || "Comrade"}</div>
              <div className="card__role">
                {form.role || "Worker"}{form.company ? ` · ${form.company}` : ""}
              </div>
              <div className="card__quote">
                "I, a corporate <em>aam aadmi</em>, do solemnly swear to never accept<br />
                a calendar invite without an agenda. So help me Slack."
              </div>
              <div className="card__bottom">
                <div>
                  <div className="card__bottom-lab">PRIMARY GRIEVANCE</div>
                  <div className="card__bottom-val">{form.grievance}</div>
                </div>
                <div>
                  <div className="card__bottom-lab">CITY CHAPTER</div>
                  <div className="card__bottom-val">{form.city || "Unaffiliated"}</div>
                </div>
              </div>
            </div>
            <div className="card__foot">
              <span>★ VALID UNTIL THE REVOLUTION ★</span>
            </div>
          </div>
          <div className="join__after">
            <h3>You're in.</h3>
            <p>
              Screenshot the card. Post it. Watch HR's smile freeze in real time.
              <br />Your nearest <em>chai-pe-charcha</em> chapter will contact you on Slack.
            </p>
            <button className="btn btn--ghost btn--dark" onClick={() => setSubmitted(false)}>
              ← Issue another card
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="join" id="join">
      <div className="section-head">
        <div className="section-head__no">IV.</div>
        <div>
          <div className="section-head__eyebrow">— MEMBERSHIP APPLICATION</div>
          <h2 className="section-head__title">
            Take the oath. Get the card.<br />
            <em>Make HR uncomfortable.</em>
          </h2>
        </div>
      </div>

      <form className="form" onSubmit={submit}>
        <div className="form__grid">
          <label className="field">
            <span className="field__label">Comrade Name *</span>
            <input
              type="text"
              placeholder="e.g. Rohan Iyer"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </label>
          <label className="field">
            <span className="field__label">Designation</span>
            <input
              type="text"
              placeholder="e.g. Senior Manager, Excel Forwarding"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            />
          </label>
          <label className="field">
            <span className="field__label">Place of Servitude</span>
            <input
              type="text"
              placeholder="e.g. A Consulting Firm You've Heard Of"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
          </label>
          <label className="field">
            <span className="field__label">City Chapter</span>
            <input
              type="text"
              placeholder="e.g. Bengaluru"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
          </label>
          <label className="field field--wide">
            <span className="field__label">Primary Grievance *</span>
            <select
              value={form.grievance}
              onChange={(e) => setForm({ ...form, grievance: e.target.value })}
            >
              {grievances.map((g, i) => (
                <option key={i} value={g} disabled={i === 0}>{g}</option>
              ))}
            </select>
          </label>
        </div>

        <label className="oath">
          <input
            type="checkbox"
            checked={form.oath}
            onChange={(e) => setForm({ ...form, oath: e.target.checked })}
          />
          <span className="oath__box">{form.oath ? "✓" : ""}</span>
          <span className="oath__text">
            I solemnly swear, on the holy book of Outlook, that I will <em>never</em>
            schedule a meeting that could have been an email, and I will mark <em>OOO</em>
            without apology.
          </span>
        </label>

        <button
          type="submit"
          className="btn btn--primary btn--lg"
          disabled={!form.name || !form.grievance || form.grievance === grievances[0] || !form.oath}
        >
          Issue my party card →
        </button>
      </form>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq" id="faq">
      <div className="section-head section-head--light">
        <div className="section-head__no">V.</div>
        <div>
          <div className="section-head__eyebrow">— FREQUENTLY DODGED QUESTIONS</div>
          <h2 className="section-head__title">
            The press has questions.<br /><em>We have... responses.</em>
          </h2>
        </div>
      </div>
      <div className="faq__list">
        {FAQS.map((f, i) => (
          <div className={`faq__item ${open === i ? "faq__item--open" : ""}`} key={i}>
            <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)}>
              <span className="faq__no">Q.{String(i + 1).padStart(2, "0")}</span>
              <span className="faq__qtext">{f.q}</span>
              <span className="faq__chev">{open === i ? "—" : "+"}</span>
            </button>
            {open === i && <div className="faq__a"><em>A.</em> {f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__mark"><img src="assets/tumbler.png" alt="" /></div>
          <div>
            <div className="footer__name">Corporate Janta Party</div>
            <div className="footer__tag">कॉर्पोरेट जनता पार्टी · A movement, eventually.</div>
          </div>
        </div>
        <div className="footer__cta">
          <a href="#join" className="btn btn--primary">Join the Party →</a>
        </div>
      </div>

      <div className="footer__cols">
        <div>
          <div className="footer__h">Central Office</div>
          <p>4th Floor, Above the Reliance Trends<br />Andheri East · Mumbai 400069<br />(Use the side entrance, the lift is broken)</p>
        </div>
        <div>
          <div className="footer__h">Press Enquiries</div>
          <p>Send a calendar invite with no agenda.<br />We will reply after Q4 closes.</p>
        </div>
        <div>
          <div className="footer__h">Donations</div>
          <p>Carry-forward leave days · Sodexo coupons (2019+) · Bitter laughter · Old swag</p>
        </div>
      </div>

      <div className="footer__legal">
        <div>© 2026 Corporate Janta Party · A work of satire.</div>
        <div>All rights reserved. Except <em>leave encashment</em>.</div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Ticker />
      <Nav />
      <Hero />
      <StatsBar />
      <Manifesto />
      <Eligibility />
      <JoinForm />
      <FAQ />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
