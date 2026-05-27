import Image from 'next/image'

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-image">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=700&fit=crop"
              alt="Coach Jason"
              width={600}
              height={700}
              className="about-photo"
            />
            <div className="about-badge">
              <div className="badge-number">12+</div>
              <div className="badge-label">Years Coaching</div>
            </div>
          </div>

          <div className="about-content">
            <div className="section-label">About</div>
            <h2 className="section-title">Meet Coach Jason</h2>

            <div className="about-text">
              <p>For over a decade, I have dedicated my life to helping individuals discover their true strength—not just in the gym, but in every aspect of their lives.</p>

              <p>My approach is simple: training should have purpose. Every exercise, every rep, every movement pattern should serve your goals and enhance your life. This is not about chasing trends or quick fixes. It is about building sustainable strength that lasts.</p>

              <p>I believe in educating my clients. When you understand how your body moves, why certain exercises matter, and how proper mechanics prevent injury, you become empowered to train intelligently for life.</p>

              <p>Whether you are a competitive athlete, a senior looking to maintain independence, or someone just starting their fitness journey, my mission is to meet you where you are and guide you to where you want to be.</p>
            </div>

            <div className="about-mission">
              <div className="mission-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <h3>My Mission</h3>
                <p>To empower individuals to achieve their fitness goals through tailored training programs that prioritize proper movement, injury prevention, and long-term health over quick results.</p>
              </div>
            </div>

            <div className="about-values">
              <div className="value-item">
                <strong>Education First</strong>
                <span>Understanding the why behind every movement</span>
              </div>
              <div className="value-item">
                <strong>Quality Over Quantity</strong>
                <span>Perfect form before added weight</span>
              </div>
              <div className="value-item">
                <strong>Holistic Health</strong>
                <span>Mind, body, and spirit in balance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
