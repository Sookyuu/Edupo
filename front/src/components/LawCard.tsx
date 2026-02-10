"use client";

import React from 'react';
import Link from 'next/link';
import { Law } from '@/types';

interface LawCardProps {
    law: Law;
}

const LawCard: React.FC<LawCardProps> = ({ law }) => {
    return (
        <Link href={`/laws/${law.id}`} className="law-card">
            <div className="law-card-content">
                <div className="law-card-header">
                    <span className="law-category">{law.category}</span>
                    <span className="law-date">{law.date}</span>
                </div>
                <h3 className="law-title">{law.title}</h3>
                <p className="law-summary">{law.summary}</p>
                <div className="law-card-footer">
                    <span className="read-more">Lire le détail →</span>
                </div>
            </div>
            <style jsx>{`
        .law-card {
          display: block;
          background: var(--fr-card-bg);
          border: 1px solid var(--fr-border);
          border-radius: 8px; /* Slightly rounded, modern but serious */
          padding: 24px;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
          text-decoration: none;
          color: inherit;
          margin-bottom: 20px;
          position: relative;
          overflow: hidden;
        }

        .law-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* Soft shadow on hover */
          border-color: var(--fr-blue);
        }

        /* Patriotic accent line on the left */
        .law-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: var(--fr-blue);
          opacity: 0; /* Hidden by default */
          transition: opacity 0.2s;
        }
        
        .law-card:hover::before {
          opacity: 1;
        }

        .law-card-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
          color: var(--fr-text-light);
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .law-category {
          font-weight: 600;
          color: var(--fr-blue); /* Distinct category color */
        }

        .law-title {
          font-size: 1.25rem;
          margin: 0 0 12px 0;
          color: var(--fr-text);
          font-weight: 700;
        }

        .law-summary {
          color: var(--fr-text-light);
          font-size: 1rem;
          margin: 0 0 20px 0;
          line-height: 1.6;
        }

        .law-card-footer {
          display: flex;
          justify-content: flex-end;
        }

        .read-more {
          color: var(--fr-red); /* Using the red for the call to action */
          font-weight: 600;
          font-size: 0.9rem;
        }
      `}</style>
        </Link>
    );
};

export default LawCard;
