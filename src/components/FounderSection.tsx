import { ArrowUpRight } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-[#003d1a] via-[#002f16] to-[#001b0c] py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 turf-grid-pattern-light opacity-40" />
      <div className="pointer-events-none absolute -right-28 top-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <div>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-lime-300">Our Founder</p>
          <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Building places where <span className="text-lime-300">sport can thrive.</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-emerald-50/80 sm:text-base">
            SPORTICON brings sports-facility planning, civil engineering, surface installation and maintenance together in one coordinated team. Our work is guided by a focus on player safety, lasting performance and dependable project delivery.
          </p>
        </div>

        <article className="relative overflow-hidden rounded-3xl border border-emerald-100/15 bg-gradient-to-br from-emerald-800/70 via-emerald-950/75 to-[#00170b] p-7 shadow-2xl shadow-black/25 sm:p-10">
          <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full border border-lime-200/10" />
          <div className="absolute -right-4 -top-8 h-32 w-32 rounded-full border border-lime-200/10" />

          <div className="relative flex flex-col items-center gap-7 sm:flex-row sm:items-center">
            <div className="founder-avatar relative grid h-52 w-48 shrink-0 place-items-center overflow-hidden rounded-3xl border border-lime-200/40 bg-gradient-to-br from-lime-300 via-emerald-400 to-emerald-700 text-6xl font-black tracking-tight text-emerald-950 shadow-2xl shadow-emerald-950/50 transition-transform duration-500 hover:scale-[1.04]">
              <div className="pointer-events-none absolute inset-3 rounded-[1.25rem] border border-white/35" />
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/30" />
              <div className="pointer-events-none absolute -bottom-12 -left-8 h-40 w-40 rounded-full border border-emerald-950/20" />
              AK
              <span className="absolute bottom-4 rounded-full border border-emerald-950/15 bg-emerald-950/15 px-3 py-1 text-[9px] font-extrabold tracking-[0.16em] text-emerald-950/75">FOUNDER INITIALS</span>
            </div>
            <div className="w-full text-center sm:text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-lime-300">Founder &amp; Managing Director</p>
              <h3 className="mt-2 text-xl font-extrabold leading-snug text-white sm:text-2xl">Afsal Kadavath Valiya Peediyakkal</h3>
            </div>
          </div>

          <div className="relative mt-8 flex items-center justify-between border-t border-white/15 pt-5">
            <p className="text-xs font-medium text-emerald-50/70">SPORTICON Infra Private Limited</p>
            <ArrowUpRight className="h-5 w-5 text-lime-300" aria-hidden="true" />
          </div>
        </article>
      </div>
    </section>
  );
}
