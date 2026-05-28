'use client';

import { useState } from 'react';

import Header from '@/components/builder/Header';
import ProgressSidebar from '@/components/builder/ProgressSidebar';
import {
  type BuilderStepId,
  getStepsForActiveStep,
  NAVIGABLE_STEPS,
} from '@/components/builder/steps';
import CVPreviewPanel from '@/components/preview/CVPreviewPanel';
import Education from '@/components/sections/education/education';
import BackBtn from '@/components/sections/personal/back_btn';
import NextBtn from '@/components/sections/personal/next_btn';
import PersonalInfo from '@/components/sections/personal/personal';
import SkipBtn from '@/components/sections/personal/skip_btn';
import Tips from '@/components/sections/personal/tips';
import CertificationPage from '../sections/certification/certification';
import SkillsPage from '../sections/skills_languages/skillsPage';

export default function BuilderPage() {
  const [activeStep, setActiveStep] = useState<BuilderStepId>('personal');

  const steps = getStepsForActiveStep(activeStep);

  const goToStep = (stepId: string) => {
    if (NAVIGABLE_STEPS.includes(stepId as BuilderStepId)) {
      setActiveStep(stepId as BuilderStepId);
    }
  };

  return (
    <div className="flex min-h-screen flex-col border border-[#D9D9D9] bg-white text-gray-900">
      <Header />

      <div className="flex min-h-0 flex-1 items-stretch gap-6 border border-[#D9D9D9]">
        <aside className="w-[300px] shrink-0 self-stretch border border-[#D9D9D9]">
          <ProgressSidebar steps={steps} onStepSelect={goToStep} />
          <Tips />
        </aside>

        <div className="flex min-h-0 min-w-0 flex-1">
          <main className="builder-form-column min-w-0 flex-[3] overflow-auto border border-[#D9D9D9] px-8 py-8">
            {activeStep === 'personal' ? <PersonalInfo /> : <Education />}

            <div className="mt-6 flex gap-4">
              {activeStep === 'personal' ? (
                <>
                  <BackBtn disabled />
                  <SkipBtn onClick={() => setActiveStep('education')} />
                  <NextBtn onClick={() => setActiveStep('education')} />
                </>
              ) : (
                <>
                  <BackBtn onClick={() => setActiveStep('personal')} />
                  <SkipBtn onClick={() => setActiveStep('education')} />
                  <NextBtn disabled />
                </>
              )}
            </div>
            <CertificationPage/>
            <SkillsPage/>
          </main>

          <CVPreviewPanel />
        </div>
      </div>
    </div>
  );
}
