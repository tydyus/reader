// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';


interface Data {
  title: string
}
interface DataRes {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataRes>
) {

  if (req.method === 'POST'){

    const data: Data = req.body;
    const title = data.title.split(" ").join("-");
    let reGex = /([^A-Z|a-z|-])/;
    if (reGex.test(title)) throw new Error("incorrect name for the novel");


    res.status(201).json({message: `new novel ${title} added`});
  }
  
}
