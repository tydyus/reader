import {VignetteNovel} from "../novel/vignette.view"
import {IUser} from "../../class/User.class"
import {Fragment} from "react";

interface Props {
    user:{value:IUser,set:Function}
}

const ProfilVignette:React.FC<Props> = props =>{

    const submit= () => {
        props.user.set("end")
    }

    return (
        <div className="profilVignette">
            <div className="infoProfilVignette">
                <h2>Profil</h2>
                <p>{props.user.value.name}</p>
            </div>
            <a onClick={submit}>deconnect</a>
            <VignetteNovel iteration={8} id={"profilVignette"} title={"New Chapter"} />
        </div>
    )

}

export default ProfilVignette;


