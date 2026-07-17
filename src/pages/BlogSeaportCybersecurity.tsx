import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import CtaSection from '../components/CtaSection'

export default function BlogSeaportCybersecurity() {
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-600 text-white text-xs font-semibold">
              <Tag className="w-3 h-3" /> MTSA
            </span>
            <span className="flex items-center gap-1.5 text-slate-400 text-xs">
              <Calendar className="w-3.5 h-3.5" /> May 2026
            </span>
            <span className="flex items-center gap-1.5 text-slate-400 text-xs">
              <Clock className="w-3.5 h-3.5" /> 15 min read
            </span>
          </div>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
            America's Seaport Cybersecurity
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            The era of voluntary frameworks for U.S. port cybersecurity is over. Here's what the new
            mandatory rule requires and what it means for your organization.
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

            <h2>America's Ports Are Open for Business — And the Clock Is Now Ticking</h2>
            <p>
              The United States moves roughly $5 trillion in trade every year. Nearly all of it
              touches a seaport. For years, the cybersecurity posture protecting that infrastructure
              has been voluntary — a patchwork of recommended frameworks, political fragmentation, and
              competing port authorities with no federal mandate to comply with anything. That just
              changed.
            </p>
            <p>
              On January 17, 2025, the U.S. Coast Guard published 33 CFR Part 101 Subpart F in the
              Federal Register (90 FR 6447) — the first mandatory federal cybersecurity regulation for
              the U.S. Marine Transportation System. If your organization operates a U.S.-flagged
              vessel, an MTSA-regulated port facility, or an Outer Continental Shelf facility,
              compliance is no longer optional.
            </p>

            <h2>Why Seaports Were Already a Problem</h2>
            <p>
              U.S. ports handle over 95% of overseas trade. The National Retail Federation has
              estimated that a five-day West Coast port shutdown would cost $1 billion per day,
              climbing to $2.5 billion per day beyond 20 days. That is not a logistics problem — it is
              an economic crisis.
            </p>
            <p>
              The threat is not theoretical. In June 2017, A.P. Moller-Maersk was hit by the NotPetya
              ransomware attack. Operations were disrupted for ten days, volume dropped 20%, over
              20,000 containers required manual re-routing, and the company had to rebuild its entire
              IT infrastructure: 4,000 servers, 45,000 PCs, 2,500 applications. Total damage:
              approximately <strong>$300 million.</strong>
            </p>
            <p>
              In 2013, a drug cartel hired hackers to breach the Port of Antwerp's cargo management
              system — not to steal data, but to identify which containers held their smuggled
              contraband so drivers could collect it before the legitimate owners arrived. The port's
              IT systems became a tool for international drug trafficking.
            </p>

            <h2>The Gap the New Rule Closes</h2>
            <p>
              The core structural problem in maritime cybersecurity has always been governance. Of the
              361 U.S. ports, 126 are public seaport agencies — governed by a mix of appointed
              officials, elected bodies, and in 21 cases, no governing body whatsoever. Until now, the
              NIST Cybersecurity Framework was recommended, not required. The new regulation
              establishes a binding floor for the first time.
            </p>

            <h2>What 33 CFR Part 101 Subpart F Actually Requires</h2>

            <h3>Designate a Cybersecurity Officer (CySO)</h3>
            <p>
              The CySO must be named in writing, by name and title, and must be accessible to the
              Coast Guard 24/7. The CySO is responsible for developing and maintaining the
              Cybersecurity Plan, managing audits and exercises, ensuring incident reporting, and
              remediating Known Exploited Vulnerabilities in critical IT and OT systems without delay.
            </p>

            <h3>Develop and Submit a Cybersecurity Plan</h3>
            <p>
              The Plan must be submitted to the cognizant Captain of the Port (COTP) or Marine Safety
              Center no later than <strong>July 16, 2027.</strong> Once approved, it is valid for five
              years. The Plan must cover organizational structure, personnel training, drills and
              exercises, incident response procedures, access controls, network maps, OT device
              configuration, supply chain security, and a complete cybersecurity assessment.
            </p>

            <h3>Mandatory Technical Controls</h3>
            <p>The rule specifies a floor of required security measures including:</p>
            <ul>
              <li>Multifactor authentication on all password-protected IT and remotely accessible OT systems</li>
              <li>Account lockout after failed login attempts</li>
              <li>Default password changes before any system use</li>
              <li>Least privilege access enforcement</li>
              <li>IT/OT network segmentation with logged and monitored connections</li>
              <li>Encryption of sensitive data and OT traffic where technically feasible</li>
              <li>Secure log retention accessible only to privileged users</li>
              <li>Prohibition of OT systems being directly connected to the public internet</li>
            </ul>

            <h3>Drills and Exercises</h3>
            <p>
              Cybersecurity drills are required at least twice per calendar year. A full exercise —
              tabletop, live, or combined — is required at least once per calendar year with no more
              than 18 months between exercises.
            </p>

            <h3>Annual Audits</h3>
            <p>
              The Cybersecurity Plan must be audited annually by personnel independent of the
              cybersecurity functions being audited. Audit findings requiring plan amendments must be
              submitted to the Coast Guard within 30 days of audit completion.
            </p>

            <h2>One Deadline Has Already Passed</h2>
            <p>
              The personnel training deadline was <strong>January 12, 2026.</strong> All personnel
              with access to IT or OT systems — including contractors, part-time, temporary, and
              permanent staff — were required to complete cybersecurity awareness training by that
              date.
            </p>
            <p>
              Any covered operator that has not completed that training is already out of compliance.
              The Coast Guard has enforcement authority under 14 U.S. Code § 89. Non-compliance is not
              a paperwork problem — it is a regulatory exposure with real consequences right now.
            </p>

            <h2>The Bottom Line</h2>
            <p>
              33 CFR Part 101 Subpart F is the regulatory reckoning the maritime sector has needed for
              a long time. It establishes mandatory, enforceable cybersecurity standards with defined
              roles, documented plans, annual audits, and compliance deadlines. The era of voluntary
              frameworks and recommended best practices for U.S. port cybersecurity is over.
            </p>
            <p>
              The training deadline has already passed. The plan submission and assessment deadlines
              are approaching. The organizations that treat this as a 2027 problem will spend 2026
              behind.
            </p>
          </div>

          <div className="mt-14 p-8 rounded-2xl bg-teal-50 border border-teal-100">
            <h3 className="font-display font-bold text-navy-950 text-xl mb-3">
              Need to assess your MTSA compliance posture?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              We'll tell you where your organization stands against the new requirements and what the
              realistic path to compliance looks like.
            </p>
            <Link
              to="/services/mtsa"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm transition-colors"
            >
              Learn About Our MTSA Services
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
