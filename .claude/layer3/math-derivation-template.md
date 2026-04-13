# Math Derivation Template

## Purpose

Standardize mathematical derivations for ML, deep learning, and Agent-related algorithms.

## Layer 2 Trigger Interface

Layer 3 is not a first-entry workflow. Use this template only after a Layer 2 workflow decides that durable mathematical derivation is required.

- From `.claude/layer2/algorithm-description-design.md`: trigger when the topic needs derivation of losses, gradients, attention equations, backpropagation, optimization, probability, contrastive learning, LoRA-style matrix decomposition, or tensor shapes.
- From `.claude/layer2/ask-my-question.md`: trigger when the user says "推导", "证明", "公式怎么来", "梯度怎么算", "反向传播", "矩阵维度", or "写成 LaTeX".
- From `.claude/layer2/leetcode-guideline.md`: trigger only through `.claude/layer2/ask-my-question.md` when the user wants a formal recurrence proof, probability analysis, or reusable derivation note.
- From `.claude/layer2/workflow-daily.md`: trigger only after the daily technical block has been classified as a derivation task by a Layer 2 workflow.
- From `.claude/layer2/init-weekly-tasks.md`: reference this template when planning a week that contains derivation-heavy deliverables; execute it later through the relevant daily or algorithm-description workflow.

## Template

```markdown
# Derivation: Topic

## Goal

State what we want to prove, optimize, or compute.

## Symbols And Shapes

| Symbol | Shape | Meaning |
| --- | --- | --- |
| X | (m, d) | Input feature matrix |
| y | (m,) | Target vector |
| theta | (d,) | Parameter vector |

## Assumptions

List differentiability, independence, normalization, or modeling assumptions.

## Objective

Write the loss, likelihood, or update rule.

## Step-By-Step Derivation

Show each algebraic step and explain why it is valid.

## Dimension Check

Verify the shape of every important intermediate term.

## Numerical Example

Use a tiny example to make the result concrete.

## Implementation Mapping

Map the equation to NumPy/PyTorch code.

## Common Mistakes

List sign errors, missing transpose, broadcasting bugs, or normalization mistakes.

## Final Result

State the final formula and how it is used.
```

## Style Rules

- Prefer Markdown tables for symbol definitions.
- Use display LaTeX for major equations and inline LaTeX for short symbols.
- Do not skip derivative steps when the step is the main learning objective.
- Always include a dimension check for matrix expressions.
- When translating to code, name tensors consistently with the derivation.
