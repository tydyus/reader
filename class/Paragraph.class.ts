import {} from "./Novel.class";
import {CommentOwner, IComment} from "./Comment.class"


export class Paragraph extends CommentOwner{
    private _content: string;

    constructor(content:string){
        super();
        this._content = content;
    }
    
    getContent(){return this._content;}

}

export interface IParagraph{
    content: string,
    comments: Array<IComment>
}