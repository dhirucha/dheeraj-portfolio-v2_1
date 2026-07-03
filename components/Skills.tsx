import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/lib/data";

const dotColor: Record<string, string> = {
  pink: "var(--color-pink)",
  cyan: "var(--color-cyan)",
  "indigo-light": "var(--color-indigo-light)",
  amber: "var(--color-amber)",
};

export default function Skills() {
  return (
    <section id="skills" className="bg-[color:var(--color-bg2)]/40 px-[6%] py-24 md:py-28">
      <SectionHeading label="Technical Arsenal" title="What I " emphasis="Work With" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <div className="glass h-full rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 hover:border-indigo-400/35">
              <div className="mb-4 flex items-center gap-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-muted)]">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: dotColor[group.color] }} />
                {group.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-[family-name:var(--font-mono)] rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-[color:var(--color-ink)]/80 transition-colors hover:border-[color:var(--color-indigo-light)] hover:bg-indigo-500/10 hover:text-[color:var(--color-ink)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
