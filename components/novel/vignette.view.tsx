import React, {Fragment} from "react";

interface Props{iteration:number, id:string}

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
            {vignette.map((jsx, i) => (
                <div className="card cardNovel" key={props.id+i}>{jsx}</div>
            ))}
        </Fragment>
    )
}