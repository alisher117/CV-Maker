import '../../globals.css';
import Header from '@/components/layouts/builder-shell/Header';
import ProgressSidebar from '@/components/wizard/builder-shell/ProgressSidebar';
import PersonalInfo from '@/components/shared/personal/personal';
import NextBtn from '@/components/shared/personal/next_btn';
import SkipBtn from '@/components/shared/personal/skip_btn';
import Tips from '@/components/shared/personal/tips';
import BackBtn from '@/components/shared/personal/back_btn';
import DownloadHeader from '@/components/shared/review_download/download_header';

export default function PersonalInfoPage() {
  return (
    <div className="flex min-h-screen flex-col border border-[#D9D9D9] bg-white text-gray-900">
      <Header />

      <div className="flex flex-1 items-start gap-6 border border-[#D9D9D9]">
        <aside className="shrink-0 self-stretch border border-[#D9D9D9]">
          <ProgressSidebar />
          <Tips />
        </aside>

        <main className="flex-1 border border-[#D9D9D9] px-6 py-8">
          <div className="mt-6">
            <PersonalInfo />
          </div>

          <div className="mt-6 flex gap-4">
            <BackBtn />
            <SkipBtn />
            <NextBtn />
          </div>
        </main>
      </div>
    </div>
  );
}