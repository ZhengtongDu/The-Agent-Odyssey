# Day 1: Least Squares And Gradient Descent

## Day N

- Global Day: Day 1 / 36
- Week Day: Week 1 Day 1
- Planned remaining after completion: 35 learning days

## Goal

理解线性回归的最小二乘目标，写出梯度下降更新规则，并用纯 NumPy 跑通一个最小可运行实验。

## Symbols And Shapes

| Symbol | Shape | Meaning |
| --- | --- | --- |
| `X` | `(m, d)` | 输入特征矩阵 |
| `y` | `(m, 1)` | 标签向量 |
| `w` | `(d, 1)` | 权重向量 |
| `b` | `(1,)` | 偏置 |
| `ŷ` | `(m, 1)` | 预测值 |

## Objective

我们使用均方误差形式的最小二乘目标：

$$
J(w, b) = \frac{1}{2m}\sum_{i=1}^{m}(\hat{y}_i - y_i)^2
$$

其中：

$$
\hat{y} = Xw + b
$$

## Why Least Squares

- 误差平方会放大较大的残差，因此优化器会优先修正明显偏离的数据点。
- 它可导，适合用梯度下降直接优化。
- 在线性回归假设下，最小二乘和高斯噪声的最大似然估计是等价的。

## Gradient Derivation

把残差写成：

$$
r = Xw + b - y
$$

则目标函数可写成：

$$
J(w, b) = \frac{1}{2m}r^T r
$$

对权重求导：

$$
\nabla_w J = \frac{1}{m}X^T(Xw + b - y)
$$

对偏置求导：

$$
\nabla_b J = \frac{1}{m}\sum_{i=1}^{m}(\hat{y}_i - y_i)
$$

于是梯度下降更新为：

$$
w \leftarrow w - \alpha \nabla_w J
$$

$$
b \leftarrow b - \alpha \nabla_b J
$$

## Dimension Check

- `Xw`: `(m, d) @ (d, 1) -> (m, 1)`
- `Xw + b - y`: `(m, 1)`
- `X^T(Xw + b - y)`: `(d, m) @ (m, 1) -> (d, 1)`

## Implementation Note

实现见 `src/week01/linear_regression_numpy.py`，包含：

- synthetic data generation
- closed-form baseline
- gradient descent training
- MSE comparison between ground truth, closed-form, and GD solution

## Key Takeaways

- 最小二乘先给出“什么是好参数”的目标。
- 梯度下降给出“如何逐步找到好参数”的过程。
- Day 1 的重点不是调参，而是把损失、梯度、shape 和代码一一对齐。

## Next Step

- Day 2 可以继续补充 learning rate、feature scaling、loss curve 和收敛行为。
- Week 1 后半段再把这种推导风格迁移到 MLP 与 Backpropagation。
