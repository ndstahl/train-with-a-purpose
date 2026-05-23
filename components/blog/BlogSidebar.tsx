'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogSidebar() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    setTimeout(() => {
      console.log('Newsletter subscription:', email)
      setStatus('success')
      setEmail('')

      setTimeout(() => {
        setStatus('idle')
      }, 3000)
    }, 1000)
  }

  const popularPosts = [
    'The 5 Movement Patterns Everyone Should Master',
    'Why Recovery Days Make You Stronger',
    'Training With Purpose vs. Training With Ego',
    'Progressive Overload: The Only Principle That Matters'
  ]

  return (
    <aside className="blog-sidebar">
      {/* About Coach */}
      <div className="sidebar-widget">
        <div className="widget-author">
          <Image
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop"
            alt="Coach Jason"
            className="author-photo"
            width={120}
            height={120}
          />
          <h3>Coach Jason</h3>
          <p>12+ years helping people build strength that lasts. Certified in functional movement, nutrition coaching, and multiple strength disciplines.</p>
          <Link href="/#contact" className="btn btn-secondary btn-small">Work With Me</Link>
        </div>
      </div>

      {/* Newsletter */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Get Weekly Training Tips</h3>
        <p className="widget-description">Join 2,000+ readers getting practical strength and nutrition advice every week.</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary btn-small" disabled={status === 'sending'}>
            {status === 'sending' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>
      </div>

      {/* Popular Posts */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Popular Posts</h3>
        <div className="popular-posts">
          {popularPosts.map((post, index) => (
            <a href="#" key={index} className="popular-post">
              <span className="popular-number">{index + 1}</span>
              <span className="popular-title">{post}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
