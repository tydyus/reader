// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {MongoClient} from "mongodb";
import {User} from "../../../class/User.class"


interface DataRes {
  tokenId: string,
  token:string,
  date:number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataRes>
) {// /api/getUser/name/tokenID/token
  
    const {data} = req.query;
    if (data.length < 4) throw new Error("unknow call to the api");

  
}
