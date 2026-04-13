# User Question SOP

## Purpose

Answer user questions clearly while preserving durable learning notes when the answer is important for the 6-week roadmap.

## Trigger

- The user asks a conceptual, mathematical, coding, paper, system design, or interview question.
- The user says "为什么", "怎么理解", "解释一下", "这是什么", "这个报错是什么意思", or "我有个问题".
- The user asks for a short answer that may also deserve a longer reusable note.
- The request is primarily about understanding rather than directly editing code or running an implementation task.

## Layer 3 Interfaces

- Load `.claude/layer3/math-derivation-template.md` when the question requires a durable derivation, proof, gradient/loss calculation, tensor shape explanation, or LaTeX-ready note.
- Load `.claude/layer3/paper-reading-guide.md` when the question is about a named paper, PDF, experiment, ablation, author claim, or paper-to-interview summary.
- Load `.claude/layer3/next-task-recommendation.md` when the question is broad planning, such as "下一步做什么", "我现在应该让你做什么", or "推荐一个任务".
- If the user directly asks for Layer 3 style work, treat the user's request as entering this Layer 2 question workflow first, then load the matching Layer 3 file.

## Procedure

1. Clarify the question if it is ambiguous or high-risk.
2. Identify whether the answer should come from existing repo notes, MCP/local docs, current official sources, or general reasoning.
3. For time-sensitive or fast-moving topics, verify with current authoritative sources before answering.
4. Give a concise direct answer first.
5. If the question is durable, create or update a long-form note under `docs/questions/`.
6. Ask whether the user wants to update the current docs if the answer changes project documentation.
7. Ask whether the user wants to commit and push after a major answer/documentation task.

## Long-Form Note Template

```markdown
# Question

## Short Answer

## Context

## Explanation

## Example

## Common Misunderstandings

## References

## Follow-Up
```

## Answer Style

- Prefer Chinese for user-facing communication, with English technical terms when precise.
- Keep the first answer short enough to be useful immediately.
- Put derivations or deeper discussion in the note when the topic is complex.
- Distinguish known facts, assumptions, and inferences.
