# Init Weekly Tasks SOP

## Purpose

Use this SOP at the beginning of each new study week to create the week's documentation scaffold before daily learning work starts.

## Trigger

- The user says a new week is starting.
- The user asks to initialize this week's docs, tasks, or learning page.
- The current daily task is the first task of a new roadmap week.
- The user says "开启新一周", "初始化本周任务", "创建本周文档", "week N 开始", or similar.
- The user wants a weekly scaffold before starting detailed daily execution.

## Layer 3 Interfaces

- If the weekly plan includes paper-reading deliverables, reference `.claude/layer3/paper-reading-guide.md` through `.claude/layer2/algorithm-description-design.md` in the weekly task notes.
- If the weekly plan includes derivation-heavy deliverables, reference `.claude/layer3/math-derivation-template.md` through `.claude/layer2/algorithm-description-design.md` in the weekly task notes.
- Do not directly execute a Layer 3 workflow during weekly setup unless a Layer 2 task in the week explicitly requires it.

## Inputs

- `CLAUDE.md` for project index and collaboration rules.
- `docs/roadmap.md` for the current 6-week plan.
- The previous week's docs and unresolved notes, if they exist.
- The user's latest constraints, such as available days, interview deadlines, or topic priority changes.

## Procedure

1. Identify the target week number and theme from `docs/roadmap.md` or the user's instruction.
2. Review the previous week's summary if it exists, especially unfinished derivations, code tasks, and LeetCode weak spots.
3. Create or update the weekly page at `docs/weeks/week-0N.md`, using a two-digit week number such as `week-01`.
4. Add the weekly page to the VitePress sidebar in `docs/.vitepress/config.mts` if it is not already linked.
5. Split the week into daily task placeholders based on the user's available study days.
6. For each day, include one LeetCode focus and one AI/ML/Agent technical focus.
7. Add expected outputs for the week: notes, code, experiments, blog pages, or interview summaries.
8. Add a checkpoint section for risks, blockers, and questions to ask the user.
9. Run `conda run -n tutorial npm run docs:build` after editing VitePress docs or sidebar.
10. Summarize created files and ask whether to commit and push.

## Weekly Page Template

```markdown
# Week 0N: Theme

## Goals

- Goal 1.
- Goal 2.
- Goal 3.

## Schedule

| Day | LeetCode Focus | Technical Focus | Output |
| --- | --- | --- | --- |
| Day 1 | Topic | Topic | Artifact |
| Day 2 | Topic | Topic | Artifact |
| Day 3 | Topic | Topic | Artifact |
| Day 4 | Topic | Topic | Artifact |
| Day 5 | Topic | Topic | Artifact |
| Day 6 | Topic | Topic | Artifact |

## Deliverables

- Documentation:
- Code:
- Interview Material:

## Open Questions

- Question 1.

## End-Of-Week Review

- Completed:
- Not completed:
- Key mistakes:
- Next week's carry-over:
```

## Quality Bar

- The weekly page must be useful before the week starts, not only after it ends.
- Keep tasks realistic for 2-3 hours per day.
- Prefer fewer high-quality deliverables over broad but shallow topic lists.
- Make unfinished work explicit so it can become carry-over instead of silent debt.
- Do not create daily pages unless the user requests more detailed daily tracking.
