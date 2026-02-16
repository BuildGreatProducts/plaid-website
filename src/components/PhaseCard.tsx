export default function PhaseCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="h-full rounded-xl border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05] sm:p-8">
      <span className="mb-4 block font-mono text-sm text-gray-500">
        {number}
      </span>
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-400">{description}</p>
    </div>
  );
}
