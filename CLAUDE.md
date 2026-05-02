# CLAUDE.md

## Project Metadata

- Project: The Agent Odyssey
- Goal: Six-week intensive learning and coding journey for LLM and Agent architecture internship preparation.
- Public artifact: GitHub Pages documentation powered by VitePress.
- Target repository: `git@github.com:ZhengtongDu/The-Agent-Odyssey.git`
- Local environment: use the `tutorial` conda environment for Node/VitePress work unless a task explicitly says otherwise.

## Collaboration Preferences

- Always read this file first, then dynamically read Layer 2/3 files based on the specific task using file-reading tools.
- 和我交流的时候尽量用中文，专业名词可以使用英文。
- 自己思考以及完成任务的过程中尽量用英语。
- Prefer first-principles reasoning: define the problem, derive the math, implement the core, then summarize tradeoffs.
- Keep notes structured for GitHub Pages reuse. Avoid dumping raw chat transcripts into final docs without editing.
- 每次完成一个大任务或当日任务后，询问我是否需要提交并推送修改。
- 每次创建完某一天的任务包后，直接提交并推送，方便我在线阅读和完成。
- 创建完某一天的任务并推送后，不要默认该天已经完成；只有我明确反馈完成后，才推进到下一天或添加更多任务。
- 在讲解或安排 LeetCode/Python 题解时，默认用户已经理解具体算法，但不熟悉 Python 语法；每次都先列出本题可能用到的 Python 功能、语法、标准库和常见写法，再给代码或题解。

## Directory Index

Memory references:

- `.claude/project-summary.md`: Current project snapshot used by status reporting workflows.
- `.claude/progress.md`: Canonical Day N progress tracker for current learning day, total planned days, and remaining days.
- `.claude/workflow-overview.md`: Chinese overview of all Layer 2/3 workflows and what happens when each SOP is invoked.

Layer 3 usage rule:

- Layer 3 files are deep references, not first-entry workflows. Always select a Layer 2 workflow first, then load the matching Layer 3 file through that Layer 2 workflow's interface when the task requires deeper paper reading, math derivation, or next-task recommendation.

Layer 2 workflows:

- `.claude/layer2/workflow-daily.md`: Daily learning task SOP.
- `.claude/layer2/init-weekly-tasks.md`: SOP for starting a new weekly documentation section.
- `.claude/layer2/leetcode-guideline.md`: Daily LeetCode topic, problem selection, and review SOP.
- `.claude/layer2/technical-learning-sop.md`: Daily AI/ML/Agent technical learning SOP for textbook-level notes.
- `.claude/layer2/algorithm-description-design.md`: SOP for introducing a new algorithm, model, or framework.
- `.claude/layer2/git-push-rule.md`: Post-task check, cleanup, commit, and push SOP.
- `.claude/layer2/tell-me-status.md`: SOP for answering "告诉我现状" with project summary, recent Git history, and optional next-task recommendations.
- `.claude/layer2/ask-my-question.md`: SOP for handling user questions and long-form answer notes.
- `.claude/layer2/add-more-layer2.md`: SOP for adding new Layer 2 workflows.

Layer 3 deep references:

- `.claude/layer3/paper-reading-guide.md`: Paper reading protocol.
- `.claude/layer3/math-derivation-template.md`: ML formula derivation template.
- `.claude/layer3/next-task-recommendation.md`: Recommendation protocol for choosing the next useful project task.

Project content:

- `docs/`: VitePress GitHub Pages documentation.
- `src/`: Code implementations for algorithms, models, and Agent experiments.
- `大模型Agent实习六周学习规划---Gemini.md`: Source planning context for the 6-week roadmap.
