import { random, range } from 'lodash'
import faker from 'faker'
import { NextApiHandler } from 'next'
import { Article } from '../../../../types'

export function fakeArticle(): Article {
  return {
    id: faker.random.alphaNumeric(6),
    title: faker.lorem.words(random(2, 4)),
    content: faker.lorem.paragraphs(3),
    diagram: faker.lorem.sentences(10),
  }
}

export const articles = range(100).map(fakeArticle)

const getArticles: NextApiHandler<Article[]> = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405)
    return
  }

  res.status(200).json(articles)
}

export default getArticles
