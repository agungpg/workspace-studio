import { AccessoryQuantities, FurnishingOption } from '@/src/types/workspace';

type WorkspacePreviewProps = {
  selectedDesk: FurnishingOption;
  selectedChair: FurnishingOption;
  accessoryQuantities: AccessoryQuantities;
};

export function WorkspacePreview({
  selectedDesk,
  selectedChair,
  accessoryQuantities
}: WorkspacePreviewProps) {
  return (
    <div className="relative mt-3 h-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute bottom-4 left-1/2 h-40 w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-100 via-white to-blue-100" />

      <div
        className={`absolute bottom-16 left-1/2 h-24 w-[360px] -translate-x-1/2 rounded-lg border-2 border-amber-800 ${selectedDesk.swatchClassName}`}
      >
        <div className="absolute -bottom-16 left-5 h-16 w-4 rounded-sm bg-amber-800" />
        <div className="absolute -bottom-16 right-5 h-16 w-4 rounded-sm bg-amber-800" />
      </div>

      <div
        className={`absolute bottom-4 left-1/2 h-32 w-28 -translate-x-1/2 rounded-t-[56px] rounded-b-[24px] ${selectedChair.swatchClassName}`}
      />

      {Array.from({ length: accessoryQuantities.monitor }).map((_, index) => (
        <div
          key={`monitor-${index}`}
          className="absolute bottom-40 h-14 w-20 rounded-md border-[3px] border-slate-900 bg-slate-700"
          style={{ left: `${34 + index * 20}%` }}
        >
          <span className="absolute -bottom-3 left-1/2 h-3 w-4 -translate-x-1/2 rounded-b bg-slate-500" />
        </div>
      ))}

      {Array.from({ length: accessoryQuantities.lamp }).map((_, index) => (
        <div
          key={`lamp-${index}`}
          className="absolute bottom-40 h-16 w-4 rounded bg-slate-500 before:absolute before:-left-3 before:-top-1 before:h-4 before:w-9 before:rounded-xl before:bg-slate-400"
          style={{ left: `${72 + index * 7}%` }}
        />
      ))}

      {Array.from({ length: accessoryQuantities.plant }).map((_, index) => (
        <div
          key={`plant-${index}`}
          className="absolute bottom-36 h-8 w-8 rounded bg-amber-800 before:absolute before:-left-2 before:-top-8 before:h-10 before:w-12 before:rounded-full before:bg-green-500"
          style={{ left: `${16 + index * 8}%` }}
        />
      ))}
    </div>
  );
}
