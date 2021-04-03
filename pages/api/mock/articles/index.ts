import _ from 'lodash'
import faker from 'faker'
import { NextApiHandler } from 'next'

type Markdown = string
type Uml = string

export interface Article {
  title: string
  content: Markdown
  diagram: Uml
}

export function fakeArticle(): Article {
  return {
    title: faker.lorem.words(_.random(1, 4)),
    content: faker.lorem.paragraphs(3),
    diagram: faker.lorem.sentences(10),
  }
}

interface GetArticlesResp {
  articles: Article[]
}

const getArticles: NextApiHandler<GetArticlesResp> = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405)
    return
  }

  res.status(200).json({
    articles: _.range(_.random(10, 100)).map(fakeArticle),
  })
}

export default getArticles
