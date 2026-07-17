import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const serviceLinks = [
  { label: 'CMMC Compliance', href: '/services/cmmc' },
  { label: 'MTSA Cybersecurity', href: '/services/mtsa' },
  { label: 'Healthcare Solutions', href: '/services/healthcare' },
]

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const transparent = location.pathname === '/' && !scrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent ? 'bg-transparent' : 'bg-navy-950/95 backdrop-blur shadow-lg'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18 py-4">
        {/* Logo / home button */}
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Go to home">
          <img
            src="/assets/logos/logo-1024 copy.png"
            alt="CyberCoalition logo"
            className="h-10 w-auto"
          />
          <span className="font-display font-bold text-white text-lg tracking-tight leading-none">
            Cyber<span className="text-blue-400">Coalition</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {/* Home button */}
          <li>
            <Link
              to="/"
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              Home
            </Link>
          </li>

          {/* Services dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              className="flex items-center gap-1 text-slate-300 hover:text-white text-sm font-medium transition-colors"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 rounded-xl border border-white/10 bg-navy-950 shadow-2xl overflow-hidden py-1">
                {serviceLinks.map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="border-t border-white/10 mt-1 pt-1">
                  <Link
                    to="/#services"
                    className="block px-4 py-2.5 text-xs text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-colors"
                  >
                    All Services
                  </Link>
                </div>
              </div>
            )}
          </li>

          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/request-consultation"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold transition-colors shadow-md"
        >
          Request Consultation
        </Link>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-navy-950/98 backdrop-blur border-t border-white/10 px-6 py-4 space-y-1">
          <Link
            to="/"
            className="block text-slate-300 hover:text-white text-base font-medium py-2 px-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            Home
          </Link>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-2 py-2">
            Services
          </p>
          {serviceLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="block text-slate-300 hover:text-white text-base font-medium py-2 px-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-3 mt-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="block text-slate-300 hover:text-white text-base font-medium py-2 px-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link
            to="/request-consultation"
            className="block mt-2 text-center px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold transition-colors"
          >
            Request Consultation
          </Link>
        </div>
      )}
    </header>
  )
}
