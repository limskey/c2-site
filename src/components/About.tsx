import { Building2, Anchor, Globe, Cpu } from 'lucide-react'

const sectors = [
  {
    icon: Building2,
    title: 'Defense\nContractors',
    description:
      'Supporting DoD prime and sub-contractors with CMMC readiness, CUI handling, and supply chain risk management.',
  },
  {
    icon: Anchor,
    title: 'Maritime &\nPort Facilities',
    description:
      'MTSA compliance and cybersecurity programs for vessels, port authorities, and maritime infrastructure operators.',
  },
  {
    icon: Globe,
    title: 'Federal &\nGovernment',
    description:
      'Serving civilian agencies and federal contractors navigating FedRAMP, FISMA, and RMF requirements.',
  },
  {
    icon: Cpu,
    title: 'Regulated\nEnterprises',
    description:
      'Cloud security, GRC programs, and compliance frameworks for financial, healthcare, and critical infrastructure organizations.',
  },
]

const partners = [
  { name: 'System High', logo: '/assets/trusted-partners/System-High.png' },
  { name: 'MUID', logo: '/assets/trusted-partners/MUID_updated-logo-April-2023-2-1024x280.jpg.webp' },
  { name: 'US Coast Guard', logo: '/assets/trusted-partners/Seal_of_the_United_States_Coast_Guard.svg.png' },
  { name: 'PNG Color Horizontal', logo: '/assets/trusted-partners/PNG_color_horizontal.png' },
  { name: 'Trusted Partner', logo: '/assets/trusted-partners/2c723a_9021e04737f8451e8c15e193037d2ac3-mv2.png' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Critical sectors */}
        <div className="mb-20">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Who We Serve
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-950 mb-4 text-balance">
              Supporting Critical Sectors with Secure, Scalable Solutions
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              We help organizations across government and regulated industries strengthen
              cybersecurity controls, modernize infrastructure, and improve risk visibility.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="rounded-2xl bg-navy-950 border border-navy-900 p-6 hover:border-blue-500 hover:bg-navy-900 transition-all duration-300 text-center flex flex-col items-center"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-600/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="font-display font-bold text-white mb-2 text-balance whitespace-pre-line">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Trusted partners banner */}
        <div className="rounded-2xl bg-slate-100 border border-slate-200 px-8 py-10 text-center">
          <p className="text-slate-500 text-sm font-semibold tracking-widest uppercase mb-8">
            Trusted Partners
          </p>
          <div className="flex items-center justify-between gap-6 flex-nowrap">
            {partners.map((p) => (
              <img
                key={p.logo}
                src={p.logo}
                alt={p.name}
                className={`w-auto object-contain flex-shrink-0 ${p.name === 'US Coast Guard' ? 'h-16 max-w-[160px]' : 'h-10 max-w-[140px]'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
