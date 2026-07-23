"use client";

import {
  Reorder,
  useDragControls,
  useReducedMotion,
} from "framer-motion";
import { useState } from "react";
import type { Tool } from "@/lib/parseReadme";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide border border-neutral-400 text-neutral-600 bg-neutral-100">
      {label}
    </span>
  );
}

function ToolRow({
  tool,
  reduceMotion,
  onKeyboardMove,
}: {
  tool: Tool;
  reduceMotion: boolean;
  onKeyboardMove: (direction: "up" | "down") => void;
}) {
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      value={tool}
      dragListener={false}
      dragControls={dragControls}
      className="group relative flex flex-col gap-3 border-t border-neutral-300 py-5 md:grid md:grid-cols-[minmax(120px,160px)_minmax(160px,1fr)_minmax(180px,280px)_auto_auto] md:items-center md:gap-5 md:transition-all md:hover:border-dashed md:[&:hover+li]:border-dashed"
      variants={rowVariants}
      transition={reduceMotion ? { duration: 0 } : undefined}
    >
      {/* Tags column */}
      <div className="flex flex-wrap gap-1.5">
        {tool.tags.length > 0 ? (
          tool.tags.map((tag) => <Tag key={tag} label={tag} />)
        ) : (
          <span className="text-neutral-400 text-sm md:block hidden">—</span>
        )}
      </div>

      {/* Name & Notes column */}
      <div className="flex flex-col gap-0.5">
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit text-[15px] font-medium text-neutral-900 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {tool.name}
        </a>
        {tool.notes && (
          <span className="text-[13px] text-neutral-500 font-mono">
            {tool.notes}
          </span>
        )}
      </div>

      {/* Promo column */}
      <div className="flex items-center md:justify-end">
        {tool.promo && tool.promoUrl && (
          <a
            href={tool.promoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] leading-relaxed font-mono text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:text-right"
          >
            {tool.promo}
          </a>
        )}
      </div>

      {/* Try button */}
      <div className="flex items-center">
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center border border-neutral-300 px-4 py-1.5 text-[13px] font-medium text-neutral-700 transition-all hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label={`Try ${tool.name}`}
        >
          Try →
        </a>
      </div>

      {/* Drag handle */}
      <button
        type="button"
        className="flex h-8 w-8 touch-none cursor-grab items-center justify-center border border-neutral-300 text-neutral-500 transition-colors hover:border-neutral-500 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:cursor-grabbing"
        aria-label={`Reorder ${tool.name}. Use Arrow Up and Arrow Down.`}
        title={`Drag to reorder ${tool.name}, or use Arrow Up and Arrow Down`}
        onPointerDown={(event) => dragControls.start(event)}
        onKeyDown={(event) => {
          if (event.key === "ArrowUp") {
            event.preventDefault();
            onKeyboardMove("up");
          } else if (event.key === "ArrowDown") {
            event.preventDefault();
            onKeyboardMove("down");
          }
        }}
      >
        <span aria-hidden="true" className="text-base leading-none">
          ⠿
        </span>
      </button>
    </Reorder.Item>
  );
}

function mergeReorderedSubset(
  allTools: Tool[],
  reorderedSubset: Tool[],
): Tool[] {
  const reorderedNames = new Set(reorderedSubset.map((tool) => tool.name));
  let nextIndex = 0;

  return allTools.map((tool) => {
    if (!reorderedNames.has(tool.name)) {
      return tool;
    }

    const reorderedTool = reorderedSubset[nextIndex];
    nextIndex += 1;
    return reorderedTool ?? tool;
  });
}

export function ToolList({ tools }: { tools: Tool[] }) {
  const [orderedTools, setOrderedTools] = useState(tools);
  const [promosOnly, setPromosOnly] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;
  const visibleTools = promosOnly
    ? orderedTools.filter((tool) => tool.promo !== "")
    : orderedTools;

  function handleReorder(reorderedTools: Tool[]) {
    setOrderedTools((currentTools) =>
      promosOnly
        ? mergeReorderedSubset(currentTools, reorderedTools)
        : reorderedTools,
    );
  }

  function handleKeyboardMove(tool: Tool, direction: "up" | "down") {
    const currentIndex = visibleTools.findIndex(
      (visibleTool) => visibleTool.name === tool.name,
    );
    const nextIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;

    if (
      currentIndex === -1 ||
      nextIndex < 0 ||
      nextIndex >= visibleTools.length
    ) {
      return;
    }

    const reorderedTools = [...visibleTools];
    const [movedTool] = reorderedTools.splice(currentIndex, 1);
    if (!movedTool) {
      return;
    }

    reorderedTools.splice(nextIndex, 0, movedTool);
    handleReorder(reorderedTools);
  }

  return (
    <div>
      <label className="mb-4 flex w-fit cursor-pointer items-center gap-2 text-[13px] font-mono text-neutral-600">
        <input
          type="checkbox"
          checked={promosOnly}
          onChange={(event) => setPromosOnly(event.target.checked)}
          className="h-4 w-4 accent-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        />
        Show current promotions only
      </label>

      <Reorder.Group
        axis="y"
        values={visibleTools}
        onReorder={handleReorder}
        className="flex flex-col"
        variants={containerVariants}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
      >
        {visibleTools.map((tool) => (
          <ToolRow
            key={tool.name}
            tool={tool}
            reduceMotion={reduceMotion}
            onKeyboardMove={(direction) =>
              handleKeyboardMove(tool, direction)
            }
          />
        ))}
      </Reorder.Group>
    </div>
  );
}
