import React, { Fragment, useState } from "react";
import { IUser } from "../../class/User.class";
import { Novel } from "../../class/Novel.class";
import NewUser from "../user/newUser.form";
import CoAtGuest from "../user/coAtGuest.view";
import { useRouter } from "next/router";

interface Props {user:IUser|false}

const NewNovel:React.FC<Props> = props =>{

    const [err, setErr] = useState("");
    const [text, setText] = useState("");
    const router = useRouter();

    const handleChange = ()=>{
        setText((document.getElementById(`formNewNovelSynopsys`) as HTMLInputElement ).value)
    }

    const submit = () => {
        if (props.user){
            const title = (document.getElementById(`formNewNovelTitle`) as HTMLInputElement ).value;
            const synopsys = (document.getElementById(`formNewNovelSynopsys`) as HTMLInputElement ).value;
            Novel.create(props.user.name,title,synopsys).then(result => {
                console.log(result);
                if (result == title){
                    router.push(`/novel/${title.split(" ").join("-")}`);
                }
                else console.log(result);
            });
        }
    }
    

    const form =
    <form >
            <label htmlFor="NewNovelName">Title</label>
            <input type="text" name="NewNovelName" id="formNewNovelTitle" />
            <label htmlFor="SynopsysNewNovel">Synopsys</label>
            <textarea name="SynopsysNewNovel" value={text} onChange={handleChange} id="formNewNovelSynopsys" />
        <div className="btn" onClick={() => submit()} id="formNewNovelSubmit">Add</div>
    </form>;


    return (
        <div className="profilPage">
            <h1>Write a Novel</h1>
            {props.user? form:<CoAtGuest />}
        </div>
    )

}

export default NewNovel;

