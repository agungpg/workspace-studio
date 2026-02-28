import { ReactNode } from 'react';

type SelectionSectionProps = {
  title: string;
  helperText: string;
  children: ReactNode;
};

export function SelectionSection({ title, helperText, children }: SelectionSectionProps) {
  return (
    <div className="mt-4">
      <div className="mb-2 flex items-end justify-between">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-xs text-slate-500">{helperText}</span>
      </div>
      <div className="grid grid-cols-2 gap-2">{children}</div>
    </div>
  );
}
