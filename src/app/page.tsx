import Header from '@/components/builder/Header';
import ProgressSidebar from '@/components/builder/ProgressSidebar';
import CVPreviewPanel from '@/components/preview/CVPreviewPanel';
import BackBtn from '@/components/sections/personal/back_btn';
import NextBtn from '@/components/sections/personal/next_btn';
import PersonalInfo from '@/components/sections/personal/personal';
import SkipBtn from '@/components/sections/personal/skip_btn';
import Tips from '@/components/sections/personal/tips';
import Education from '@/components/sections/education/education';

export default function Home() {
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
              <Education/>
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
