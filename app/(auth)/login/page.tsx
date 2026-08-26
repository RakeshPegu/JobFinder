import Link from "next/link";
import { OAuthButtons } from "./OAuthButtons";

type LoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

function Logo() {
  return (
    <Link className="logo" href="/" aria-label="JobPilot home">
      <span className="logo-mark" aria-hidden="true"><span /><span /><span /></span>
      <span>JobPilot</span>
    </Link>
  );
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { error } = await searchParams;

  return (
    <main className="auth-page">
      <div className="auth-decoration auth-decoration-one" aria-hidden="true" />
      <div className="auth-decoration auth-decoration-two" aria-hidden="true" />
      <header className="auth-header"><Logo /></header>
      <section className="auth-shell" aria-labelledby="login-title">
        <div className="auth-copy">
          <p className="kicker"><span className="kicker-line" /> Your next move, made clearer</p>
          <h1 id="login-title">Make room for a <em>better search.</em></h1>
          <p>Sign in to bring your roles, matches, and company research into one focused workspace.</p>
        </div>
        <div className="auth-panel">
          <div className="auth-panel-heading"><p className="card-eyebrow">WELCOME TO JOBPILOT</p><h2>Sign in to continue</h2><p>Use one of your accounts to get started.</p></div>
          {error ? <p className="auth-error" role="alert">We couldn&apos;t complete that sign in. Please try again.</p> : null}
          <OAuthButtons />
          <p className="auth-note">By continuing, you agree to use JobPilot for your own job search.</p>
        </div>
      </section>
    </main>
  );
}