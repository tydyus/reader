// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {Dbo} from "../../../class/Dbo.class";
import {IUser, User} from "../../../class/User.class"


interface Data {
  tokenId: string,
  token: string,
  id: string
}
interface DataRes {
  user:IUser,
  token:string,
  tokenId:string,
  id:string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataRes|{message:string}>
) {
    //console.log("getUser");

    if (req.method === 'POST'){
      return new Promise<void>(async (resolve, reject) => {
        const data: Data = req.body;
        const {tokenId,token,id} = data;

        try {
          Dbo.Init(); 
          await Dbo.connect("users", async ()=>{
            try{
            await Dbo.get()
            .then(async (uS:Array<any>) => {
              let goodUser:any = false;
              uS.map(async user => {
                if(
                  user.key == id &&
                  user.value.tokenId == tokenId &&
                  user.value.token == token &&
                  user.value.tokenDate > Date.now())
                  goodUser = user;
              })
              if (goodUser != false)
              {
                const newToken = User.buildToken(goodUser.value.name);
                await Dbo.update(goodUser.key,{
                  "token":newToken.newToken,
                  "tokenId":newToken.newTokenId,
                  "tokenDate":newToken.newDate,
                  }
                  );
                res.status(201).json(
                  {
                    user:goodUser.value, 
                    token:newToken.newToken, 
                    tokenId:newToken.newTokenId, 
                    id:goodUser.key
                  });
                resolve();
              } else {
                res.status(500).json({message:"token outdated"})
                return resolve();
              }
            })
            
            .catch(err => console.error(err));
            }catch (error){console.error(error)}
          })
          .catch(err => console.error(err));
          
        } catch (error) {}
      });
    }
}
