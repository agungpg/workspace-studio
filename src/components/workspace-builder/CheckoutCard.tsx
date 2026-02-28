type CheckoutCardProps = {
  summaryLines: string[];
  totalPricePerMonth: number;
  rentMessage: string;
  onRent: () => void;
};

export function CheckoutCard({
  summaryLines,
  totalPricePerMonth,
  rentMessage,
  onRent
}: CheckoutCardProps) {
  return (
    <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <h2 className="text-xl font-bold">3) Ready to rent?</h2>
      <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
        {summaryLines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <div className="mt-3 flex items-center justify-between">
        <span>Total / month</span>
        <strong className="text-lg">${totalPricePerMonth}</strong>
      </div>
      <button
        type="button"
        onClick={onRent}
        className="mt-3 w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 font-bold text-white transition hover:brightness-110"
      >
        Rent this setup
      </button>
      {rentMessage ? (
        <p className="mt-3 font-semibold text-green-700">{rentMessage}</p>
      ) : null}
    </div>
  );
}
