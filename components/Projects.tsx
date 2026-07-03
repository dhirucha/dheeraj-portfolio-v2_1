"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Search, ExternalLink, Radio } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/data";

const accentMap: Record<string, string> = {
  amber: "var(--color-amber)",
  cyan: "var(--color-cyan)",
  pink: "var(--color-pink)",
  indigo: "var(--color-indigo)",
};

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

export default function Projects() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      const matchesTag = !activeTag || (p.tags as readonly string[]).includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  return (
    <section id="projects" className="px-[6%] py-24 md:py-28">
      <SectionHeading label="Projects" title="Things I've " emphasis="Built" />

      {/* Command bar */}
      <Reveal>
        <div className="glass mb-8 flex flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-xs">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-[family-name:var(--font-mono)] text-xs text-[color:var(--color-cyan)]">
              $
            </span>
            <Search size={13} className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 text-[color:var(--color-muted)]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="grep --project"
              className="w-full rounded-xl border border-[color:var(--color-glass-border)] bg-black/20 py-2.5 pl-13 pr-4 font-[family-name:var(--font-mono)] text-xs text-[color:var(--color-ink)] outline-none placeholder:text-[color:var(--color-muted)]/60 focus:border-[color:var(--color-cyan)]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              data-hover
              onClick={() => setActiveTag(null)}
              className={`rounded-full border px-3.5 py-1.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider transition-colors ${
                !activeTag
                  ? "border-[color:var(--color-indigo-light)] bg-indigo-500/15 text-[color:var(--color-ink)]"
                  : "border-[color:var(--color-glass-border)] text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
              }`}
            >
              [ all ]
            </button>
            {allTags.slice(0, 6).map((tag) => (
              <button
                key={tag}
                data-hover
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={`rounded-full border px-3.5 py-1.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider transition-colors ${
                  activeTag === tag
                    ? "border-[color:var(--color-indigo-light)] bg-indigo-500/15 text-[color:var(--color-ink)]"
                    : "border-[color:var(--color-glass-border)] text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {filtered.length === 0 ? (
        <Reveal>
          <p className="rounded-2xl border border-dashed border-[color:var(--color-glass-border)] px-6 py-16 text-center font-[family-name:var(--font-mono)] text-sm text-[color:var(--color-muted)]">
            no processes matched — try a different query
          </p>
        </Reveal>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((p, i) => {
            const liveLink = (p.links as { live?: string } | undefined)?.live;
            const isLive = Boolean(liveLink);
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="glass group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl p-8"
                  style={{ ["--accent" as string]: accentMap[p.accent] }}
                >
                  {/* accent status strip */}
                  <div
                    className="absolute inset-x-0 top-0 h-[2px] opacity-60"
                    style={{ background: "var(--accent)" }}
                  />
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full opacity-[0.12] blur-2xl transition-opacity duration-300 group-hover:opacity-25"
                    style={{ background: `radial-gradient(circle, var(--accent), transparent 70%)` }}
                  />

                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[color:var(--color-glass-border)] bg-white/5 text-xl">
                        {p.icon}
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-[family-name:var(--font-mono)] text-[10px] text-[color:var(--color-muted)]">
                          proc.{String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest"
                          style={{ color: isLive ? "var(--color-cyan)" : "var(--color-muted)" }}
                        >
                          <span className="relative flex h-1.5 w-1.5">
                            {isLive && (
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-cyan)] opacity-75" />
                            )}
                            <span
                              className="relative inline-flex h-1.5 w-1.5 rounded-full"
                              style={{ background: isLive ? "var(--color-cyan)" : "var(--color-muted)" }}
                            />
                          </span>
                          {isLive ? "live" : "archived"}
                        </span>
                      </div>
                    </div>
                    <span
                      className="font-[family-name:var(--font-mono)] w-fit shrink-0 rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-widest"
                      style={{ color: "var(--accent)", borderColor: "var(--accent)", background: "color-mix(in oklab, var(--accent) 12%, transparent)" }}
                    >
                      {p.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-1.5 font-[family-name:var(--font-head)] text-xl font-bold">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-[color:var(--color-ink)]/60">{p.description}</p>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-[family-name:var(--font-mono)] rounded-md border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-[11px] text-[color:var(--color-indigo-light)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-5 border-t border-[color:var(--color-glass-border)] pt-4">
                    {p.links?.github && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noreferrer"
                        data-hover
                        className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-ink)]/80 hover:text-[color:var(--color-ink)]"
                      >
                        <Github size={15} /> Source
                      </a>
                    )}
                    {liveLink && (
                      <a
                        href={liveLink}
                        target="_blank"
                        rel="noreferrer"
                        data-hover
                        className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80"
                        style={{ color: "var(--accent)" }}
                      >
                        <Radio size={14} className="animate-pulse" /> Live demo
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      )}
    </section>
  );
}