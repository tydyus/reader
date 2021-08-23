// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Crypto } from "../../class/Crypto.class";
import {Dbo} from "../../class/Dbo.class";


interface Data {
  name: string,
  psw: string,
  uid: string
}
interface DataRes {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataRes>
) {
  
  if (req.method === 'POST'){
    return new Promise<void>(async (resolve, reject) => {
    const data: Data = req.body;
    const {name,psw} = data;

    const uid = (Math.random() * 10000).toString();;
    const pswEncrypted = Crypto.encrypt(psw);

    console.log("debug");
    try {
      Dbo.Init(); 
      await Dbo.connect("users", async ()=>{
        try{
        await Dbo.add(
          {
            name:name, 
            uid:uid, 
            psw:pswEncrypted,
            tokenId:"",
            token:"",
            tokenDate: 0,
          }
        )
        .then(_ => {
          res.status(201).json({message:"user add"});
          resolve();
        })
        .catch(err => console.error(err));
        }catch (error){console.error(error)}
      }).catch(err => console.error(err));
      
    } catch (error) {
      res.status(500).json({message:(error as string)})
      return resolve();
    }
  });}
  
}

