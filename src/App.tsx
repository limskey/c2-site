import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import CMMCPage from './pages/CMMCPage'
import MTSAPage from './pages/MTSAPage'
import HealthcarePage from './pages/HealthcarePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import BlogPost from './pages/BlogPost'
import RequestConsultationPage from './pages/RequestConsultationPage'
import CareersPage from './pages/CareersPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/cmmc" element={<CMMCPage />} />
          <Route path="/services/mtsa" element={<MTSAPage />} />
          <Route path="/services/healthcare" element={<HealthcarePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/request-consultation" element={<RequestConsultationPage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
