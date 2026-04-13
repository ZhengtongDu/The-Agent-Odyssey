# Git Commit And Push SOP

## Purpose

Keep Git history useful while avoiding accidental commits of generated artifacts or unrelated changes.

## Preconditions

- Check `git status --short`.
- Confirm the repository remote is `git@github.com:ZhengtongDu/The-Agent-Odyssey.git` unless the user specifies another remote.
- Do not commit `node_modules/`, VitePress build output, secrets, caches, or unrelated local files.
- If there are unexpected user changes, do not overwrite or revert them.

## Commit Procedure

1. Review changed files with `git status --short`.
2. Inspect important diffs before staging.
3. Stage only files related to the completed task.
4. Use a concise imperative commit message, for example `initialize vitepress learning site`.
5. Run the relevant verification command before committing when feasible.
6. Commit after verification.
7. Push to `origin main` only when the user has requested or approved it.

## Post-Push Procedure

- Report commit hash and branch.
- Mention whether GitHub Pages workflow was added or updated.
- If push fails because of authentication/network issues, report the exact blocker and next action.

## Safety Rules

- Never use destructive Git commands unless explicitly requested.
- Never amend a commit unless explicitly requested.
- Never include credentials or local-only environment files.
- Ask whether to commit and push after each major task or daily task.
