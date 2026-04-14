# Daily Learning Workflow SOP

## Purpose

Use this SOP for each 2-3 hour daily learning block during the 6-week LLM and Agent preparation plan.

## Trigger

- The user says to start today's learning task, daily task, or current day plan.
- The user says "开始今天的任务", "继续今天的学习", "按日常流程推进", or similar.
- The user asks for a combined daily block that includes LeetCode plus AI/ML/Agent study.
- The task is not a one-off question but a full daily learning session with outputs to update.
- The user references "Day N", "第 N 天", "今天是第几天", or asks to continue from the current tracked learning day.

## Layer 3 Interfaces

- For the daily technical block, use `.claude/layer2/technical-learning-sop.md` as the primary content-quality workflow.
- If the daily technical block requires paper-level analysis, enter through `.claude/layer2/technical-learning-sop.md`, then load `.claude/layer3/paper-reading-guide.md`.
- If the daily technical block requires a durable formula derivation, enter through `.claude/layer2/technical-learning-sop.md`, then load `.claude/layer3/math-derivation-template.md`.
- If the daily block is complete and the user asks what to do next, load `.claude/layer3/next-task-recommendation.md` to choose a carry-over or next-day task.
- Do not load Layer 3 directly from the daily workflow without first identifying the Layer 2 task type.

## Default Time Split

- LeetCode: 45-60 minutes.
- AI/ML technical deep dive: 75-100 minutes.
- Documentation and reflection: 15-30 minutes.

## Procedure

1. Read `CLAUDE.md` and this workflow.
2. Read `.claude/progress.md` to identify current Day N, Week/Day mapping, total planned days, and remaining days. If it is missing, create it before starting the daily task.
3. Identify the current week/day topic from `docs/roadmap.md`, `.claude/progress.md`, or the user's latest instruction.
4. State the Day N context before starting, for example `Day 7 / 36, Week 2 Day 1, 29 learning days remaining`.
5. Start with LeetCode using `.claude/layer2/leetcode-guideline.md`.
6. For the technical topic, use `.claude/layer2/technical-learning-sop.md` to produce a textbook-level daily technical note.
7. Produce one concrete artifact: code in `src/`, a note under `docs/`, or both.
8. Update the GitHub Pages docs only after the idea is technically checked.
9. If the current work is creating a Day N task package for the user to study later, push it immediately after verification so it is available online.
10. When only the task package has been created, update `.claude/progress.md` to mark the day as active/prepared but not completed.
11. Only after the user explicitly confirms that Day N is finished should `.claude/progress.md` advance completed learning days and move the active day to the next day.
12. If several days of learning tasks have been completed ahead of schedule or the current day finishes with meaningful time/energy left, proactively ask whether the user wants to add another small task today.
13. When the user agrees to add more work, extract one small, self-contained task from the next day's plan and explicitly mark it as pulled into today's task list.
14. End by summarizing what changed, what was verified, current Day N progress, whether the day is only prepared or actually completed, what was pulled forward from a future day if anything, and what remains unclear.
15. Ask whether the user wants to commit and push changes after a major task or daily task. If the current task is day-package creation, default to commit-and-push immediately.

## Quality Bar

- Every math note must define symbols and tensor shapes before equations become dense.
- Every implementation note must include a minimal runnable path and expected behavior.
- Every Agent/system note must include failure modes, evaluation signals, and logging/observability considerations.
- Do not over-optimize styling before the conceptual note and code are correct.

## Daily Output Template

```markdown
# YYYY-MM-DD Daily Log

## Topic

## Day N

## LeetCode

## Technical Work

## Key Derivation Or Implementation Detail

## Verification

## Progress Update

## Next Step
```
