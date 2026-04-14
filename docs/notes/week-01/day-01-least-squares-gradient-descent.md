# Day 1: Least Squares And Gradient Descent

返回：[Day 1 任务包](/days/day-01) / [技术学习计划](/technical/)

## Learning Contract

学完这一页后，你应该能做到四件事：

- 概念上：解释线性回归在解决什么问题，以及为什么最小二乘可以作为训练目标。
- 数学上：从均方误差目标推导出 $\nabla_w J$ 和 $\nabla_b J$。
- 实现上：把每一个公式对应到 `src/week01/linear_regression_numpy.py` 里的 NumPy 变量。
- 表达上：用 60-90 秒讲清楚闭式解和梯度下降的区别。

Day 1 的重点不是记住一个公式，而是建立一种以后反复使用的学习方式：

```text
问题 -> 符号和 shape -> 目标函数 -> 推导 -> 算法 -> 代码映射 -> 错误检查
```

## 1. Problem Setup

线性回归是监督学习中最基础的模型之一。我们有一批训练样本，每个样本包含若干特征和一个真实标签。目标是找到一组参数，使模型根据特征给出的预测尽可能接近真实标签。

一个样本可以写成：

$$
(x_i, y_i)
$$

其中 $x_i$ 是第 $i$ 个样本的特征，$y_i$ 是第 $i$ 个样本的标签。在线性回归里，我们假设预测值可以由特征的线性组合给出：

$$
\hat{y}_i = x_i^T w + b
$$

这里的 $w$ 是权重，$b$ 是偏置。权重决定每个特征对预测的贡献，偏置提供整体平移。

这个假设非常强，因为它只允许模型学习线性关系。但它也非常重要，因为很多更复杂模型的训练过程仍然复用同一套基本思想：定义损失函数，然后用梯度告诉参数该往哪里移动。

## 2. Symbols And Shapes

本页统一使用列向量约定。

| Symbol | Shape | Type | Meaning |
| --- | --- | --- | --- |
| $m$ | scalar | integer | 样本数量 |
| $d$ | scalar | integer | 每个样本的特征维度 |
| $x_i$ | $(d, 1)$ | vector | 第 $i$ 个样本的特征列向量 |
| $x_i^T$ | $(1, d)$ | row vector | 第 $i$ 个样本作为矩阵中的一行 |
| $X$ | $(m, d)$ | matrix | 训练特征矩阵，每一行是一个样本 |
| $y$ | $(m, 1)$ | vector | 标签列向量 |
| $w$ | $(d, 1)$ | vector | 权重列向量 |
| $b$ | scalar | float | 偏置 |
| $\hat{y}$ | $(m, 1)$ | vector | 全部样本的预测值 |
| $r$ | $(m, 1)$ | vector | 残差向量，等于 $\hat{y} - y$ |
| $\alpha$ | scalar | float | 学习率 |

矩阵形式的预测为：

$$
\hat{y} = Xw + b
$$

严格来说，$b$ 是 scalar，$Xw$ 是 $(m,1)$。这里的加法表示把同一个 $b$ broadcast 到所有样本：

$$
Xw + b\mathbf{1}
$$

其中 $\mathbf{1}$ 是形状为 $(m,1)$ 的全 1 向量。代码里 NumPy 会自动完成这个 broadcasting。

## 3. Core Idea

线性回归训练可以拆成两个问题：

- 什么样的参数是好参数？
- 如果当前参数不好，怎么把它改好？

最小二乘回答第一个问题。它说：如果预测值和真实值之间的残差越小，参数就越好。为了让正负误差不会互相抵消，我们平方每个残差，再求平均。

梯度下降回答第二个问题。它说：损失函数在当前位置下降最快的局部方向由负梯度给出，所以每次把参数朝负梯度方向移动一小步。

所以 Day 1 的核心关系是：

```text
least squares defines the objective
gradient descent provides the search procedure
```

## 4. Objective: Least Squares

对单个样本，残差是：

$$
r_i = \hat{y}_i - y_i = x_i^T w + b - y_i
$$

对全部样本，残差向量是：

$$
r = Xw + b - y
$$

最小二乘目标使用残差平方和：

$$
J(w,b) = \frac{1}{2m}\sum_{i=1}^{m}(x_i^T w + b - y_i)^2
$$

用矩阵写法是：

$$
J(w,b) = \frac{1}{2m}r^T r
$$

为什么是 $\frac{1}{2m}$？

- 除以 $m$ 是为了得到平均损失，让 loss 大小不随样本数线性增长。
- 乘以 $\frac{1}{2}$ 不改变最优解，只是让求导后平方项的系数 $2$ 被抵消。
- 使用平方让损失可导，并且对大残差惩罚更重。

这个目标函数对 $w$ 和 $b$ 是凸函数。在线性回归里，如果数据矩阵满足适当的秩条件，最小值是全局最小值，不会出现深度神经网络中常见的复杂非凸地形。

## 5. Closed-Form View

在加入偏置后，可以把模型写得更紧凑。定义增广矩阵：

$$
X_{aug} =
\begin{bmatrix}
x_1^T & 1 \\
x_2^T & 1 \\
\cdots & \cdots \\
x_m^T & 1
\end{bmatrix}
$$

定义增广参数：

$$
\theta =
\begin{bmatrix}
w \\
b
\end{bmatrix}
$$

则预测为：

$$
\hat{y} = X_{aug}\theta
$$

目标变成：

$$
J(\theta) = \frac{1}{2m}\lVert X_{aug}\theta - y \rVert_2^2
$$

如果 $X_{aug}^T X_{aug}$ 可逆，最优解满足正规方程：

$$
X_{aug}^T X_{aug}\theta = X_{aug}^T y
$$

于是：

$$
\theta^* = (X_{aug}^T X_{aug})^{-1}X_{aug}^T y
$$

代码中使用的是伪逆：

```python
theta = np.linalg.pinv(x_aug.T @ x_aug) @ x_aug.T @ y
```

使用 `pinv` 比直接求逆更稳健，因为真实数据可能存在特征共线性或矩阵接近奇异。

闭式解的意义：

- 它直接给出最小二乘问题的最优参数。
- 它适合小规模、特征维度不高的问题。
- 它让我们有一个 baseline，可以检查梯度下降是否收敛到合理结果。

闭式解的限制：

- 当特征维度很高时，构造和求解 $X^TX$ 成本很高。
- 在神经网络中，模型通常不是关于参数的线性函数，没有类似的简单闭式解。
- 大规模数据通常更适合使用迭代优化。

## 6. Gradient Derivation

这一节推导梯度下降需要的两个梯度：

$$
\nabla_w J
$$

和：

$$
\nabla_b J
$$

### 6.1 Scalar Derivation For One Weight

先看第 $j$ 个权重 $w_j$。目标函数是：

$$
J(w,b) = \frac{1}{2m}\sum_{i=1}^{m}r_i^2
$$

其中：

$$
r_i = x_i^T w + b - y_i
$$

对 $w_j$ 求偏导：

$$
\frac{\partial J}{\partial w_j}
= \frac{1}{2m}\sum_{i=1}^{m}2r_i\frac{\partial r_i}{\partial w_j}
$$

因为：

$$
r_i = x_{i1}w_1 + x_{i2}w_2 + \cdots + x_{id}w_d + b - y_i
$$

所以：

$$
\frac{\partial r_i}{\partial w_j} = x_{ij}
$$

代回去：

$$
\frac{\partial J}{\partial w_j}
= \frac{1}{m}\sum_{i=1}^{m}r_i x_{ij}
$$

这说明每个权重的梯度是“残差”和“该特征值”的加权平均。如果某个特征在残差大的样本上取值也大，那么这个特征对应的权重会收到更强的更新信号。

### 6.2 Assemble Into Matrix Form

把所有 $j$ 的偏导合在一起：

$$
\nabla_w J =
\frac{1}{m}
\begin{bmatrix}
\sum_{i=1}^{m}r_i x_{i1} \\
\sum_{i=1}^{m}r_i x_{i2} \\
\cdots \\
\sum_{i=1}^{m}r_i x_{id}
\end{bmatrix}
$$

这个向量正好等于：

$$
\nabla_w J = \frac{1}{m}X^T r
$$

因为 $X^T$ 的第 $j$ 行包含所有样本在第 $j$ 个特征上的值，和 $r$ 相乘就是 $\sum_i x_{ij}r_i$。

代入 $r = Xw + b - y$：

$$
\nabla_w J = \frac{1}{m}X^T(Xw + b - y)
$$

### 6.3 Bias Gradient

对偏置 $b$ 求导：

$$
\frac{\partial J}{\partial b}
= \frac{1}{2m}\sum_{i=1}^{m}2r_i\frac{\partial r_i}{\partial b}
$$

因为：

$$
\frac{\partial r_i}{\partial b} = 1
$$

所以：

$$
\nabla_b J = \frac{1}{m}\sum_{i=1}^{m}r_i
$$

偏置的梯度就是平均残差。如果模型整体预测偏高，平均残差为正，梯度下降会减小 $b$。如果模型整体预测偏低，平均残差为负，梯度下降会增大 $b$。

## 7. Shape Check

每次写矩阵梯度，都要做 shape check。

预测：

$$
Xw: (m,d)@(d,1) \rightarrow (m,1)
$$

残差：

$$
r = Xw + b - y: (m,1)
$$

权重梯度：

$$
X^T r: (d,m)@(m,1) \rightarrow (d,1)
$$

偏置梯度：

$$
\sum_i r_i \rightarrow scalar
$$

参数更新：

$$
w \leftarrow w - \alpha\nabla_w J
$$

其中 $w$ 和 $\nabla_w J$ 都是 $(d,1)$，所以可以相减。

## 8. Gradient Descent Algorithm

梯度下降不是一个具体模型，而是一类优化方法。对于 Day 1 的线性回归，它的过程是：

1. 初始化 $w$ 和 $b$。
2. 用当前参数计算预测 $\hat{y}$。
3. 计算残差 $r = \hat{y} - y$。
4. 计算损失 $J(w,b)$。
5. 计算梯度 $\nabla_w J$ 和 $\nabla_b J$。
6. 按学习率 $\alpha$ 更新参数。
7. 重复直到 loss 足够小或达到最大迭代次数。

更新公式是：

$$
w \leftarrow w - \alpha\frac{1}{m}X^T(Xw + b - y)
$$

$$
b \leftarrow b - \alpha\frac{1}{m}\sum_{i=1}^{m}(x_i^T w + b - y_i)
$$

学习率 $\alpha$ 控制每一步走多远：

- 太小：loss 会下降，但速度很慢。
- 合适：loss 稳定下降。
- 太大：loss 可能震荡，甚至发散。

特征尺度也会影响梯度下降。如果一个特征范围是 $[0, 1]$，另一个特征范围是 $[0, 10000]$，损失函数的等高线会非常狭长。梯度下降会在狭长谷底两侧来回震荡，收敛变慢。这就是后面要学习 feature scaling 的原因。

## 9. Code Mapping

实现文件：

```text
src/week01/linear_regression_numpy.py
```

推荐运行：

```bash
conda run -n tutorial python src/week01/linear_regression_numpy.py
```

### 9.1 Data Generation

代码：

```python
x1 = rng.uniform(-2.0, 2.0, size=(num_samples, 1))
x2 = rng.uniform(0.0, 3.0, size=(num_samples, 1))
x = np.hstack([x1, x2])
true_w = np.array([[2.5], [-1.2]])
true_b = 0.7
y = x @ true_w + true_b + noise
```

对应关系：

| Code | Math | Shape |
| --- | --- | --- |
| `x` | $X$ | `(m, 2)` |
| `true_w` | true $w$ | `(2, 1)` |
| `true_b` | true $b$ | scalar |
| `y` | $y$ | `(m, 1)` |

这里人为生成了一个接近线性的世界。因为真实参数已知，所以可以检查训练结果是否接近 `true_w` 和 `true_b`。

### 9.2 Loss Function

代码：

```python
residual = x @ w + b - y
return float(((residual.T @ residual) / (2 * len(x))).item())
```

对应公式：

$$
J(w,b)=\frac{1}{2m}r^Tr
$$

关键 shape：

```text
residual.T: (1, m)
residual:   (m, 1)
residual.T @ residual: (1, 1)
```

最后用 `.item()` 把 `(1,1)` array 转成 Python scalar。

### 9.3 Closed-Form Baseline

代码：

```python
ones = np.ones((x.shape[0], 1))
x_aug = np.hstack([x, ones])
theta = np.linalg.pinv(x_aug.T @ x_aug) @ x_aug.T @ y
w = theta[:-1]
b = float(theta[-1, 0])
```

对应公式：

$$
\theta^* = (X_{aug}^TX_{aug})^\dagger X_{aug}^Ty
$$

这里的 $\dagger$ 表示伪逆。`theta[:-1]` 是权重，`theta[-1]` 是偏置。

### 9.4 Gradient Descent

代码：

```python
residual = x @ w + b - y
grad_w = (x.T @ residual) / num_samples
grad_b = float(np.sum(residual) / num_samples)
w -= learning_rate * grad_w
b -= learning_rate * grad_b
```

对应公式：

$$
\nabla_w J = \frac{1}{m}X^Tr
$$

$$
\nabla_b J = \frac{1}{m}\sum_i r_i
$$

这段代码就是本页推导的直接翻译。

## 10. Numerical Example

用一个极小例子检查直觉。假设只有 2 个样本和 1 个特征：

$$
X =
\begin{bmatrix}
1 \\
2
\end{bmatrix},
\quad
y =
\begin{bmatrix}
2 \\
4
\end{bmatrix}
$$

初始化：

$$
w = 0,\quad b = 0
$$

预测：

$$
\hat{y} =
\begin{bmatrix}
0 \\
0
\end{bmatrix}
$$

残差：

$$
r =
\begin{bmatrix}
-2 \\
-4
\end{bmatrix}
$$

权重梯度：

$$
\nabla_w J = \frac{1}{2}X^Tr
= \frac{1}{2}
\begin{bmatrix}
1 & 2
\end{bmatrix}
\begin{bmatrix}
-2 \\
-4
\end{bmatrix}
= \frac{1}{2}(-10)
= -5
$$

偏置梯度：

$$
\nabla_b J = \frac{1}{2}(-2-4) = -3
$$

如果学习率 $\alpha = 0.1$：

$$
w \leftarrow 0 - 0.1(-5) = 0.5
$$

$$
b \leftarrow 0 - 0.1(-3) = 0.3
$$

参数变大是合理的，因为当前预测全都偏低，模型需要提高预测值。

## 11. Failure Modes And Common Mistakes

### Shape Mistake

最常见错误是把 `w` 写成 `(d,)`，导致 NumPy broadcasting 产生看似能运行但语义不清的结果。Day 1 统一使用 `(d,1)`，这样 `x @ w` 明确得到 `(m,1)`。

### Sign Mistake

残差必须保持一致：

$$
r = \hat{y} - y
$$

如果写成 $y - \hat{y}$，梯度符号会反过来。此时更新公式也必须对应改变，否则 loss 会上升。

### Forgetting Bias

闭式解里如果忘记给 `x` 拼接全 1 列，就只能学到过原点的直线。梯度下降里如果忘记更新 `b`，模型也会被迫用权重补偿整体偏移。

### Learning Rate Too Large

如果 $\alpha$ 太大，每一步会跨过最优点太远。表现通常是 loss 不下降、震荡或变成非常大的数。

### Confusing Training Loss And Generalization

Day 1 的 synthetic data 主要用于理解优化，不用于评估泛化。真实机器学习任务还需要 train/validation/test 切分、正则化和数据分布检查。

## 12. Self-Check Questions

概念题：

- 为什么平方残差比直接求残差平均更适合作为优化目标？
- 闭式解和梯度下降分别回答了什么问题？

数学题：

- 从 $J(w,b)=\frac{1}{2m}\sum_i r_i^2$ 推出 $\frac{\partial J}{\partial w_j}$。
- 为什么 $X^Tr$ 的 shape 是 $(d,1)$？
- 如果把残差定义成 $y-\hat{y}$，梯度公式和更新方向会发生什么变化？

实现题：

- `np.linalg.pinv(x_aug.T @ x_aug) @ x_aug.T @ y` 对应哪个数学公式？
- 为什么 `grad_b` 要用 `np.sum(residual) / num_samples`？
- 如果 `history` 中的 loss 先下降后变成很大，优先检查什么？

面试题：

- 请用 1 分钟解释最小二乘和梯度下降的关系。
- 为什么线性回归有闭式解，但神经网络通常使用梯度下降？

## 13. Interview Summary

线性回归假设预测值是输入特征的线性组合，也就是 $\hat{y}=Xw+b$。为了找到好的参数，我们定义最小二乘目标，让预测和真实标签之间的残差平方平均值尽可能小。这个目标可以写成 $J(w,b)=\frac{1}{2m}r^Tr$，其中 $r=Xw+b-y$。对权重求导得到 $\nabla_wJ=\frac{1}{m}X^Tr$，对偏置求导得到平均残差。闭式解可以通过正规方程直接求最优参数，适合小规模线性问题；梯度下降则从初始参数出发，反复根据负梯度方向更新参数，更适合大规模数据和后续神经网络这类没有简单闭式解的模型。实现时最重要的是保持 shape 一致，并检查 loss 是否稳定下降。

## 14. Next Step

Day 2 继续研究梯度下降的收敛行为。重点会从“梯度公式是什么”转向“为什么同一个公式有时收敛快、有时收敛慢”，包括 learning rate、feature scaling、loss curve 和参数轨迹。

Carry-over：

- 继续使用 `src/week01/linear_regression_numpy.py`。
- 增加或记录 loss curve。
- 对比未缩放特征和缩放后特征的收敛速度。
