// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {Dbo} from "../../class/Dbo.class";
import { Crypto } from '../../class/Crypto.class';
import {IUser, User} from "../../class/User.class"


interface Data {
  name: string,
  psw: string
}
interface DataRes {
    user:IUser, token:string, tokenId:string, id:string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataRes|{error:string}>
) {
  
    
    if (req.method === 'POST'){
    return new Promise<void>(async (resolve, reject) => {
        const data: Data = req.body;
        const {name,psw} = data;
        try {
            Dbo.Init(); 
            await Dbo.connect("users", async ()=>{
                try{
                await Dbo.get()
                .then(async (uS:Array<any>) => {
                    let data:DataRes|{error:"error"} = {error:"error"};
                    type TKey = [
                        string,
                        {newToken: string;
                        newTokenId: string;
                        newDate: number;}
                    ]; 
                    let key:TKey| false= false;
                    uS.map((user:{key:string,value:IUser}) => {
                        if (user.value.name == name && Crypto.isGood(psw,user.value.psw)){
                            const newToken = User.buildToken(user.value.name);
                            key = [user.key, newToken];
                            data = {user:user.value, token:newToken.newToken, tokenId:newToken.newTokenId, id:user.key};
                            data.user.psw = "encrypt"
                        } else {} 
                    })
                    if (key != false){
                        await Dbo.update((key as TKey)[0],{
                            token:(key as TKey)[1].newToken, 
                            tokenId:(key as TKey)[1].newTokenId, 
                            tokenDate:(key as TKey)[1].newDate 
                        });
                        
                        res.status(201).json(data);
                        console.log("user connected")
                        resolve();
                    }
                    else {
                        res.status(500).json({error:"can't connect"})
                        console.log("error on login the user")
                        return resolve();
                    }
                })
                .catch((err: any) => console.error(err));
                }catch (error){console.error(error)}
            })
            //,{table:"name",op:"==",compar:name})
            .catch((err: any) => console.error(err));
        
      } catch (error) {}
    });
    }
    
}
