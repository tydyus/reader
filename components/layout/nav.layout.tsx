import Link from "next/link";
import LogIn from "../user/logIn.form";
import NewUser from "../user/newUser.form";
import {IUser} from "../../class/User.class"
import {Fragment} from "react";

interface Props {
    user:{value:IUser|false,set:Function}
}

const Nav:React.FC<Props> = props =>{
    return (
        <nav className="navGlobal">
            <div className="logoOnNav">
            {props.user.value? `📚 Reader(${(props.user.value as IUser).name})` : `📚 Reader`}
            </div>
            <input type="checkbox" className="NavBurgercheckbox"/>
            <span className="NavBurgercheckboxDeco"></span>
            <div className="burgerWrapper">
                <div className="link">
                    <Link href="/" ><a>home</a></Link>
                    <Link href="/profil" ><a>profils</a></Link>
                    <Link href="/novel" ><a>novels</a></Link>
                </div>
                <div className="log">
                    {!props.user.value?
                        <Fragment><LogIn majUser={props.user.set} /><NewUser /></Fragment>
                    :
                        <Fragment><div>
                            <h2>Profil</h2>
                            <p>name: {props.user.value.name}</p>
                            <p>token: {props.user.value.tokenId}</p>
                            <p>value: {props.user.value.token}</p>
                            <a onClick={() => props.user.set("end")}>deconnect</a>
                            </div></Fragment>
                    }
                </div>
                
            </div>
        </nav> 
    )

}

export default Nav;


