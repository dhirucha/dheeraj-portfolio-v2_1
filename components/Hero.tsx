"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { profile, stats } from "@/lib/data";

const ROLES = ["AI Engineer", "Full Stack Developer", "GenAI Builder", "Multi-Agent Architect"];

function useTypewriter(words: string[], speed = 55, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

function MagneticButton({ children, ...props }: React.ComponentProps<typeof motion.a>) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.a
      {...props}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setPos({ x: (e.clientX - rect.left - rect.width / 2) * 0.25, y: (e.clientY - rect.top - rect.height / 2) * 0.35 });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section id="hero" className="relative grid min-h-screen items-center gap-14 px-[6%] pb-20 pt-32 lg:grid-cols-2 lg:pt-28">
      <div className="flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[color:var(--color-cyan)]"
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-cyan)]"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {profile.availability}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.6 }}
          className="font-[family-name:var(--font-head)] text-[clamp(3rem,7vw,6rem)] font-extrabold leading-[0.95] tracking-tighter"
        >
          <span className="block">{profile.first}</span>
          <span className="text-gradient block">{profile.last}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.6 }}
          className="font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.14em] text-[color:var(--color-amber)]"
        >
          {typed}
          <span className="animate-pulse">|</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.82, duration: 0.6 }}
          className="max-w-[480px] text-[17px] font-light leading-relaxed text-[color:var(--color-ink)]/60"
        >
          {profile.blurb}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.92, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <MagneticButton
            href="#projects"
            data-hover
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-br from-[color:var(--color-indigo)] to-[color:var(--color-pink)] px-7 py-3.5 text-sm font-medium text-white shadow-[0_4px_24px_rgba(79,70,229,0.4)] transition-shadow hover:shadow-[0_8px_32px_rgba(236,72,153,0.45)]"
          >
            View Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton
            href="#contact"
            data-hover
            className="rounded-xl border border-[color:var(--color-glass-border)] px-7 py-3.5 text-sm font-medium transition-colors hover:border-[color:var(--color-cyan)] hover:bg-cyan-500/5"
          >
            Get In Touch
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.02, duration: 0.6 }}
          className="flex flex-wrap gap-8 pt-2"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-0.5">
              <span className="font-[family-name:var(--font-head)] text-2xl font-extrabold text-gradient-cyan">{s.value}</span>
              <span className="text-xs tracking-wide text-[color:var(--color-muted)]">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="flex items-center justify-center"
      >
        <CodeCard />
      </motion.div>

      <motion.a
        href="#experience"
        data-hover
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[color:var(--color-muted)] lg:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[11px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} />
      </motion.a>
    </section>
  );
}

function CodeCard() {
  return (
    <div className="glass w-full max-w-[480px] overflow-hidden rounded-[18px] shadow-[0_32px_64px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2 border-b border-[color:var(--color-glass-border)] bg-white/[0.03] px-[18px] py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-[family-name:var(--font-mono)] text-[11px] text-[color:var(--color-muted)]">
          engineer.py
        </span>
      </div>
      <pre className="overflow-x-auto px-6 py-5 font-[family-name:var(--font-mono)] text-[13px] leading-[2]">
        <code>
          <span className="text-[#524f7a]"># Building the future with AI</span>
          {"\n"}
          <span className="text-[color:var(--color-pink)]">class</span>{" "}
          <span className="text-[color:var(--color-indigo-light)]">DheerajChaubey</span>:{"\n\n"}
          {"  "}
          <span className="text-[color:var(--color-indigo-light)]">role</span> ={" "}
          <span className="text-[color:var(--color-amber)]">&quot;AI Full Stack Engineer&quot;</span>
          {"\n"}
          {"  "}
          <span className="text-[color:var(--color-indigo-light)]">location</span> ={" "}
          <span className="text-[color:var(--color-amber)]">&quot;Thane, Maharashtra 🇮🇳&quot;</span>
          {"\n\n"}
          {"  "}
          <span className="text-[color:var(--color-indigo-light)]">stack</span> = [{"\n"}
          {"    "}
          <span className="text-[color:var(--color-amber)]">&quot;LangChain&quot;</span>,{" "}
          <span className="text-[color:var(--color-amber)]">&quot;LangGraph&quot;</span>,{"\n"}
          {"    "}
          <span className="text-[color:var(--color-amber)]">&quot;Mistral AI&quot;</span>,{" "}
          <span className="text-[color:var(--color-amber)]">&quot;FastAPI&quot;</span>,{"\n"}
          {"    "}
          <span className="text-[color:var(--color-amber)]">&quot;React.js&quot;</span>,{" "}
          <span className="text-[color:var(--color-amber)]">&quot;Node.js&quot;</span>,{"\n"}
          {"    "}
          <span className="text-[color:var(--color-amber)]">&quot;Docker&quot;</span>,{" "}
          <span className="text-[color:var(--color-amber)]">&quot;MongoDB&quot;</span>{"\n"}
          {"  "}]{"\n\n"}
          {"  "}
          <span className="text-[color:var(--color-pink)]">def</span>{" "}
          <span className="text-[color:var(--color-cyan)]">build</span>(self, idea):{"\n"}
          {"    "}
          <span className="text-[color:var(--color-pink)]">return</span> MultiAgent({"\n"}
          {"      "}llm=<span className="text-[color:var(--color-amber)]">&quot;mistral&quot;</span>,{"\n"}
          {"      "}memory=<span className="text-[color:var(--color-amber)]">&quot;redis&quot;</span>,{"\n"}
          {"      "}idea=idea{"\n"}
          {"    "}).deploy()
        </code>
      </pre>
    </div>
  );
}
