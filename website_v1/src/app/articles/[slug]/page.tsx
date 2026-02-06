import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getArticleBySlug, getRelatedArticles, articles } from '@/data/articles'
import ArticleContent from './ArticleContent'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} — Clay Seifert`,
    description: article.preview,
    openGraph: {
      title: article.title,
      description: article.preview,
      type: 'article',
      publishedTime: article.date,
      authors: ['Clay Seifert'],
    },
  }
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = article.relatedSlugs 
    ? getRelatedArticles(article.relatedSlugs) 
    : []

  return <ArticleContent article={article} relatedArticles={relatedArticles} />
}

