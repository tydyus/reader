import NewUser from "../../components/user/newUser.form";
interface Props {}

const CreateAccount:React.FC<Props> = props =>{

    return (
        <div className="profilPage">
            <h1>Create account</h1>
            <NewUser />
        </div>
    )

}

export default CreateAccount;