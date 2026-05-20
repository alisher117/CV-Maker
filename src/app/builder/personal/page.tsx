import Header from '@/components/layouts/builder-shell/Header';
import ProgressSidebar from '@/components/wizard/builder-shell/ProgressSidebar';

export default function PersonalInfoPage() {
  return (
    <div className="flex min-h-screen flex-col border border-[#D9D9D9] bg-white text-gray-900">
      <Header />

      <div className="flex flex-1 items-start gap-6 border border-[#D9D9D9]">
        <aside className="shrink-0 self-stretch border border-[#D9D9D9]">
          <ProgressSidebar />
        </aside>

        <main className="flex-1 border border-[#D9D9D9] px-6 py-8">
          <h1 className="text-2xl font-semibold">Personal Info</h1>
          <p className="mt-1 text-sm text-gray-500">
            TODO: implement per docs/briefs/feat-personal-info.md
          </p>
        </main>
      </div>
    </div>
  );
}
