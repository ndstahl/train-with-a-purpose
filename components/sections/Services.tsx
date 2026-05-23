export default function Services() {
  const services = [
    {
      title: 'Powerlifting',
      tag: 'Strength',
      description: 'Master the big three: squat, bench, deadlift. Build maximum strength with proper form and progressive programming.',
      features: ['Competition prep', 'Form analysis & correction', 'Periodized programming']
    },
    {
      title: 'Athletic Performance',
      tag: 'Performance',
      description: 'Explosive power, speed, agility, and sport-specific conditioning to take your game to the next level.',
      features: ['Sport-specific training', 'Speed & agility work', 'Injury prevention protocols'],
      featured: true
    },
    {
      title: 'Olympic Weightlifting',
      tag: 'Power',
      description: 'Learn the snatch and clean & jerk with technical precision and build explosive strength from the ground up.',
      features: ['Technical coaching', 'Mobility development', 'Competition guidance']
    },
    {
      title: 'Strongman Training',
      tag: 'Power',
      description: 'Tire flips, atlas stones, yoke carries—functional strength that translates to real-world performance.',
      features: ['Event-specific training', 'Grip & core strength', 'Competition strategy']
    },
    {
      title: 'Functional Movement',
      tag: 'Foundation',
      description: 'Movement screening and corrective exercise to identify imbalances and build a resilient, pain-free body.',
      features: ['FMS screening', 'Corrective exercises', 'Mobility protocols']
    },
    {
      title: 'Senior Strength',
      tag: 'Longevity',
      description: 'Stay strong, mobile, and independent. Age-appropriate programming focused on bone density, balance, and quality of life.',
      features: ['Balance training', 'Bone density focus', 'Safe progression']
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-intro">
          <h2 className="section-title">Training Programs</h2>
          <p className="section-description">From competitive athletes to active seniors, every program is built around proper movement, progressive overload, and your individual goals.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.featured ? 'featured' : ''}`}>
              {service.featured && <div className="featured-badge">Most Popular</div>}
              <div className="service-header">
                <h3>{service.title}</h3>
                <span className="service-tag">{service.tag}</span>
              </div>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
