'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlogSidebar from './BlogSidebar'

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState('all')

  const posts = [
    {
      id: 1,
      category: 'training',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=600&fit=crop',
      author: 'Coach Jason',
      date: 'May 15, 2024',
      readTime: '5 min read',
      title: 'The 5 Movement Patterns Everyone Should Master',
      excerpt: 'Before you load a barbell or chase PRs, you need to own these fundamental movement patterns. Here is why they matter and how to progress them properly.',
      content: `Every exercise you do in the gym and most movements you make in daily life can be broken down into five fundamental patterns: squat, hinge, push, pull, and carry. Master these, and you have built a foundation for injury-free training and long-term strength development.

Too many people jump straight to loaded exercises without understanding the underlying mechanics. They add weight to dysfunction, creating compensation patterns that eventually lead to pain or injury. Instead, we need to earn the right to load movement by demonstrating quality first.

When you can perform these patterns with proper mechanics correct joint angles, appropriate muscle activation, and full range of motion you are ready to progressively load them. Not before.`
    },
    {
      id: 2,
      category: 'nutrition',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=600&fit=crop',
      author: 'Coach Jason',
      date: 'May 8, 2024',
      readTime: '4 min read',
      title: 'Stop Counting Calories, Start Building Habits',
      excerpt: 'Why sustainable nutrition is not about restriction it is about creating systems that support your training and life.',
      content: `I have seen too many clients burn out trying to track every macro, weigh every meal, and maintain perfect adherence. The irony? The stress of trying to eat perfectly often does more harm than eating imperfectly with less stress.

Here is what works better: building sustainable habits that become automatic. Focus on protein at every meal. Eat vegetables you actually enjoy. Stay hydrated. Sleep enough to manage hunger hormones. These are not sexy, but they work.`
    },
    {
      id: 3,
      category: 'recovery',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop',
      author: 'Coach Jason',
      date: 'May 1, 2024',
      readTime: '6 min read',
      title: 'Why Recovery Days Make You Stronger',
      excerpt: 'Active recovery, mobility work, and strategic rest days are not optional they are where adaptation happens.',
      content: `You do not get stronger in the gym. You get stronger recovering from what you did in the gym. Training creates the stimulus, but recovery is where your body adapts and improves.

This is why I program recovery days into every client schedule. Not as an afterthought or something to skip when you are feeling good, but as an essential part of the training process.`
    },
    {
      id: 4,
      category: 'mindset',
      image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=1200&h=600&fit=crop',
      author: 'Coach Jason',
      date: 'April 24, 2024',
      readTime: '3 min read',
      title: 'Training With Purpose vs. Training With Ego',
      excerpt: 'How to shift from chasing numbers to building sustainable strength that serves your life.',
      content: `There is a difference between training with purpose and training with ego. Ego training chases PRs regardless of readiness, ignores pain signals, and sacrifices form for weight. Purpose-driven training respects the process, listens to the body, and values longevity over immediate gratification.

Ask yourself: Are you training to impress others or to improve yourself? Are you willing to reduce weight to perfect technique? Can you celebrate progress that does not show up on the barbell?`
    },
    {
      id: 5,
      category: 'training',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&h=600&fit=crop',
      author: 'Coach Jason',
      date: 'April 17, 2024',
      readTime: '7 min read',
      title: 'Progressive Overload: The Only Principle That Matters',
      excerpt: 'Understanding the one training principle that drives all long-term strength gains.',
      content: `If I could teach only one training concept, it would be progressive overload. Simply put: you must gradually increase training stress over time to continue adapting. Your body will not change unless you give it a reason to.

But progressive overload is not just adding weight to the bar. You can increase volume, improve technique, reduce rest periods, or increase training density. The key is systematic progression, not random variation.`
    },
    {
      id: 6,
      category: 'nutrition',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&h=600&fit=crop',
      author: 'Coach Jason',
      date: 'April 10, 2024',
      readTime: '5 min read',
      title: 'The Protein Priority: Why It Matters More Than You Think',
      excerpt: 'How adequate protein intake supports recovery, body composition, and long-term health.',
      content: `If you are training hard but not eating enough protein, you are leaving gains on the table. Protein provides the building blocks for muscle repair and growth. Without it, your body cannot fully adapt to training stress.

Target 0.8-1g per pound of bodyweight daily. Spread it across 3-4 meals. Prioritize whole food sources. It is not complicated, but it is non-negotiable if you want results.`
    }
  ]

  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(post => post.category === activeCategory)

  return (
    <section className="blog-posts">
      <div className="container">
        <div className="blog-layout">
          <div className="blog-main">
            {filteredPosts.map(post => (
              <article key={post.id} className="blog-post" data-category={post.category}>
                <div className="post-image">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={600}
                  />
                  <div className="blog-category">{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</div>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="post-author">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      {post.author}
                    </span>
                    <span className="post-date">{post.date}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  {post.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                  <div className="post-cta">
                    <Link href="/#contact" className="btn btn-secondary">Work With Me</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <BlogSidebar />
        </div>
      </div>
    </section>
  )
}
