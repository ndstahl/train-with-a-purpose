import Hero from '@/components/sections/Hero'
import Philosophy from '@/components/sections/Philosophy'
import Services from '@/components/sections/Services'
import Approach from '@/components/sections/Approach'
import InAction from '@/components/sections/InAction'
import Testimonials from '@/components/sections/Testimonials'
import BlogPreview from '@/components/sections/BlogPreview'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <Services />
      <Approach />
      <InAction />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </main>
  )
}
