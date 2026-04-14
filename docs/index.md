---
layout: home

hero:
  name: The Agent Odyssey
  text: 从第一性原理到大模型 Agent 系统
  tagline: 六周高强度学习、推导、代码实现与公开笔记沉淀
  actions:
    - theme: brand
      text: 查看路线图
      link: /roadmap
    - theme: alt
      text: Day 1 任务包
      link: /days/day-01

features:
  - title: Math First
    details: 从最小二乘、梯度下降、反向传播到 Attention，保留关键公式推导和矩阵维度检查。
  - title: Code Grounded
    details: 使用 NumPy/PyTorch 实现核心模块，不把理解停留在调包层面。
  - title: Agent Oriented
    details: 聚焦 RAG、Tool Calling、ReAct、Memory、Evaluation 和面试可讲述项目。
---

## 当前目标

这个站点用于记录 6 周左右的大模型 Agent 实习准备过程。明线目标是准备互联网大厂大模型 Agent 应用岗位投递，底层目标是系统补齐数学推导、代码实现和 Agent 系统设计能力。

核心学习链路：

```text
最小二乘 -> 梯度下降 -> MLP -> CNN -> ResNet -> RNN -> Transformer -> CLIP -> GPT -> Agent
```

示例公式用于验证 LaTeX 渲染：

$$
Attention(Q, K, V) = softmax\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$

## 仓库结构

- `docs/`: GitHub Pages 文档站点。
- `src/`: 后续 NumPy/PyTorch/Agent 代码实现。
- `.claude/`: AI 协作记忆和 SOP，按 Progressive Disclosure 方式拆成 Layer 2/3。
- `CLAUDE.md`: AI 协作轻量索引和元数据入口。

## 主目录

- [周计划](/weeks/week-01)：按 Week 管理全局路线和交付物。
- [日计划](/days/)：按 Day 管理每天的 LeetCode、技术学习、代码和复盘。
- [LeetCode计划](/leetcode/)：维护 Top 100 Liked 题单、每日题目和 Python 题解。
- [技术学习计划](/technical/)：维护 AI/ML/Agent 主线的教材式学习章节。
