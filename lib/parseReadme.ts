import fs from "fs";
import path from "path";

export interface Tool {
  name: string;
  url: string;
  tags: string[];
  notes: string;
  promo: string;
  promoUrl: string;
}

export function parseReadme(): Tool[] {
  const readmePath = path.join(process.cwd(), "README.md");
  const content = fs.readFileSync(readmePath, "utf-8");

  // Find the markdown table
  const lines = content.split("\n");
  const tools: Tool[] = [];

  let inTable = false;
  let headerPassed = false;

  for (const line of lines) {
    // Detect table start (header row)
    if (line.startsWith("| Name") && line.includes("Tags")) {
      inTable = true;
      continue;
    }

    // Skip separator row
    if (inTable && line.startsWith("|---") || line.startsWith("| ---")) {
      headerPassed = true;
      continue;
    }

    // Parse table rows
    if (inTable && headerPassed && line.startsWith("|")) {
      const cells = line
        .split("|")
        .slice(1, -1)
        .map((cell) => cell.trim())

      if (cells.length >= 1) {
        const nameCell = cells[0];
        const tagsCell = cells[1] || "";
        const notesCell = cells[2] || "";
        const promoCell = cells[3] || "";

        // Parse markdown link: [Name](url)
        const linkMatch = nameCell.match(/\[([^\]]+)\]\(([^)]+)\)/);
        const promoLinkMatch = promoCell.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

        if (linkMatch) {
          const name = linkMatch[1];
          const url = linkMatch[2];

          if (promoCell !== "" && !promoLinkMatch) {
            throw new Error(
              `Invalid Promo cell for "${name}": non-empty promos must be Markdown links to a first-party source.`,
            );
          }

          // Parse tags (comma-separated)
          const tags = tagsCell
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag !== "");

          tools.push({
            name,
            url,
            tags,
            notes: notesCell,
            promo: promoLinkMatch ? promoLinkMatch[1] : promoCell,
            promoUrl: promoLinkMatch ? promoLinkMatch[2] : "",
          });
        }
      }
    }

    // End of table
    if (inTable && headerPassed && !line.startsWith("|") && line.trim() !== "") {
      break;
    }
  }

  return tools;
}
