# Role & Context
You are an expert AI Architect and Principal Engineer. I am embarking on a 6-week intensive learning and coding journey to master LLMs and Agent Architectures from first principles (math derivations -> PyTorch implementations -> Agent frameworks). 

My goal for this session is to initialize the repository, set up a static site generator for GitHub Pages documentation, and establish a highly structured, scalable AI Context/Memory system.

## Inputs
- **Target GitHub Repo URL:** git@github.com:ZhengtongDu/The-Agent-Odyssey.git
- **Project Background & 6-Week Plan:** /Users/duzhengtong/work/theAgentOdyssey/大模型Agent实习六周学习规划---Gemini.md

---

# Task 1: Initialize Project & GitHub Pages
Please scaffold the repository for documentation and code.(本地需要在tutorial这个conda环境下配置)
1. Initialize a Node.js project and install `VitePress` (It is highly recommended for tech blogs requiring LaTeX math formulas and code blocks).
2. Scaffold the basic VitePress directory structure (`docs/`).
3. Configure the VitePress config file to support LaTeX (markdown-it-mathjax3 or similar) and set the `base` path correctly for GitHub Pages deployment.
4. Create the `.github/workflows/deploy.yml` file to automate the deployment to GitHub Pages via GitHub Actions.

---

# Task 2: Implement "Progressive Disclosure" AI Memory Architecture
To keep your context window clean and efficient during our 6-week journey, we will strictly follow a "Progressive Disclosure" design philosophy for your memory. DO NOT put all rules in one file. 

Please create the following directory structure and files to implement this 3-Layer Memory Architecture:

### Layer 1 (Index & Metadata): `CLAUDE.md` 
Create a `CLAUDE.md` file in the root directory. This is the **Lightweight Index**. 
- It must ONLY contain high-level project metadata, my personal coding style preferences, and a strict "Directory Index" pointing to Layer 2 and Layer 3 files.
- It should instruct the AI: "Always read this file first, then dynamically read Layer 2/3 files based on the specific task using file-reading tools."
- 在CLAUDE.md中额外添加一项要求：和我交流的时候尽量用中文（专业名词可以用英文），自己思考以及完成任务的过程中尽量用英语
- 每次完成一个大任务/当日任务的时候，询问我是否需要提交推送修改

### Layer 2 (Details & Workflows): `.claude/layer2/`
Create a directory `.claude/layer2/` and generate the following specific workflow files. Each file should contain detailed standard operating procedures (SOPs):
1. `.claude/layer2/workflow-daily.md`: The SOP for daily learning tasks (e.g., LeetCode first, Math derivation, Code implementation, Blog writing).
2. `.claude/layer2/leetcode-guideline.md`: 每天的leetcode学习SOP（确定选择哪个主题/哪些题目/评估等）
3. `.claude/layer2/algorithm-description-design.md`: 对于一个新的算法或者框架推导，应当按什么顺序介绍的SOP（比如从背景->定义->证明->应用案例->从最新的角度回顾这个工作中的亮点/不足->近期对于该算法的改进->参考论文）
4. `.claude/layer2/git-push-rule.md`: 提交推送修改时候应该遵循的SOP
5. `.claude/layer2/ask-my-question.md`: 在我对现有问题进行提问的时候的一套SOP（比如：追问->理解问题后搜索MCP或者根据现有知识库找到答案->简要回答以及在专用的一个目录下整理一篇长的问题+解释MD文件->询问是否更新现在的文档->询问是否更新git记录）
6. `.claude/layer2/add-more-layer2.md`: 当我提出需要在layer2进行添加内容时候的SOP（比如：进一步追问确认我需要的功能->评判该内容需要放在layer2还是layer3->草拟SOP草稿提案->完成后询问是否更新git记录）

### Layer 3 (Deep Reference): `.claude/layer3/`
Create a directory `.claude/layer3/` for deep-dive materials.
1. `.claude/layer3/paper-reading-guide.md`: How we should analyze papers (Transformer, ResNet, ReAct) step-by-step.
2. `.claude/layer3/math-derivation-template.md`: The standard format for deriving ML formulas (requires clear markdown + LaTeX structure).

---

# Execution
Please execute the file creations, installations, and content generation step-by-step. 
For the markdown files in `.claude/`, populate them with intelligent defaults based on the "Project Background" provided above. Let me know when you have completed all setup and pushed the initial commit!