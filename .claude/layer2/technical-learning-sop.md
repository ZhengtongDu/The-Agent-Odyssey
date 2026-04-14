# Technical Learning SOP

## Purpose

Use this SOP for the AI/ML/Agent technical learning block in every daily task package. The goal is to turn each technical topic into a durable, self-contained study chapter that can be read like a compact textbook section, not a checklist or chat transcript.

## Trigger

- The user asks to create or update a daily technical learning task.
- The user says "技术学习", "技术学习计划", "更新 Day N 技术内容", "今天的技术部分", "讲详细一点", "像 textbook 一样", or similar.
- The daily workflow reaches the AI/ML/Agent technical block after LeetCode planning.
- The task names a technical topic such as least squares, gradient descent, MLP, backpropagation, CNN, ResNet, RNN, Transformer, CLIP, GPT, RAG, ReAct, Tool Calling, Agent memory, or evaluation.

## Relationship To Other SOPs

- Use `.claude/layer2/workflow-daily.md` as the orchestration entry when the task is a full Day package.
- Use `.claude/layer2/leetcode-guideline.md` only for the LeetCode block.
- Use this SOP for the technical block itself: learning objective, chapter outline, derivation, code mapping, exercises, and acceptance criteria.
- Use `.claude/layer2/algorithm-description-design.md` when a one-off algorithm/model explanation is needed outside the daily plan.
- Use `.claude/layer3/math-derivation-template.md` when the page contains nontrivial formulas, gradients, recurrences, tensor shapes, or proof-like reasoning.
- Use `.claude/layer3/paper-reading-guide.md` when the topic depends on a named paper, original architecture, empirical comparison, or ablation.

## Output Location

- Daily technical notes go under `docs/notes/week-0N/day-NN-topic.md`.
- Technical plan indexes go under `docs/technical/`.
- Code artifacts go under `src/weekNN/` unless a more specific project directory already exists.
- The Day package under `docs/days/` must link to the technical note.
- The VitePress sidebar must expose the technical note through the "技术学习计划" group.

## Textbook-Level Chapter Standard

Each daily technical page should be self-contained enough that the user can study it without the chat history.

Required properties:

- It must start from the problem being solved, not from formulas.
- It must define every important symbol before using it.
- It must include a shape table for vector, matrix, or tensor topics.
- It must explain why the objective, architecture, or algorithm is designed that way.
- It must derive the central formula or mechanism step by step.
- It must connect every important formula to implementation variables.
- It must include failure modes and common mistakes.
- It must include exercises or self-check questions.
- It must include an interview summary that can be spoken in 60-90 seconds.

Avoid:

- Only listing bullet points with no connective explanation.
- Saying "obvious", "easy to see", or "just apply the chain rule" without showing the missing step.
- Copying raw chat output into docs.
- Adding modern claims without checking whether the claim is stable or needs verification.
- Mixing LeetCode content into the technical note, except for a brief Day-level cross-link.

## Required Chapter Structure

Use this structure by default. Rename headings only if the topic clearly needs a different organization.

```markdown
# Day N: Topic

## Learning Contract

## 1. Problem Setup

## 2. Symbols And Shapes

## 3. Core Idea

## 4. Formal Definition

## 5. Derivation Or Mechanism

## 6. Algorithm

## 7. Code Mapping

## 8. Numerical Or Concrete Example

## 9. Failure Modes And Common Mistakes

## 10. Self-Check Questions

## 11. Interview Summary

## 12. Next Step
```

## Section Requirements

### Learning Contract

State what the user should be able to do after studying the page.

It should include:

- Conceptual goal.
- Mathematical goal.
- Implementation goal.
- Interview or explanation goal.

### Problem Setup

Explain the real problem and why the topic exists.

For ML topics, include:

- What data is observed.
- What must be predicted or optimized.
- What assumptions are being made.
- What is deliberately ignored in this simplified first-principles version.

For Agent/system topics, include:

- User-facing task.
- System boundary.
- Inputs, outputs, and external tools.
- Failure modes that motivated the design.

### Symbols And Shapes

Every mathematical page must include a table with symbol, shape, type, and meaning.

Rules:

- Use batch dimension explicitly.
- Distinguish scalar, vector, matrix, tensor, function, and distribution.
- Use consistent orientation, for example column vectors for `w` and `y`.
- When bias is broadcast, explicitly state the broadcasting rule.

### Core Idea

Give the smallest intuition before detailed math.

Good core idea examples:

- Least squares chooses parameters that make residual energy small.
- Gradient descent changes parameters in the direction that most rapidly reduces the loss locally.
- Backpropagation is dynamic programming over derivatives on a computation graph.
- Attention builds a data-dependent weighted average over values.

### Formal Definition

Define the model, objective, algorithm state, or system state precisely.

For formulas:

- State domain and codomain when useful.
- State assumptions such as full column rank, differentiability, independence, normalization, or causal masking.
- Explain constants such as `1/m`, `1/2`, temperature, hidden size, or scaling factors.

### Derivation Or Mechanism

Derive the central equation without skipping algebra.

For mathematical derivations:

- Start from scalar form when it clarifies the matrix form.
- Show the residual definition.
- Show the differential or component-wise derivative.
- Show how the final matrix expression is assembled.
- Run a shape check after the final expression.

For architecture mechanisms:

- Trace one item through the module.
- Explain what each intermediate state stores.
- State which operations are learned and which are fixed.
- State the computational complexity when relevant.

### Algorithm

Give the actual procedure.

For optimization topics, include:

- Initialization.
- Forward computation.
- Loss computation.
- Gradient computation.
- Parameter update.
- Stopping or monitoring signal.

For model blocks, include:

- Input preparation.
- Layer/module sequence.
- Output shape.
- Training objective.

For Agent topics, include:

- Control loop.
- Tool selection.
- Observation handling.
- Stop condition.
- Logging and evaluation signal.

### Code Mapping

Map formulas to files, functions, and variable names.

Required:

- Mention the runnable file path.
- Show how each mathematical object appears in code.
- Mention shape expectations.
- Include the command used to run or verify the code.
- If code does not exist yet, specify the exact file path and function/class to create.

### Numerical Or Concrete Example

Use a small example to make the abstraction concrete.

Acceptable examples:

- A tiny matrix with 2 samples and 1 feature.
- A one-step gradient descent update with simple numbers.
- A token sequence through attention shapes.
- A miniature RAG document retrieval flow.

### Failure Modes And Common Mistakes

Include likely mistakes before the user hits them.

Examples:

- Shape mismatch.
- Sign error in gradients.
- Forgetting bias broadcasting.
- Learning rate too large or too small.
- Data leakage.
- Confusing training loss with generalization.
- Treating framework defaults as mathematical truth.

### Self-Check Questions

Add questions that test recall, derivation, and implementation.

Each page should include:

- At least 2 conceptual questions.
- At least 2 math or mechanism questions.
- At least 2 implementation questions.
- At least 1 interview-style question.

### Interview Summary

Provide a short spoken answer.

Requirements:

- 60-90 seconds when read aloud.
- No dense notation unless necessary.
- Mention problem, core idea, equation/mechanism, implementation, and limitation.

### Next Step

Connect the page to the next Day.

It should say:

- What concept carries over.
- What new difficulty appears next.
- What artifact should be created or revised next.

## Quality Checklist

Before finalizing a technical page, verify:

- The page has a clear learning contract.
- Every symbol in formulas is defined.
- Shapes are consistent across formulas and code.
- The central derivation has no unexplained jump.
- There is at least one code mapping section.
- The page includes failure modes and self-check questions.
- The Day package links to the technical page.
- The technical index links to the technical page.
- The VitePress sidebar exposes the page.
- `npm run docs:build` or `conda run -n tutorial npm run docs:build` passes after doc changes.

## Daily Task Creation Procedure

When creating a new Day N task package:

1. Read `CLAUDE.md`, `.claude/progress.md`, `.claude/layer2/workflow-daily.md`, and this SOP.
2. Identify the technical topic from `docs/roadmap.md`, the week page, or the user's latest instruction.
3. Create or update the Day package in `docs/days/`.
4. Create or update the technical note in `docs/notes/week-0N/`.
5. Update `docs/technical/index.md` with the Day link.
6. Update `docs/weeks/week-0N.md` if the topic, output, or link changed.
7. Add or update code in `src/` only when the task requires a runnable artifact.
8. Run the relevant verification command.
9. Mark the Day as prepared, not completed, unless the user explicitly confirms completion.
10. Commit and push if this was a Day package creation and verification passed.

## Acceptance Criteria

A technical Day package is acceptable only if:

- A motivated learner can study the page without needing the original chat.
- The mathematical or system core is explained at both intuition and formal levels.
- The page tells the user exactly what to run, what to inspect, and what to remember.
- The page is connected from the Day plan, week plan, technical index, and sidebar.
