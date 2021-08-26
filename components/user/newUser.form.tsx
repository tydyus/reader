import { useState } from "react";
import {User} from "../../class/User.class"

interface Props {reverse:true|false}

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


    return (
        <div className={props.reverse?"profilPage reverse":"profilPage"}>
            <h1>NewUser</h1>
            <form action="">
                <input type="text" name="name" className="form" id="formNewUserName" placeholder="name"/>
                <input type="password" name="psw" className="form" id="formNewUserPsw" placeholder="password"/>
                {err == ""?"":`<p class="form">${err}<p>`}
                <div className="btn" id="formNewUserSubmit" onClick={()=>submitForm()}>NewUser</div>
            </form>
        </div>
    )

}

export default NewUser;