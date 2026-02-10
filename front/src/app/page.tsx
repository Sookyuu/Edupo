"use client";

import LawCard from '@/components/LawCard';
import { laws } from '@/libs/laws';

export default function Home() {
    return (
        <main className="container">
            <header className="hero">
                <h1 className="title">Nouvelles Lois Votées</h1>
                <p className="subtitle">
                    Retrouvez les dernières législations adoptées par le Parlement français.
                </p>
            </header>

            <section className="laws-list">
                {laws.map((law) => (
                    <LawCard key={law.id} law={law} />
                ))}
            </section>

            <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .hero {
          text-align: center;
          margin-bottom: 60px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--fr-border);
        }

        .title {
          font-size: 3rem;
          margin-bottom: 16px;
          color: var(--fr-blue);
          font-weight: 800;
        }

        .subtitle {
          font-size: 1.25rem;
          color: var(--fr-text-light);
          max-width: 600px;
          margin: 0 auto;
        }

        .laws-list {
          display: grid;
          gap: 20px;
        }
      `}</style>
        </main>
    );
}