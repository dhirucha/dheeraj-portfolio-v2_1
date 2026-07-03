import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="bg-[color:var(--color-bg2)]/40 px-[6%] py-24 md:py-28">
      <SectionHeading label="Experience" title="Where I've " emphasis="Shipped" />

      <div className="flex flex-col gap-6">
        {experience.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.1}>
            <div className="glass relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)] sm:p-10">
              <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[color:var(--color-indigo)] via-[color:var(--color-pink)] to-[color:var(--color-cyan)]" />

              <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-[family-name:var(--font-head)] text-xl font-bold sm:text-2xl">{exp.company}</h3>
                  <p className="mb-1 text-sm font-medium text-[color:var(--color-cyan)]">{exp.role}</p>
                </div>
                <span className="font-[family-name:var(--font-mono)] whitespace-nowrap rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs text-[color:var(--color-muted)]">
                  {exp.period}
                </span>
              </div>
              <p className="mb-6 text-sm text-[color:var(--color-muted)]">📍 {exp.location}</p>

              <ul className="flex flex-col gap-3">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="relative pl-5 text-[15px] leading-relaxed text-[color:var(--color-ink)]/70">
                    <span className="absolute left-0 top-[7px] text-[10px] text-[color:var(--color-indigo-light)]">▸</span>
                    {highlightMetrics(bullet)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// Bold out percentage / metric figures to match the original design's emphasis treatment.
function highlightMetrics(text: string) {
  const parts = text.split(/(\d+(?:\.\d+)?%|\b99\.5% uptime\b)/g);
  return parts.map((part, i) =>
    /^\d+(?:\.\d+)?%$/.test(part) ? (
      <span key={i} className="font-semibold text-[color:var(--color-amber)]">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}
