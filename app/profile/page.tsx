import { LogoutButton } from "./LogoutButton";
import { createInsForgeServerClient } from "@/lib/insforge-server";
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

export default async function ProfilePage() {
  const insforge = await createInsForgeServerClient();
  const { data } = await insforge.auth.getCurrentUser();
  const user = data?.user;

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/dashboard">Dashboard</Link><Link href="/find-jobs">Find Jobs</Link><Link href="/profile">Profile</Link>
          </nav>
          <Link className="nav-cta" href="/login">Start for free <ArrowIcon /></Link>
        </div>
      </header>
      <main className="profile-page">
      <header className="profile-header">
        <div>
          <p className="kicker"><span className="kicker-line" /> Your JobPilot profile</p>
          <h1>Build your <em>next move.</em></h1>
          <p className="profile-intro">Tell JobPilot what you bring to the table so every match feels more relevant.</p>
        </div>
        <LogoutButton className="button button-light" />
      </header>
      <section className="profile-card" aria-labelledby="profile-card-title">
        <p className="card-eyebrow">PROFILE SETUP</p>
        <h2 id="profile-card-title">Welcome{user?.email ? `, ${user.email}` : ""}.</h2>
        <p>Your profile workspace is ready. Add your experience, skills, and preferences here before finding your first match.</p>
        <div className="profile-progress" aria-label="Profile completion: 0 percent">
          <span />
        </div>
        <span className="profile-progress-label">0% complete</span>
      </section>
      </main>
    </>
  );
}