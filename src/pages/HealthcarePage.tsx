import { CheckCircle, Heart, Lock, FileText, Shield, AlertCircle, Activity } from 'lucide-react'
import { Link } from 'react-router-dom'
import CtaSection from '../components/CtaSection'

const services = [
  {
    icon: Shield,
    title: 'HIPAA Risk Analysis & Management',
    description:
      'Comprehensive risk analysis against the HIPAA Security Rule — identifying threats, vulnerabilities, and gaps in safeguards protecting electronic Protected Health Information (ePHI).',
    bullets: ['Security Rule Gap Assessment', 'Risk Register Development', 'Remediation Roadmap', 'Annual Review Support'],
  },
  {
    icon: FileText,
    title: 'HIPAA Compliance Documentation',
    description:
      'Full documentation suite required by the HIPAA Security and Privacy Rules — policies, procedures, business associate agreements, and workforce training materials.',
    bullets: ['Security & Privacy Policies', 'Business Associate Agreements', 'Incident Response Plan', 'Workforce Training Program'],
  },
  {
    icon: Lock,
    title: 'Security Architecture & Implementation',
    description:
      'Technical safeguard implementation for healthcare environments — access controls, audit logging, encryption, and secure configuration of clinical and administrative systems.',
    bullets: ['Access Control & IAM', 'Audit Log Configuration', 'Encryption at Rest & In Transit', 'Endpoint & Network Hardening'],
  },
  {
    icon: Activity,
    title: 'Breach Response & Incident Management',
    description:
      'Incident response planning and breach notification support aligned to HIPAA Breach Notification Rule requirements and HHS reporting timelines.',
    bullets: ['Breach Assessment Process', 'HHS Notification Support', 'Incident Response Drills', 'Post-Incident Remediation'],
  },
  {
    icon: AlertCircle,
    title: 'Third-Party & Vendor Risk',
    description:
      'Business associate management and vendor risk assessment to ensure your downstream partners meet the same security obligations required of covered entities.',
    bullets: ['BAA Review & Negotiation', 'Vendor Risk Assessments', 'Third-Party Access Controls', 'Ongoing Vendor Monitoring'],
  },
  {
    icon: Heart,
    title: 'Cloud & EHR Security',
    description:
      'Secure cloud architecture and EHR system hardening across Azure and hybrid environments — designed for healthcare workloads with PHI.',
    bullets: ['EHR Secure Configuration', 'Cloud Architecture Review', 'PHI Data Classification', 'Backup & Recovery Planning'],
  },
]

const regulated = [
  'Hospitals & Health Systems',
  'Physician Practices & Clinics',
  'Health Plans & Insurers',
  'Healthcare IT Vendors',
  'Medical Device Companies',
  'Telehealth Platforms',
  'Dental Practices',
  'Business Associates',
]

export default function HealthcarePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-semibold tracking-wide mb-6">
            <Heart className="w-3.5 h-3.5" />
            HIPAA · HITECH · Healthcare IT
          </div>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Healthcare Cybersecurity
            <span className="block text-rose-400">& Compliance Solutions</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed max-w-3xl mb-8">
            Purpose-built security programs for covered entities and business associates. We help
            healthcare organizations achieve HIPAA compliance, protect patient data, and build
            resilient security postures that survive audits and incidents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/request-consultation"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-semibold transition-colors shadow-lg shadow-rose-600/20"
            >
              Start With a Risk Analysis
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-white/20 hover:border-white/40 text-white font-semibold transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Stat bar */}
      <section className="bg-rose-700 py-6">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '$10M+', label: 'Max OCR Fine Per Violation' },
              { value: '110', label: 'NIST Controls Cross-Referenced' },
              { value: '72h', label: 'HITECH Breach Notice Window' },
              { value: '100%', label: 'Covered Entity Applicability' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-display font-bold text-white mb-1">{s.value}</div>
                <div className="text-rose-200 text-xs font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-rose-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Our Services
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-950 mb-4">
              Full-Spectrum Healthcare Security
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              From initial HIPAA risk analysis through ongoing compliance monitoring — we cover every
              layer of your security program.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="rounded-2xl border border-slate-200 p-7 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-500/5 transition-all text-center"
                >
                  <div className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center mb-5 mx-auto">
                    <Icon className="w-5 h-5 text-rose-600" />
                  </div>
                  <h3 className="font-display font-bold text-navy-950 mb-3">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.description}</p>
                  <ul className="space-y-1.5 text-left">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-rose-600 text-sm font-semibold tracking-widest uppercase mb-3">
                Who We Serve
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-950 mb-5">
                Covered Entities & Business Associates
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                HIPAA applies to covered entities and every business associate that creates, receives,
                maintains, or transmits ePHI on their behalf. That scope is broader than most
                organizations realize — and the OCR enforcement posture has become significantly more
                aggressive since the HITECH Act.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Whether you're a regional health system, a single-physician practice, a cloud software
                vendor, or a billing services company, we have the depth to meet you where you are and
                build a compliance program that scales with your organization.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="font-display font-bold text-navy-950 mb-5">Organizations We Work With</h3>
              <ul className="grid grid-cols-2 gap-3">
                {regulated.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-sm text-slate-700">
                    <Heart className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
