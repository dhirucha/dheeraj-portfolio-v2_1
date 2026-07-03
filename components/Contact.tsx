"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Loader2, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

const ContactSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Say a little more (10+ characters)"),
});
type ContactForm = z.infer<typeof ContactSchema>;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({ resolver: zodResolver(ContactSchema) });

  const onSubmit = async (data: ContactForm) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative px-[6%] py-24 text-center md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.12),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-2xl">
        <Reveal>
          <div className="mb-3 inline-flex items-center justify-center gap-2.5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[color:var(--color-pink)]">
            <span className="block h-px w-7 bg-[color:var(--color-pink)]" />
            Let&apos;s Connect
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mb-4 font-[family-name:var(--font-head)] text-[clamp(2.2rem,5vw,3.75rem)] font-extrabold leading-[1.05] tracking-tighter">
            Got an idea?
            <br />
            <span className="text-gradient-cyan">Let&apos;s build it.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mb-10 max-w-[480px] text-[15px] text-[color:var(--color-ink)]/50">
            Currently open to AI engineering, full-stack, and GenAI roles. Reach out — I&apos;d love to hear from you.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <form onSubmit={handleSubmit(onSubmit)} className="glass mb-10 flex flex-col gap-4 rounded-2xl p-6 text-left sm:p-8">
            <div>
              <input
                {...register("name")}
                placeholder="Your name"
                className="w-full rounded-xl border border-[color:var(--color-glass-border)] bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-[color:var(--color-cyan)]"
              />
              {errors.name && <p className="mt-1.5 text-xs text-[color:var(--color-pink)]">{errors.name.message}</p>}
            </div>
            <div>
              <input
                {...register("email")}
                placeholder="Your email"
                className="w-full rounded-xl border border-[color:var(--color-glass-border)] bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-[color:var(--color-cyan)]"
              />
              {errors.email && <p className="mt-1.5 text-xs text-[color:var(--color-pink)]">{errors.email.message}</p>}
            </div>
            <div>
              <textarea
                {...register("message")}
                placeholder="What are you building?"
                rows={4}
                className="w-full resize-none rounded-xl border border-[color:var(--color-glass-border)] bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-[color:var(--color-cyan)]"
              />
              {errors.message && <p className="mt-1.5 text-xs text-[color:var(--color-pink)]">{errors.message.message}</p>}
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              type="submit"
              disabled={status === "sending"}
              data-hover
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[color:var(--color-indigo)] to-[color:var(--color-pink)] px-6 py-3.5 text-sm font-medium text-white shadow-[0_4px_24px_rgba(79,70,229,0.4)] disabled:opacity-70"
            >
              {status === "sending" && <Loader2 size={16} className="animate-spin" />}
              {status === "sent" && <CheckCircle2 size={16} />}
              {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send message"}
            </motion.button>
            {status === "error" && (
              <p className="text-center text-xs text-[color:var(--color-pink)]">Something went wrong — try emailing directly below.</p>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ContactChip href={`mailto:${profile.email}`} icon={<Mail size={16} />} label={profile.email} dot="var(--color-pink)" />
            <ContactChip href={`tel:${profile.phone.replace(/\s/g, "")}`} icon={<Phone size={16} />} label={profile.phone} dot="var(--color-amber)" />
            <ContactChip href={profile.linkedin} icon={<Linkedin size={16} />} label="LinkedIn" dot="var(--color-indigo-light)" external />
            <ContactChip href={profile.github} icon={<Github size={16} />} label="GitHub" dot="var(--color-cyan)" external />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactChip({
  href,
  icon,
  label,
  dot,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  dot: string;
  external?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      data-hover
      whileHover={{ y: -3 }}
      className="glass inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-medium"
    >
      <span className="h-2 w-2 rounded-full" style={{ background: dot }} />
      {icon}
      {label}
    </motion.a>
  );
}
