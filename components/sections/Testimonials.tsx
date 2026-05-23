export default function Testimonials() {
  const testimonials = [
    {
      text: "I came in with chronic back pain and couldn't deadlift without issues. Jason identified movement compensations I'd been doing for years and rebuilt my technique from scratch. Six months later, I'm pain-free and stronger than ever.",
      author: 'Marcus T.',
      detail: 'Powerlifting Client',
      avatar: 'M'
    },
    {
      text: "At 68, I thought my strength training days were behind me. Jason's senior-focused program proved me wrong. I'm more mobile, balanced, and confident than I've been in decades. This has genuinely improved my quality of life.",
      author: 'Diane R.',
      detail: 'Senior Strength Program',
      avatar: 'D'
    },
    {
      text: "The virtual training setup is fantastic. Jason watches my form in real-time and gives immediate feedback. I was skeptical about online coaching, but this is just as effective as in-person—maybe even better because he can review video after the session.",
      author: 'Alex P.',
      detail: 'Athletic Performance',
      avatar: 'A'
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">What Clients Say</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div>
                  <div className="author-name">{testimonial.author}</div>
                  <div className="author-detail">{testimonial.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
