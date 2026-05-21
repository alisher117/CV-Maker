import { CVDocument } from '@/components/preview/CVDocument';

/** Readable preview — smaller than full page, larger than thumbnail. */
const PREVIEW_SCALE = 0.68;

export default function CVPreviewPanel() {
  return (
    <aside
      aria-label="CV preview"
      className="flex shrink-0 flex-col border-l border-gray-200 bg-gray-100"
      style={{ width: `calc(210mm * ${PREVIEW_SCALE} + 2.5rem)` }}
    >
      <p className="px-4 pt-4 pb-2 text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
        Preview · A4
      </p>
      <div className="flex flex-1 justify-center overflow-y-auto overflow-x-hidden px-4 pb-6">
        <div
          className="relative shrink-0"
          style={{
            width: `calc(210mm * ${PREVIEW_SCALE})`,
            height: `calc(297mm * ${PREVIEW_SCALE})`,
          }}
        >
          <div
            className="absolute top-0 left-0 origin-top-left"
            style={{
              transform: `scale(${PREVIEW_SCALE})`,
              width: '210mm',
              height: '297mm',
            }}
          >
            <CVDocument />
          </div>
        </div>
      </div>
    </aside>
  );
}
