import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import CtaSection from '../components/CtaSection'

export default function BlogCMMCGapAssessment() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold">
              <Tag className="w-3 h-3" /> CMMC
            </span>
            <span className="flex items-center gap-1.5 text-slate-400 text-xs">
              <Calendar className="w-3.5 h-3.5" /> June 2026
            </span>
            <span className="flex items-center gap-1.5 text-slate-400 text-xs">
              <Clock className="w-3.5 h-3.5" /> 12 min read
            </span>
          </div>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
            CMMC Gap Assessment: What to Expect (and What Most Companies Get Wrong)
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            A structured guide for defense contractors navigating CMMC Level 2 readiness.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none
            prose-headings:font-display prose-headings:text-navy-950 prose-headings:font-bold
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-strong:text-navy-950
            prose-li:text-slate-600
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3">

            <p>
              A CMMC gap assessment is the difference between knowing you'll pass and hoping you will.
              Skip it, and the first time you find out where your company stands is when a CMMC
              Third-Party Assessor Organization (C3PAO) walks in for the real thing — and by then,
              every gap is a delay, every delay is a missed contract date, and every missed date is
              revenue you don't get back.
            </p>
            <p>
              That's the whole point of the gap assessment. It moves the bad news up by ninety days,
              while you can still do something about it.
            </p>

            <h2>What a CMMC gap assessment actually is</h2>
            <p>
              A CMMC gap assessment is a structured review of your company against the controls you'll
              be measured on at your target CMMC level — usually Level 2, which maps to the 110
              controls in NIST SP 800-171. The output is a written, evidence-backed list of where you
              meet the standard, where you don't, and what each gap will take to close.
            </p>
            <p>
              It is not the certification. It is not a C3PAO assessment. It is the dress rehearsal you
              run before the real assessment, with a consultant or internal team that knows what
              auditors look for.
            </p>
            <p>
              Here's the part most companies miss: a gap assessment isn't only about controls. It's
              about <strong>evidence.</strong> You can have multi-factor authentication deployed across
              the company and still fail an audit because no one can produce the configuration export,
              the policy document, and the screenshot proving it was in place on the day in question.
              The gap assessment surfaces both kinds of gaps — the missing controls and the missing
              paper trail.
            </p>

            <h2>When you should run one</h2>
            <p>
              The honest answer: as soon as your contracts touch Federal Contract Information (FCI) or
              Controlled Unclassified Information (CUI), and at least six to nine months before your
              target certification date.
            </p>
            <p>
              Why six to nine? Because the typical Level 2 gap assessment turns up between fifteen and
              forty open items — some technical (a missing logging configuration), some administrative
              (no incident response plan), some operational (employees who haven't completed required
              training). Closing all of them takes time, budget approval, and in many cases, a vendor
              or two. Six months is the floor. Nine is comfortable. Three months out is too late.
            </p>

            <h2>What happens during the assessment, step by step</h2>

            <h3>Scoping conversation</h3>
            <p>
              Before the work starts, you and the consultant agree on the boundary — which
              subsidiaries, which networks, which cloud tenants, which business units handle FCI or
              CUI. Get this wrong and you'll either over-pay or under-pay. Most companies underestimate
              the boundary on the first pass.
            </p>

            <h3>Document review</h3>
            <p>
              The consultant pulls your existing System Security Plan (SSP), Plan of Action and
              Milestones (POA&M), policies, procedures, network diagrams, asset inventories, and
              incident response plan. If you don't have an SSP yet, that's the first finding — and
              it's a big one.
            </p>

            <h3>Technical review</h3>
            <p>
              This is where the consultant looks at the actual configurations: identity and access
              management, MFA enforcement, logging and monitoring, encryption at rest and in transit,
              vulnerability management, patch cadence, mobile device management, and the endpoints
              that touch CUI.
            </p>

            <h3>Interviews</h3>
            <p>
              A control isn't met because a tool exists. It's met because people use it consistently.
              The consultant will interview your IT lead, CISO or equivalent, HR contact, and often
              the CEO — yes, even the CEO — to confirm that the policies on paper match the practices
              in the field.
            </p>

            <h3>Findings and remediation roadmap</h3>
            <p>
              You walk away with a written report that lists every control, marks it Met / Partially
              Met / Not Met, cites the evidence (or lack of it), and recommends a specific remediation
              path with effort estimates. The good ones also prioritize: which gaps will fail you
              outright, which are scoreable deductions, which are paper-only fixes.
            </p>

            <h2>What it costs</h2>
            <p>
              A Level 2 gap assessment for a small to mid-sized DIB company typically runs between{' '}
              <strong>$7,500 and $25,000,</strong> depending on scope, headcount, number of locations,
              and how much pre-existing documentation you bring to the table.
            </p>
            <p>
              For comparison, a failed C3PAO assessment costs you the assessment fee (typically
              $30,000 to $100,000+), the remediation cost you would have paid anyway, and the contract
              you didn't win because the cert wasn't ready in time. The gap assessment is the cheapest
              insurance in the entire CMMC budget.
            </p>

            <h2>The mistakes most companies make</h2>
            <p>Three patterns show up in nearly every engagement:</p>
            <ul>
              <li>
                <strong>Treating the gap assessment as a procurement exercise, not a leadership one.</strong>{' '}
                CMMC compliance is a business decision before it's a technical one — the people who own
                the contract should own the assessment.
              </li>
              <li>
                <strong>Skipping the evidence work.</strong> Getting controls in place without building
                the evidence file means you'll fail the audit anyway. Build the evidence repository
                alongside the remediation, not after.
              </li>
              <li>
                <strong>Running the gap assessment once and stopping.</strong> CMMC isn't a one-and-done
                project. Controls that pass on the day of certification can drift in ninety days if no
                one is watching them.
              </li>
            </ul>

            <h2>What you should walk away with</h2>
            <p>
              A credible CMMC gap assessment leaves you with three things: a clear-eyed understanding
              of your certification readiness, a prioritized roadmap your team can actually execute,
              and a defensible budget number you can take to the owner or the board. If you have all
              three, the C3PAO assessment becomes a verification step, not a discovery exercise.
            </p>

            <h2>Frequently asked questions</h2>

            <h3>How long does a CMMC gap assessment take?</h3>
            <p>
              A typical Level 2 assessment takes two to four weeks from kickoff to final report.
              Smaller companies with a tight CUI boundary can finish in seven to ten business days.
            </p>

            <h3>What's the difference between a gap assessment and a self-assessment?</h3>
            <p>
              A self-assessment is your company scoring itself against NIST SP 800-171 and submitting
              to SPRS. A gap assessment is an independent third-party review that pressure-tests both
              the controls and the evidence behind them.
            </p>

            <h3>How much does a CMMC gap assessment cost in 2026?</h3>
            <p>
              Expect $7,500 to $25,000 for a Level 2 gap assessment at a small to mid-sized DIB
              company. Anything under $5,000 is usually a checklist tool, not an assessment.
            </p>
          </div>

          <div className="mt-14 p-8 rounded-2xl bg-blue-50 border border-blue-100">
            <h3 className="font-display font-bold text-navy-950 text-xl mb-3">
              Ready to schedule your gap assessment?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              We'll tell you on the first call what scope makes sense for your company and what the
              realistic timeline looks like from where you sit today.
            </p>
            <Link
              to="/request-consultation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors"
            >
              Schedule a Gap Assessment Call
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
