import { useState } from 'react'
import { Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error || `Request failed (${res.status})`)
      }

      const data = await res.json()
      if (!data.success) {
        throw new Error(data.error || 'Unexpected response from server')
      }

      setStatus('success')
      setForm({ name: '', email: '', organization: '', service: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(
        err instanceof Error && err.message
          ? err.message
          : 'Something went wrong. Please try again or email us directly.',
      )
    }
  }

  return (
    <section id="contact" className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5 text-balance leading-tight">
              Secure Your Organization Today
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Partner with Cyber Coalition to strengthen your cybersecurity posture, support compliance
              objectives, and protect critical systems across your environment.
            </p>

            <div className="space-y-5">
              <a
                href="tel:8043066200"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/25 transition-colors">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Phone</div>
                  <div className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                    804.306.6200
                  </div>
                </div>
              </a>
              <a
                href="mailto:info@cyber-coalition.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/25 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                    info@cyber-coalition.com
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">Message Received</h3>
                <p className="text-slate-400 text-sm">
                  Thank you for reaching out. A member of our team will be in touch shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    placeholder="Company or Agency"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-colors appearance-none"
                  >
                    <option value="" className="bg-navy-950">Select a service...</option>
                    <option value="cmmc" className="bg-navy-950">CMMC Compliance</option>
                    <option value="mtsa" className="bg-navy-950">MTSA Cybersecurity</option>
                    <option value="cloud" className="bg-navy-950">Cloud Security & Management</option>
                    <option value="consulting" className="bg-navy-950">Cybersecurity Consulting</option>
                    <option value="grc" className="bg-navy-950">Governance, Risk & Compliance</option>
                    <option value="other" className="bg-navy-950">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your security needs..."
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-blue-500 hover:bg-blue-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-500/20"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
