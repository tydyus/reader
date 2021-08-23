import {} from "./Novel.class";
import {CommentOwner, IComment} from "./Comment.class";
import {Paragraph, IParagraph} from "./Paragraph.class";


export class Chapter extends CommentOwner{
    public paragraphs: Array<Paragraph> = [];

    readThisSimply():string{return this.paragraphs.map(p => p).join("\r\r")}
}

export interface IChapter{
    paragraphs: Array<IParagraph>,
    comments: Array<IComment>
}