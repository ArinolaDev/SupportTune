export default function ComparisonCard({ index, question, base, finetuned }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 transition">
      <div className="flex items-start gap-3 mb-6">
        <span className="text-xs font-mono text-zinc-600 mt-1">{String(index).padStart(2, "0")}</span>
        <p className="text-zinc-100 font-medium">{question}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">
              Base model
            </span>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed whitespace-pre-line">
            {base}
          </p>
        </div>

        <div className="rounded-xl border border-violet-500/20 bg-violet-500/[0.06] p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-[10px] uppercase tracking-wider text-violet-300 font-mono">
              Fine-tuned
            </span>
          </div>
          <p className="text-sm text-zinc-100 leading-relaxed whitespace-pre-line">
            {finetuned}
          </p>
        </div>
      </div>
    </div>
  );
}