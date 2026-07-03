import Reveal from "@/components/Reveal";

export default function SectionHeading({
  label,
  title,
  emphasis,
  center = false,
}: {
  label: string;
  title: string;
  emphasis?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mb-14 text-center" : "mb-14"}>
      <Reveal>
        <div
          className={`mb-3 inline-flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[color:var(--color-pink)] ${
            center ? "justify-center" : ""
          }`}
        >
          <span className="block h-px w-7 bg-[color:var(--color-pink)]" />
          {label}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-[family-name:var(--font-head)] text-[clamp(2.2rem,5vw,3.75rem)] font-extrabold leading-[1.05] tracking-tighter">
          {title}
          {emphasis && <span className="text-gradient-cyan">{emphasis}</span>}
        </h2>
      </Reveal>
    </div>
  );
}
