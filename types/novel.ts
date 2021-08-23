export type TComment = {
    content: string,
    user:string,
    date:Date,
    comments: Array<TComment>
}

export type TParagraph = {
    content: string,
    comments: Array<TComment>
}

export type TChapter = {
    paragraphs: Array<TParagraph>,
    comments: Array<TComment>
}

export type TNovel ={
    title:string,
    author:string,
    user:string,
    synopsys:string,
    chapters: Array<TChapter>
    comments: Array<TComment>
}