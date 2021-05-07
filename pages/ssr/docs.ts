import _ from 'lodash'
import { GetServerSideProps } from 'next'
import Docs, { DocsProps } from '../docs'
import { fakeArticle } from '../api/mock/articles'
import { fakeTopics } from '../api/mock/topics'

export default Docs

export const getServerSideProps: GetServerSideProps<DocsProps> = async (context) => {
  const articles = _.range(100).map(fakeArticle)
  const topics = fakeTopics(articles)
  
  return {
    props: {
      topics,
    }
  }
}
