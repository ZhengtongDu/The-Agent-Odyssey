import numpy as np


def generate_data(num_samples: int = 80) -> tuple[np.ndarray, np.ndarray, np.ndarray, float]:
    rng = np.random.default_rng(7)
    x1 = rng.uniform(-2.0, 2.0, size=(num_samples, 1))
    x2 = rng.uniform(0.0, 3.0, size=(num_samples, 1))
    x = np.hstack([x1, x2])
    true_w = np.array([[2.5], [-1.2]])
    true_b = 0.7
    noise = rng.normal(0.0, 0.15, size=(num_samples, 1))
    y = x @ true_w + true_b + noise
    return x, y, true_w, true_b


def mse(x: np.ndarray, y: np.ndarray, w: np.ndarray, b: float) -> float:
    residual = x @ w + b - y
    return float(((residual.T @ residual) / (2 * len(x))).item())


def closed_form_solution(x: np.ndarray, y: np.ndarray) -> tuple[np.ndarray, float]:
    ones = np.ones((x.shape[0], 1))
    x_aug = np.hstack([x, ones])
    theta = np.linalg.pinv(x_aug.T @ x_aug) @ x_aug.T @ y
    w = theta[:-1]
    b = float(theta[-1, 0])
    return w, b


def gradient_descent(
    x: np.ndarray,
    y: np.ndarray,
    learning_rate: float = 0.05,
    steps: int = 2000,
) -> tuple[np.ndarray, float, list[float]]:
    num_samples, num_features = x.shape
    w = np.zeros((num_features, 1))
    b = 0.0
    history: list[float] = []

    for step in range(steps):
        residual = x @ w + b - y
        grad_w = (x.T @ residual) / num_samples
        grad_b = float(np.sum(residual) / num_samples)
        w -= learning_rate * grad_w
        b -= learning_rate * grad_b

        if step % 100 == 0 or step == steps - 1:
            history.append(mse(x, y, w, b))

    return w, b, history


def main() -> None:
    x, y, true_w, true_b = generate_data()
    closed_w, closed_b = closed_form_solution(x, y)
    gd_w, gd_b, history = gradient_descent(x, y)

    print("True parameters")
    print("w:", true_w.ravel())
    print("b:", round(true_b, 4))

    print("\nClosed-form solution")
    print("w:", np.round(closed_w.ravel(), 4))
    print("b:", round(closed_b, 4))
    print("loss:", round(mse(x, y, closed_w, closed_b), 6))

    print("\nGradient descent solution")
    print("w:", np.round(gd_w.ravel(), 4))
    print("b:", round(gd_b, 4))
    print("loss:", round(mse(x, y, gd_w, gd_b), 6))

    print("\nLoss snapshots (every 100 steps + final)")
    print([round(value, 6) for value in history[:6]], "...", round(history[-1], 6))


if __name__ == "__main__":
    main()
