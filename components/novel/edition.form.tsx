import {useState } from "react";

interface Props {id:string}

const EditionChapter:React.FC<Props> = props =>{

    const [err, setErr] = useState("");
    const [text, setText] = useState("");

    const handleChange = ()=>{
        setText((document.getElementById(`formEditContent${props.id}`) as HTMLInputElement ).value)
    }

    const submit = () => {

    }

    return (
        <div className="profilPage">
            <h1>LogIn</h1>
            <form >
                <label htmlFor="ChapterName">ChapterName</label>
                <input type="text" name="ChapterName" id={"formEditTitle"+props.id} />
                <label htmlFor="ContentChapter">Content</label>
                <textarea name="ContentChapter" value={text} onChange={handleChange} id={"formEditContent"+props.id} />
                <div className="btn" onClick={submit} id={"formEditSubmit"+props.id}>Sauvegarder</div>
            </form>
        </div>
    )

}

export default EditionChapter;