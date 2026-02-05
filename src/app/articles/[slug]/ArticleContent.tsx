'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Article } from '@/data/articles'

interface Props {
  article: Article
  relatedArticles: Article[]
}

export default function ArticleContent({ article, relatedArticles }: Props) {
  // Convert markdown-like content to HTML
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        // Headers
        if (paragraph.startsWith('## ')) {
          return (
            <h2 
              key={index}
              className="font-display text-2xl md:text-3xl font-medium text-fg mt-16 mb-6"
            >
              {paragraph.replace('## ', '')}
            </h2>
          )
        }
        
        // Tables (simplified rendering)
        if (paragraph.includes('|') && paragraph.includes('---')) {
          const lines = paragraph.split('\n').filter(l => !l.includes('---'))
          const headers = lines[0]?.split('|').filter(Boolean).map(h => h.trim())
          const rows = lines.slice(1).map(row => 
            row.split('|').filter(Boolean).map(cell => cell.trim())
          )
          
          return (
            <div key={index} className="overflow-x-auto my-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-muted">
                    {headers?.map((header, i) => (
                      <th key={i} className="text-left py-3 px-4 text-dim font-medium">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-muted/30">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="py-3 px-4 text-fg/80">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
        
        // Bold text
        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
          return (
            <p key={index} className="text-fg font-medium my-4">
              {paragraph.replace(/\*\*/g, '')}
            </p>
          )
        }
        
        // List items
        if (paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').filter(l => l.startsWith('- '))
          return (
            <ul key={index} className="space-y-2 my-6 ml-4">
              {items.map((item, i) => (
                <li key={i} className="text-fg/80 leading-relaxed flex gap-3">
                  <span className="text-accent">→</span>
                  <span>{formatInlineText(item.replace('- ', ''))}</span>
                </li>
              ))}
            </ul>
          )
        }
        
        // Horizontal rule
        if (paragraph === '---') {
          return (
            <hr key={index} className="border-muted/30 my-12" />
          )
        }
        
        // Italic paragraphs (notes)
        if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
          return (
            <p key={index} className="text-dim italic my-8 text-sm">
              {paragraph.replace(/^\*|\*$/g, '')}
            </p>
          )
        }
        
        // Regular paragraphs
        return (
          <p key={index} className="text-fg/80 leading-relaxed my-6">
            {formatInlineText(paragraph)}
          </p>
        )
      })
  }
  
  // Format inline text (bold, italic)
  const formatInlineText = (text: string) => {
    // Split by bold markers
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-fg font-medium">{part.replace(/\*\*/g, '')}</strong>
      }
      return part
    })
  }

  const categoryColors = {
    essay: 'text-accent',
    'field-note': 'text-accent',
    prototype: 'text-accent',
    reading: 'text-accent',
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-6">
          <Link 
            href="/#notes"
            className="inline-flex items-center gap-2 text-dim hover:text-fg transition-colors text-sm"
          >
            <span>←</span>
            <span>Back to Working Notes</span>
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 md:px-12 pt-32 pb-24">
        {/* Header */}
        <motion.header
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className={`text-micro ${categoryColors[article.category]}`}>
              {article.category.replace('-', ' ')}
            </span>
            <span className="text-muted">•</span>
            <span className="text-micro text-dim">{article.readingTime}</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-fg leading-tight mb-8">
            {article.title}
          </h1>
          
          <time className="text-dim">{article.date}</time>
        </motion.header>

        {/* Content */}
        <motion.div
          className="prose-custom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {formatContent(article.content)}
        </motion.div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <motion.footer
            className="mt-24 pt-12 border-t border-muted/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-micro text-dim mb-8">Continue Reading</h3>
            <div className="space-y-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/articles/${related.slug}`}
                  className="group block"
                >
                  <p className="text-xl font-display font-medium text-fg group-hover:text-accent transition-colors">
                    {related.title}
                  </p>
                  <p className="text-dim text-sm mt-1">{related.preview}</p>
                </Link>
              ))}
            </div>
          </motion.footer>
        )}
      </article>

      {/* Footer */}
      <footer className="border-t border-muted/30 py-8">
        <div className="max-w-3xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link 
            href="/"
            className="text-dim hover:text-fg transition-colors text-sm"
          >
            Clay Seifert
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-dim hover:text-fg transition-colors text-sm flex items-center gap-2"
          >
            Top ↑
          </button>
        </div>
      </footer>
    </div>
  )
}

