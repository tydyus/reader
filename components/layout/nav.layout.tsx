import Link from "next/link";
import LogIn from "../user/logIn.form";
import NewUser from "../user/newUser.form";
import {IUser} from "../../class/User.class"
import {Fragment} from "react";
import ProfilVignette from "../user/profilVignette.view";

interface Props {
    user:{value:IUser|false,set:Function}
}

const Nav:React.FC<Props> = props =>{
    const burgerDeactivation = () => {
        (document.querySelector(".NavBurgercheckbox") as HTMLInputElement ).checked = false;
    }
    const navLink = 
        <div className="link">
            <Link href="/" ><a onClick={burgerDeactivation}>Home</a></Link>
            <Link href="/profil" ><a onClick={burgerDeactivation}>Profils</a></Link>
            <Link href="/addNovel" ><a onClick={burgerDeactivation}>Write</a></Link>
            <Link href="/novel" ><a onClick={burgerDeactivation}>Novels</a></Link>
        </div>;

    return (
        <Fragment>
            <nav className="navGlobal">
                <div className="logoOnNav">
                {props.user.value? `📚 Reader(${(props.user.value as IUser).name})` : `📚 Reader`}
                </div>
                <input type="checkbox" className="NavBurgercheckbox"/>
                <span className="NavBurgercheckboxDeco"></span>
                <div className="burgerWrapper">
                    {navLink}
                    <div className="log">
                        {!props.user.value?
                            <Fragment><LogIn majUser={props.user.set} reverse={true} /><NewUser reverse={true} /></Fragment>
                        :
                            <ProfilVignette user={{
                                value: props.user.value,
                                set: props.user.set
                            }} />
                        }
                    </div>
                    
                </div>
            </nav> 
            <div className="navMobile">
                {navLink}
            </div>
        </Fragment>
    )

}

export default Nav;


