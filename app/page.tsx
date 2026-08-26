import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    number: "01",
    label: "Discover",
    title: "Find roles worth your time",
    description: "Search by title and location or paste a job link. JobPilot scans the market and brings the strongest opportunities into focus.",
  },
  {
    number: "02",
    label: "Understand",
    title: "Know your match before you apply",
    description: "See how your real experience lines up with every role, including the skills that make you a standout and the gaps to prepare for.",
  },
  {
    number: "03",
    label: "Prepare",
    title: "Walk in ready",
    description: "JobPilot researches the company and gives you the context, talking points, and questions you need to apply with confidence.",
  },
];

const features = [
  {
    eyebrow: "01 / AI-POWERED JOB MATCHING",
    title: "Focus on the right roles",
    description: "Stop guessing which jobs are worth applying to. JobPilot scores every role against your actual skills so you focus on the ones that matter.",
    icon: "✦",
  },
  {
    eyebrow: "02 / COMPANY RESEARCH",
    title: "Do your homework, faster",
    description: "Get a sharp read on the company, its product, its culture, and the team behind the role before you spend time applying.",
    icon: "↗",
  },
  {
    eyebrow: "03 / ONE CLEAR WORKSPACE",
    title: "Keep every application moving",
    description: "Your roles, match scores, research, and next steps live together, so the job hunt feels less like a spreadsheet and more like a plan.",
    icon: "▦",
  },
];

function Logo() {
  return (
    <Link className="logo" href="/" aria-label="JobPilot home">
      <span className="logo-mark" aria-hidden="true"><span /><span /><span /></span>
      <span>JobPilot</span>
    </Link>
  );
}

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="nav-shell">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/dashboard">Dashboard</Link><Link href="/find-jobs">Find Jobs</Link><Link href="/profile">Profile</Link>
          </nav>
          <Link className="nav-cta" href="/login">Start for free <ArrowIcon /></Link>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-shell">
          <div className="hero-copy">
            <p className="kicker"><span className="kicker-line" /> Your next move, made clearer</p>
            <h1>Manage your job search <em>with intention.</em></h1>
            <p className="hero-description">JobPilot finds the roles that fit, researches the companies behind them, and gives you everything you need to apply with confidence.</p>
            <div className="hero-actions"><Link className="button button-dark" href="/login">Get started <ArrowIcon /></Link><Link className="button button-light" href="/find-jobs">Find your first match <ArrowIcon /></Link></div>
            <p className="fine-print">Set up your profile, upload your resume, and start finding matches in minutes.</p>
          </div>
          <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
        </div>
      </section>

      <section className="preview-section" aria-label="JobPilot dashboard preview">
        <div className="section-shell">
          <div className="preview-heading"><p className="kicker"><span className="kicker-line" /> A calmer way to apply</p><h2>Everything in one place.</h2><p>See the full picture of your search at a glance, from your strongest matches to the companies worth knowing.</p></div>
          <div className="preview-frame"><div className="preview-window-bar"><span /><span /><span /><strong>jobpilot.ai / dashboard</strong></div><Image src="/images/dashboard-demo.png" alt="JobPilot dashboard showing job matches and activity" width={2400} height={1350} priority /></div>
        </div>
      </section>

      <section className="steps-section" id="how-it-works"><div className="section-shell"><div className="section-intro"><p className="kicker"><span className="kicker-line" /> How it works</p><h2>From searching to<br /><em>standing out.</em></h2></div><div className="steps-grid">{steps.map((step) => <article className="step-card" key={step.number}><span className="step-number">{step.number}</span><p className="card-eyebrow">{step.label}</p><h3>{step.title}</h3><p>{step.description}</p><span className="card-arrow"><ArrowIcon /></span></article>)}</div></div></section>

      <section className="features-section"><div className="section-shell"><div className="feature-heading"><p className="kicker"><span className="kicker-line" /> Built for the search you actually have</p><h2>The parts that make<br /><em>progress feel possible.</em></h2></div><div className="feature-list">{features.map((feature) => <article className="feature-row" key={feature.eyebrow}><span className="feature-icon" aria-hidden="true">{feature.icon}</span><div><p className="card-eyebrow">{feature.eyebrow}</p><h3>{feature.title}</h3><p>{feature.description}</p></div></article>)}</div></div></section>

      <section className="quote-section"><div className="quote-shell"><p className="quote-mark">“</p><blockquote>JobPilot helped me stop applying everywhere and start applying where I actually belonged.</blockquote><div className="quote-person"><span className="avatar">TW</span><span><strong>Tom Wilson</strong><small>Junior Developer</small></span></div></div></section>

      <section className="final-cta-section"><div className="final-cta-shell"><div><p className="kicker kicker-on-dark"><span className="kicker-line" /> Ready when you are</p><h2>Make your next move<br /><em>your best one yet.</em></h2><p>Set up your profile and find the roles that fit your future.</p></div><Link className="button button-pale" href="/login">Get started <ArrowIcon /></Link></div></section>

      <footer className="site-footer"><div className="footer-shell"><Logo /><p>Less noise. Better moves.</p><div className="footer-links"><Link href="/dashboard">Dashboard</Link><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link></div><small>© 2026 JobPilot. All rights reserved.</small></div></footer>
    </main>
  );
}