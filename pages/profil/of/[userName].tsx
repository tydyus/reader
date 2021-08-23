import {useRouter} from 'next/router';
interface Props {}

const UserPublic:React.FC<Props> = props =>{
    const router = useRouter();
    return (
        <div className="profilPage">
            <h1>Public Profil Page of {router.query.userName}</h1>
        </div>
    )

}

export default UserPublic;