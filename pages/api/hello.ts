// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const url = 'mongodb+srv://mernstack:mernstack@cluster0.cpuxp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const dbName = 'myFirstDatabase';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
