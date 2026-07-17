import { CheckCircle, Anchor, AlertTriangle, Shield, FileText, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import CtaSection from '../components/CtaSection'

const services = [
  {
    icon: Shield,
    title: 'MTSA Cyber Program',
    description:
      'End-to-end implementation of the MTSA Cybersecurity Appendix requirements for maritime facilities and vessels. Includes Cybersecurity Plan (CSP) development, risk assessment, incident response procedures, and USCG documentation support.',
  },
  {
    icon: FileText,
    title: 'MTSA Policy Documentation',
    description:
      'Professional technical writing for all required GRC documentation. SSPs, policies, procedures, and control narratives written to audit standard.',
  },
  {
    icon: CheckCircle,
    title: 'Gap Analysis',
    description:
      'Delivers a prioritized remediation roadmap with cost and timeline estimates. Typically the first engagement for new clients.',
  },
]

const differentiators = [
  {
    title: 'MTSA Cybersecurity Appendix — Early Specialization',
    description:
      'Few GRC consultants have built a dedicated MTSA cyber practice. We identified the new MTSA Cybersecurity Subpart F as a compliance gap in the maritime sector and built the methodology before the market caught up.',
  },
  {
    title: 'Small Firm Accountability',
    description:
      'You work directly with the credentialed principal — not a junior analyst assigned after the contract is signed. Every engagement is owner-led from gap assessment through final deliverable.',
  },
  {
    title: 'Credentialed Personnel',
    description:
      'Led by USCG retired cybersecurity professionals with the right experience and credentials to implement the rule as written.',
  },
]

const deliverables = [
  'Cybersecurity Plan (CSP) as appendix to existing FSP or standalone',
  'Cybersecurity Assessment documenting all IT and OT systems',
  'CySO designation documentation and role definition',
  'Incident response procedures and reporting templates',
  'Personnel training program and records',
  'Drill and exercise scheduling and documentation',
  'Vendor/third-party access monitoring procedures',
  'Annual audit-ready documentation package',
]

export default function MTSAPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold tracking-wide mb-6">
            <Anchor className="w-3.5 h-3.5" />
            33 CFR Part 101 Subpart F
          </div>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            MTSA Cybersecurity
            <span className="block text-teal-400">Compliance for Maritime</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed max-w-3xl mb-8">
            The new MTSA Cybersecurity Appendix establishes mandatory cybersecurity requirements for
            regulated maritime facilities and vessels. Compliance deadlines are active. We implement
            the full cybersecurity program the rule requires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/request-consultation"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold transition-colors shadow-lg shadow-teal-600/20"
            >
              Free Consultation
            </Link>
            <a
              href="#requirements"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-white/20 hover:border-white/40 text-white font-semibold transition-colors"
            >
              View Requirements
            </a>
          </div>
        </div>
      </section>

      {/* Deadline warning */}
      <section className="bg-amber-500 py-5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <AlertTriangle className="w-6 h-6 text-amber-900 flex-shrink-0" />
          <p className="text-amber-900 font-semibold text-center sm:text-left text-sm">
            <strong>Training deadline has already passed (January 12, 2026).</strong> Cybersecurity
            Plan submission deadline: July 16, 2027. Non-compliant operators face USCG enforcement
            action now.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-teal-600 text-sm font-semibold tracking-widest uppercase mb-3">
              What We Deliver
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-950 mb-4">
              MTSA Cyber Program Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="rounded-2xl border border-slate-200 p-7 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 transition-all text-center"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-5 mx-auto">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-display font-bold text-navy-950 mb-3">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
                </div>
              )
            })}
          </div>

          {/* Deliverables */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8">
            <h3 className="font-display text-xl font-bold text-navy-950 mb-6">
              Program Deliverables
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What we do / IT+OT */}
      <section id="requirements" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-teal-600 text-sm font-semibold tracking-widest uppercase mb-3">
                Our Approach
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-950 mb-5">
                IT and OT — Both in Scope
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                We implement the MTSA Cybersecurity Appendix requirements from initial assessment
                through completed documentation submission. We begin with a gap assessment against
                the rule's requirements, then develop your Cybersecurity Plan (CSP).
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Maritime operations frequently involve industrial control systems, navigation systems,
                and cargo management platforms that are in scope for the rule but often overlooked in
                generic cybersecurity assessments. We address both{' '}
                <strong>IT and OT environments.</strong>
              </p>
              <p className="text-slate-600 leading-relaxed">
                Most MTSA compliance practitioners are security plan specialists, not cybersecurity
                professionals. We approach this from the cybersecurity implementation side — which is
                where the new compliance gap sits.
              </p>
            </div>
            <div className="space-y-4">
              {differentiators.map((d) => (
                <div
                  key={d.title}
                  className="rounded-xl border border-teal-100 bg-white p-6 hover:border-teal-200 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-bold text-navy-950 mb-1 text-sm">{d.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{d.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgency */}
      <section className="py-16 bg-navy-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
            MTSA Deadlines Are Not Negotiable
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
            The MTSA Cybersecurity Appendix is not a proposed rule awaiting implementation. It is
            current law. Facilities and vessels subject to MTSA are required to comply.
            Non-compliant security plans are subject to USCG action. If you have not assessed your
            cybersecurity posture against the new requirements, that assessment needs to happen now.
          </p>
          <Link
            to="/request-consultation"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold transition-colors"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
