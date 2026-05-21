'use client';

import { forwardRef } from 'react';

import { SAMPLE_CV_DATA } from '@/data/cv-sample';
import type { CVData } from '@/types/cv';

export interface CVDocumentProps {
  /** Omit to use static sample data until form state is wired up. */
  data?: CVData;
}

export const CVDocument = forwardRef<HTMLDivElement, CVDocumentProps>(function CVDocument(
  { data = SAMPLE_CV_DATA },
  ref,
) {
  return (
    <div
      ref={ref}
      className="mx-auto shrink-0 bg-white text-gray-900 shadow-xl ring-1 ring-gray-200/80"
      style={{
        width: '210mm',
        height: '297mm',
        padding: '20mm',
        boxSizing: 'border-box',
      }}
    >
      <header className="border-b pb-4">
        <h1 className="text-3xl font-bold">{data.fullName || 'Your Name'}</h1>
        <p className="text-lg text-gray-600">{data.title}</p>
        <p className="text-sm text-gray-500">
          {[data.email, data.phone].filter(Boolean).join(' · ')}
        </p>
      </header>

      {data.summary && (
        <section className="mt-5">
          <h2 className="mb-1 text-sm font-bold tracking-wide uppercase">Summary</h2>
          <p className="text-sm leading-relaxed">{data.summary}</p>
        </section>
      )}

      <section className="mt-5">
        <h2 className="mb-2 text-sm font-bold tracking-wide uppercase">Experience</h2>
        {data.experience.map((exp, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between">
              <span className="font-semibold">
                {exp.role} — {exp.company}
              </span>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <ul className="ml-5 list-disc text-sm">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-5">
        <h2 className="mb-2 text-sm font-bold tracking-wide uppercase">Skills</h2>
        <p className="text-sm">{data.skills.join(' · ')}</p>
      </section>
    </div>
  );
});

CVDocument.displayName = 'CVDocument';
