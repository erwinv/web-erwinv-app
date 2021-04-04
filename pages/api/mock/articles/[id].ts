import { NextApiHandler } from 'next'
import { Article } from '../../../../types'

import { articles } from './'

const getArticle: NextApiHandler<Article> = (req, res) => {
  if (req.method !== 'GET') {
    res.status(405)
    return
  }

  const article = articles.find(({ id }) => id === req.query.id)

  res.status(article ? 200 : 404).json(article ?? null)
}

export default getArticle
