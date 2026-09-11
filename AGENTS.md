# AGENTS.md — loombox-landing

The marketing landing page for **loombox** (https://github.com/fiorelorenzo/loombox).

- **Stack:** SvelteKit + `@sveltejs/adapter-node`, hosted on **prodbox** (Docker +
  Caddy, automatic TLS) on `loombox.dev` — the same deploy pattern as pitchbox and
  embertold.
- **Brand & messaging:** follow the loombox product spec in the product repo —
  `SPEC.md` §4 (brand: the loom/thread motif, dark-first, Inter + JetBrains Mono) and
  §17 (the self-hosted vs managed-cloud editions story). Self-hosting is the permanent,
  free guarantee; managed cloud is a future convenience — don't imply otherwise.
- Keep this a marketing site; no product code lives here.
- MIT licensed.

## The board

This repo has no initiative and no project of its own in Linear. Its work lives under the
**`loombox`** initiative in the `linear.app/fiorelorenzo` workspace, tagged with the repo
label **`loombox-landing`**, and it is read and written through the `linear-fiorelorenzo`
MCP server. Three Linear workspaces are reachable from this box, so before the first write
in a session make a read call (`list_projects` or `list_issues`) and check the workspace
name that comes back.

Every issue sits in a project **and** in a milestone, carries one `type` label, one `repo`
label, at least one `area:` label and a priority. No exceptions, including an issue filed in
the middle of something else. There is no landing milestone today, so the first issue that
needs one creates it inside the release that ships the change rather than sitting loose. See
the loombox repository's `AGENTS.md` for the full label taxonomy and how priority and
estimate work as native fields.

`area:*` values here: `landing`, `copy`, `design`, `deploy`.

## Pull requests

One shape for every repo of mine: `skill://opening-a-pull-request`. The issue and its
neighbours before the branch, the branch name Linear renders on the issue, Conventional
Commits in the first person, the body's four sections from
`.github/PULL_REQUEST_TEMPLATE.md` (Screenshots is never deleted), an independent review
applied in a second commit, and the card closed only against evidence. What is true only
here:

- **Scopes** for the subject: this repo's own `area:*` labels (`landing`, `copy`,
  `design`, `deploy`); nothing in the commit history so far has needed a narrower one.
- **Required check**: none. `main`'s only ruleset rules are `deletion` and
  `non_fast_forward`, so no status check is required and a direct push to `main` is
  allowed.
- **Merge**: `main` takes direct pushes; open a PR only when a change actually wants
  review. Squash, merge and rebase are all enabled and auto-merge is off, so merge by
  hand once review is done: `gh pr merge <n> --squash --delete-branch` (squash keeps
  the flat history a direct push would have left; `delete_branch_on_merge` is off
  repo-wide, so pass `--delete-branch` yourself). Afterward bring the local trunk back
  with `git checkout main && git pull --ff-only`.

## Writing style

Repo-facing text (issues, PRs, commits, comments) is first person as Lorenzo, in English,
plain prose, Conventional Commits. No em dashes, no puffery, no emoji.
