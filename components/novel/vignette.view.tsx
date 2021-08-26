import React, {Fragment} from "react";

interface Props{iteration:number, id:string, title:string}

export const VignetteNovel:React.FC<Props> = (props) =>{
    let vignette:Array<JSX.Element> = [];
    for (let i = 0; i < props.iteration; i++) {
        vignette.push(
            <Fragment>
                <div className="cover"></div>
                <div className="content"><span></span><span></span><span></span></div>
            </Fragment>
        ) 
    }  
    return(
        <Fragment>
            <div className={`novelPreview ${props.title}`}>
                {props.title != ""? <h2>{props.title}</h2>:""}
                <div className="content">
                {vignette.map((jsx, i) => (
                    <div className="card cardNovel" key={props.id+i}>{jsx}</div>
                ))}
                </div>
            </div>
        </Fragment>
    )
}