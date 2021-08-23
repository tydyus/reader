// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {useRouter} from 'next/router';

interface DataNovel {
  title: string,
  content: string,
}
interface DataRes {
  message: string
}

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<DataRes>
) {
    const router = useRouter();
    const data: DataNovel = req.body;
    const {title,content} = data;

    
  
}
