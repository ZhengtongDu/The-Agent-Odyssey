# Daily Learning Workflow SOP

## Purpose

Use this SOP for each 2-3 hour daily learning block during the 6-week LLM and Agent preparation plan.

## Default Time Split

- LeetCode: 45-60 minutes.
- AI/ML technical deep dive: 75-100 minutes.
- Documentation and reflection: 15-30 minutes.

## Procedure

1. Read `CLAUDE.md` and this workflow.
2. Identify the current week/day topic from `docs/roadmap.md` or the user's latest instruction.
3. Start with LeetCode using `.claude/layer2/leetcode-guideline.md`.
4. For the technical topic, use `.claude/layer2/algorithm-description-design.md` when deriving an algorithm/model.
5. Produce one concrete artifact: code in `src/`, a note under `docs/`, or both.
6. Update the GitHub Pages docs only after the idea is technically checked.
7. End by summarizing what changed, what was verified, and what remains unclear.
8. Ask whether the user wants to commit and push changes after a major task or daily task.

## Quality Bar

- Every math note must define symbols and tensor shapes before equations become dense.
- Every implementation note must include a minimal runnable path and expected behavior.
- Every Agent/system note must include failure modes, evaluation signals, and logging/observability considerations.
- Do not over-optimize styling before the conceptual note and code are correct.

## Daily Output Template

```markdown
# YYYY-MM-DD Daily Log

## Topic

## LeetCode

## Technical Work

## Key Derivation Or Implementation Detail

## Verification

## Next Step
```
