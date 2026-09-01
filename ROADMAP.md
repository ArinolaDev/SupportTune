# Roadmap — SupportTune (Project 2 of 20)

Goal: Fine-tune an open-source LLM to be a specialist in SaaS billing/
subscription customer support (refunds, cancellations, plan changes, failed
payments). Prove it works with a clear before/after comparison against the
base model, then wrap it in a professional demo app — a live chat interface
plus a side-by-side comparison view.

Legend: `[ ]` not started · `[~]` in progress · `[x]` done

---

## Phase 0 — Colab setup (Google Colab, not VS Code)
- [x] Open colab.research.google.com, create a new notebook
- [x] Enable free GPU runtime (Runtime > Change runtime type > GPU)
- [x] Install training libraries (transformers, peft, bitsandbytes, trl, datasets)
- [x] Pick and load base model (Qwen2.5-3B-Instruct via QLoRA, 4-bit — ~2GB on GPU)
- [x] Confirm base model loads and can generate a response (before-example captured)

## Phase 1 — Training data
- [x] Define the support scenarios to cover (6 scenarios: duplicate charges, refunds, cancellations, plan changes, failed payments, disputes, plus out-of-scope redirects)
- [x] Build/curate a dataset of realistic question + ideal-answer pairs (67 examples total)
- [x] Format dataset for fine-tuning (Qwen chat template format)
- [x] Split into train/eval sets (56 train / 11 eval)

## Phase 2 — Fine-tuning
- [x] Configure LoRA/QLoRA parameters (r=16, alpha=32, ~0.96% trainable params)
- [x] Run training job on Colab GPU (3 epochs, ~4 min, loss dropped 2.90 -> 1.23)
- [x] Save adapter weights
- [x] Download adapter weights out of Colab for safekeeping

## Phase 3 — Evaluation
- [x] Pick a set of held-out test questions (5 questions, including 1 off-topic redirect test)
- [x] Run base model on test questions, record responses
- [x] Run fine-tuned model on same test questions, record responses
- [x] Write up a clear before/after comparison — fine-tuned model consistently shorter, direct, action-oriented vs base model's generic listy answers

## Phase 4 — Backend (VS Code, FastAPI)
- [ ] Scaffold folder structure (this setup.ps1)
- [ ] Set up model serving (loading fine-tuned adapter + base model for comparison)
- [ ] Build /chat endpoint (fine-tuned model responses)
- [ ] Build /compare endpoint (base vs fine-tuned side by side)

## Phase 5 — Frontend (VS Code, React, professional UI)
- [ ] Scaffold React + Vite + Tailwind
- [ ] Build landing/chat interface for the fine-tuned "support assistant"
- [ ] Build a "Before/After" comparison view (base model vs fine-tuned, side by side)
- [ ] Polish: loading states, error states, responsive layout

## Phase 6 — Deployment
- [ ] Host the fine-tuned model (e.g. Hugging Face Inference Endpoint, or bundle into backend if small enough)
- [ ] Deploy backend
- [ ] Deploy frontend
- [ ] End-to-end test on the live deployed link

## Phase 7 — Polish for portfolio
- [ ] Write strong README (problem, training methodology, before/after evidence, live demo link)
- [ ] Add architecture/training doc to docs/architecture.md
- [ ] Record a short demo video/GIF for the README
- [ ] Push final code to GitHub, tag a release
- [ ] Mark Project 2 complete → move to Project 3

---

## Status: Not started
**Current phase:** Phase 4
**Next action:** Scaffold the backend in VS Code and set up model serving