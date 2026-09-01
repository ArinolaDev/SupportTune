# Roadmap — SupportTune (Project 2 of 20)

Goal: Fine-tune an open-source LLM to be a specialist in SaaS billing/
subscription customer support (refunds, cancellations, plan changes, failed
payments). Prove it works with a clear before/after comparison against the
base model, then wrap it in a professional demo app.

Legend: `[ ]` not started · `[~]` in progress · `[x]` done

---

## Phase 0 — Colab setup
- [x] Open colab.research.google.com, create a new notebook
- [x] Enable free GPU runtime (T4)
- [x] Install training libraries (transformers, peft, bitsandbytes, trl, datasets)
- [x] Pick and load base model (Qwen2.5-3B-Instruct via QLoRA, 4-bit, ~2GB on GPU)
- [x] Confirm base model loads and can generate a response (before-example captured)

## Phase 1 — Training data
- [x] Define support scenarios (6 scenarios + out-of-scope redirects)
- [x] Build training dataset (67 examples total)
- [x] Format dataset for fine-tuning (Qwen chat template)
- [x] Split into train/eval sets (56 train / 11 eval)

## Phase 2 — Fine-tuning
- [x] Configure LoRA/QLoRA parameters (r=16, alpha=32, ~0.96% trainable params)
- [x] Run training job (3 epochs, ~4 min, loss dropped 2.90 -> 1.23)
- [x] Save adapter weights
- [x] Download adapter weights out of Colab for safekeeping

## Phase 3 — Evaluation
- [x] Pick held-out test questions (5 questions, including 1 off-topic redirect test)
- [x] Run base model on test questions, record responses
- [x] Run fine-tuned model on test questions, record responses
- [x] Write up clear before/after comparison

## Phase 4 — Backend / serving decision
- [x] Scaffold project structure
- [x] Discover Hugging Face Spaces now requires PRO for free Gradio/Docker creation
- [x] Pivot: build hf_space/ as a ready-to-deploy artifact (documented, not live)
- [x] Use the Colab notebook itself as the live, interactive demo
- [x] Remove unused backend/ scaffolding for a clean repo

## Phase 5 — Frontend (React, professional showcase)
- [x] Scaffold React + Vite + Tailwind
- [x] Build training metrics panel with real numbers
- [x] Build before/after comparison cards (6 real examples)
- [x] Custom visual identity distinct from Project 1 (violet/amber, glow effects)
- [x] Link to live Colab notebook as the interactive demo

## Phase 6 — Deployment
- [x] Push to GitHub
- [x] Deploy frontend (Vercel) — https://support-tune.vercel.app
- [x] Make Colab notebook shareable (Anyone with link, Viewer)

## Phase 7 — Polish for portfolio
- [x] Write strong README (problem, real results table, honest hosting explanation)
- [x] Clean repo of unused/dead files
- [ ] Record a short demo video/GIF for the README
- [ ] Push final code to GitHub, tag a release
- [ ] Mark Project 2 complete → move to Project 3

---

## Status: Nearly complete
**Current phase:** Phase 7
**Next action:** Record a short demo GIF, tag a release, then move to Project 3