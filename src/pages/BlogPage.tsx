import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Tag } from 'lucide-react'

export const blogPosts = [
  {
    slug: 'cmmc-gap-assessment',
    title: 'CMMC Gap Assessment: What to Expect (and What Most Companies Get Wrong)',
    excerpt:
      'A CMMC gap assessment is the difference between knowing you\'ll pass and hoping you will. Skip it, and the first time you find out where your company stands is when a C3PAO walks in for the real thing.',
    date: 'June 2026',
    category: 'CMMC',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'americas-seaport-cybersecurity',
    title: "America's Seaport Cybersecurity",
    excerpt:
      'The United States moves roughly $5 trillion in trade every year. Nearly all of it touches a seaport. For years, the cybersecurity posture protecting that infrastructure has been voluntary — that just changed.',
    date: 'May 2026',
    category: 'MTSA',
    readTime: '15 min read',
    image: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy-950 pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Insights & Resources
          </p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            The Cyber Coalition Blog
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Practical guidance on CMMC, MTSA, cloud security, and the regulatory landscape facing
            government contractors and regulated enterprises.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-display font-bold text-navy-950 text-lg leading-snug mb-3">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 text-sm font-semibold transition-colors group"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
