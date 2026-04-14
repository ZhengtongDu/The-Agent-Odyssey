# Project Summary

## Snapshot

- Date: 2026-04-14
- Project: The Agent Odyssey
- Goal: Build a six-week LLM and Agent architecture learning/code/documentation system for internship preparation.
- Site stack: VitePress with `markdown-it-mathjax3`, deployed through GitHub Actions to GitHub Pages.
- Local environment: use the `tutorial` conda environment for Node/VitePress commands.
- Remote: `git@github.com:ZhengtongDu/The-Agent-Odyssey.git`

## Current State

- VitePress project is initialized under `docs/`.
- GitHub Pages workflow exists at `.github/workflows/deploy.yml`.
- Progressive Disclosure AI memory exists under `CLAUDE.md`, `.claude/layer2/`, and `.claude/layer3/`.
- Day N progress is tracked in `.claude/progress.md`; the Day 1 task package has been created and pushed, but Day 1 is not yet counted as completed until the user confirms completion.
- Week 1 and Day 1 docs have been initialized under `docs/weeks/`, `docs/notes/week-01/`, and `docs/leetcode/`.
- LeetCode practice now has a dedicated collection page, a Top 100 Liked snapshot, and a Day 1 Arrays/Hash page with 4 Python solutions.
- Site navigation is organized around 总览、周计划、日计划、LeetCode计划、技术学习计划.
- Daily technical learning now has a dedicated Layer 2 SOP and Day 1 has been expanded into a textbook-level least-squares and gradient-descent chapter.
- A NumPy linear regression reference implementation exists at `src/week01/linear_regression_numpy.py`.
- `init-guide.html` was removed as a generated/process HTML artifact in commit `2c2445b`.
- Root process source files still include `init-guide.md` and `大模型Agent实习六周学习规划---Gemini.md`.

## GitHub Pages Status

- Last checked: 2026-04-13 20:08 CST.
- Site URL `https://zhengtongdu.github.io/The-Agent-Odyssey/` returns `HTTP/2 200`.
- Latest deployment run `24342459675` for commit `cf512e2` completed successfully.
- Build job passed `actions/configure-pages@v5`, dependency install, VitePress build, and Pages artifact upload.
- Deploy job passed `actions/deploy-pages@v4`.
- Earlier failures were caused by Pages not being configured for GitHub Actions yet; after the repository Pages setting was updated and an empty trigger commit was pushed, deployment succeeded.

## Recent Git History

- `cf512e2 trigger pages deployment`: empty commit used to retrigger the GitHub Pages workflow after Pages settings were updated.
- `f1308d6 add status and progress sop memory`: added status-reporting SOP, Day N progress tracker, workflow overview, and next-task recommendation Layer 3 reference.
- `2c2445b expand sop trigger interfaces`: added `init-weekly-tasks`, expanded Layer 2/3 trigger interfaces, and removed generated `init-guide.html`.
- `1a2819a configure github pages workflow`: added `actions/configure-pages` to the Pages workflow and pushed to `origin/main`.
- `904267e initialize vitepress learning site`: initial VitePress site, Layer 2/3 memory structure, and GitHub Pages workflow.

## Current SOP Map

- Layer 2 handles entry workflows and task-level behavior.
- Layer 3 handles deep references and must be triggered through Layer 2 interfaces.
- Current Layer 3 references cover paper reading, math derivation, and next-task recommendation.
- Commit/push behavior should be synchronized: approved Git snapshots should be committed and pushed in the same task, ending with local `main` aligned to `origin/main`.

## Known Next Needs

- Keep `.claude/project-summary.md` updated after major tasks or commits.
- Wait for the user to work through Day 1 online, answer questions as needed, then either mark Day 1 completed or create the Day 2 task package.
- Future daily LeetCode task packages should use 3-5 problems from `docs/leetcode/top-100-liked.md` and link back to `docs/leetcode/`.
- Future daily technical task packages should follow `.claude/layer2/technical-learning-sop.md` and link through `docs/technical/` plus `docs/days/`.
