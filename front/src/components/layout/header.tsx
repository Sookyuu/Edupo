"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <Link href="/" className="logo">
                    <span className="logo-blue">Édu</span>
                    <span className="logo-red">po</span>
                </Link>
                <nav className="nav">
                    <Link href="/" className="nav-link">Accueil</Link>
                    <Link href="/dashboard" className="nav-link">Tableau de bord</Link>
                </nav>
            </div>

            <style jsx>{`
        .header {
          background-color: var(--fr-white);
          border-bottom: 1px solid var(--fr-border);
          padding: 16px 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          text-decoration: none;
          letter-spacing: -0.02em;
        }

        .logo-blue {
          color: var(--fr-blue);
        }

        .logo-red {
          color: var(--fr-red);
        }

        .nav {
          display: flex;
          gap: 24px;
        }

        .nav-link {
          color: var(--fr-text);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: var(--fr-blue);
        }
      `}</style>
        </header>
    );
}