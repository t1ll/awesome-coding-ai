# Contribution Guidelines

Thanks for helping grow this list! Here's how to add a new AI coding tool.

## How to Submit

1. Fork this repository
2. Add a new row to the table in `README.md`
3. Open a pull request

## Table Format

Each row requires:

| Field | Required | Description |
|-------|----------|-------------|
| **Name** | ✅ | Tool name as a markdown link: `[Name](https://url.com)` |
| **Tags** | Optional | Comma-separated tags (see below) |
| **Notes** | Optional | Brief description, e.g. "Built by Anthropic" |
| **Promo** | Optional | Short live promotion, e.g. "Go plan $5 first month" — include only verifiable, current offers |

### Available Tags

- `ide` — Product is primarily an IDE with built-in agent
- `cli` — Terminal-based coding agent
- `own-model` — Uses proprietary LLMs (or fine-tuned OSS models)
- `background` — Async/remote execution without active user steering
- `app-builder` — No-code "vibe coding" web platforms
- `gui` — Graphic interface for orchestrating agents / swarms
- `oss` — Open source
- `extension` — An extension/plugin for an editor or IDE not owned by the product

## Example

```markdown
| [My Tool](https://mytool.dev/) | cli, background | Built by Acme Corp | 1 month free |
```

## Guidelines

- Keep entries alphabetically sorted
- Verify the URL works
- Only include publicly available tools
