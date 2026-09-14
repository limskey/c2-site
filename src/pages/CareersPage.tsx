import { ExternalLink, Briefcase, MapPin, ArrowRight, Shield, Users, Award } from 'lucide-react'

const perks = [
  {
    icon: Shield,
    title: 'Mission-Driven Work',
    description:
      'Work on cybersecurity and compliance programs that protect defense contractors, maritime facilities, and critical infrastructure.',
  },
  {
    icon: Users,
    title: 'Small Team, High Impact',
    description:
      'Work directly with credentialed principals on every engagement. No junior bench — every team member owns real deliverables.',
  },
  {
    icon: Award,
    title: 'Veteran-Founded',
    description:
      'We are a Service Disabled Veteran Owned Small Business. We value discipline, accountability, and mission focus in everything we do.',
  },
  {
    icon: Briefcase,
    title: 'Grow With the Field',
    description:
      'CMMC, MTSA, and healthcare compliance are rapidly evolving. Join a team that is shaping the practice — not just following it.',
  },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
                Careers
              </p>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                Join the Cyber Coalition Team
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                We are a team of IT and cybersecurity professionals dedicated to helping businesses
                operate with confidence. If you bring precision, discipline, and a commitment to
                protecting critical systems, we want to hear from you.
              </p>
              <a
                href="https://jobs.gusto.com/boards/cyber-coalition-llc-24b2a5ab-7750-4378-a301-fd1580b9a831"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-colors shadow-lg shadow-blue-500/20"
              >
                View Open Positions
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center flex flex-col items-center justify-center">
                <img src="/assets/logos/SDVOSB-logo-color.png" alt="SDVOSB" className="h-10 object-contain mb-2" />
                <div className="text-slate-400 text-xs">Veteran Owned</div>
              </div>
              {[
                { label: 'CMMC', sub: 'Certified Professionals' },
                { label: 'Remote', sub: 'Flexible Work' },
                { label: 'Growth', sub: 'Expanding Practice' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                >
                  <div className="font-display text-2xl font-bold text-blue-400 mb-1">{s.label}</div>
                  <div className="text-slate-400 text-xs">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why work here */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Why Cyber Coalition
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-950 mb-4">
              Passion. Skill. Precision.
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Our team blends years of hands-on experience with cutting-edge expertise. Every member
              is driven to protect what matters most.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {perks.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-slate-200 p-7 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all text-center"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-5 mx-auto">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-display font-bold text-navy-950 mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open positions CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="rounded-2xl bg-navy-950 p-10 text-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/15 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-7 h-7 text-blue-400" />
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
              View Current Openings
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-xl mx-auto mb-8">
              Browse available positions across cybersecurity consulting, compliance, and technical
              roles on our careers portal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://careers.cyber-coalition.com/jobs/Careers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-colors"
              >
                Go to Careers Portal
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@cyber-coalition.com?subject=Career Inquiry"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-white/20 hover:border-white/40 text-white font-semibold transition-colors"
              >
                Send Us Your Resume
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-slate-500 text-sm">
              <MapPin className="w-3.5 h-3.5" />
              Richmond, VA &amp; Remote
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
