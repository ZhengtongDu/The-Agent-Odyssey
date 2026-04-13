# 大模型Agent实习六周学习规划 \- Gemini

**Date**: April 13, 2026 at 06:51 PM
**Turns**: 1
**Source**: [Gemini Chat](https://gemini.google.com/u/3/app/8c85bc1441ffd0d2)

---

## Turn 1

### 👤 User

我希望用六周左右时间准备投递实习简历，每周平均5-6天，每天2-3小时，目标是互联网大厂的大模型agent应用岗位，我现在的现状是我正在从事其中的工作，对各种大模型相关的概念有认知上的清楚，但是具体落在数学或者代码上的掌握不够，但是我的学习能力是充足的，我有信心和把握掌握所有的知识点，因此我希望能够一方面准备笔试的leetcode题目、另一方面按照知识点+论文+项目的方式把agent/大模型的软件/算法层面的技术栈过一遍。我现在对于大模型部分，找到了一个比较好的学习路径：最小二乘——梯度下降——MLP——CNN——ResNet（CLIP时代前的CV暂时就到这）——RNN——Transformer——CLIP（多模态）——GPT，我希望将我的学习内容作为一个github pages的形式留存下来（类似的项目我有做过：https://zhengtongdu.github.io/Master-LEAN-by-Claude-Code/#/），这样对于后续的内容也有帮助。整个学习过程的参与者就是我自己以及各种ai coding工具，我需要先规划好技术路线、时间安排，然后一步一步地实现最终的目标。我的想法是以拿到实习offer作为明面的目标，但是真实目标是我要通过这一个阶段的学习，对于目前整体的ai脉络有一个更清晰的把握、对于我未来的科研或者工作都有极强的增益，在数学上和代码上都有很大的进步。你根据我的描述以及要求，整理出一个更详细的规划以及时间安排，如有进一步的内容需求，可以告诉我，我来进行补充

### 🤖 Assistant

这是一个非常棒的计划。你不仅有明确的“明面目标”（大厂实习Offer），更有极具长期价值的“真实目标”（底层脉络的清晰把握、数学与代码能力的跃升）。这种**“以战代练、构建公开学习成果（Learn in Public）”**的策略，也是大模型时代最有效率的学习方式。
基于你每天2-3小时、每周5-6天（总计约80-90小时）的时间预算，这是一个相对紧凑的安排。为了在六周内兼顾LeetCode算法题、从底层数学到前沿Agent框架的技术栈，以及GitHub Pages的维护，我们需要对你的学习路径进行**战略性聚焦**。
针对“大模型Agent应用岗位”，你的前置学习路径非常经典，但我建议在时间分配上做一点微调：**压缩经典CV（CNN/ResNet）和传统NLP（RNN）的代码级实操时间，将其作为概念过渡；将节省下来的时间重仓投资于 Transformer 的底层推导、微调范式（PEFT/LoRA），以及 Agent 架构（RAG、ReAct、Tool Calling）。**
以下是为你量身定制的六周详细规划：

### ⏳ 每日时间分配建议 (以2.5小时/天为例)

- **第 1 小时：LeetCode 专项突破**（不要贪多，每天1-2道中等题，重点是白板手撕和最优解推导，而不是盲目刷量）。
- **第 1.5 小时：AI技术栈深潜 & 产出**（理论推导 + AI辅助手写核心代码 + 同步更新到 GitHub Pages）。

---

### 🗺️ 六周大厂 Agent 岗位冲刺路线图

#### **第一周：基石重构 —— 从优化到神经网络**
**目标：** 掌握底层优化逻辑与反向传播的数学本质，建立 GitHub Pages 框架。

- **技术栈 (1.5h/天):**
  - **Day 1-2:** 最小二乘法与梯度下降（Gradient Descent）。**数学重点：** 偏导数推导、损失函数曲面可视化。**代码：** 用纯 NumPy 实现线性回归的梯度下降。
  - **Day 3-4:** 多层感知机 (MLP) 与反向传播 (Backpropagation)。**数学重点：** 链式法则的矩阵形式。**代码：** 纯 NumPy 手搓一个包含隐层的 MLP 并跑通 XOR 问题。
  - **Day 5-6:** 搭建 GitHub Pages（推荐使用 VitePress 或 Docusaurus，便于嵌入 Markdown 和公式）。将前几天的数学推导和代码思路整理发布。
- **LeetCode (1h/天):** 数组、字符串、哈希表、双指针（热身与基础）。

#### **第二周：跨越时代的桥梁 —— CV基础与序列模型**
**目标：** 理解空间特征提取与时间序列建模的局限性，为引入 Attention 做铺垫。

- **技术栈:**
  - **Day 1-2:** CNN 与 ResNet。**重点：** 卷积操作的数学表达、感受野、残差连接（Residual Connection）为何能解决梯度消失。**代码：** PyTorch 调包实现图像分类（快速过）。
  - **Day 3-4:** RNN, LSTM 与传统 Seq2Seq。**重点：** 隐状态的传递、BPTT（随时间反向传播）、信息瓶颈问题。
  - **Day 5-6:** 总结这些模型在长文本/复杂任务上的缺陷，在博客上撰写《为什么我们需要 Transformer？》的前置思考文章。
- **LeetCode:** 链表、栈与队列、二叉树基础（DFS/BFS）。

#### **第三周：重中之重 —— 彻底拆解 Transformer**
**目标：** 手撕 Transformer 的核心组件，从数学到代码完全通透。

- **技术栈:**
  - **Day 1-2:** Self-Attention 机制。**数学重点：**$Attention(Q, K, V) = softmax(\frac{QK^T}{\sqrt{d_k}})V$ 的推导，为什么除以 $\sqrt{d_k}$？
  - **Day 3-4:** Multi-Head Attention, Positional Encoding, 层归一化 (LayerNorm) 与前馈网络 (FFN)。
  - **Day 5:****核心代码战役：** 配合 AI 助手，用 PyTorch 纯手工实现一个完整的 Transformer Encoder/Decoder Block。
  - **Day 6:** 博客产出：详细拆解 Transformer 核心代码，配上矩阵维度的变化图解。
- **LeetCode:** 二叉树进阶、回溯算法 (Backtracking)、图论基础。

#### **第四周：大模型演进与多模态**
**目标：** 理解主流大模型的差异，掌握微调基本概念。

- **技术栈:**
  - **Day 1-2:** GPT 系列的演进 (GPT-1 to 3)。**重点：** 为什么 Decoder-only 最终胜出？因果掩码 (Causal Masking) 的实现。
  - **Day 3:** CLIP 模型。**重点：** 对比学习 (Contrastive Learning) 的损失函数定义，图文表征空间的对齐机制。
  - **Day 4-5:** 大模型微调与对齐技术概念：SFT (指令微调), RLHF (基于人类反馈的强化学习), LoRA (低秩微调) 的数学原理（矩阵分解）。
  - **Day 6:** 博客产出：梳理大模型训练的三阶段（Pre-train -> SFT -> RLHF）。
- **LeetCode:** 动态规划 (DP) 基础（背包问题、打家劫舍、股票买卖）。

#### **第五周：Agent 架构与应用层实战（面试核心考区）**
**目标：** 掌握 Agent 应用开发的核心技术栈，完成一个微型 Agent 项目。

- **技术栈:**
  - **Day 1:** Prompt Engineering 进阶与 Few-shot 学习。
  - **Day 2:** Function Calling (工具调用) 原理。大模型如何输出结构化 JSON 并触发本地函数。
  - **Day 3:** RAG (检索增强生成) 链路。文档切分 (Chunking)、Embedding 模型计算、向量数据库检索原理。
  - **Day 4-5:** Agent 范式：ReAct (Reason + Act) 论文精读与机制拆解。**代码：** 不依赖 Langchain，从零用 Python 写一个支持循环思考和调用 Google Search 工具的简易 ReAct Agent。
  - **Day 6:** 博客产出：记录自建 ReAct Agent 的全过程与踩坑记录。
- **LeetCode:** 动态规划进阶、贪心算法。开始刷大厂高频题。

#### **第六周：复杂 Agent 系统建设与面试冲刺**
**目标：** 拔高系统设计认知，准备简历与模拟面试。

- **技术栈:**
  - **Day 1-2:** 复杂 Agent 组件：记忆机制 (Short-term/Long-term Memory) 的实现方案、Multi-Agent 系统协作模式 (如 AutoGen 或 CrewAI 的思想)。
  - **Day 3:** Agent 的评估体系 (Evaluation)。如何衡量一个 Agent 输出的准确性与鲁棒性？
  - **Day 4-5:****项目收尾与简历撰写。** 将 GitHub Pages 打磨成你的作品集，将第五周自建的 ReAct Agent 包装成简历上的亮点项目。
  - **Day 6:** 面试八股文复习（挑出博客里的重点），模拟面试自我介绍与项目拷问。
- **LeetCode:** 大厂常考的高频 Hard 题、Top 100 综合模拟机考。

---

### 💡 执行策略与 AI 协同指南

1. **让 AI 做粗活，你的大脑只做“核心运算”：** 搭建网页、排版、写样板代码（Boilerplate）全部交给 Cursor 或 Claude 解决。你的认知负荷应该100%集中在**“矩阵的维度是怎么变的”、“损失函数为什么不收敛”、“算法的空间复杂度如何优化”**上。
2. **费曼技巧输出：** 你的 GitHub Pages 不要写成知识点的堆砌，要写成“教别人怎么懂”的教程。如果能用几句话把一个复杂的论文概念给 AI 解释清楚并且 AI 挑不出错，你就真的懂了。
3. **不要在框架里迷失：** 面试 Agent 岗位，面试官更看重你对底层逻辑的理解，而不是“你会不会调 Langchain 的 API”。第五周的从零手写 ReAct 机制将是你脱颖而出的关键。
为了让后续的 LeetCode 刷题和具体的技术细节更贴合你的实际情况，目前的你在算法数据结构方面的基础如何？（比如：是小白起步，还是已经刷过一段时间，只是需要针对性复习？）

---

*Exported from [Voyager](https://github.com/Nagi-ovo/gemini-voyager)*  
*Generated on April 13, 2026 at 06:51 PM*