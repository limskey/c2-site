import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-950 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/Chnage_(4) copy.png')" }}
      />
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            CMMC · MTSA · Cloud · Consulting
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight text-balance mb-6">
            Cybersecurity Solutions Built for{' '}
            <span className="text-blue-400">Government & Enterprise</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
            Trusted partners in cybersecurity and technology services designed
            for resilience. We help organizations strengthen posture, meet
            compliance requirements, and protect critical systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-colors shadow-lg shadow-blue-500/20"
            >
              Secure Your Organization
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-white/20 hover:border-white/40 text-white font-semibold transition-colors"
            >
              Explore Solutions
            </a>
          </div>
          <ul className="flex flex-col sm:flex-row gap-4 text-sm text-slate-400">
            {['DFARS / CMMC Compliance', 'FedRAMP Cloud Architecture', 'Maritime MTSA Security'].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Stats card */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: 'CMMC', label: 'Compliant Infrastructure', sub: 'Level 1 & Level 2' },
              { value: 'MTSA', label: 'Maritime Compliance', sub: 'All 3 Levels' },
              { value: 'AZURE', label: 'Cloud Environments', sub: 'Azure & Hybrid' },
              { value: '24/7', label: 'Continuous Monitoring', sub: 'Ongoing Support' },
            ].map((s) => (
              <div
                key={s.value}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-blue-500/40 transition-colors text-center"
              >
                <div className="text-3xl font-display font-bold text-blue-400 mb-1">{s.value}</div>
                <div className="text-sm font-semibold text-white mb-0.5">{s.label}</div>
                <div className="text-xs text-slate-500">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
