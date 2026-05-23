import BlogHeader from '@/components/blog/BlogHeader'
import BlogContent from '@/components/blog/BlogContent'

export const metadata = {
  title: 'Blog - Train With A Purpose',
  description: 'Training insights, nutrition wisdom, and mindset strategies from the trenches.',
}

export default function BlogPage() {
  return (
    <main>
      <BlogHeader />
      <BlogContent />
    </main>
  )
}
