# LeetCode Learning SOP

## Purpose

Build interview-ready algorithm skill while preserving enough daily time for LLM and Agent study.

## Trigger

- The user asks to do LeetCode, algorithm practice, coding interview preparation, or a data structure topic.
- The user says "刷题", "今天的 LeetCode", "算法题", "笔试题", "高频题", or names a problem/topic such as DP, graph, tree, two pointers, or sliding window.
- A daily workflow reaches its LeetCode block and needs topic selection, problem selection, or review.
- The user asks why a solution is wrong, how to optimize it, or how to summarize a reusable pattern.

## Layer 3 Interfaces

- LeetCode work normally stays in Layer 2 and does not trigger Layer 3.
- If the user asks for a formal proof, recurrence derivation, probability analysis, or matrix-style derivation for an algorithm, route through `.claude/layer2/ask-my-question.md`, then load `.claude/layer3/math-derivation-template.md`.
- If the user asks to connect an interview algorithm to a research paper, route through `.claude/layer2/ask-my-question.md`, then load `.claude/layer3/paper-reading-guide.md`.

## Topic Selection

1. Follow the 6-week progression unless the user requests a different topic:
   `数组/字符串 -> 哈希/双指针 -> 链表/栈/队列 -> 树 -> 回溯 -> 图 -> DP -> 贪心 -> 高频综合`.
2. Prefer one primary topic per day.
3. If the user is struggling, reduce problem count and deepen one representative example.
4. If the user is fluent, add a harder variant or ask for a no-hints reimplementation.

## Problem Selection

- Default to `3-5` problems for every new daily task package.
- For a new topic, pick 3 problems: 1 warm-up Easy/Medium, 1 main Medium, and 1 close variant.
- For review or sprint days, pick 4-5 problems around the same reusable pattern.
- Prefer the local Top 100 Liked snapshot in `docs/leetcode/top-100-liked.md` before adding outside problems.
- Prefer high-frequency patterns: sliding window, prefix sum, monotonic stack, BFS/DFS, backtracking pruning, DP state compression.

## Solving Procedure

1. Restate the problem and constraints.
2. Ask for or infer the brute-force approach.
3. Identify the repeated work or invariant.
4. Derive the optimized approach.
5. Write clean code.
6. Test edge cases.
7. Summarize the reusable pattern.

## Review Checklist

- What is the state/invariant?
- Why is the transition or pointer movement correct?
- What edge cases break the naive solution?
- Can the solution be written from memory after 24 hours?
- Does the note include time and space complexity?

## Documentation Output

Record only durable insights in `docs/leetcode/`. Avoid copying full problem statements. Use short paraphrases, pattern summaries, and personal mistakes.

Every daily LeetCode task page should:

- Link back to `docs/leetcode/index.md`.
- Link to the corresponding rows in `docs/leetcode/top-100-liked.md` when possible.
- Include problem links, core ideas, Python solutions, time/space complexity, and edge cases.
- Update the Top 100 snapshot status and solution link when the day page is created.
