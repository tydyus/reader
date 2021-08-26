// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {INovel} from "../../class/Novel.class";
import {Dbo} from "../../class/Dbo.class";


interface Data {
  author:string, title:string,synopsys:string
}
interface DataRes {
  novel:INovel 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataRes|{error: string}>
) {
  
  if (req.method === 'POST'){

    return new Promise<void>(async (resolve, reject) => {
      const data: Data = req.body;
      const {author,title,synopsys} = data;
      //verif date
      //  //author
      //  //title
      const titleFormated = title.split(" ").join("-");
      let reGex = /([^A-Z|a-z|0-9|-])/;
      if (reGex.test(titleFormated)) {res.status(201).json({error:"Le titre ne peut pas contenir de caractère spécial!"});return resolve();}
      //  //synopsys
      reGex = /([<|>])/;
      if (reGex.test(synopsys)) {res.status(201).json({error:`le synopsys ne peut pas contenir ">" ou "<"!`});return resolve();}
      //
      let newNovel:INovel = {
        title: titleFormated,
        author: author,
        id: '',
        synopsys: synopsys,
        date: Date.now(),
        lastUpdate: Date.now(),
        chapters: [],
        comments: [],
        public:false
      }
      Dbo.Init(); 
      await Dbo.connect("novels", async ()=>{
        await Dbo.add(newNovel)})
        .then(_ => {
          res.status(201).json({novel:newNovel});
          resolve();
        })
        .catch(_ => {
          res.status(201).json({error:"problème de connection à la base de donné"})
          return resolve();
        });
    });
  
  }
}





