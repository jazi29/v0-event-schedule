import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScheduleTable } from "@/components/schedule-table";
import { StatsBar } from "@/components/stats-bar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--primary)_0%,transparent_60%)] opacity-[0.07]" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 font-mono text-sm font-medium uppercase tracking-widest text-primary">
                10 — 17 наурыз, 2026 жыл
              </p>
              <h1 className="text-balance font-mono text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Оқыту мен тәрбиеде инновациялық тәсілдер мен цифрлық құралдар
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                Педагогика және психология пәндерінің циклдік комиссиясының
                апталығы кестесі. Ашық сабақтар, кездесулер, тренингтер және
                интеллектуалдық іс-шаралар.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mx-auto max-w-7xl px-6 py-10">
          <StatsBar />
        </section>

        {/* Schedule Table */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-mono text-2xl font-bold text-foreground">
                Іс-шаралар кестесі
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Барлық іс-шаралар күндер бойынша топтастырылған
              </p>
            </div>
          </div>
          <ScheduleTable />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
