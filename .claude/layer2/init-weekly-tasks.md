# Init Weekly Tasks SOP

## Purpose

Use this SOP at the beginning of each new study week to create the week's documentation scaffold before daily learning work starts.

## Trigger

- The user says a new week is starting.
- The user asks to initialize this week's docs, tasks, or learning page.
- The current daily task is the first task of a new roadmap week.
- The user says "开启新一周", "初始化本周任务", "创建本周文档", "week N 开始", or similar.
- The user wants a weekly scaffold before starting detailed daily execution.
- The user asks how the current week maps to global Day N or how many learning days remain.

## Layer 3 Interfaces

- If the weekly plan includes paper-reading deliverables, reference `.claude/layer3/paper-reading-guide.md` through `.claude/layer2/algorithm-description-design.md` in the weekly task notes.
- If the weekly plan includes derivation-heavy deliverables, reference `.claude/layer3/math-derivation-template.md` through `.claude/layer2/algorithm-description-design.md` in the weekly task notes.
- If the user asks which weekly task should come first or what to prioritize next, load `.claude/layer3/next-task-recommendation.md` through this workflow.
- Do not directly execute a Layer 3 workflow during weekly setup unless a Layer 2 task in the week explicitly requires it.

## Inputs

- `CLAUDE.md` for project index and collaboration rules.
- `docs/roadmap.md` for the current 6-week plan.
- `.claude/progress.md` for global Day N mapping and remaining days. Create it if missing.
- The previous week's docs and unresolved notes, if they exist.
- The user's latest constraints, such as available days, interview deadlines, or topic priority changes.

## Procedure

1. Identify the target week number and theme from `docs/roadmap.md` or the user's instruction.
2. Read or create `.claude/progress.md`; default to 36 planned learning days unless the user sets a different weekly cadence.
3. Map the target week to global Day N range using `Day N = (week - 1) * planned_days_per_week + day_in_week`.
4. Review the previous week's summary if it exists, especially unfinished derivations, code tasks, LeetCode weak spots, and carry-over Day N items.
5. Create or update the weekly page at `docs/weeks/week-0N.md`, using a two-digit week number such as `week-01`.
6. Add the weekly page to the VitePress sidebar in `docs/.vitepress/config.mts` if it is not already linked.
7. Split the week into daily task placeholders based on the user's available study days.
8. For each day, include global Day N, Week/Day label, one LeetCode focus, one AI/ML/Agent technical focus, and expected output.
9. Add expected outputs for the week: notes, code, experiments, blog pages, or interview summaries.
10. Add a checkpoint section for risks, blockers, and questions to ask the user.
11. Update `.claude/progress.md` with the target week's Day N range and next planned Day N if the week is being started.
12. Run `conda run -n tutorial npm run docs:build` after editing VitePress docs or sidebar.
13. Summarize created files, Day N range, remaining days, and ask whether to commit and push.

## Weekly Page Template

```markdown
# Week 0N: Theme

## Goals

- Goal 1.
- Goal 2.
- Goal 3.

## Schedule

| Global Day | Week Day | LeetCode Focus | Technical Focus | Output |
| --- | --- | --- | --- | --- |
| Day N | Week 0N Day 1 | Topic | Topic | Artifact |
| Day N+1 | Week 0N Day 2 | Topic | Topic | Artifact |
| Day N+2 | Week 0N Day 3 | Topic | Topic | Artifact |
| Day N+3 | Week 0N Day 4 | Topic | Topic | Artifact |
| Day N+4 | Week 0N Day 5 | Topic | Topic | Artifact |
| Day N+5 | Week 0N Day 6 | Topic | Topic | Artifact |

## Deliverables

- Documentation:
- Code:
- Interview Material:

## Open Questions

- Question 1.

## End-Of-Week Review

- Completed:
- Not completed:
- Day N progress:
- Key mistakes:
- Next week's carry-over:
```

## Quality Bar

- The weekly page must be useful before the week starts, not only after it ends.
- Keep tasks realistic for 2-3 hours per day.
- Prefer fewer high-quality deliverables over broad but shallow topic lists.
- Make unfinished work explicit so it can become carry-over instead of silent debt.
- Do not create daily pages unless the user requests more detailed daily tracking.
