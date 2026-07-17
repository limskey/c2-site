import { Link } from 'react-router-dom'

const serviceLinks = [
  { label: 'CMMC Compliance', href: '/services/cmmc' },
  { label: 'MTSA Cybersecurity', href: '/services/mtsa' },
  { label: 'Healthcare Solutions', href: '/services/healthcare' },
  { label: 'Cloud Security', href: '/#services' },
  { label: 'Consulting', href: '/#services' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img
                src="/assets/logos/logo-1024 copy.png"
                alt="CyberCoalition logo"
                className="h-10 w-auto"
              />
              <span className="font-display font-bold text-white text-lg tracking-tight">
                Cyber<span className="text-blue-400">Coalition</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Cybersecurity and technology services designed for resilience. Serving government
              contractors and regulated enterprises.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.href}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link to="/about" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="tel:8043066200" className="hover:text-slate-300 transition-colors">
                  804.306.6200
                </a>
              </li>
              <li>
                <a href="mailto:info@cyber-coalition.com" className="hover:text-slate-300 transition-colors">
                  info@cyber-coalition.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            &copy; {year} Cyber Coalition. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm">Built for government and enterprise resilience.</p>
        </div>
      </div>
    </footer>
  )
}
