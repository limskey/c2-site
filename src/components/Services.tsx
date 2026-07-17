import {
  ShieldCheck,
  Cloud,
  ClipboardList,
  Settings2,
  Server,
  FileText,
} from 'lucide-react'

const services = [
  {
    icon: ShieldCheck,
    title: 'Governance, Risk & Compliance',
    description:
      'End-to-end compliance support to help organizations meet DFARS, CMMC, and NIST requirements through structured assessments, documentation, and audit readiness.',
  },
  {
    icon: Cloud,
    title: 'Cloud Security & Management',
    description:
      'We design, implement, and manage secure cloud environments across Azure and hybrid systems with ongoing monitoring and identity management.',
  },
  {
    icon: ClipboardList,
    title: 'CMMC Compliance',
    description:
      'Led by seasoned cyber professionals operating on a CMMC compliant infrastructure. We implement CMMC Level 1 & Level 2 technologies to protect federal contract information and controlled unclassified information.',
  },
  {
    icon: Server,
    title: 'MTSA Cybersecurity',
    description:
      'Seasoned cyber professionals delivering MTSA-aligned security solutions, implementing all 3 levels of the new MTSA framework for maritime environments.',
  },
  {
    icon: Settings2,
    title: 'Mission Systems',
    description:
      'Secure architecture and engineering for mission-critical systems in government and regulated sectors, built for resilience and operational continuity.',
  },
  {
    icon: FileText,
    title: 'Cybersecurity Consulting',
    description:
      'From strategy to execution, we simplify cybersecurity so your organization can operate securely and confidently with roadmaps, risk assessments, and hands-on support.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-950 mb-4 text-balance">
            Technology Services Designed for Resilience
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Serving government contractors, startups, and enterprise teams across regulated environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="group rounded-2xl border border-slate-200 p-7 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center mb-5 transition-colors mx-auto">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-950 mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
