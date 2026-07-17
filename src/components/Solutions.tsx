import { CheckCircle } from 'lucide-react'

const solutions = [
  {
    id: 'cmmc',
    badge: 'CMMC',
    headline: 'Cybersecurity Maturity Model Certification',
    tagline: 'Win contracts. Stay compliant. Reduce risk.',
    description:
      'Led by seasoned cyber professionals operating on a CMMC compliant infrastructure. We implement CMMC Level 1 & Level 2 technologies to protect controlled unclassified information and maintain your competitive edge in federal contracting.',
    bullets: [
      'Gap Assessments & Readiness',
      'SSP & Full Compliance Documents',
      'Audit Preparation & Support',
      'Continuous Compliance Monitoring',
    ],
    accent: 'bg-blue-600',
    textAccent: 'text-blue-600',
    borderAccent: 'border-blue-200',
    bgLight: 'bg-blue-50',
  },
  {
    id: 'mtsa',
    badge: 'MTSA',
    headline: 'Maritime Transportation Security Act Compliance',
    tagline: 'Secure your maritime environment.',
    description:
      'Seasoned cyber professionals delivering MTSA-aligned security solutions, implementing all 3 levels of the new MTSA framework. We combine deep regulatory knowledge with hands-on technical expertise for ports, vessels, and facilities.',
    bullets: [
      'Security Planning & Implementation',
      'Policy & Procedure Development',
      'Hands-on Implementation Support',
      'Continuous Monitoring',
    ],
    accent: 'bg-teal-600',
    textAccent: 'text-teal-600',
    borderAccent: 'border-teal-200',
    bgLight: 'bg-teal-50',
  },
  {
    id: 'cloud',
    badge: 'Cloud',
    headline: 'Cloud Technology & Integration',
    tagline: 'Secure and scale your infrastructure with confidence.',
    description:
      'We design, implement, and manage secure cloud environments across Azure and hybrid systems. From initial architecture through ongoing management, we ensure your cloud environment is hardened, auditable, and always available.',
    bullets: [
      'Cloud Migration & Architecture',
      'Secure Configuration & Hardening',
      'Identity & Access Management (IAM)',
      'Ongoing Cloud Monitoring & Support',
    ],
    accent: 'bg-sky-600',
    textAccent: 'text-sky-600',
    borderAccent: 'border-sky-200',
    bgLight: 'bg-sky-50',
  },
  {
    id: 'consulting',
    badge: 'Consulting',
    headline: 'Cybersecurity Consulting',
    tagline: 'Not sure where to start? We guide you step-by-step.',
    description:
      'From strategy to execution, we simplify cybersecurity so your organization can operate securely and confidently. Our consultants embed with your team to build durable security programs, not just one-time assessments.',
    bullets: [
      'Cybersecurity Strategy & Roadmaps',
      'Risk Assessments & Security Planning',
      'Policy & Procedure Development',
      'Hands-on Implementation Support',
    ],
    accent: 'bg-indigo-600',
    textAccent: 'text-indigo-600',
    borderAccent: 'border-indigo-200',
    bgLight: 'bg-indigo-50',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Our Solutions
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-950 mb-4 text-balance">
            Secure. Comply. Scale.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Cybersecurity and cloud solutions built for government contractors and growing enterprises.
          </p>
        </div>

        <div className="space-y-8">
          {solutions.map((sol, idx) => (
            <div
              key={sol.id}
              className={`rounded-2xl border ${sol.borderAccent} bg-white overflow-hidden flex flex-col lg:flex-row ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Accent panel */}
              <div className={`${sol.bgLight} lg:w-72 flex-shrink-0 p-8 flex flex-col justify-center`}>
                <span
                  className={`inline-block text-xs font-bold uppercase tracking-widest ${sol.textAccent} mb-3`}
                >
                  {sol.badge}
                </span>
                <h3 className="font-display text-2xl font-bold text-navy-950 mb-2 leading-snug">
                  {sol.headline}
                </h3>
                <p className={`text-sm font-medium ${sol.textAccent}`}>{sol.tagline}</p>
              </div>

              {/* Content panel */}
              <div className="flex-1 p-8 lg:p-10">
                <p className="text-slate-600 leading-relaxed mb-6">{sol.description}</p>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {sol.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${sol.textAccent}`} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
