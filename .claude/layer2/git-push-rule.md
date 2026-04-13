# Post-Task Check, Cleanup, Commit, And Push SOP

## Purpose

Use this SOP at the end of a task to verify results, clean process files, protect unrelated user changes, and optionally commit/push a clean Git snapshot.

## Trigger

- The user explicitly asks to commit, push, save to git, create a snapshot, or sync to GitHub.
- The user says "提交", "推送", "commit", "push", "更新 git 记录", "发到远程仓库", "收尾检查", "任务完成检查", or "清理过程文件".
- A major task or daily task has been completed and project rules require a completion check plus asking whether to commit and push.
- The user asks to inspect Git status, clean generated files, prepare a clean commit, or explain what changed before pushing.
- A new Day N task package has just been created and needs to be available on GitHub Pages immediately.

## Layer 3 Interfaces

- This SOP normally does not trigger Layer 3 because it is an operational cleanup and Git workflow.
- If the completion check reveals that a paper note or derivation note is missing, return to `.claude/layer2/algorithm-description-design.md` or `.claude/layer2/ask-my-question.md`; those Layer 2 workflows may then load the appropriate Layer 3 reference.
- If the user asks what to do next after a commit, push, cleanup, or completion check, load `.claude/layer3/next-task-recommendation.md` through this Layer 2 workflow and provide prioritized next-task options.

## Preconditions

- Check `git status --short`.
- Confirm the repository remote is `git@github.com:ZhengtongDu/The-Agent-Odyssey.git` unless the user specifies another remote.
- Do not commit `node_modules/`, VitePress build output, secrets, caches, or unrelated local files.
- If there are unexpected user changes, do not overwrite or revert them.
- Treat commit and push as a synchronized operation: after creating a local commit, push it in the same task unless the user explicitly says not to push.
- The expected final state after this SOP is that local `main` and `origin/main` point to the same commit.
- For daily task creation, treat "create today's task package" as an immediate push boundary: once verification passes, commit and push so the user can read the task online.

## Completion Check Procedure

1. Review changed files with `git status --short --branch`.
2. Inspect important diffs before staging.
3. Identify unrelated or unexpected user changes and leave them untouched unless the user explicitly asks otherwise.
4. Run relevant verification commands when feasible, such as `conda run -n tutorial npm run docs:build` after VitePress docs/sidebar changes.
5. Check for generated or process files that should not remain in the repo, especially root-level exported HTML files, temporary logs, local screenshots, caches, and build outputs.
6. For HTML/process cleanup, classify each file before acting: tracked source artifact, generated artifact, user-provided reference, or disposable temporary file.
7. Do not delete tracked or user-provided files without explicit user confirmation; if deletion is intended, stage it intentionally and mention it in the summary.
8. Confirm `.gitignore` covers recurring generated directories such as `node_modules/`, `docs/.vitepress/dist/`, and local caches.
9. Check documentation indexes when SOPs, weekly docs, or VitePress pages changed.
10. Update `.claude/project-summary.md` if the completed task materially changes the project state.
11. Summarize verification, cleanup candidates, and remaining risks.
12. If the task created a new Day N package, update `.claude/progress.md` to mark that day as active/prepared rather than completed, unless the user explicitly confirms completion.

## Git Procedure

1. Ask whether the user wants to commit and push unless the user has already explicitly requested it.
2. Stage only files related to the completed task.
3. Use a concise imperative commit message, for example `add weekly task initialization sop`.
4. Commit after verification and cleanup decisions are complete.
5. Push to `origin main` immediately after committing unless the user explicitly requests a local-only commit.
6. Re-check `git status --short --branch` after push and confirm that local and remote are aligned.

## Post-Push Procedure

- Report commit hash and branch.
- Mention whether GitHub Pages workflow was added or updated.
- Mention any process files removed or intentionally left untracked.
- If the user asks for the next task, use `.claude/layer3/next-task-recommendation.md` before answering.
- If push fails because of authentication/network issues, report the exact blocker and next action.

## Safety Rules

- Never use destructive Git commands unless explicitly requested.
- Never amend a commit unless explicitly requested.
- Never include credentials or local-only environment files.
- Do not use broad cleanup commands; prefer targeted file review and user confirmation.
- Ask whether to commit and push after each major task or daily task, and treat the approved action as commit-plus-push rather than commit-only.
