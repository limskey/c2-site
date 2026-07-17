import { ArrowRight, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CtaSection() {
  return (
    <section className="py-20 bg-navy-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
          Secure Your Organization Today
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Partner with Cyber Coalition to strengthen your cybersecurity posture, support compliance
          objectives, and protect critical systems across your environment.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/request-consultation"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-colors shadow-lg shadow-blue-500/20"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <a
              href="tel:8043066200"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              804.306.6200
            </a>
            <a
              href="mailto:info@cyber-coalition.com"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              info@cyber-coalition.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
