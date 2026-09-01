# SupportTune

**A fine-tuned LLM specialized in SaaS billing and subscription customer support, trained with LoRA on a custom dataset, proven with real before/after evidence.**

🔗 **Live showcase:** _add your Vercel URL here_
🔗 **Run the training + inference live:** [Open in Colab](https://colab.research.google.com/drive/1XA9GOQlvHioLRJZIjiJ00ry80wfx6CJm?usp=sharing)

> This is a demonstration project. Responses shown are simulated guidance, not real account actions.

## The problem

Most AI portfolio projects call an existing LLM API and stop there. This
project goes a level deeper: it actually **fine-tunes** an open-source
model's weights on a custom dataset, using LoRA, to specialize its behavior
for one domain, then proves the fine-tuning worked with real before/after
comparisons on questions the model never saw during training.

## What it does

Starting from **Qwen2.5-3B-Instruct** (a general-purpose open-source LLM),
the model is fine-tuned on 67 custom examples covering:

- Duplicate/incorrect charges
- Refund requests
- Cancellations
- Plan upgrades and downgrades
- Failed payments
- Billing disputes
- Graceful redirects for off-topic questions

After training, the fine-tuned model responds to billing questions directly
and specifically, rather than the base model's generic, list-heavy,
disclaimer-laden answers.

## Real results

| Metric | Value |
|---|---|
| Base model | Qwen2.5-3B-Instruct |
| Fine-tuning method | LoRA (QLoRA, 4-bit) |
| Trainable parameters | 29,933,568 (0.96% of total) |
| Training examples | 56 train / 11 eval |
| Training loss | 2.90 → 1.23 across 3 epochs |
| Validation loss | 1.63 → 1.30 across 3 epochs |

See the full before/after comparisons on the [live showcase](#) or in
[`training/eval/evaluation_results.json`](training/eval/evaluation_results.json).

## Tech stack

| Layer | Choice |
|---|---|
| Base model | Qwen2.5-3B-Instruct |
| Fine-tuning | LoRA/QLoRA via PEFT, TRL, bitsandbytes |
| Training environment | Google Colab (free T4 GPU) |
| Frontend | React, Vite, Tailwind CSS |
| Deployment | Vercel (frontend), Google Colab (live model) |

## A note on hosting

Hosting a fine-tuned LLM for free, 24/7 inference is a genuinely hard
constraint. Hugging Face Spaces (the natural free hosting choice) changed
their policy during this project's development to require a paid PRO plan
for new Gradio/Docker Spaces. Rather than pay for hosting on a portfolio
project, the live, interactive demo runs as a public Colab notebook instead
— anyone can open it and run the full training and inference pipeline
themselves, which is arguably more transparent than a hidden API would be.

A ready-to-deploy Hugging Face Space (using free ZeroGPU) is included in
[`hf_space/`](hf_space/) for anyone with HF PRO who wants a permanently
hosted chat interface.

## Project structure

```
supporttune/
  training/          # Dataset, adapter weights, and evaluation results
  hf_space/           # Ready-to-deploy Gradio app (see hf_space/README.md)
  frontend/          # React showcase of training metrics and before/after results
```

## Running the frontend locally

```bash
cd frontend
npm install
npm run dev
```

## Running the fine-tuning yourself

Open [the Colab notebook](https://colab.research.google.com/drive/1XA9GOQlvHioLRJZIjiJ00ry80wfx6CJm?usp=sharing)
and run all cells (Runtime > Run all). Training takes about 4 minutes on
a free T4 GPU.

## Project status

Project 2 of a 20-project AI/ML portfolio series. See
[`ROADMAP.md`](ROADMAP.md) for full build history.