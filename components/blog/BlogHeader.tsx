'use client'

import { useState } from 'react'

interface BlogHeaderProps {
  onCategoryChange?: (category: string) => void
}

export default function BlogHeader({ onCategoryChange }: BlogHeaderProps) {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'training', label: 'Training' },
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'recovery', label: 'Recovery' },
    { id: 'mindset', label: 'Mindset' }
  ]

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    if (onCategoryChange) {
      onCategoryChange(categoryId)
    }
  }

  return (
    <section className="blog-header">
      <div className="container">
        <h1 className="page-title">Great Reads</h1>
        <p className="page-subtitle">Articles for your mental, physical, and spiritual growth—from training insights to mindset strategies.</p>

        <div className="blog-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
              data-category={category.id}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
