import { ReactNode } from 'react';

type OptionCardProps = {
  title: string;
  subtitle: string;
  isSelected: boolean;
  onClick: () => void;
  trailingContent?: ReactNode;
};

export function OptionCard({
  title,
  subtitle,
  isSelected,
  onClick,
  trailingContent
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border p-2 text-left transition ${
        isSelected
          ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-100'
          : 'border-slate-200 hover:border-slate-300'
      }`}
    >
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-slate-500">{subtitle}</p>
      {trailingContent}
    </button>
  );
}
