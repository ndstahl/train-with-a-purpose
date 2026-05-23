import Image from 'next/image'
import Link from 'next/link'

export default function BlogPreview() {
  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop',
      category: 'Training',
      date: 'May 15, 2024',
      readTime: '5 min read',
      title: 'The 5 Movement Patterns Everyone Should Master',
      excerpt: 'Before you load a barbell or chase PRs, you need to own these fundamental movement patterns. Here is why they matter and how to progress them properly.',
      featured: true
    },
    {
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
      category: 'Nutrition',
      date: 'May 8, 2024',
      readTime: '4 min read',
      title: 'Stop Counting Calories, Start Building Habits',
      excerpt: 'Why sustainable nutrition is not about restriction-it is about creating systems that support your training and life.'
    },
    {
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      category: 'Recovery',
      date: 'May 1, 2024',
      readTime: '6 min read',
      title: 'Why Recovery Days Make You Stronger',
      excerpt: 'Active recovery, mobility work, and strategic rest days are not optional-they are where adaptation happens.'
    },
    {
      image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=600&h=400&fit=crop',
      category: 'Mindset',
      date: 'April 24, 2024',
      readTime: '3 min read',
      title: 'Training With Purpose vs. Training With Ego',
      excerpt: 'How to shift from chasing numbers to building sustainable strength that serves your life.'
    }
  ]

  return (
    <section className="blog-preview">
      <div className="container">
        <div className="section-intro">
          <h2 className="section-title">Latest From The Blog</h2>
          <p className="section-description">Training tips, nutrition advice, and mindset strategies to keep you moving forward.</p>
        </div>

        <div className="blog-grid">
          {posts.map((post, index) => (
            <article key={index} className={`blog-card ${post.featured ? 'featured-post' : ''}`}>
              <div className="blog-image">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={post.featured ? 800 : 600}
                  height={post.featured ? 500 : 400}
                />
                <div className="blog-category">{post.category}</div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link href="/blog" className="blog-link">Read More →</Link>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <Link href="/blog" className="btn btn-primary">View All Articles</Link>
        </div>
      </div>
    </section>
  )
}
