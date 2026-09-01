export default function MetricsPanel({ metrics }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
      <div className="grid sm:grid-cols-2 gap-8 mb-10">
        <Detail label="Base model" value={metrics.baseModel} />
        <Detail label="Method" value={metrics.method} />
        <Detail
          label="Trainable parameters"
          value={
            <>
              {metrics.trainableParams}{" "}
              <span className="text-amber-400 font-mono">({metrics.trainablePercent})</span>
            </>
          }
        />
        <Detail
          label="Dataset"
          value={`${metrics.trainExamples} train / ${metrics.evalExamples} eval examples`}
        />
      </div>

      <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-4 font-mono">
        Loss across {metrics.epochs} epochs
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-zinc-500 border-b border-white/10">
              <th className="text-left py-2 pr-6 font-normal">Epoch</th>
              <th className="text-left py-2 pr-6 font-normal">Training loss</th>
              <th className="text-left py-2 font-normal">Validation loss</th>
            </tr>
          </thead>
          <tbody>
            {metrics.lossProgression.map((row) => (
              <tr key={row.epoch} className="border-b border-white/5">
                <td className="py-3 pr-6 text-zinc-400 font-mono">{row.epoch}</td>
                <td className="py-3 pr-6 text-zinc-200 font-mono">{row.trainLoss.toFixed(4)}</td>
                <td className="py-3 text-zinc-200 font-mono">{row.validationLoss.toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5 font-mono">
        {label}
      </div>
      <div className="text-zinc-100">{value}</div>
    </div>
  );
}