import { useEffect, useState } from "react";
import {User} from "../../class/User.class"

interface Props { sendData:Function, id:string}

const LogIn:React.FC<Props> = props =>{

    const [err, setErr] = useState("");
    const [text, setText] = useState("");

    const handleChange = ()=>{
        setText((document.getElementById(`formEditSubmit${props.id}`) as HTMLInputElement ).value)
    }

    return (
        <div className="profilPage">
            <h1>LogIn</h1>
            <form >
                <label htmlFor="ChapterName">ChapterName</label>
                <input type="text" name="ChapterName" id={"formEditSubmit"+props.id} />
                <label htmlFor="ContentChapter">Content</label>
                <textarea name="ContentChapter" value={text} onChange={handleChange} id={"formEditSubmit"+props.id} />
                <div className="btn" onClick={() => props.sendData(text)} id={"formEditSubmit"+props.id}>Sauvegarder</div>
            </form>
        </div>
    )

}

export default LogIn;