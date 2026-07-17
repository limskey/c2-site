import { Star } from 'lucide-react'
import CtaSection from '../components/CtaSection'

const testimonials = [
  {
    quote:
      'Cyber Coalition did an outstanding job helping us prepare for CMMC Level 1 compliance. I highly recommend Cyber Coalition for anyone needing cybersecurity or compliance support.',
    name: 'Joe',
    title: 'Senior IT Engineer',
  },
  {
    quote:
      'Cyber Coalition partnered with us and delivered compliance results aligned to CMMC requirements. Their team executed quickly and produced results that moved the program forward.',
    name: 'Dan',
    title: 'Director of GRC',
  },
  {
    quote:
      'As a small business owner, I needed reliable security. Cyber Coalition teamed with us from the start to engineer a cloud solution and ensure we are compliant with CMMC.',
    name: 'Terry',
    title: 'CEO',
  },
  {
    quote:
      'Cyber Coalition demonstrated true partnership by identifying critical GRC vulnerabilities and delivering actionable solutions that strengthened my client\'s security posture and compliance readiness.',
    name: 'Michele',
    title: 'Consultant',
  },
]

const values = [
  {
    title: 'Clarity',
    description:
      'We communicate plainly. No jargon for its own sake, no inflated scopes, no numbers designed to win the engagement.',
  },
  {
    title: 'Discipline',
    description:
      'We follow proven methodologies and structured processes. Compliance is not a creative exercise — it is a disciplined one.',
  },
  {
    title: 'Accountability',
    description:
      'You work with the credentialed principal, not a junior analyst. Every engagement is owner-led from gap assessment through final deliverable.',
  },
  {
    title: 'Long-Term Perspective',
    description:
      'We build durable security programs, not one-time assessments. Our goal is to serve as your trusted technology partner for years.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/Chnage_(8).png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-lg">
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Message from<br />Our CEO
            </h1>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Securing organizations today requires more than technology—it
              requires clarity, discipline, and the right partner. At Cyber Coalition, we
              help you navigate compliance, reduce risk, and build secure systems that
              support your mission.
            </p>
            <p className="text-white font-bold text-base mb-8">— Frank Lim, CEO</p>
            <a
              href="/services"
              className="inline-block border border-white text-white px-7 py-3 text-sm font-semibold hover:bg-white hover:text-navy-950 transition-colors"
            >
              Browse our services
            </a>
          </div>
        </div>
      </section>

      {/* About body */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">
                About Cyber Coalition
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-950 leading-tight mb-5">
                Passion.<br />Skill.<br />Precision.
              </h2>
              <p className="text-slate-500 text-base leading-relaxed">
                A team of IT and cybersecurity professionals dedicated to helping businesses
                operate with confidence in an increasingly complex digital environment.
              </p>
            </div>
            <div>
              <p className="text-slate-600 leading-relaxed mb-5">
                We are a team of IT and cybersecurity professionals dedicated to helping businesses
                operate with confidence in an increasingly complex digital environment. Our work
                centers on one objective: delivering dependable technology and security solutions that
                protect the systems, data, and operations organizations rely on every day.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                We believe effective security should be both sophisticated and practical. By combining
                proven technologies with thoughtfully designed systems, we implement solutions that
                integrate seamlessly into your business while providing the visibility and protection
                leadership expects.
              </p>
              <p className="text-slate-600 leading-relaxed">
                From initial consultation and system architecture to installation and ongoing support,
                we approach every engagement with precision, accountability, and long-term perspective.
                Our clients trust us not only for the technology we deploy, but for the consistency
                and professionalism with which we deliver it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDVOSB badge */}
      <section className="py-12 bg-navy-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-32 flex-shrink-0 flex items-center justify-center bg-white rounded-xl p-3">
              <img src="/assets/logos/SDVOSB-logo-color.png" alt="SDVOSB" className="w-full object-contain" />
            </div>
            <div>
              <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">
                Service Disabled Veteran Owned Small Business
              </div>
              <h2 className="font-display text-2xl font-bold text-white mb-2">
                We Are a SDVOSB
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                We are proud of our service to our country. Our team blends years of hands-on
                experience with cutting-edge expertise to deliver security solutions you can trust.
                Every member is driven to protect what matters most — your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
              How We Work
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-950 mb-4">
              Our Operating Principles
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white border border-slate-200 p-7 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all text-center"
              >
                <h3 className="font-display text-lg font-bold text-navy-950 mb-3">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Client Feedback
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-950">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-5 text-sm italic">"{t.quote}"</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-navy-950 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">{t.name[0]}</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-navy-950 text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
