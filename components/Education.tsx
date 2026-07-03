import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { education, certifications, extracurricular } from "@/lib/data";
import { Zap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="px-[6%] py-24 md:py-28">
      <SectionHeading label="Background" title="Education & " emphasis="Credentials" />

      <div className="mb-12 grid gap-6 md:grid-cols-2">
        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 0.1}>
            <div className="glass relative overflow-hidden rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-2.5 font-[family-name:var(--font-head)] text-2xl font-extrabold text-gradient sm:absolute sm:right-7 sm:top-7 sm:mb-0">
                {edu.score}
              </div>
              <h3 className="mb-1 font-[family-name:var(--font-head)] text-xl font-bold">{edu.degree}</h3>
              <p className="mb-1 text-sm text-[color:var(--color-indigo-light)]">{edu.school}</p>
              <p className="font-[family-name:var(--font-mono)] text-xs text-[color:var(--color-muted)]">
                {edu.period} {edu.scoreLabel && `· ${edu.scoreLabel}: ${edu.score}`}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mb-5 flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[color:var(--color-pink)]">
          <span className="block h-px w-7 bg-[color:var(--color-pink)]" />
          Certifications
        </div>
      </Reveal>
      <div className="mb-14 flex flex-col gap-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.label} delay={i * 0.06}>
            <div className="glass flex items-center gap-3.5 rounded-xl px-5 py-3.5 text-sm text-[color:var(--color-ink)]/80 transition-transform duration-200 hover:translate-x-1 hover:border-amber-400/35">
              <span className="text-lg">{cert.icon}</span>
              {cert.label}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mb-5 flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[color:var(--color-pink)]">
          <span className="block h-px w-7 bg-[color:var(--color-pink)]" />
          Extracurricular
        </div>
      </Reveal>
      <Reveal>
        <div className="glass relative flex flex-col gap-6 overflow-hidden rounded-2xl p-9 sm:flex-row sm:items-start">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-[color:var(--color-amber)]">
            <Zap size={22} />
          </div>
          <div>
            <h3 className="mb-1 font-[family-name:var(--font-head)] text-xl font-bold">{extracurricular.name}</h3>
            <p className="mb-4 text-sm text-[color:var(--color-amber)]">{extracurricular.sub}</p>
            <ul className="flex flex-col gap-2.5">
              {extracurricular.bullets.map((bullet, idx) => (
                <li key={idx} className="relative pl-5 text-sm leading-relaxed text-[color:var(--color-ink)]/65">
                  <span className="absolute left-0 text-[color:var(--color-cyan)]">→</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
