import { Article } from './article'

export interface Topic {
  name: string
  articles: Pick<Article, 'id' | 'title'>[]
}
