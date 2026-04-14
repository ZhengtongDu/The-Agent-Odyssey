# Day 1 任务包

## Day N

- Global Day: Day 1 / 36
- Week Day: Week 1 Day 1
- 状态：已准备，未确认完成

## 今日目标

Day 1 的任务是同时建立两个基本节奏：算法侧从数组和哈希表开始，技术侧从线性回归、最小二乘和梯度下降开始。今天不追求知识面铺开，而是把“题型模式、数学目标、梯度公式、NumPy 实现”对齐。

## LeetCode 计划

入口：[Day 1 数组与哈希专项](/leetcode/day-01-arrays-hash)

| # | 题目 | 核心模式 |
| ---: | --- | --- |
| 1 | Two Sum | 哈希表记录已见元素 |
| 49 | Group Anagrams | 规范化 key 分组 |
| 128 | Longest Consecutive Sequence | 哈希集合判断序列起点 |
| 238 | Product of Array Except Self | 前后缀状态 |

完成标准：

- 每题能说出暴力解为什么慢。
- 每题能说清楚优化解维护的状态。
- Python 解法可以不看答案重写。

## 技术学习计划

入口：[Day 1 最小二乘与梯度下降](/notes/week-01/day-01-least-squares-gradient-descent)

学习顺序：

1. 先读 Problem Setup，明确 `X`、`y`、`w`、`b` 的 shape。
2. 再读 Objective，理解为什么最小二乘是一个可优化目标。
3. 手推一次 scalar gradient 和 matrix gradient。
4. 对照 `src/week01/linear_regression_numpy.py`，把公式映射到 NumPy 变量。
5. 完成页面末尾的自测题。

完成标准：

- 能从 $J(w,b)$ 推出 $\nabla_w J$ 和 $\nabla_b J$。
- 能解释闭式解和梯度下降分别适合什么场景。
- 能说明 feature scaling 为什么影响梯度下降收敛速度。

## 代码产物

- `src/week01/linear_regression_numpy.py`

推荐验证：

```bash
conda run -n tutorial python src/week01/linear_regression_numpy.py
```

## 复盘问题

- 哈希表优化的本质是减少哪类重复工作？
- 最小二乘的 $\frac{1}{2m}$ 系数为什么不改变最优解？
- 为什么 `X.T @ residual` 的 shape 一定是 `(d, 1)`？
- 学习率过大和特征尺度差异过大会分别造成什么问题？
