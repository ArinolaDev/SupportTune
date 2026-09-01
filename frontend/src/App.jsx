import { evaluationResults, trainingMetrics } from "./data/evaluationResults";
import ComparisonCard from "./components/ComparisonCard";
import MetricsPanel from "./components/MetricsPanel";

const COLAB_LINK = "https://colab.research.google.com/drive/1XA9GOQlvHioLRJZIjiJ00ry80wfx6CJm?usp=sharing";

export default function App() {
  return (
    <div className="min-h-screen bg-[#08070c] text-zinc-100 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      <header className="relative border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-violet-300 mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            LORA FINE-TUNED · QWEN2.5-3B
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-5 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            SupportTune
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto mb-3 text-lg">
            A specialist billing support model, trained from scratch on a
            custom dataset and proven with real before and after evidence.
          </p>
          <p className="text-xs text-zinc-600 max-w-lg mx-auto mb-10 uppercase tracking-wider">
            Demonstration project. Guidance shown is simulated, not real account actions.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href={COLAB_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-500 text-white font-medium hover:bg-violet-400 transition shadow-lg shadow-violet-500/30"
            >
              Run the live notebook
            </a>
            <a
              href="#evidence"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-zinc-300 font-medium hover:bg-white/5 transition"
            >
              See the evidence
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden max-w-3xl mx-auto">
            <StatBlock label="Trainable params" value={trainingMetrics.trainablePercent} />
            <StatBlock label="Training examples" value={trainingMetrics.trainExamples} />
            <StatBlock label="Epochs" value={trainingMetrics.epochs} />
            <StatBlock label="Loss reduction" value="58%" />
          </div>
        </div>
      </header>

      <main className="relative max-w-5xl mx-auto px-6 py-20 flex flex-col gap-20">
        <section>
          <SectionLabel index="01" title="Training run" />
          <MetricsPanel metrics={trainingMetrics} />
        </section>

        <section id="evidence">
          <SectionLabel index="02" title="Before & after" />
          <p className="text-zinc-400 mb-10 max-w-2xl">
            Six held-out questions the model never saw during training,
            answered by the base model and the fine-tuned model side by side.
          </p>

          <div className="flex flex-col gap-6">
            {evaluationResults.map((item, i) => (
              <ComparisonCard
                key={i}
                index={i + 1}
                question={item.question}
                base={item.base}
                finetuned={item.finetuned}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 py-12 text-center">
        <p className="text-sm text-zinc-600">
          Project 2 of a 20-project AI/ML portfolio series.
        </p>
      </footer>
    </div>
  );
}

function StatBlock({ label, value }) {
  return (
    <div className="bg-[#08070c] px-4 py-6 text-center">
      <div className="text-2xl font-bold text-white font-mono">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-zinc-500 mt-1">{label}</div>
    </div>
  );
}

function SectionLabel({ index, title }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-xs font-mono text-violet-400">{index}</span>
      <span className="h-px flex-1 bg-white/10" />
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
    </div>
  );
}