# Next Task Recommendation SOP

## Purpose

Use this Layer 3 reference to recommend what project task the user should ask for next, based on current project state, roadmap priority, recent Git history, unfinished work, and learning value.

## Layer 2 Trigger Interface

Layer 3 is not a first-entry workflow. Use this SOP only after a Layer 2 workflow decides that next-task recommendation is needed.

- From `.claude/layer2/tell-me-status.md`: trigger when the user asks "告诉我现状", "下一步做什么", or wants a status report with actionable options.
- From `.claude/layer2/git-push-rule.md`: trigger after task completion, cleanup, commit, or push when the user asks what to do next.
- From `.claude/layer2/workflow-daily.md`: trigger at the end of a daily learning block when choosing the next daily task or carry-over task.
- From `.claude/layer2/init-weekly-tasks.md`: trigger when selecting weekly priorities, carry-over work, or the first task of a new week.
- From `.claude/layer2/ask-my-question.md`: trigger when the user asks a broad planning question rather than a narrow conceptual question.

## Inputs

- `.claude/project-summary.md` for current project state.
- `.claude/progress.md` for current Day N, remaining learning days, carry-over items, and pulled-forward tasks.
- `docs/roadmap.md` for planned 6-week progression.
- Recent Git history from `git log --oneline --decorate -5`.
- Current working tree state from `git status --short --branch`.
- The user's latest constraints, including time budget, deadlines, and current focus.

## Recommendation Procedure

1. Identify the current project phase: repository setup, weekly planning, daily learning, technical note, code implementation, paper reading, or cleanup.
2. Check whether the working tree has uncommitted changes that should be handled before starting new work.
3. Read `.claude/progress.md` and include current Day N, Week/Day, remaining days, carry-over items, and pulled-forward tasks in the recommendation context.
4. Compare current docs/code state against `docs/roadmap.md`.
5. Prefer tasks that reduce ambiguity or unlock the next learning session.
6. Produce 2-4 options, each with a short reason, expected output, and estimated effort.
7. Mark one option as recommended when the evidence is strong.
8. If there is a hygiene issue, such as unpushed commits, stale project summary, or stale Day N tracker, include it as a maintenance option.

## Priority Rules

- First priority: protect repository state, commit/push intentional changes, and avoid losing work.
- Second priority: create missing scaffolds that make future daily work smoother.
- Third priority: start or continue the current week's highest-value learning artifact.
- Fourth priority: polish docs or style only after the conceptual and code content is stable.

## Output Template

```markdown
推荐下一步：

- 推荐：Task A。原因：... 输出：... 预计耗时：...
- 备选：Task B。原因：... 输出：... 预计耗时：...
- 备选：Task C。原因：... 输出：... 预计耗时：...

如果你想继续，我建议你直接说：“请执行 Task A”。
```

## Quality Bar

- Do not recommend too many tasks.
- Avoid vague recommendations like "继续学习"; name the exact file, topic, or workflow.
- Prefer one clear next action over an abstract plan.
- If the project has unpushed commits, state that before recommending content-heavy work.
