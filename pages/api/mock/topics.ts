import { chunk, pick, floor, random } from 'lodash'
import faker from 'faker'
import { NextApiHandler } from 'next'
import { Article, Topic } from '../../../types'
import { articles } from './articles'

export function fakeTopics(articles: Article[]) {
  // TODO reimport _.chain as a helper https://github.com/lodash/lodash/issues/3298#issuecomment-341685354
  return chunk(
    articles.map(a => pick(a, 'id', 'title')),
    floor(articles.length / 10)
  )
    .map(articles => ({
      name: faker.lorem.words(random(2, 4)),
      articles,
    }))
}

export const topics = fakeTopics(articles)

const getTopics: NextApiHandler<Topic[]> = (req, res) => {
  if (req.method !== 'GET') {
    res.status(405)
    return
  }

  res.status(200).json(topics)
}

export default getTopics
