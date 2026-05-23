'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar" style={{ padding: scrolled ? '12px 0' : '20px 0' }}>
      <div className="nav-container">
        <div className="logo">
          <Link href="/" className="logo-text">
            TRAIN WITH A PURPOSE
          </Link>
        </div>
        <div
          className="nav-toggle"
          id="navToggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
          <li><Link href="/#home" className="nav-link" onClick={handleLinkClick}>Home</Link></li>
          <li><Link href="/#philosophy" className="nav-link" onClick={handleLinkClick}>Philosophy</Link></li>
          <li><Link href="/#services" className="nav-link" onClick={handleLinkClick}>Services</Link></li>
          <li><Link href="/blog" className="nav-link" onClick={handleLinkClick}>Blog</Link></li>
          <li><Link href="/#contact" className="nav-link" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
