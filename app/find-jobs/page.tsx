import Link from "next/link";

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

export default function FindJobsPage() {
  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/dashboard">Dashboard</Link><Link href="/find-jobs" aria-current="page">Find Jobs</Link><Link href="/profile">Profile</Link>
          </nav>
          <Link className="nav-cta" href="/login">Start for free <ArrowIcon /></Link>
        </div>
      </header>
      <main className="profile-page">
      <header className="profile-header">
        <div>
          <p className="kicker"><span className="kicker-line" /> Find jobs</p>
          <h1>Find your <em>first match.</em></h1>
          <p className="profile-intro">Search by title and location, and JobPilot scores every role against your profile.</p>
        </div>
      </header>
      <section className="profile-card" aria-labelledby="find-jobs-card-title">
        <p className="card-eyebrow">JOB SEARCH</p>
        <h2 id="find-jobs-card-title">Job search is almost ready.</h2>
        <p>Complete your profile now so your first matches are scored against your real experience and skills.</p>
        <Link className="button button-dark" href="/profile">Complete your profile <ArrowIcon /></Link>
      </section>
      </main>
    </>
  );
}
