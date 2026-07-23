# Coding-agent promotions audit

Research date: **July 23, 2026** (America/Vancouver)

## Scope and method

The source inventory is the 75 individual agent targets in
[vercel-labs/skills, “Supported Agents”](https://github.com/vercel-labs/skills#supported-agents).
Comma-separated entries in that table were audited individually. Only first-party
product sites, documentation, blogs, support pages, official repositories, and
official social posts were used.

“Limited-time promotion” means a vendor calls an offer temporary, gives it an
end date, or says it lasts while promotional inventory remains. Ordinary free
tiers, standard trials, referral programs, education/open-source programs, and
permanent price changes are separated below. “No promotion found” is not proof
that a private, regional, in-product, or email-only offer does not exist.

## Same-day live re-verification

A second first-party check on July 23 reconciled the research below with the
live README. Earlier findings remain for provenance, but the current Promo
column publishes only the 14 source-linked claims in the final recommendation
table.

| Agent | Re-verification outcome |
|---|---|
| Codex | Removed. The February announcement is stale as current evidence: the [current Codex pricing page](https://chatgpt.com/codex/pricing/) and [Help Center](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan) no longer advertise 2x limits. |
| Cursor | Removed. The 2x pool is a permanent eligible-plan change, not a promotion. |
| Kimchi | Removed. Current pricing supports a free Community tier, not the old $50 launch credit; the evergreen tier is not a promotion. |
| OpenHands | Removed. The July 2025 post called the $20 grant limited-time, while current product and documentation no longer corroborate it. |
| Windsurf | Removed. The student URL redirects to Devin Desktop and no longer supports the discount. |
| Kilo Code | Corrected to Laguna S 2.1 and Hy3, which the current free-model catalog lists; Dola Seed is no longer listed. |
| Other published rows | Tightened eligibility, price, credit, trial, or end-date wording to match the linked first-party source. |

## Publishable current promotions

### Claude Code: 50% higher weekly usage through August 19

- **Offer:** weekly Claude Code usage limits are 50% higher. Five-hour limits
  are unchanged.
- **Period:** May 13 through August 19, 2026 at 11:59 PM PT.
- **Eligibility:** Pro, Max, Team, and legacy seat-based Enterprise users.
  Free plans and consumption-based Enterprise seats are excluded.
- **Coverage:** Claude Code in the CLI, IDE extensions, desktop, and web.
  It is applied automatically. Claude chat, mobile, and Cowork limits are
  unchanged.
- **Source:** [Claude Help Center](https://support.claude.com/en/articles/15910845-claude-code-may-august-2026-weekly-limits-promotion).

Suggested site copy: **50% more weekly usage for eligible plans through Aug 19**

### GitHub Copilot: bonus organization credits and Sonnet 5 pricing

- **Included-credit promotion:** existing Copilot Business and Enterprise
  customers receive larger monthly AI-credit pools from June 1 through
  September 1, 2026. Business receives 3,000 credits per user instead of the
  standard 1,900; Enterprise receives 7,000 instead of 3,900. Credits are
  pooled at the billing-entity level and unused credits do not roll over.
  [Official billing documentation](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).
- **Claude Sonnet 5 pricing:** through August 31, 2026, GitHub prices Sonnet 5
  at $2.00 per million input tokens, $0.20 cached input, $2.50 cache write, and
  $10.00 output.
  [Official model pricing](https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing).

Suggested site copy: **Existing Business/Enterprise customers get higher
included credits through Sep 1**

### Qoder: five simultaneous model/credit campaigns

Qoder and Qoder CLI share these campaigns. Qoder CN does not: its Individual
Pro free promotion ended May 20, 2026, according to
[Alibaba Cloud billing documentation](https://www.alibabacloud.com/help/en/lingma/product-overview/billing-description).

1. **Ultimate free-call packs:** all Personal-plan users can claim 200 free
   Ultimate calls. After that claim, paid or previously paid users, plus users
   selected by Qoder, automatically receive a periodically reset 1,000-call
   booster. Ends July 30, 2026 at 23:59 UTC+8; inventory is first-come,
   first-served. [Official terms](https://docs.qoder.com/events/ultimatefreecalls).
2. **Ultimate discount:** from July 7, 2026, Ultimate costs 50% fewer credits
   on individual plans (Free, Pro, Pro+, Ultra) and 20% fewer on Teams and
   Enterprise. End date TBD. Experts mode and some sub-agent calls are excluded.
   [Official terms](https://docs.qoder.com/events/ultimatediscount).
3. **Cantus launch discount:** from July 19, 2026, Cantus costs 50% fewer
   credits on individual plans and 20% fewer on enterprise plans. End date TBD.
   [Official terms](https://docs.qoder.com/events/cantuslaunch).
4. **Qwen3.8-Max-Preview:** from July 19, 2026, the model is 90% off during
   regular hours and 98% off from 14:00–00:00 UTC. Eligible users are Pro Trial,
   Pro, Pro+, Ultra, Teams, and Enterprise. End date TBD.
   [Official terms](https://docs.qoder.com/events/qwen-max-preview).
5. **Premium-model off-peak rates:** Qwen3.7-Max is 50% off in regular hours
   and 80% off off-peak; Qwen3.7-Plus is 60% off off-peak. Those offers have no
   announced end date. GLM-5.2 has a reduced off-peak multiplier through
   August 15, 2026 at 00:00 UTC. Pro Trial and paid users are eligible.
   [Official rate table](https://docs.qoder.com/events/offpeakrate).

Suggested site copy: **200 free Ultimate calls for Personal plans through Jul 30**

### Devin Desktop / CLI: SWE-1.7 free preview

- **Offer:** Cognition’s SWE-1.7 model is free during its preview.
- **Period:** through August 8, 2026.
- **Coverage:** the current official model page explicitly lists Devin Desktop
  and Devin CLI. The old Windsurf models URL redirects to this Devin
  documentation, so the offer is attached only to Devin for Terminal.
- **Source:** [official Devin model documentation](https://docs.devin.ai/desktop/models).

Suggested site copy: **SWE-1.7 free preview through Aug 8**

### Kilo Code: two currently free models

- **Offer:** the current catalog lists Laguna S 2.1 and Hy3 as free. Dola Seed
  is no longer listed, and the same-day Next-Edit offer is omitted.
- **Source:** [current Kilo free-model catalog](https://kilo.ai/landing/free-models).

Suggested site copy: **Laguna S 2.1 and Hy3 currently free**

### Kiro CLI: startup promotion through July 31

- **Offer:** eligible early-stage through Series A startups can apply for
  complimentary Kiro Pro+ and up to one year of promotion credits. Credit
  amounts depend on the Starter, Growth, or Scale tier.
- **Application period:** April 7 through July 31, 2026.
- **Eligibility:** an AWS account and matching startup-domain email are
  required; applicants must be at least 18. The official terms exclude a long
  list of countries and regions. Credits expire one year after issuance, do
  not cover overages, and the account switches to standard Pro+ billing after
  exhaustion or expiry.
- **Source:** [official startup promotion terms](https://kiro.dev/startups/terms/).

Suggested site copy: **Eligible AWS startups: complimentary Pro+ and 1 year of
promo credits; apply by Jul 31**

### OpenCode: six Zen models free for a limited time

- **Offer:** DeepSeek V4 Flash Free, MiMo-V2.5 Free, Laguna S 2.1 Free, North
  Mini Code Free, Nemotron 3 Ultra Free, and Big Pickle are free through
  OpenCode Zen for a limited time.
- **Period:** no end date is published.
- **Important term:** the page warns that data from these free endpoints may be
  retained or used to improve models; terms vary by provider.
- **Source:** [OpenCode Zen documentation](https://opencode.ai/docs/zen/).

Suggested site copy: **6 Zen models free for a limited time**

### OpenHands: old $20 credit claim removed

- **Earlier evidence:** a July 2025
  [OpenHands announcement](https://www.openhands.dev/blog/access-state-of-the-art-llm-models-at-cost-via-openhands-gui-and-cli)
  described $20 in Cloud credits as available “for a limited time.”
- **Re-verification:** current product and documentation no longer corroborate
  that grant, so it is not publishable in the live Promo column.

### ZCode: 1.5x GLM quota through July 31

- **Subscriber offer:** through July 31, 2026, GLM Coding Plan quota used for
  GLM-5.2 in ZCode is discounted from 3x to 2x in peak hours and from 1x to
  0.67x off-peak, producing roughly 1.5x effective quota.
- **New-user offer:** first-time ZCode users receive a five-day trial with
  3 million GLM-5.2 tokens and 2 million GLM-5-turbo tokens per day. Those
  daily quotas exist only during the five-day trial.
- **Source:** [official ZCode documentation](https://zcode.z.ai/en/docs/welcome).

Suggested site copy: **~1.5x GLM quota for Coding Plan subscribers through Jul
31; 5-day first-user trial**

### Codex: old broad promotion removed

1. OpenAI’s February
   [Codex app announcement](https://openai.com/index/introducing-the-codex-app/)
   described Free/Go inclusion and doubled paid-plan limits as temporary. The
   [current Codex pricing page](https://chatgpt.com/codex/pricing/) and
   [Help Center](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan)
   no longer advertise 2x limits. The broad claim is therefore stale and removed.
2. JetBrains AI includes Codex for free until its allocated promotional credits
   are exhausted, including on JetBrains’ free tier and trial.
   [JetBrains announcement](https://blog.jetbrains.com/ai/2026/01/codex-in-jetbrains-ides/).
3. Eligible ChatGPT Business workspaces can receive $100 for each new
   Codex-only team member who joins and starts using Codex, up to $500 per
   workspace, for a limited time. This is now narrowly grandfathered:
   since June 24, new Codex-only seats are unavailable to new Business
   workspaces and to existing workspaces that had not added a Codex seat or
   pending invite before that date. Eligible pre-June 24 workspaces may still
   add seats. The original promotion article remains live, but its detailed
   terms link now redirects to general Business documentation.
   [Official promotion article](https://openai.com/index/codex-flexible-pricing-for-teams/)
   and [current eligibility restriction](https://help.openai.com/en/articles/8792828).

The narrower JetBrains, grandfathered-team, and US/Canada student programs are
not used as the general Codex Promo cell.

## Requested current benefit that is not limited-time

### Cursor: doubled included usage

- **Offer:** Cursor doubled included usage on all individual and Teams plans for
  Grok, Composer, and new Cursor models.
- **Announced:** July 21, 2026.
- **Period:** no end date. Cursor staff explicitly clarified that the change is
  permanent, so it should not be described as a limited-time promotion.
- **Sources:** [official Cursor X post](https://x.com/cursor_ai/status/2079615536963485815)
  and [Cursor staff clarification](https://forum.cursor.com/t/now-available-2x-included-usage-your-plan-now-includes-2x-usage-for-all-cursor-models-composer-2-5-and-cursor-grok-4-5/166007/4).

This permanent benefit is not used in the Promo column.

## Final site-copy recommendations

These are the recommended short labels after incorporating all first-party
findings. They prioritize offers that are current, meaningful, and short enough
for the existing Promo column.

| Agent | Recommendation | Exact short copy |
|---|---|---|
| Augment | Publish | `30,000-credit trial (card required)` |
| Claude Code | Publish | `50% more weekly usage for eligible plans through Aug 19` |
| CodeBuddy | Publish | `Pro $9.95/mo (was $19.90)` |
| Devin for Terminal | Publish | `SWE-1.7 free preview through Aug 8` |
| GitHub Copilot | Publish | `Existing Business/Enterprise customers get higher included credits through Sep 1` |
| IBM Bob | Publish | `30-day trial with 40 Bobcoins` |
| Junie | Publish | `30-day JetBrains AI Pro trial` |
| Kilo Code | Publish | `Laguna S 2.1 and Hy3 currently free` |
| Kiro CLI | Publish startup campaign now; reassess after Jul 31 | `Eligible AWS startups: complimentary Pro+ and 1 year of promo credits; apply by Jul 31` |
| Ona | Publish | `Up to $200/mo for approved OSS maintainers and contributors` |
| OpenCode | Publish | `6 Zen models free for a limited time` |
| Qoder | Publish | `200 free Ultimate calls for Personal plans through Jul 30` |
| Rovo Dev | Publish | `30-day Standard upgrade trial with 2,000 credits/mo` |
| ZCode | Publish | `~1.5x GLM quota for Coding Plan subscribers through Jul 31; 5-day first-user trial` |

Do **not** publish Kilo Next-Edit beyond July 23, the old Kiro 500-credit
new-user bonus, the old Kimi voucher, Trae’s old first-month price, Amp’s
restricted legacy grant, expired Claude/Gemini/Warp offers, or the removed
Codex, Cursor, Kimchi, OpenHands, and Windsurf claims recorded above.

## Current signup, plan, education, and community offers

These are real current benefits, but they are not date-bounded campaigns.
Whether to show them depends on whether the site’s Promo column is meant to
include standard trials and eligibility programs.

| Agent | Current offer | Terms/source |
|---|---|---|
| Augment | 30,000-credit trial | Valid payment method required; [official pricing announcement](https://www.augmentcode.com/blog/augment-codes-pricing-is-changing) |
| IBM Bob | 30-day trial with 40 Bobcoins | [Official trial page](https://bob.ibm.com/trial) |
| CodeBuddy | Pro displays $9.95/month, down from $19.90 | [Official pricing](https://www.codebuddy.ai/docs/ide/Account/pricing) |
| Codex | $100 / 2,500 credits for verified degree students in the US or Canada | Free, Go, Plus, and Pro eligible; credits expire 12 months after grant; [terms](https://help.openai.com/en/articles/20001147-codex-credits-for-students-terms-of-service) |
| Junie | 30-day JetBrains AI Pro trial | [Official docs](https://junie.jetbrains.com/docs/junie-ide-plugin.html) |
| Kilo Code | Kilo Pass gives first-time monthly subscribers 50% bonus credits in month one; annual plans receive a 50% monthly bonus | Monthly bonus expires each month; [pricing](https://kilo.ai/pricing/kilo-pass), [announcement](https://blog.kilo.ai/p/introducing-kilo-pass) |
| Kimchi | Free Community tier | The old $50 launch credit is not supported by current pricing, and the evergreen free tier is not published as a promotion; [pricing](https://kimchi.dev/pricing) |
| Kiro CLI | First paid upgrade receives $20 / 1,000 bonus credits; eligible students receive 1,000 credits/month for one year | Paid-upgrade bonus requires social login or Builder ID. Student offer runs from Mar 16 until AWS discontinues it, is limited to listed US/Canadian universities and residents age 18+, and requires SheerID; [paid-upgrade announcement](https://kiro.dev/blog/new-paid-tier-bonus/), [student terms](https://kiro.dev/students/terms-2026/) |
| Ona | Up to $200/month for approved open-source maintainers and contributors | Application and approval required; [official program](https://ona.com/open-source) |
| Rovo Dev | 30-day Rovo Dev Standard upgrade trial with 2,000 credits/month | Standard product trial; [Atlassian billing docs](https://support.atlassian.com/subscriptions-and-billing/docs/how-billing-works-for-rovo-dev-standard/) |
| Windsurf | No current publishable promotion | The former student URL redirects to Devin Desktop and no longer supports the discount. |

Amp’s historical “$10/day free usage” should be removed or qualified. Amp says
new admission to Amp Free is closed and grants have been paused or reduced for
some existing users. A public code page advertises a five-day boost, but does
not state general eligibility or redemption availability.
[Official status](https://ampcode.com/news/amp-free-is-ad-free).

## Complete supported-agent audit

“Homepage + commercial surfaces” means the official homepage/repository plus
official pricing, docs, blog, changelog, support, or event pages where the
vendor exposes them. Entries tied to a promotion above link back to its source.

| Agent (`--agent`) | Stable official URL | Result on July 23, 2026 / official surfaces checked |
|---|---|---|
| AiderDesk (`aider-desk`) | [Repository](https://github.com/hotovo/aider-desk) | No current limited-time promotion found; repository/releases checked |
| Amp (`amp`) | [Amp](https://ampcode.com/) | Restricted legacy grant, not a general promotion; homepage/news/pricing checked |
| Replit (`replit`) | [Replit](https://replit.com/) | No current limited-time promotion found; homepage/pricing/blog checked |
| Universal (`universal`) | [Registry entry](https://github.com/vercel-labs/skills#supported-agents) | Adapter target, not a distinct commercial product |
| Antigravity (`antigravity`) | [Antigravity](https://antigravity.google/) | No current limited-time promotion found; homepage/help/Google blog checked |
| Antigravity CLI (`antigravity-cli`) | [Antigravity](https://antigravity.google/) | No current limited-time promotion found; same product surfaces checked |
| AstrBot (`astrbot`) | [Repository](https://github.com/AstrBotDevs/AstrBot) | No current limited-time promotion found; repository/docs checked |
| Autohand Code CLI (`autohand-code`) | [Autohand](https://autohand.ai/code/) | No current limited-time promotion found; homepage/repository checked |
| Augment (`augment`) | [Augment](https://www.augmentcode.com/) | Ongoing 30,000-credit product trial requiring a card; homepage/pricing/blog checked |
| IBM Bob (`bob`) | [IBM Bob](https://www.ibm.com/products/bob) | Ongoing 30-day/40-Bobcoin trial; product/download/trial pages checked |
| Claude Code (`claude-code`) | [Claude Code](https://www.claude.com/product/claude-code) | **Active dated promotion:** 50% higher weekly limits through Aug 19 |
| OpenClaw (`openclaw`) | [OpenClaw](https://openclaw.ai/) | No current limited-time promotion found; homepage/docs/repository checked |
| Cline (`cline`) | [Cline](https://cline.bot/) | No current limited-time promotion found; homepage/pricing/blog/docs checked |
| Dexto (`dexto`) | [Repository](https://github.com/truffle-ai/dexto) | No current limited-time promotion found; repository/docs checked |
| Kimi Code CLI (`kimi-code-cli`) | [Kimi Code docs](https://www.kimi.com/code/docs/en/) | No current first-party confirmation found for the old “top up $5, get $5” copy; product/docs/pricing checked |
| Loaf (`loaf`) | [Repository](https://github.com/levifig/loaf) | No current limited-time promotion found; repository checked |
| Warp (`warp`) | [Warp](https://www.warp.dev/) | No current limited-time promotion found; Feb 2026 cloud-agent bonus expired; pricing/blog checked |
| Zed (`zed`) | [Zed](https://zed.dev/) | No current limited-time promotion found; homepage/pricing/blog checked |
| CodeArts Agent (`codearts-agent`) | [Huawei Cloud](https://www.huaweicloud.com/intl/en-us/product/codearts.html) | No current limited-time promotion found; product/pricing/docs checked |
| CodeBuddy (`codebuddy`) | [CodeBuddy](https://www.codebuddy.ai/) | Current Pro display is $9.95/month, down from $19.90; homepage/pricing checked |
| Codemaker (`codemaker`) | [Codemaker](https://codemaker.ai/) | No current limited-time promotion found; homepage/pricing/docs checked |
| Code Studio (`codestudio`) | [Syncfusion](https://www.syncfusion.com/code-studio/) | No current limited-time promotion found; product/pricing/blog checked |
| Codex (`codex`) | [OpenAI Codex](https://openai.com/codex/) | Broad Free/Go and 2x claim removed as stale after same-day re-verification; narrower JetBrains, grandfathered-team, and student programs are not used in the Promo cell |
| Command Code (`command-code`) | [Command Code](https://commandcode.ai/) | No current limited-time promotion found; homepage/pricing/docs checked |
| Continue (`continue`) | [Continue](https://continue.dev/) | No current limited-time promotion found; homepage/pricing/docs/blog checked |
| Cortex Code (`cortex`) | [Snowflake Cortex](https://www.snowflake.com/en/product/features/cortex/) | No current limited-time promotion found; product/pricing/docs checked |
| Crush (`crush`) | [Repository](https://github.com/charmbracelet/crush) | No current limited-time promotion found; repository/releases checked |
| Cursor (`cursor`) | [Cursor](https://cursor.com/) | 2x included usage is current but permanent, not limited-time |
| Deep Agents (`deepagents`) | [Repository](https://github.com/langchain-ai/deepagents) | No current limited-time promotion found; repository/docs checked |
| Devin for Terminal (`devin`) | [Devin docs](https://docs.devin.ai/desktop/models) | **Active dated promotion:** SWE-1.7 free preview through Aug 8 in Devin Desktop and CLI |
| Droid (`droid`) | [Factory](https://factory.ai/) | No current first-party limited-time promotion found; homepage/pricing/docs/blog checked |
| Eve (`eve`) | [Vercel announcement](https://vercel.com/blog/introducing-eve) | No current limited-time promotion found; announcement/product surfaces checked |
| Firebender (`firebender`) | [Firebender](https://firebender.com/) | No current limited-time promotion found; homepage/pricing/docs checked |
| ForgeCode (`forgecode`) | [ForgeCode](https://forgecode.dev/) | No current limited-time promotion found; homepage/docs/repository checked |
| Gemini CLI (`gemini-cli`) | [Google transition notice](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/) | Consumer service retired June 18, 2026; no active promotion |
| GitHub Copilot (`github-copilot`) | [GitHub Copilot](https://github.com/features/copilot) | **Active dated promotions:** bonus Business/Enterprise AI credits through Sep 1; Sonnet 5 promotional token pricing through Aug 31 |
| Goose (`goose`) | [Goose](https://block.github.io/goose/) | No current limited-time promotion found; docs/repository/blog checked |
| Grok Build (`grok`) | [xAI announcement](https://x.ai/news/grok-build-cli) | No current limited-time promotion found; announcement/docs checked |
| Hermes Agent (`hermes-agent`) | [Hermes](https://hermes-agent.nousresearch.com/) | No current limited-time promotion found; homepage/docs/repository checked |
| inference.sh (`inference-sh`) | [inference.sh](https://inference.sh/) | No current limited-time promotion found; homepage/docs/repository checked |
| Jazz (`jazz`) | [Repository](https://github.com/lvndry/jazz) | No current limited-time promotion found; repository checked |
| Junie (`junie`) | [Junie](https://www.jetbrains.com/junie/) | Ongoing 30-day JetBrains AI Pro trial; product/docs/pricing/blog checked |
| iFlow CLI (`iflow-cli`) | [Shutdown notice](https://vibex.iflow.cn/t/topic/4819) | Discontinued: maintenance stopped Mar 20 and coding service shut Apr 17, 2026 |
| Kilo Code (`kilo`) | [Kilo](https://kilo.ai/) | **Active:** current catalog lists Laguna S 2.1 and Hy3 as free; Dola Seed is no longer listed |
| Kimchi (`kimchi`) | [Kimchi](https://kimchi.dev/) | No current promotion: pricing supports an evergreen free Community tier, not the old $50 launch credit |
| Kiro CLI (`kiro-cli`) | [Kiro](https://kiro.dev/) | **Active dated promotion:** eligible startups can apply through Jul 31 for up to one year Pro+ credits; separate student and first-paid-upgrade offers are ongoing |
| Kode (`kode`) | [Repository](https://github.com/shareAI-lab/kode) | No current limited-time promotion found; repository checked |
| Lingma (`lingma`) | [Lingma](https://lingma.aliyun.com/) | Renamed to Qoder CN; prior Pro free promotion ended May 20 |
| MCPJam (`mcpjam`) | [MCPJam](https://www.mcpjam.com/) | No current limited-time promotion found; homepage/docs/repository checked |
| Mistral Vibe (`mistral-vibe`) | [Mistral Vibe](https://mistral.ai/products/vibe/code/) | No current limited-time promotion found; product/pricing/docs/news checked |
| Moxby (`moxby`) | [Moxby](https://moxby.com/) | No current limited-time promotion found; homepage/pricing/docs checked |
| Mux (`mux`) | [Repository](https://github.com/coder/mux) | No current limited-time promotion found; repository/docs checked |
| OpenCode (`opencode`) | [OpenCode](https://opencode.ai/) | **Active:** six Zen models free for a limited time, end date unstated |
| OpenHands (`openhands`) | [OpenHands](https://www.openhands.dev/) | Old $20 limited-time grant is no longer corroborated by current product or documentation; removed from the Promo column |
| Ona (`ona`) | [Ona](https://ona.com/) | Ongoing open-source credits program, not a dated campaign |
| Pi (`pi`) | [Repository](https://github.com/badlogic/pi-mono) | No current limited-time promotion found; repository/docs checked |
| Qoder (`qoder`) | [Qoder](https://qoder.com/) | **Active:** five model/credit promotions; see detailed section |
| Qoder CN (`qoder-cn`) | [Qoder CN billing](https://www.alibabacloud.com/help/en/lingma/product-overview/billing-description) | No active promotion found; prior Pro free offer ended May 20 |
| Qwen Code (`qwen-code`) | [Repository](https://github.com/QwenLM/qwen-code) | No current limited-time promotion found; repository/docs/releases checked |
| Reasonix (`reasonix`) | [Reasonix](https://reasonix.homes/) | No current limited-time promotion found; homepage/repository checked |
| Rovo Dev (`rovodev`) | [Rovo Dev](https://www.atlassian.com/software/rovo-dev) | Ongoing 30-day Standard upgrade trial with 2,000 credits/month; Apr 30 Opus discount expired |
| Roo Code (`roo`) | [Roo Code](https://roocode.com/) | No current limited-time promotion found; homepage/pricing/docs/blog checked |
| Tabnine CLI (`tabnine-cli`) | [Tabnine](https://www.tabnine.com/) | No current limited-time promotion found; pricing/docs/blog checked |
| Terramind (`terramind`) | [Terramind](https://nucleus.terramind.com/) | No current limited-time promotion found; homepage/docs/repository checked |
| Tinycloud (`tinycloud`) | [Tinycloud](https://tinycloud.sh/) | No current limited-time promotion found; homepage/docs/repository checked |
| Trae (`trae`) | [TRAE](https://www.trae.ai/) | No verifiable current campaign terms found; homepage/pricing/blog checked. Old “$3 first month” copy is obsolete |
| Trae CN (`trae-cn`) | [TRAE CN](https://www.trae.cn/) | No current general coding-agent promotion found; homepage/community official-events section checked |
| Windsurf (`windsurf`) | [Windsurf](https://windsurf.com/) | No current publishable promotion: the former student URL redirects to Devin Desktop, and SWE-1.7 is attached only to Devin for Terminal |
| ZCode (`zcode`) | [ZCode](https://zcode.z.ai/en) | **Active dated promotion:** ~1.5x GLM Coding Plan quota through Jul 31; first-time users also receive a five-day, 5M-token/day trial |
| Zencoder (`zencoder`) | [Zencoder](https://zencoder.ai/) | No current limited-time promotion found; homepage/pricing/docs/changelog checked |
| Zenflow (`zenflow`) | [Zenflow download](https://zencoder.ai/download) | No current limited-time promotion found; product/pricing/docs/changelog checked |
| Neovate (`neovate`) | [Neovate](https://neovateai.dev/) | No current limited-time promotion found; homepage/docs/repository checked |
| Pochi (`pochi`) | [Pochi](https://getpochi.com/) | No current limited-time promotion found; homepage/docs/repository checked |
| PromptScript (`promptscript`) | [PromptScript](https://getpromptscript.dev/) | No current limited-time promotion found; homepage/repository checked |
| AdaL (`adal`) | [SylphAI](https://sylph.ai/) | No current limited-time promotion found; homepage/docs/repository checked |

## Expired or superseded copy to remove

- Claude Code “Fable 5 included until Jun 22” is expired.
- Gemini CLI “1,000 requests/day until Jun 18” is expired, and the consumer
  service transitioned to Antigravity.
- Kiro’s “500 bonus credits for new users” is superseded by the
  $20 / 1,000-credit first-paid-upgrade offer.
- Kimi Code’s “top up $5, get a $5 voucher” could not be confirmed in current
  official product, docs, or pricing pages.
- Qoder’s old 50%-off personal subscription price ended April 30. Do not confuse
  it with the current model-tier discounts.
- Trae’s “Pro $3 first month” is no longer reflected in official pricing.
- Warp’s February 2026 1,000-cloud-agent-request bonus expired.
- Amp’s “$10/day free usage” is not generally available to new users.
