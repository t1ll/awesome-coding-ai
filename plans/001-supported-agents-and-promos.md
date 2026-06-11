# Plan 001: Add vercel-labs/skills supported agents and a live-promo column to the list

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat caee681..HEAD -- README.md lib/parseReadme.ts app/components/ToolList.tsx CONTRIBUTING.md`
> NOTE: `README.md` is expected to have small uncommitted edits relative to
> `caee681` (two rows near the bottom were reworded). The "Current state"
> excerpts below reflect the **working tree**, not the commit. Compare against
> the excerpts; on a mismatch with the excerpts themselves, STOP.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: LOW
- **Depends on**: none
- **Category**: direction
- **Planned at**: commit `caee681` (working tree), 2026-06-10

## Why this matters

This repo is both an awesome-list README and the data source for the
awesome-coding-ai website (the README table is parsed at build time and
rendered as the tool list). The list is missing ~45 coding agents that the
vercel-labs/skills CLI supports, and the site's value proposition ("hit your
usage limit? try one of these") gets much stronger if each tool shows its
current promotion (free months, bonus tokens, included models) in the row,
between the tool name and the "Try →" button. All promo facts below were
researched on **2026-06-10** and are inlined — do NOT research or invent promo
text yourself.

## Current state

- `README.md` (lines 15–53) — markdown table `| Name | Tags | Notes |` with 36
  tool rows plus a final italic "*Add your tool here*" template row. This
  table is the single source of truth for the website.
- `lib/parseReadme.ts` — parses the README table into `Tool[]` at build time.
  **It has a latent bug**: cells are split with
  `.filter((cell) => cell !== "")` (lines 37–40), so a row whose Tags AND
  Notes are both empty (currently Cline and GitHub Copilot) collapses to one
  cell, fails the `cells.length >= 2` check, and silently disappears from the
  site. A row with notes but no tags would mis-assign notes into the tags
  column. Adding a 4th column makes this shifting worse, so this plan fixes
  the parser to be positional.

  Current code, `lib/parseReadme.ts:36-45`:
  ```ts
  if (inTable && headerPassed && line.startsWith("|")) {
    const cells = line
      .split("|")
      .map((cell) => cell.trim())
      .filter((cell) => cell !== "");

    if (cells.length >= 2) {
      const nameCell = cells[0];
      const tagsCell = cells[1] || "";
      const notesCell = cells[2] || "";
  ```

- `app/components/ToolList.tsx` — renders each row as a clickable
  `motion.a` with a 3-column md grid: tags | name+notes | "Try →" button.
  `ToolList.tsx:44`:
  ```
  md:grid md:grid-cols-[minmax(140px,200px)_1fr_auto] md:items-center md:gap-6
  ```
  The `Tool` interface is **duplicated** in both `lib/parseReadme.ts:4-9` and
  `app/components/ToolList.tsx:5-10` (`name`, `url`, `tags`, `notes`). Both
  copies must be updated identically.
- `app/page.tsx` — calls `parseReadme()` and passes tools to `<ToolList>`. No
  change needed here.
- `CONTRIBUTING.md` — documents the 3-column table format and tags; needs the
  new Promo column documented.
- Styling conventions: Tailwind utility classes inline; the accent color is
  available as `text-accent` (orange, see usage in `app/page.tsx:51` and
  `ToolList.tsx:58`); small/meta text uses `text-[13px] ... font-mono`
  (`ToolList.tsx:62`). Match these.
- There are **no tests** in this repo. Verification is typecheck-free
  (`tsc` runs inside `next build`), lint, build, and a parse-count check.

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Install | `bun install` | exit 0 |
| Lint | `bun run lint` | exit 0 |
| Build (includes typecheck) | `bun run build` | exit 0, "Compiled successfully" |
| Parse check | `bun -e 'const {parseReadme}=await import("./lib/parseReadme.ts");const t=parseReadme();console.log(t.length, t.filter(x=>x.promo).length)'` | `82 17` (after all steps) |

Use Bun, not npm (repo has `bun.lock`).

## Scope

**In scope** (the only files you may modify):
- `README.md` (table section and the tag-definitions list below it only)
- `lib/parseReadme.ts`
- `app/components/ToolList.tsx`
- `CONTRIBUTING.md`
- `plans/README.md` (status update at the end)

**Out of scope** (do NOT touch):
- `app/page.tsx`, `app/layout.tsx`, `app/globals.css` — no layout/style-sheet
  changes needed.
- `assets/`, `public/` — no new logos or icons.
- The README header, badge, intro blockquote, and the prose below the table
  (except the one footnote addition in Step 2).
- Do not re-tag, re-word, or remove any EXISTING row's tags/notes beyond what
  Step 2 specifies (promo column only).

## Git workflow

- Branch: `oh-add-supported-agents-promos` (repo convention: `oh-` prefix).
- NOTE: `README.md` already has small uncommitted edits in the working tree.
  Keep them — they are wanted. Your table replacement in Step 2 already
  incorporates them.
- Commit style (from `git log`): short lower-case imperative, e.g.
  `added opencode, cerebras code, cmux, and scott ai`.
- Do NOT push or open a PR unless the operator asks.

## Steps

### Step 1: Make `parseReadme` positional and add the `promo` field

In `lib/parseReadme.ts`:

1. Add `promo: string;` to the `Tool` interface.
2. Replace the cell-splitting block (shown in "Current state") with positional
   parsing — split on `|`, drop the first and last fragments (the text before
   the leading pipe and after the trailing pipe), and do NOT filter empty
   cells:

   ```ts
   if (inTable && headerPassed && line.startsWith("|")) {
     const cells = line
       .split("|")
       .slice(1, -1)
       .map((cell) => cell.trim());

     if (cells.length >= 1) {
       const nameCell = cells[0];
       const tagsCell = cells[1] || "";
       const notesCell = cells[2] || "";
       const promoCell = cells[3] || "";
   ```
3. Include `promo: promoCell` in the pushed object.

Mirror the interface change in `app/components/ToolList.tsx` (add
`promo: string;` to its local `Tool` interface).

**Verify**: `bun -e 'const {parseReadme}=await import("./lib/parseReadme.ts");const t=parseReadme();console.log(t.length, t.some(x=>x.name==="Cline"))'`
→ `37 true` (37 = all 36 rows + template row now parse; Cline no longer dropped; README not yet expanded).

### Step 2: Replace the README table

In `README.md`, replace the ENTIRE table (the header row, separator row, and
every row through the italic template row — currently lines 15–53) with the
table below, verbatim. It is the existing 36 rows (tags/notes unchanged,
promos added to 8 of them) merged alphabetically with 45 new agents (9 with
promos). Column alignment/padding is not required — single spaces around `|`
are fine; GitHub renders it identically.

```markdown
| Name | Tags | Notes | Promo |
|------|------|-------|-------|
| [AdaL](https://sylph.ai/) | cli | Self-evolving agent by SylphAI | |
| [AI-Autocomplete](https://marketplace.visualstudio.com/items?itemName=fsiovn.ai-autocomplete) | extension | Alternative inline suggestion for GitHub Copilot | |
| [AiderDesk](https://github.com/hotovo/aider-desk) | gui, oss | Desktop GUI for Aider | |
| [Amp](https://ampcode.com/) | cli | Built by Sourcegraph | $10/day free usage |
| [Antigravity](https://antigravity.google/) | ide | Built by Google | |
| [Anything](https://www.createanything.com/) | app-builder | | |
| [AstrBot](https://github.com/AstrBotDevs/AstrBot) | oss | Chatbot platform with agent skills | |
| [Augment Code](https://www.augmentcode.com/) | cli | | 30k-credit free trial |
| [Autohand Code](https://autohand.ai/code/) | cli, oss | Free with your own keys or local models | |
| [Bolt AI](https://bolt.new/) | app-builder | | |
| [Cerebras Code](https://www.cerebras.ai/blog/introducing-cerebras-code) | cli | | |
| [Claude Code](https://www.claude.com/product/claude-code) | own-model, cli, background | Built by Anthropic | Fable 5 included in plans until Jun 22 |
| [Cline](https://cline.bot/) | | | |
| [cmux](https://www.cmux.dev/) | gui | | |
| [Code Studio](https://www.syncfusion.com/code-studio/) | ide | Built by Syncfusion | |
| [CodeArts Agent](https://www.huaweicloud.com/intl/en-us/product/codearts.html) | ide | Built by Huawei Cloud | |
| [CodeBuddy](https://www.codebuddy.ai/) | ide | Built by Tencent | 50 free Craft credits/day |
| [CodeMaker AI](https://codemaker.ai/) | extension | | |
| [Codex](https://openai.com/codex/) | own-model, cli, background | Built by OpenAI | |
| [Command Code](https://commandcode.ai/) | cli | | |
| [Conductor](https://conductor.build/) | gui | | |
| [Continue](https://continue.dev/) | cli, oss | | |
| [Cortex Code](https://www.snowflake.com/en/product/features/cortex/) | cli | Built by Snowflake | |
| [Crush](https://github.com/charmbracelet/crush) | cli, oss | Built by Charm | |
| [CTO.new](https://cto.new/) | gui | | |
| [Cursor](https://cursor.com/) | ide, background | | Free year of Pro for students |
| [Deep Agents](https://github.com/langchain-ai/deepagents) | oss | Built by LangChain | |
| [Devin](https://devin.ai/) | background | Built by Cognition | |
| [Dexto](https://github.com/truffle-ai/dexto) | cli, oss | Agent harness by Truffle AI | |
| [Emergent](https://emergent.sh/) | app-builder | | |
| [Factory](https://factory.ai/) | cli, background | | 10M free tokens for new signups |
| [Firebender](https://firebender.com/) | extension | Agent for Android Studio | |
| [ForgeCode](https://forgecode.dev/) | cli | | |
| [Gemini CLI](https://geminicli.com/) | own-model, cli | | Free 1,000 reqs/day until Jun 18 |
| [GitHub Copilot](https://github.com/features/copilot) | | | |
| [Google AI Studio](https://aistudio.google.com/) | app-builder | | |
| [Goose](https://block.github.io/goose/) | cli, oss | Built by Block | |
| [Hermes Agent](https://hermes-agent.nousresearch.com/) | cli, oss | Built by Nous Research | |
| [IBM Bob](https://www.ibm.com/products/bob) | ide | Built by IBM | |
| [inference.sh](https://inference.sh/) | gui, oss | | |
| [Jazz](https://github.com/lvndry/jazz) | cli, oss | | |
| [Jules](https://jules.google/) | background | Async coding agent from Google Labs | |
| [Junie](https://www.jetbrains.com/junie/) | extension | Built by JetBrains | 30-day AI Pro trial |
| [Kilo Code](https://kilo.ai/) | oss | | |
| [Kimi Code](https://www.kimi.com/code) | own-model, cli, oss | Built by Moonshot AI | Top up $5, get a $5 voucher |
| [Kiro](https://kiro.dev/) | ide | Built by Amazon Web Services | 500 bonus credits for new users |
| [Kode](https://github.com/shareAI-lab/kode) | cli, oss | | |
| [Lingma](https://lingma.aliyun.com/) | extension | Built by Alibaba | |
| [Lovable](https://lovable.dev/) | app-builder | | |
| [Magic Patterns](https://www.magicpatterns.com/) | app-builder | | |
| [MCPJam](https://www.mcpjam.com/) | oss | MCP testing platform with skills support | |
| [Mistral Vibe](https://mistral.ai/products/vibe/code/) | own-model, cli, oss | Built by Mistral | Devstral 2 API free at launch |
| [Moxby](https://moxby.com/) | gui | Wraps Claude Code, Codex & Gemini | |
| [Mux](https://github.com/coder/mux) | gui, oss | Built by Coder | |
| [Neovate](https://neovateai.dev/) | cli, oss | | |
| [Ona](https://ona.com/) | background | Formerly Gitpod | $10 free credits to start |
| [OpenClaw](https://openclaw.ai/) | oss | Personal agent that also codes | |
| [OpenCode](https://opencode.ai/) | cli, oss | | Go plan $5 first month |
| [OpenHands](https://www.openhands.dev/) | background, oss | | $20 free cloud credits |
| [Orchids](https://www.orchids.app/) | app-builder | | |
| [Pi](https://github.com/badlogic/pi-mono) | cli, oss | | |
| [Pochi](https://getpochi.com/) | extension, oss | Built by TabbyML | |
| [PromptScript](https://getpromptscript.dev/) | oss | Compiles .prs prompts to agent configs | |
| [Qoder](https://qoder.com/) | ide | Built by Alibaba | Ultimate tier 50% off (limited time) |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | cli, oss | Built by Alibaba | |
| [Reasonix](https://reasonix.homes/) | cli, oss | DeepSeek-native terminal agent | |
| [Replit](https://replit.com/) | app-builder | | |
| [Roo Code](https://roocode.com/) | oss | | |
| [Rovo Dev](https://www.atlassian.com/software/rovo-dev) | cli | | |
| [Scott AI](https://www.tryscott.ai/) | gui | | |
| [Tabnine](https://www.tabnine.com/) | extension | | |
| [Terragon](https://www.terragonlabs.com/) | gui | | |
| [Terramind](https://nucleus.terramind.com/) | cli | | |
| [Tinycloud](https://tinycloud.sh/) | cli | Agent CLI for deep video work | |
| [Trae](https://www.trae.ai/) | ide | Built by ByteDance | Pro $3 first month |
| [v0](https://v0.app/) | app-builder | Built by Vercel | |
| [Vibe Kanban](https://www.vibekanban.com/) | gui | | |
| [Warp](https://www.warp.dev/) | cli | | |
| [Windsurf](https://windsurf.com/) | ide | Acquired by Cognition | ~50% off Pro for students |
| [Zed](https://zed.dev/) | ide | Technically a code editor, not an IDE | |
| [Zencoder](https://zencoder.ai/) | extension | | |
| *[Add your tool here](https://example.com/)* | *tags* | *notes* | |
```

Immediately after the table (before the "Please open a PR…" line), add this
footnote paragraph:

```markdown
Promos last checked **June 10, 2026** — these offers change quickly; please open a PR if one has expired or a new one launched.
```

Also extend the tag-definitions bullet list at the bottom of the README with
two entries (it already uses these tags without defining them):

```markdown
- **oss**: Open source
- **extension**: An extension/plugin for an editor or IDE not owned by the product
```

**Verify**: `bun -e 'const {parseReadme}=await import("./lib/parseReadme.ts");const t=parseReadme();console.log(t.length, t.filter(x=>x.promo).length)'`
→ `82 17`

### Step 3: Render the promo in `ToolRow`

In `app/components/ToolList.tsx`:

1. Change the row grid (line 44) from
   `md:grid-cols-[minmax(140px,200px)_1fr_auto]` to
   `md:grid-cols-[minmax(140px,200px)_1fr_auto_auto]`.
2. Between the "Name & Notes column" div and the "Try button" div, add a promo
   element occupying the new column — right-aligned next to the button,
   visible on mobile too, styled like the existing meta text but in the
   accent color:

   ```tsx
   {/* Promo column */}
   <div className="flex items-center md:justify-end">
     {tool.promo && (
       <span className="text-[12px] font-mono text-accent">
         {tool.promo}
       </span>
     )}
   </div>
   ```

   Keep the empty wrapper div even when there's no promo so the grid column
   count stays consistent across rows.

**Verify**: `bun run build` → exit 0. Then `bun run dev` and load
http://localhost:3000 — the Claude Code row shows "Fable 5 included in plans
until Jun 22" in orange between the name and the "Try →" button; rows without
promos look unchanged; on a narrow viewport the promo appears stacked within
the row. Stop the dev server afterwards.

### Step 4: Document the Promo column in CONTRIBUTING.md

In the "Table Format" table of `CONTRIBUTING.md`, add a row:

```markdown
| **Promo** | Optional | Short live promotion, e.g. "Go plan $5 first month" — include only verifiable, current offers |
```

Update the example row to four columns:

```markdown
| [My Tool](https://mytool.dev/) | cli, background | Built by Acme Corp | 1 month free |
```

And add `oss` and `extension` to the "Available Tags" list (same one-line
definitions as in Step 2).

**Verify**: `bun run lint` → exit 0.

## Test plan

No test framework exists in this repo; do not introduce one. The parse-count
one-liner in "Commands you will need" is the regression check: `82 17` proves
all 82 rows parse (including previously-dropped empty-cell rows) and exactly
17 promos are wired through.

## Done criteria

ALL must hold:

- [ ] `bun run build` exits 0
- [ ] `bun run lint` exits 0
- [ ] Parse check prints `82 17`
- [ ] `grep -c '^|' README.md` prints `84` (header + separator + 82 rows)
- [ ] `git status` shows changes ONLY in `README.md`, `lib/parseReadme.ts`,
      `app/components/ToolList.tsx`, `CONTRIBUTING.md`, `plans/README.md`
- [ ] `plans/README.md` status row updated

## STOP conditions

Stop and report back (do not improvise) if:

- `lib/parseReadme.ts` or `ToolList.tsx` no longer match the "Current state"
  excerpts (someone changed the parser or row layout since 2026-06-10).
- The README table in the working tree has gained rows that are NOT in the
  replacement table above (a PR landed in between) — report the extra rows
  instead of dropping them.
- You are tempted to edit any promo text, add an agent not listed here, or
  re-research promos: don't. Promo facts are frozen as of 2026-06-10.
- `bun run build` fails twice for reasons unrelated to your change.

## Maintenance notes

- **Promos rot.** Several have explicit expiry: Claude Code (Jun 22, 2026),
  Gemini CLI (Jun 18, 2026), Mistral Vibe ("launch period"), Qoder ("limited
  time"). Within ~2 weeks of landing, the Jun-dated ones must be removed.
  A follow-up `/improve plan` for a "promo freshness" check (CI or scheduled
  agent that flags dated promos past their date) is the natural next step.
- **Deliberately excluded** from the supported-agents import (do not re-add
  without new evidence): iFlow CLI (service shut down 2026-04-17), Loaf (no
  findable homepage), "Universal" (an install target, not a product), and
  duplicates of existing rows: Droid (= Factory's CLI), Devin for Terminal
  (= Devin), Kiro CLI (= Kiro), Antigravity CLI (= Antigravity), Qoder CN /
  Trae CN (regional variants), Zenflow (= Zencoder).
- **Loose fits kept by request**: AstrBot (chatbot platform), MCPJam (MCP
  testing tool), PromptScript (prompt compiler), Tinycloud (video-work CLI),
  Moxby (general AI teammate), Dexto (agent harness). The notes column
  signals this; a reviewer may choose to cut them.
- The italic "*Add your tool here*" template row intentionally parses as a
  tool and renders on the site linking example.com — pre-existing behavior,
  left unchanged.
- The `Tool` interface remains duplicated in `lib/parseReadme.ts` and
  `app/components/ToolList.tsx`; consolidating it was deferred to keep this
  diff focused.
- Reviewer should spot-check 3–4 of the less-known URLs (e.g. reasonix.homes,
  commandcode.ai, nucleus.terramind.com, sylph.ai) — all were verified via
  the vercel-labs/skills PRs or web search on 2026-06-10, but small sites move.
