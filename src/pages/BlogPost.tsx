import { Suspense } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { findPost } from '../posts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = findPost(slug)

  if (!post) return <Navigate to="/blog" replace />

  const Body = post.component
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <Body />
    </Suspense>
  )
}
