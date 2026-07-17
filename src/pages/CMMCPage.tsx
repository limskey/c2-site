import { CheckCircle, Clock, TrendingUp, Shield, FileText, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'
import CtaSection from '../components/CtaSection'

const steps = [
  {
    icon: Shield,
    title: 'Gap Assessment',
    description:
      'Structured review against all 110 NIST 800-171 controls. You will know exactly where you stand before any implementation work begins.',
  },
  {
    icon: FileText,
    title: 'SSP & POA&M Authoring',
    description:
      'We author your System Security Plan and manage your Plan of Action and Milestones — the documentation backbone of your certification.',
  },
  {
    icon: CheckCircle,
    title: 'Remediation Execution',
    description:
      'We build and execute the remediation plan, closing technical and administrative gaps against the 110 controls your C3PAO will audit.',
  },
  {
    icon: TrendingUp,
    title: 'Evidence Collection',
    description:
      'We collect and organize the evidence a C3PAO will require — configuration exports, policy documents, screenshots, and audit trails.',
  },
  {
    icon: Clock,
    title: 'Audit Preparation',
    description:
      'We prepare your team for the assessment process — running internal walkthroughs so the C3PAO visit is a verification, not a discovery.',
  },
  {
    icon: Shield,
    title: 'Continuous Monitoring',
    description:
      'Compliance doesn\'t end at certification. We maintain ongoing monitoring so controls don\'t drift between assessment cycles.',
  },
]

export default function CMMCPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-wide mb-6">
            CMMC Level 1 & Level 2
          </div>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            CMMC Implementation
            <span className="block text-blue-400">From Gap to Audit-Ready</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed max-w-3xl mb-8">
            We manage the full CMMC implementation lifecycle — from structured gap assessment through
            remediation, documentation, evidence collection, and C3PAO audit preparation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/request-consultation"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-colors shadow-lg shadow-blue-500/20"
            >
              Start With a Gap Assessment
            </Link>
            <a
              href="#what-to-expect"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-white/20 hover:border-white/40 text-white font-semibold transition-colors"
            >
              What to Expect
            </a>
          </div>
        </div>
      </section>

      {/* Compliant infrastructure callout */}
      <section className="bg-blue-600 py-6">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <Shield className="w-6 h-6 text-white flex-shrink-0" />
          <p className="text-white font-medium text-center sm:text-left">
            We operate on a{' '}
            <strong>CMMC-compliant Azure tenant.</strong> Your CUI and compliance documentation are
            handled in an environment that meets the same standard we implement for you.
          </p>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Our Process
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-950 mb-4">
              End-to-End CMMC Implementation
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Every engagement is led by a Certified CMMC Professional (CCP). No junior analysts
              assigned after the contract is signed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="rounded-2xl border border-slate-200 p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all text-center"
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-navy-950 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section id="what-to-expect" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
                Timeline
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-950 mb-5">
                What to Expect
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                CMMC implementation is not a quick process — whether Level 1 or Level 2. Depending on
                your current security posture, a realistic timeline to audit-readiness ranges from{' '}
                <strong>six to eighteen months.</strong>
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Organizations with existing NIST 800-171 controls partially in place move faster.
                Organizations starting from baseline take longer.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We will give you an honest timeline estimate after your initial gap assessment — not a
                number designed to win the engagement.
              </p>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-red-900 text-lg mb-1">
                    Why Waiting Costs More
                  </h3>
                  <p className="text-red-700 text-sm font-medium">The longer you wait, the worse it gets.</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-red-800">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                  Every month without a structured plan accumulates technical debt against 110 controls.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                  C3PAOs are currently booking assessments months in advance.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                  If your contract requires CMMC certification, starting late means risk of contract loss.
                </li>
                <li className="flex items-start gap-2.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                  Starting now means control.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gap assessment CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
            First Step
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-950 mb-5">
            Start With a Gap Assessment
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Know where you stand before you commit. Our CMMC engagements begin with a structured gap
            assessment — you will know exactly how many controls are in place, how many need
            remediation, and what a realistic path to certification looks like.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-consultation"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-colors"
            >
              Schedule Your Gap Assessment
            </Link>
            <a
              href="/blog/cmmc-gap-assessment"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-slate-200 hover:border-blue-200 text-navy-950 font-semibold transition-colors"
            >
              Read the Gap Assessment Guide
            </a>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
