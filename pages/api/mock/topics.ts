import _ from 'lodash'
import faker from 'faker'
import { NextApiHandler } from 'next'
import { Topic } from '../../../types'
import { articles } from './articles'

export const topics = _.chain(articles)
  .map(a => _.pick(a, 'id', 'title'))
  .chunk(_.floor(articles.length / 10))
  .map(articles => ({
    name: faker.lorem.words(_.random(2, 4)),
    articles,
  }))
  .value()

const getTopics: NextApiHandler<Topic[]> = (req, res) => {
  if (req.method !== 'GET') {
    res.status(405)
    return
  }

  res.status(200).json(topics)
}

export default getTopics
