@AGENTS.md

## Claude Code specific

Build conventions and brand direction are in `AGENTS.md`, imported above. This is a
SvelteKit marketing site.

- Use **superpowers:brainstorming** before designing new pages or messaging, and lean on
  the frontend-design approach for the UI.
- Use **superpowers:verification-before-completion** and the **run** skill to build and
  view the site before claiming a change works.
- Deploy target is **prodbox** (adapter-node + Docker + Caddy on `loombox.dev`), exactly
  like pitchbox and embertold — mirror that setup.
- Pull brand/voice from the product spec (`SPEC.md` §4/§17 in the loombox repo); don't
  invent positioning that contradicts it (self-host is permanent and free).
