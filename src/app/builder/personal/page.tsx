import Header from '@/components/layouts/builder-shell/Header';
import CVPreviewPanel from '@/components/preview/CVPreviewPanel';
import BackBtn from '@/components/shared/personal/back_btn';
import NextBtn from '@/components/shared/personal/next_btn';
import PersonalInfo from '@/components/shared/personal/personal';
import SkipBtn from '@/components/shared/personal/skip_btn';
import Tips from '@/components/shared/personal/tips';
import ProgressSidebar from '@/components/wizard/builder-shell/ProgressSidebar';

export default function PersonalInfoPage() {
  return (
    <div className="flex min-h-screen flex-col border border-[#D9D9D9] bg-white text-gray-900">
      <Header />

      <div className="flex min-h-0 flex-1 items-stretch gap-6 border border-[#D9D9D9]">
        <aside className="w-[300px] shrink-0 self-stretch border border-[#D9D9D9]">
          <ProgressSidebar />
          <Tips />
        </aside>

        <div className="flex min-h-0 min-w-0 flex-1">
          <main className="builder-form-column min-w-0 flex-[3] overflow-auto border border-[#D9D9D9] px-8 py-8">
            <div className="mt-6">
              <PersonalInfo />
            </div>

            <div className="mt-6 flex gap-4">
              <BackBtn />
              <SkipBtn />
              <NextBtn />
            </div>
          </main>

          <CVPreviewPanel />
        </div>
      </div>
    </div>
  );
}
