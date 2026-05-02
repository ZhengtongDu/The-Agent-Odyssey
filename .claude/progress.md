# Progress Tracker

## Day N Definition

- Global Day N is the cumulative learning-day counter across the whole six-week plan.
- Setup and repository initialization are `Day 0`.
- Default total learning days: `36` (`6 weeks * 6 planned learning days per week`).
- Default mapping: `Day N = (week - 1) * 6 + day_in_week`.
- If the cadence changes to 5 learning days per week, update `planned_days_per_week`, `total_planned_days`, and week/day mappings here.

## Current Progress

- Current phase: Week 1 is initialized. Day 1 LeetCode has been confirmed completed by the user, and the Day 2 LeetCode page is prepared. Day 1 technical learning is still not confirmed completed.
- Current global day: `Day 1`.
- Current week/day: Week 1 Day 1 active for technical learning, not yet confirmed fully completed.
- Next learning day: `Day 1`, Week 1 Day 1 technical block; next LeetCode block is `Day 2`.
- Total planned learning days: `36`.
- Completed learning days: `0`.
- Remaining learning days: `36`.

## Day Mapping

| Week | Global Day Range | Theme |
| --- | --- | --- |
| Week 1 | Day 1-6 | Foundations: optimization to neural networks |
| Week 2 | Day 7-12 | CV basics and sequence models |
| Week 3 | Day 13-18 | Transformer deep dive |
| Week 4 | Day 19-24 | LLM evolution and multimodal learning |
| Week 5 | Day 25-30 | Agent architecture and application practice |
| Week 6 | Day 31-36 | Complex Agent systems and interview sprint |

## Carry-Over

- Day 1 technical learning remains to be confirmed before counting the whole learning day as completed.

## Pulled-Forward Tasks

- None yet.

## Update Rules

- Update this file after creating or completing a daily learning task.
- When a Day N package is created and pushed for the user, mark that day as active/prepared but do not increment completed learning days.
- Only after the user explicitly confirms Day N is completed should you increment completed learning days and advance the next learning day.
- Record the completed Day N, next Day N, remaining days, carry-over items, and pulled-forward tasks.
- Use this file when answering "告诉我现状" or when initializing a new weekly task page.
