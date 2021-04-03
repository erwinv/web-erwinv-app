import { NextApiHandler } from 'next'
import { fakeArticle, Article } from './'

const getArticle: NextApiHandler<Article> = (req, res) => {
  if (req.method !== 'GET') {
    res.status(405)
    return
  }

  res.status(200).json(fakeArticle())
}

export default getArticle
