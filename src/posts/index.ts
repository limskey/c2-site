import { lazy } from 'react'
import type { ComponentType, LazyExoticComponent } from 'react'

/**
 * The blog post registry.
 *
 * This is the single source of truth for the blog: `/blog` builds its index
 * from it, and `/blog/:slug` resolves posts through it. Adding a post means
 * adding one entry here — `src/App.tsx` is never touched.
 *
 * The ERP inserts new entries immediately after the `c2erp:posts` marker, so
 * the array stays newest-first. Keep the marker. If it disappears, automated
 * publishing refuses rather than guessing where to insert.
 *
 * `import()` paths must stay string literals — Rollup needs to see them
 * statically to emit a chunk per post.
 */

export type PostMeta = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  image: string
}

export type Post = PostMeta & {
  component: LazyExoticComponent<ComponentType>
}

export const posts: Post[] = [
  /* c2erp:posts */
  {
    slug: 'cmmc-gap-assessment',
    title: 'CMMC Gap Assessment: What to Expect (and What Most Companies Get Wrong)',
    excerpt:
      'A CMMC gap assessment is the difference between knowing you\'ll pass and hoping you will. Skip it, and the first time you find out where your company stands is when a C3PAO walks in for the real thing.',
    date: 'June 2026',
    category: 'CMMC',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    component: lazy(() => import('./CMMCGapAssessment')),
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
    component: lazy(() => import('./SeaportCybersecurity')),
  },
]

export function findPost(slug: string | undefined): Post | undefined {
  return slug ? posts.find((p) => p.slug === slug) : undefined
}
