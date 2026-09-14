import { useState } from 'react'
import { getSupabase } from '../lib/supabase'
import { CheckCircle, AlertCircle, Send, Phone, Mail, Shield, Anchor, Heart, Cloud } from 'lucide-react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const serviceOptions = [
  { value: 'cmmc', label: 'CMMC Compliance (Level 1 or Level 2)' },
  { value: 'mtsa', label: 'MTSA Cybersecurity (Maritime)' },
  { value: 'healthcare', label: 'Healthcare / HIPAA Compliance' },
  { value: 'cloud', label: 'Cloud Security & Architecture' },
  { value: 'grc', label: 'Governance, Risk & Compliance (GRC)' },
  { value: 'consulting', label: 'General Cybersecurity Consulting' },
  { value: 'other', label: 'Other / Not Sure Yet' },
]

const highlights = [
  { icon: Shield, label: 'CMMC Level 1 & 2', sub: 'Defense contractors' },
  { icon: Anchor, label: 'MTSA Compliance', sub: 'Maritime facilities' },
  { icon: Heart, label: 'HIPAA / HITECH', sub: 'Healthcare organizations' },
  { icon: Cloud, label: 'Cloud Security', sub: 'Azure' },
]

export default function RequestConsultationPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    timeline: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')
    try {
      const { error } = await getSupabase().from('consultation_requests').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        organization: form.organization || null,
        service: form.service || null,
        timeline: form.timeline || null,
        message: form.message || null,
      })
      if (error) throw error
            // Notify info@ via the existing edge function
      const details = [
        form.phone ? `Phone: ${form.phone}` : '',
        form.timeline ? `Timeline: ${form.timeline}` : '',
        '',
        form.message || '(no message provided)',
      ].filter(Boolean).join('\n')

      await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          organization: form.organization,
          service: form.service,
          message: details,
        }),
      }).catch(() => {})
      setStatus('success')
      setForm({ name: '', email: '', phone: '', organization: '', service: '', timeline: '', message: '' })
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again or contact us directly.')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Free Consultation
          </p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5">
            Request a Consultation
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Partner with Cyber Coalition to strengthen your cybersecurity posture, support compliance
            objectives, and protect critical systems across your environment. Tell us about your needs
            and we'll be in touch within one business day.
          </p>
        </div>
      </section>

      {/* Highlights bar */}
      <section className="bg-navy-900 border-y border-white/10 py-6">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((h) => {
              const Icon = h.icon
              return (
                <div key={h.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">{h.label}</div>
                    <div className="text-slate-500 text-xs">{h.sub}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form + contact */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact sidebar */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-xl font-bold text-navy-950 mb-4">
                Prefer to reach us directly?
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                You can also call or email us. We typically respond within one business day.
              </p>
              <div className="space-y-5">
                <a href="tel:8043066200" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-navy-950 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Phone className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">Phone</div>
                    <div className="text-navy-950 font-semibold text-sm group-hover:text-blue-600 transition-colors">
                      804.306.6200
                    </div>
                  </div>
                </a>
                <a href="mailto:info@cyber-coalition.com" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-navy-950 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">Email</div>
                    <div className="text-navy-950 font-semibold text-sm group-hover:text-blue-600 transition-colors">
                      info@cyber-coalition.com
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-10 rounded-xl bg-blue-50 border border-blue-100 p-5">
                <p className="text-sm font-semibold text-navy-950 mb-2">What to expect</p>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                    Response within one business day
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                    30-minute scoping call at no cost
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                    Honest timeline and scope estimate
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                    No obligation to proceed
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                {status === 'success' ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-navy-950 mb-3">
                      Request Received
                    </h3>
                    <p className="text-slate-500 leading-relaxed max-w-sm mx-auto mb-6">
                      Thank you for reaching out. A member of our team will contact you within one
                      business day to schedule your consultation.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-blue-600 hover:text-blue-500 text-sm font-medium transition-colors"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(804) 555-0100"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                          Organization
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={form.organization}
                          onChange={handleChange}
                          placeholder="Company or Agency"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Service of Interest
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-colors appearance-none"
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Timeline / Urgency
                      </label>
                      <select
                        name="timeline"
                        value={form.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-colors appearance-none"
                      >
                        <option value="">Select a timeline...</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-3months">Within 1–3 months</option>
                        <option value="3-6months">Within 3–6 months</option>
                        <option value="exploring">Just exploring options</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Tell Us About Your Needs
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Brief description of your current situation, compliance requirements, or security goals..."
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-colors resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-start gap-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-600/20"
                    >
                      {status === 'submitting' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Request Consultation
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
