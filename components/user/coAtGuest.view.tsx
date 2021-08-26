import { Fragment } from "react";
import NewUser from "./newUser.form"

interface Props {}

const CoAtGuest:React.FC<Props> = props =>{

    const burgerActivation = () => {
        (document.querySelector(".NavBurgercheckbox") as HTMLInputElement ).checked = true;
    }
    return(
    <Fragment>
        <NewUser reverse={false} />
        <p>Already a account?</p> 
        <div className="btn" onClick={burgerActivation}>login</div>
    </Fragment>
    );
 
}

export default CoAtGuest;