import Image from 'next/image'

export default function InAction() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=1000&fit=crop',
      title: 'One-on-One Coaching',
      description: 'Personalized attention for every rep',
      large: true
    },
    {
      src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop',
      title: 'Group Sessions',
      description: 'Community-driven training'
    },
    {
      src: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=600&h=600&fit=crop',
      title: 'Strength Building',
      description: 'Progressive overload done right'
    },
    {
      src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=600&fit=crop',
      title: 'Functional Movement',
      description: 'Training that transfers to life'
    },
    {
      src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=1000&fit=crop',
      title: 'Virtual Training',
      description: 'Expert coaching from anywhere',
      large: true
    }
  ]

  return (
    <section className="in-action">
      <div className="container">
        <div className="section-intro">
          <h2 className="section-title">Training In Action</h2>
          <p className="section-description">Real training, real people, real results. See what purpose-driven training looks like.</p>
        </div>

        <div className="action-grid">
          {images.map((image, index) => (
            <div key={index} className={`action-card ${image.large ? 'large' : ''}`}>
              <Image
                src={image.src}
                alt={image.title}
                width={image.large ? 800 : 600}
                height={image.large ? 1000 : 600}
              />
              <div className="action-overlay">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
