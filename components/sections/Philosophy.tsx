import Image from 'next/image'

export default function Philosophy() {
  return (
    <section id="philosophy" className="philosophy">
      <div className="container">
        <div className="section-intro">
          <h2 className="section-title">Why Purpose-Driven Training?</h2>
          <p className="section-description">Every rep, every set, every meal has intention behind it. This isn't about following trends or quick fixes—it's about understanding your body and building a foundation that lasts.</p>
        </div>

        <div className="philosophy-grid">
          <div className="philosophy-card">
            <div className="card-image">
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop"
                alt="Nutrition and meal prep"
                width={800}
                height={600}
              />
            </div>
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Fuel Your Performance</h3>
            <p>Nutrition isn't about restriction—it's about giving your body what it needs to perform, recover, and thrive. Learn to eat for energy, endurance, and optimal health.</p>
          </div>

          <div className="philosophy-card">
            <div className="card-image">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop"
                alt="Recovery and stretching"
                width={800}
                height={600}
              />
            </div>
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <h3>Recovery & Resilience</h3>
            <p>Strength isn't just built in the gym—it's built in recovery. Proper rest, mobility work, and injury prevention strategies keep you training for years, not just weeks.</p>
          </div>

          <div className="philosophy-card">
            <div className="card-image">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
                alt="Senior strength training"
                width={800}
                height={600}
              />
            </div>
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3>Long-Term Health</h3>
            <p>Sustainable progress beats short-term gains every time. Build habits that support your life, not disrupt it. This is about being strong at 60, 70, and beyond.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
