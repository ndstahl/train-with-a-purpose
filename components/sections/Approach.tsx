'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Approach() {
  const [isVisible, setIsVisible] = useState(false)
  const [stats, setStats] = useState({ years: 0, clients: 0, virtual: 0 })
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const startTime = Date.now()

    const animateValue = (target: number, setter: (val: number) => void) => {
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeOutQuad = progress * (2 - progress)
        const currentValue = Math.floor(target * easeOutQuad)

        setter(currentValue)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setter(target)
        }
      }
      animate()
    }

    animateValue(12, (val) => setStats(prev => ({ ...prev, years: val })))
    animateValue(500, (val) => setStats(prev => ({ ...prev, clients: val })))
    animateValue(100, (val) => setStats(prev => ({ ...prev, virtual: val })))
  }, [isVisible])

  return (
    <section id="approach" className="approach">
      <div className="container">
        <div className="approach-content">
          <div className="approach-text">
            <h2 className="section-title">The Anatomy-Based Difference</h2>
            <p className="approach-intro">Most training programs focus on what you're doing. We focus on how you're doing it—and why it matters.</p>

            <div className="approach-points">
              <div className="approach-point">
                <div className="point-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                  </svg>
                </div>
                <div>
                  <h4>Movement Mechanics</h4>
                  <p>Understanding how your body moves—joint angles, muscle recruitment patterns, and biomechanics—ensures every exercise builds strength without compensation or injury risk.</p>
                </div>
              </div>

              <div className="approach-point">
                <div className="point-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                  </svg>
                </div>
                <div>
                  <h4>Muscle Activation</h4>
                  <p>It's not just about moving weight—it's about activating the right muscles at the right time. We teach you to feel and control every rep for maximum results.</p>
                </div>
              </div>

              <div className="approach-point">
                <div className="point-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                  </svg>
                </div>
                <div>
                  <h4>Body Awareness</h4>
                  <p>Developing proprioception and kinesthetic awareness means you know when something's off before it becomes an injury. Train smarter, not just harder.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="approach-visual">
            <div className="coach-image">
              <Image
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=800&fit=crop"
                alt="Coach Jason training a client"
                width={600}
                height={800}
              />
              <div className="image-caption">Coach Jason working with clients</div>
            </div>
            <div className="stats-box" ref={statsRef}>
              <div className="stat">
                <span className="stat-number">{stats.years}</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">{stats.clients}</span>
                <span className="stat-plus">+</span>
                <span className="stat-label">Clients Trained</span>
              </div>
              <div className="stat">
                <span className="stat-number">{stats.virtual}</span>
                <span className="stat-percent">%</span>
                <span className="stat-label">Virtual Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
