# Algorithm And Framework Description SOP

## Purpose

Use this SOP when introducing a new algorithm, model, framework, or Agent pattern.

## Explanation Order

1. Background: what problem existed before this method?
2. Core idea: the smallest intuition that makes the method work.
3. Formal definition: symbols, inputs, outputs, tensor shapes, and assumptions.
4. Derivation or mechanism: step-by-step math or system flow.
5. Minimal implementation: NumPy/PyTorch/Python code path with comments only where needed.
6. Application case: a concrete example from ML, LLM, multimodal learning, RAG, or Agent systems.
7. Strengths: what this method fixes or makes easier.
8. Limits: failure modes, hidden assumptions, scaling issues, and engineering costs.
9. Modern view: how the community uses, replaces, or improves it recently.
10. References: original paper, strong survey, implementation, or official docs.

## Required Standards

- Define shapes before manipulating matrices.
- Avoid saying "obvious" for derivation steps; state the missing algebra.
- Separate mathematical correctness from engineering convenience.
- Mention when a framework abstraction hides an important detail.
- For recent claims, verify with current sources before writing them as facts.

## Output Template

```markdown
# Topic

## Background

## Core Idea

## Definition And Shapes

## Derivation Or Mechanism

## Minimal Implementation

## Application Case

## Strengths

## Limits

## Modern View

## References
```
