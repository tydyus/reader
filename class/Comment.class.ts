
//
export abstract class CommentOwner{
    public comments: Array<Comment> = [];
    addComment(newComment:Comment){
        try {this.comments.push(newComment);}
        catch (error){ console.error(error)};
    }
}

export class Comment extends CommentOwner{
    private _author: string;
    private _content:string;
    private _date:Date;

    constructor(user:any, content:string){
        super();
        if (Comment.isValid(content)) this._content = content;
        else throw new Error("Comment invalide");
        this._author = user.uid;
        this._date = new Date();
    }

    getAuthor(){return this._author}
    getContent(){return this._content}
    getDate(){return this._date.toDateString()}

    private static isValid(content:string):boolean{
        let valid = true;
        return valid;
    }
}

export interface IComment{
    author: string;
    content:string;
    date:Date;
}



