# Paper Reading Guide

## Purpose

Use this guide for deep paper analysis such as Transformer, ResNet, CLIP, GPT, ReAct, RAG-related papers, and Agent evaluation papers.

## Layer 2 Trigger Interface

Layer 3 is not a first-entry workflow. Use this guide only after a Layer 2 workflow decides that paper-level analysis is required.

- From `.claude/layer2/algorithm-description-design.md`: trigger when a model/framework explanation depends on a named paper, original architecture paper, experiment table, ablation, or later-influence analysis.
- From `.claude/layer2/ask-my-question.md`: trigger when the user asks to read, summarize, dissect, reproduce, compare, or critique a paper, including requests like "精读论文", "论文阅读", "paper reading", "读一下这篇", or "整理 paper note".
- From `.claude/layer2/workflow-daily.md`: trigger only after the daily technical block has been classified as a paper-reading task by a Layer 2 workflow.
- From `.claude/layer2/init-weekly-tasks.md`: reference this guide when planning a week that contains paper-reading deliverables; execute it later through the relevant daily or algorithm-description workflow.

## Reading Passes

1. Metadata pass: title, authors, year, venue, problem, and why it matters for this roadmap.
2. Motivation pass: what limitation in previous work does the paper target?
3. Mechanism pass: write the core method in symbols and plain language.
4. Experiment pass: identify datasets, baselines, metrics, ablations, and what each table actually proves.
5. Implementation pass: determine the minimum code needed to reproduce the core idea.
6. Critical pass: limitations, assumptions, scaling issues, and what later work changed.
7. Interview pass: compress the paper into a 2-minute explanation and 3 likely follow-up questions.

## Required Output

```markdown
# Paper Title

## One-Sentence Claim

## Why It Was Needed

## Core Method

## Key Equations Or Architecture

## Experiments

## Reimplementation Plan

## Strengths

## Limitations

## Later Influence

## Interview Summary

## References
```

## Paper-Specific Focus

- ResNet: residual mapping, identity shortcut, degradation problem, gradient flow.
- Transformer: scaled dot-product attention, multi-head attention, positional encoding, residual + LayerNorm layout.
- CLIP: contrastive objective, paired image-text data, zero-shot transfer.
- GPT: autoregressive objective, decoder-only architecture, scaling behavior.
- ReAct: reasoning-action loop, tool use traces, failure modes, evaluation tasks.

## Verification

- Use the paper PDF or official project page when possible.
- Do not rely on secondary summaries for equations or experimental claims.
- If a later improvement is discussed, verify it with an authoritative source before writing it as a current fact.
