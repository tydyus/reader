
import {Library, ILibrary} from "./Library.class";
import {UserAuth} from "./User/UserAuth.class"
import {Preference, IPreference} from "./Preference.class";

export class User extends UserAuth{
    private _name: string;
    private _uid: string;
    public library: Library;
    public preference: Preference;

    public constructor(uid:string, name:string){
        super();
        this._name = name;
        this._uid = uid;
        this.library = new Library();
        this.preference = new Preference();
    }
    public getName(){return this._name}
}

export interface IUser{
    name:string,
    uid:string,
    tokenId:string,
    token:string,
    tokenDate: number,
    library: ILibrary,
    preference: IPreference,
    psw:string
}
