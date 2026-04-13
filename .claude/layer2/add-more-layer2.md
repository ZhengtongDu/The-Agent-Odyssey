# Add More Layer 2 SOP

## Purpose

Use this SOP when the user wants to add a new Layer 2 workflow.

## Trigger

- The user asks to add, update, split, or reorganize a Layer 2 workflow/SOP.
- The user says "在 layer2 添加", "新增 SOP", "补充 workflow", "把这个流程固化", or "以后遇到这种情况按这个流程".
- The requested content is a recurring operating procedure rather than a deep reference note.
- The user is defining how future AI collaboration should behave for a class of tasks.

## Layer 3 Interfaces

- If the requested addition is a deep reference, template, theory note, paper protocol, or derivation protocol, place it in Layer 3 instead of Layer 2.
- When adding or changing a Layer 3 file, also define which Layer 2 workflows are allowed to trigger it and under what user-request conditions.
- Update `CLAUDE.md` and at least one relevant Layer 2 file so the Layer 3 reference has an explicit entry point.

## Procedure

1. Ask a focused follow-up question only if the requested workflow boundary is unclear.
2. Decide whether the content belongs in Layer 2 or Layer 3:
   - Layer 2: repeatable workflows, operating procedures, checklists.
   - Layer 3: deep references, templates, theory-heavy material.
3. Draft the new SOP with purpose, triggers, procedure, quality bar, and output template.
4. Add an index entry in `CLAUDE.md`.
5. Link related Layer 3 references if needed.
6. Summarize the new workflow and ask whether to commit and push.

## Quality Bar

- The SOP should be actionable in a future coding or learning session.
- Avoid duplicating existing Layer 2 files; reference them instead.
- Keep the file focused on one recurring workflow.
- Include concrete file paths and naming conventions when relevant.
