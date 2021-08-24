import { useState } from "react";
import {User} from "../../class/User.class"

interface Props { majUser:Function}

const LogIn:React.FC<Props> = props =>{

    const [err, setErr] = useState("");

    const submitForm = async () => {
        const name = (document.getElementById("formLogInName") as HTMLInputElement).value;
        const psw = (document.getElementById("formLogInPsw") as HTMLInputElement).value;
        try {
            await User.logIn(name,psw);
        } catch (error) {
            typeof error == "string" && setErr(error);
        }
        props.majUser();
    }


    return (
        <div className="profilPage">
            <h1>LogIn</h1>
            <form onSubmit={()=>{submitForm()}}>
                <input type="text" name="" id="formLogInName" placeholder="name"/>
                <input type="password" name="" id="formLogInPsw" placeholder="password"/>
                <div className="btn" id="formLogInSubmit" onClick={() => submitForm()}>LogIn</div>
            </form>
        </div>
    )

}

export default LogIn;