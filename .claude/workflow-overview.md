# Layer 2 / Layer 3 Workflow 总览

## 总原则

这个仓库使用 Progressive Disclosure 记忆结构。`CLAUDE.md` 是入口索引，Layer 2 是可直接触发的任务 workflow，Layer 3 是深度参考模板。Layer 3 不能作为第一入口直接执行，必须由某个 Layer 2 workflow 判断需要后再加载。

## Layer 2: 可直接触发的 workflow

### `.claude/layer2/workflow-daily.md`

触发场景：你说开始今天的学习任务、继续今天的学习、按日常流程推进，或需要同时处理 LeetCode 和 AI/ML/Agent 学习。

调用后会发生什么：先读取 `.claude/progress.md`，明确当前是 `Day N / Total Days`、Week 几 Day 几、还剩多少学习日，再按默认 2-3 小时节奏切分 LeetCode、技术深潜、文档复盘。遇到技术推导或论文阅读时，不直接进 Layer 3，而是先转到 `algorithm-description-design.md` 或 `ask-my-question.md`，再由它们触发 Layer 3。如果连续几天或当天任务提前完成，会主动询问你是否再加做一小部分任务；你同意后，会从下一天计划里抽取一个自洽小任务并标记为并入今天。任务完成后会更新 Day N 进度、剩余天数、carry-over 和 pulled-forward tasks。

产出：当天的学习任务、代码或文档改动、验证结果、下一步或是否提交推送的询问。

### `.claude/layer2/init-weekly-tasks.md`

触发场景：你说开启新一周、初始化本周任务、创建本周文档、week N 开始，或当前任务是某一周的第一天。

调用后会发生什么：读取 `docs/roadmap.md` 和 `.claude/progress.md`，确定周主题、天数安排和全局 Day N 范围，创建或更新 `docs/weeks/week-0N.md`，必要时更新 VitePress sidebar，并把每天拆成 global Day N、Week Day、LeetCode focus、技术 focus 和输出物。

Layer 3 接口：如果一周包含论文精读或公式推导，只在周计划中引用对应 Layer 3，真正执行时仍通过 daily 或 algorithm workflow 进入。

产出：本周文档 scaffold、本周 deliverables、open questions、end-of-week review 占位。

### `.claude/layer2/leetcode-guideline.md`

触发场景：你说刷题、LeetCode、算法题、笔试题、高频题，或点名 DP、图、树、双指针、滑动窗口等题型。

调用后会发生什么：选择当天题型，先暴力再优化，记录不变量、复杂度、边界条件和可复用模板。一般停留在 Layer 2。

Layer 3 接口：只有当你要求形式化证明、递推推导、概率分析，或把面试题连接到论文时，才通过 `ask-my-question.md` 间接触发 math 或 paper Layer 3。

产出：题型总结、解法推导、复杂度分析、必要时更新 `docs/leetcode/`。

### `.claude/layer2/algorithm-description-design.md`

触发场景：你要求介绍、推导、实现或整理一个算法、模型、框架或 Agent pattern，例如最小二乘、梯度下降、MLP、Transformer、CLIP、GPT、RAG、ReAct。

调用后会发生什么：按背景、核心直觉、形式定义、推导或机制、最小实现、应用案例、优缺点、现代视角、参考资料的顺序组织内容。

Layer 3 接口：需要公式推导时触发 `math-derivation-template.md`；依赖原论文、实验或 ablation 时触发 `paper-reading-guide.md`；两者都需要时先读 paper guide，再用 math template 处理具体公式。

产出：结构化技术文档、代码实现计划、参考资料和可复用解释。

### `.claude/layer2/git-push-rule.md`

触发场景：你说提交、推送、commit、push、更新 git 记录、收尾检查、清理过程文件，或一个大任务/当日任务完成。

调用后会发生什么：检查 `git status`、审阅 diff、识别非相关变更、运行相关验证、检查过程文件和生成文件、必要时更新 `.claude/project-summary.md`，然后询问是否提交和推送。提交和推送被视为同步动作：除非你明确要求只做本地提交，否则完成 commit 后要立刻 push，并确认 `main` 与 `origin/main` 对齐。

Layer 3 接口：通常不触发 Layer 3。如果收尾后你问下一步做什么，会通过这个 Layer 2 workflow 触发 `next-task-recommendation.md`。

产出：验证结果、清理建议、commit/push 状态、后续风险。

### `.claude/layer2/tell-me-status.md`

触发场景：你说告诉我现状、现在到哪了、当前进度是什么、总结一下现状，或回到项目后需要快速恢复上下文。

调用后会发生什么：读取 `CLAUDE.md`、`.claude/project-summary.md`、`.claude/progress.md`、最近 Git 提交和当前工作区状态；如果摘要或 Day N tracker 缺失/过期，先创建或更新；然后给出当前 Day N、Week/Day、剩余学习日、项目、文档站点、AI Memory/SOP、Git、风险的简明现状。

Layer 3 接口：如果状态报告需要推荐下一步，会触发 `next-task-recommendation.md`。

产出：清晰的当前状态报告，必要时包含 2-4 个下一步任务选项。

### `.claude/layer2/ask-my-question.md`

触发场景：你问为什么、怎么理解、解释一下、这是什么、这个报错是什么意思，或提出一个概念、数学、代码、论文、系统设计、面试问题。

调用后会发生什么：先判断是否需要追问，再从现有仓库、MCP/官方资料或通用知识中找答案。短答优先；如果问题可复用，会整理到 `docs/questions/`。

Layer 3 接口：涉及公式推导时触发 `math-derivation-template.md`；涉及论文细节时触发 `paper-reading-guide.md`；如果问题是 broad planning，则可触发 `next-task-recommendation.md`。

产出：简明回答、长文解释草稿、是否更新文档和是否提交推送的询问。

### `.claude/layer2/add-more-layer2.md`

触发场景：你说在 Layer 2 添加、新增 SOP、补充 workflow、把这个流程固化，或要求定义未来 AI 协作方式。

调用后会发生什么：判断新内容属于 Layer 2 还是 Layer 3，草拟 SOP，更新 `CLAUDE.md` 索引，并为 Layer 3 文件配置至少一个 Layer 2 入口。

Layer 3 接口：如果新增的是深度参考、模板、理论材料、论文协议或推导协议，应放入 Layer 3，并在相关 Layer 2 中定义触发接口。

产出：新的 SOP 文件、索引更新、触发条件和接口规则。

## Layer 3: 只能由 Layer 2 触发的深度参考

### `.claude/layer3/paper-reading-guide.md`

触发入口：由 `algorithm-description-design.md`、`ask-my-question.md`、`workflow-daily.md` 或 `init-weekly-tasks.md` 判断为论文级任务后加载。

调用后会发生什么：按 metadata、motivation、mechanism、experiment、implementation、critical、interview 七个 pass 阅读论文，避免只看二手总结。

产出：论文笔记、核心方法、实验解读、复现计划、优缺点、后续影响和面试摘要。

### `.claude/layer3/math-derivation-template.md`

触发入口：由 `algorithm-description-design.md`、`ask-my-question.md`、`leetcode-guideline.md` 或 `workflow-daily.md` 判断为公式推导任务后加载。

调用后会发生什么：要求先写目标、符号和 shape，再给出假设、目标函数、逐步推导、维度检查、数值例子、代码映射和常见错误。

产出：可放入 GitHub Pages 的数学推导模板或具体推导文档。

### `.claude/layer3/next-task-recommendation.md`

触发入口：由 `tell-me-status.md`、`git-push-rule.md`、`workflow-daily.md`、`init-weekly-tasks.md` 或 `ask-my-question.md` 判断需要推荐下一步任务后加载。

调用后会发生什么：结合 `.claude/project-summary.md`、`docs/roadmap.md`、最近 Git 记录、当前工作区状态和你的最新约束，判断当前最值得做的 2-4 个任务。

产出：按优先级排序的下一步任务建议，每个建议包含原因、输出物和预计工作量，并给出一个推荐选项。
