import { useState } from "react";

interface Props {}

const NewNovel:React.FC<Props> = props =>{

    const [err, setErr] = useState("");
    const [text, setText] = useState("");

    const handleChange = ()=>{
        setText((document.getElementById(`formNewNovelContent`) as HTMLInputElement ).value)
    }
    const submit = () => {

    }

    return (
        <div className="profilPage">
            <h1>LogIn</h1>
            <form >
                <label htmlFor="NewNovelName">ChapterName</label>
                <input type="text" name="NewNovelName" id="formNewNovelTitle" />
                <label htmlFor="ContentNewNovel">Content</label>
                <textarea name="ContentNewNovel" value={text} onChange={handleChange} id="formNewNovelContent" />
                <div className="btn" onClick={() => submit()} id="formNewNovelSubmit">Sauvegarder</div>
            </form>
        </div>
    )

}

export default NewNovel;