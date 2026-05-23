'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('')

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">TRAIN WITH A PURPOSE</div>
            <p className="footer-tagline">Building strength, movement, and purpose since 2012</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Programs</h4>
              <ul>
                <li><Link href="/#services">Powerlifting</Link></li>
                <li><Link href="/#services">Athletic Performance</Link></li>
                <li><Link href="/#services">Olympic Lifting</Link></li>
                <li><Link href="/#services">Senior Strength</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://www.facebook.com/Ja.in.Motion54" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="mailto:coachjasonw57@gmail.com">Email</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Train With A Purpose. All rights reserved.</p>
          <p className="footer-credit">Powered by <a href="https://ndsdigitalstudio.com/" target="_blank" rel="noopener noreferrer" className="nds-link">NDS Digital Studio</a></p>
        </div>
      </div>
    </footer>
  )
}
