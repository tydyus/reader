import { useEffect, useState } from "react";
import {User} from "../../class/User.class"

interface Props {}

const NewUser:React.FC<Props> = props =>{
    const [err, setErr] = useState("");

    const submitForm = async () => {
        const name = (document.getElementById("formNewUserName") as HTMLInputElement).value;
        const psw = (document.getElementById("formNewUserPsw") as HTMLInputElement).value;
        try {
            await User.newUser(name,psw);
        } catch (error) {
            typeof error == "string" && setErr(error);
        }
    }

    useEffect(() => {
        const actuelNode = (document.getElementById("formNewUserSubmit") as HTMLElement);
        const cloneCleanEvent = actuelNode.cloneNode(true);
        (actuelNode.parentNode as HTMLElement).replaceChild(cloneCleanEvent, actuelNode);
        cloneCleanEvent
            .addEventListener("click", ()=>{submitForm()});
      }, []);

    return (
        <div className="profilPage">
            <h1>NewUser</h1>
            <form action="">
                <input type="text" name="name" className="form" id="formNewUserName" placeholder="name"/>
                <input type="password" name="psw" className="form" id="formNewUserPsw" placeholder="password"/>
                {err == ""?"":`<p class="form">${err}<p>`}
                <div className="btn" id="formNewUserSubmit">NewUser</div>
            </form>
        </div>
    )

}

export default NewUser;