import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="safe-bottom relative z-10 border-t border-[color:var(--color-glass-border)] px-6 py-7 text-center font-[family-name:var(--font-mono)] text-xs text-[color:var(--color-muted)]">
      <span className="text-gradient font-semibold">{profile.name}</span>
      {"  ·  Built with code, caffeine & curiosity  ·  © "}
      {new Date().getFullYear()}
    </footer>
  );
}
