import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-image"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-label">Coach Jason</div>
          <h1 className="hero-title">
            <span className="title-line">Build Strength.</span>
            <span className="title-line">Move Better.</span>
            <span className="title-line">Live Purposefully.</span>
          </h1>
          <p className="hero-subtitle">Elevate your fitness journey with expert coaching and personalized support</p>
          <div className="hero-cta">
            <Link href="#contact" className="btn btn-primary">Start Your Journey</Link>
            <Link href="#services" className="btn btn-secondary">Explore Programs</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
