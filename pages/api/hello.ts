import { NextApiHandler } from 'next'

interface HelloResp {
  name: string
}

const hello: NextApiHandler<HelloResp> = (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}

export default hello
