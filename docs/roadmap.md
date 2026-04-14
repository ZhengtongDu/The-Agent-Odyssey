# 六周路线图

## 每日节奏

- LeetCode: 约 1 小时，每天 3-5 题，强调题型归纳、最优解推导和复盘。
- AI 技术栈: 约 1.5 小时，按教材式章节、数学推导、核心代码、文档输出推进。
- 每个大任务结束后，更新站点笔记并决定是否提交推送。

入口：

- [日计划](/days/)
- [LeetCode计划](/leetcode/)
- [技术学习计划](/technical/)

## Week 1: 从优化到神经网络

目标是掌握最小二乘、梯度下降、MLP 和反向传播，并搭建 GitHub Pages 文档框架。

- Day 1-2: 最小二乘法与 Gradient Descent，纯 NumPy 实现线性回归。
- Day 3-4: MLP 与 Backpropagation，纯 NumPy 跑通 XOR。
- Day 5-6: 整理数学推导和代码笔记，发布到文档站点。
- LeetCode: 数组、字符串、哈希表、双指针。

## Week 2: CV 基础与序列模型

目标是理解空间特征提取和序列建模限制，为 Attention 做铺垫。

- CNN 与 ResNet: 卷积、感受野、残差连接、梯度传播。
- RNN/LSTM/Seq2Seq: 隐状态、BPTT、信息瓶颈。
- 输出文章: 为什么我们需要 Transformer？
- LeetCode: 链表、栈与队列、二叉树基础。

## Week 3: Transformer 深拆

目标是从数学和代码上掌握 Transformer 核心组件。

- Self-Attention: 推导 $QK^T$、softmax 和 $\sqrt{d_k}$ 缩放。
- Multi-Head Attention, Positional Encoding, LayerNorm, FFN。
- PyTorch 手写 Encoder/Decoder Block。
- LeetCode: 二叉树进阶、回溯、图论基础。

## Week 4: 大模型演进与多模态

目标是理解 GPT、CLIP、微调和对齐范式。

- GPT: Decoder-only、causal mask、训练目标。
- CLIP: Contrastive Learning 和图文表征对齐。
- SFT/RLHF/LoRA: 训练阶段与核心数学直觉。
- LeetCode: 动态规划基础。

## Week 5: Agent 架构与应用层实战

目标是完成一个可讲述的微型 Agent 项目。

- Prompt Engineering 与 Few-shot。
- Tool/Function Calling 与结构化输出。
- RAG: chunking、embedding、vector search、rerank。
- ReAct: 论文精读和从零实现简易工具调用循环。
- LeetCode: DP 进阶、贪心、大厂高频题。

## Week 6: 复杂 Agent 系统与面试冲刺

目标是完成作品集收尾和面试表达。

- Memory: short-term/long-term memory 设计。
- Multi-Agent: 协作模式和失败模式。
- Evaluation: 准确性、鲁棒性、可观测性。
- 简历项目包装、模拟面试、站点打磨。
- LeetCode: 高频 Hard 和综合模拟。
