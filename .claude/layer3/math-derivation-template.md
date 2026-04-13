# Math Derivation Template

## Purpose

Standardize mathematical derivations for ML, deep learning, and Agent-related algorithms.

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
