
import {Chapter, IChapter} from "./Chapter.class"
import {CommentOwner, IComment} from "./Comment.class"


export class Novel extends CommentOwner{
    private _title: string;
    private _id: string;
    private _author: string;
    private _synopsys:string;
    private _date:number;
    private _lastUpdate:number;
    public chapters: Array<Chapter> = [];

    constructor(author:string, title:string, id:string, synopsys:string, date:number, lastUpdate:number){
        super();
        this._title = title;
        this._author = author;
        this._id = id;
        this._synopsys = synopsys;
        this._date = date;
        this._lastUpdate = lastUpdate;
    }

    static async create(author:string, title:string,synopsys=""){
        const date = Date.now();
        const id = "";
        const axios = require('axios').default;
        await axios.post('/api/newNovel/', {
            author:author,title:title,synopsys:synopsys
        })
        .then((response:any) => {
            const newNovel = new Novel(author,title,response.data.novel.key,synopsys,date,date);
            return newNovel;
        })
        .catch((error:any) => {
            console.log(error);
            return false;
        });
        
    }
    
    getTitle(){return this._title}
    getAuthor(){return this._author}

    getId(){return this._id}

}

export interface INovel{
    title: string,
    author: string,
    id:string,
    synopsys:string,
    date:number,
    lastUpdate:number,
    chapters: Array<IChapter>
    comments: Array<IComment>
}