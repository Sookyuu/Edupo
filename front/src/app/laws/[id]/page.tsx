"use client";

import { getLaw } from '@/libs/laws';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function LawDetail({ params }: PageProps) {
    const { id } = use(params);
    const law = getLaw(id);

    if (!law) {
        notFound();
    }

    return (
        <main className="container">
            <Link href="/" className="back-link">
                ← Retour aux lois
            </Link>

            <article className="law-article">
                <header className="law-header">
                    <div className="law-meta">
                        <span className="law-category">{law.category}</span>
                        <span className="separator">•</span>
                        <span className="law-date">Promulguée le {law.date}</span>
                    </div>
                    <h1 className="law-title">{law.title}</h1>
                </header>

                <section className="law-content">
                    <div className="summary-box">
                        <h3>En bref</h3>
                        <p>{law.summary}</p>
                    </div>

                    <div className="details-box">
                        <h3>Ce que dit la loi</h3>
                        <p className="details-text">{law.details}</p>
                    </div>
                </section>
            </article>

            <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 30px;
          color: var(--fr-text-light);
          font-weight: 500;
          transition: color 0.2s;
        }

        .back-link:hover {
          color: var(--fr-blue);
        }

        .law-article {
          background: var(--fr-card-bg);
          padding: 40px;
          border-radius: 8px;
          border: 1px solid var(--fr-border);
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
        }

        .law-header {
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 2px solid var(--fr-background);
        }

        .law-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--fr-text-light);
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .law-category {
          color: var(--fr-blue);
          font-weight: 700;
        }

        .law-title {
          font-size: 2.5rem;
          line-height: 1.2;
          margin: 0;
          color: var(--fr-text);
        }

        .summary-box {
          background-color: rgba(0, 35, 149, 0.05); /* Light fr-blue tint */
          padding: 24px;
          border-radius: 6px;
          margin-bottom: 32px;
          border-left: 4px solid var(--fr-blue);
        }

        .summary-box h3 {
          margin-top: 0;
          font-size: 1.1rem;
          color: var(--fr-blue);
        }

        .details-box h3 {
          font-size: 1.5rem;
          border-bottom: 1px solid var(--fr-border);
          padding-bottom: 10px;
          margin-bottom: 20px;
          color: var(--fr-text);
        }

        .details-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--fr-text);
        }
      `}</style>
        </main>
    );
}
