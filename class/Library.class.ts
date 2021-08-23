import {Novel} from "./Novel.class";

class NovelOnLib{
    public novel:Novel;
    private _chapter = 0;
    private _favorite:boolean = false;

    constructor(novel:Novel){
        this.novel = novel;
    }

    getChapter(){return this._chapter}
    setChapter(newChap:number){
        if(newChap >= 0 && this.novel.chapters.length <= newChap)
            this._chapter = newChap ; 
            else throw new Error("chapter don't exist");
        }

    public isFavorite(){return this._favorite};
    public setFavorite(set:boolean|"switch" = "switch"){
        set === "switch"? this._favorite = !this._favorite : this._favorite = set;
    }
}

export class Library {
    public novels:Array<NovelOnLib> = [];
}

export interface ILibrary{
    novels:Array<INovelOnLib>
}

export interface INovelOnLib{
    novelId:string,
    chapter:number,
    favorite:boolean
}