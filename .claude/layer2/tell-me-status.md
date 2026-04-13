# Tell Me Status SOP

## Purpose

Use this SOP to answer the user's "告诉我现状" request with a concise but complete project state report based on the project summary, Day N progress tracker, recent Git history, current worktree status, and optional next-task recommendations.

## Trigger

- The user says "告诉我现状", "现在到哪了", "当前进度是什么", "项目现在什么状态", "总结一下现状", or similar.
- The user asks what has recently changed and what should happen next.
- The user returns after a break and needs a clean re-entry point into the project.
- The user asks for project state rather than asking for a specific implementation, derivation, or paper-reading task.

## Layer 3 Interfaces

- Load `.claude/layer3/next-task-recommendation.md` when the status answer should include recommended next tasks.
- Use `.claude/layer3/next-task-recommendation.md` if the user asks "下一步做什么", "推荐我接下来让你做什么", or if a status report ends with actionable options.
- Do not load paper-reading or math-derivation Layer 3 files from this workflow unless a recommended next task is accepted and becomes a concrete paper/math task.

## Inputs

- `CLAUDE.md` for project metadata and directory index.
- `.claude/project-summary.md` for the latest maintained snapshot. If it does not exist, create it first.
- `.claude/progress.md` for current Day N, Week/Day mapping, total planned days, and remaining learning days. If it does not exist, create it first.
- Recent Git history from `git log --oneline --decorate -5`.
- Current Git state from `git status --short --branch`.
- `docs/roadmap.md` for learning-plan context when recommending next work.
- `.claude/workflow-overview.md` when the user wants to understand SOP behavior.

## Procedure

1. Read `CLAUDE.md`.
2. Read `.claude/project-summary.md`; if absent, create it from current repo structure, roadmap, and recent Git commits.
3. Read `.claude/progress.md`; if absent, create it with the default six-week plan: `Day 0` setup phase, `Day 1` as Week 1 Day 1, and `Day 36` as the default final learning day.
4. Run `git status --short --branch` and `git log --oneline --decorate -5`.
5. Compare the summary and progress tracker with Git state and identify whether either needs an update.
6. If the summary or Day N tracker is stale because of completed tasks, update it before answering.
7. Prepare a concise status answer with current Day N, week/day mapping, days remaining, current milestone, docs/site state, memory/SOP state, Git state, and blockers.
8. If recommendations are needed, load `.claude/layer3/next-task-recommendation.md` and include 2-4 prioritized next-task options.
9. If any working tree changes exist, clearly say whether they are committed, uncommitted, or only local.
10. Do not commit or push automatically; ask the user if they want that after a major status-summary update.

## Response Template

```markdown
当前现状：

- 项目：
- 学习进度：Day N / Total Days，当前 Week/Day，剩余 X 天。
- 文档站点：
- AI Memory/SOP：
- Git：
- 风险/待确认：

推荐下一步：

- 选项 1：
- 选项 2：
- 选项 3：
```

## Quality Bar

- Keep the answer concrete: include branch, ahead/behind state, and recent commit hashes when useful.
- Distinguish local-only changes from pushed remote changes.
- If recommending next tasks, explain why each option is useful now.
- Avoid long changelog dumps; summarize recent commits by outcome.
