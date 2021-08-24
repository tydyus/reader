// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { useRouter } from 'next/router';
import {Dbo} from "../../../class/Dbo.class";
import {IUser, User} from "../../../class/User.class"


interface Data {
  id: string
}
interface DataRes {
  user:IUser,
  id:string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataRes|{message:string}>
) {
    //console.log("getUser");

      return new Promise<void>(async (resolve, reject) => {
        const router = useRouter();
        const data: Data = req.body;
        const id = router.query.id;
        let errorCatch:string|false = false;
        try {
          Dbo.Init(); 
          await Dbo.connect("users", async ()=>{
            
            try{
            if (typeof(id) != "string"){errorCatch="bad getUser:request"} 
            else await Dbo.getById<IUser>(id)
            .then(async user => {
              console.log(user);
              if (user)
              {
                let userOnRead = User.publicRead(user.value);
                res.status(201).json(
                  {
                    user:userOnRead,  
                    id:user.key
                  });
                resolve();
              } else {
                errorCatch="user doesn't exist";
              }
            })
            .catch(err => errorCatch="user doesn't exist");
            
            if (errorCatch){
              console.log(`!ErrorCatchTokenUser: ${errorCatch}`);
              res.status(500).json({message:errorCatch})
                return resolve();
            }
            }catch (error){console.error(error)}
          })
          .catch(err => console.error(err));
          
        } catch (error) {}
      });
}
