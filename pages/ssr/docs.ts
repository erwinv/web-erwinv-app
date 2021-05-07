import { GetServerSideProps } from 'next'
import Docs, { DocsProps } from '../docs'
import { topics } from '../api/mock/topics'

export default Docs

export const getServerSideProps: GetServerSideProps<DocsProps> = async (context) => {
  return {
    props: {
      topics
    }
  }
}