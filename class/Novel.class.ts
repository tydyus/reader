
import {Chapter, IChapter} from "./Chapter.class"
import {CommentOwner, IComment} from "./Comment.class"


export class Novel extends CommentOwner{
    private _title: string;
    private _id: string;
    private _author: string;
    private _synopsys:string = "";
    public chapters: Array<Chapter> = [];

    constructor(author:string, title:string){
        super();
        this._title = title;
        this._author = author;

        this._id = Math.floor(Math.random()*10000)+title
    }
    
    getTitle(){return this._title}
    getAuthor(){return this._author}

    getId(){return this._id}

}

export interface INovel{
    title: string,
    author: string,
    synopsys:string,
    chapters: Array<IChapter>
    comments: Array<IComment>
}