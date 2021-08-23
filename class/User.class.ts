
import {Library, ILibrary} from "./Library.class";
import {Preference, IPreference} from "./Preference.class";

export class User{
    _name: string;
    private _uid: string;
    public library: Library;
    public preference: Preference;
    private static connected: IUser|false = false;

    public constructor(uid:string, name:string){
        this._name = name;
        this._uid = uid;

        this.library = new Library();
        this.preference = new Preference();
    }

    static is (){return User.connected}
    static makeCookieToken(response:any){
        if (response) {
            User.connected = response.data.user;
            document.cookie = `_t=${response.data.token}; path=/; SameSite=Strict`;
            document.cookie = `_tId=${response.data.tokenId}; path=/; SameSite=Strict`;
            document.cookie = `_id=${response.data.id}; path=/; SameSite=Strict`;
        } else {
            User.connected = false;
            document.cookie = `_t=; path=/; SameSite=Lax`;
            document.cookie = `_tId=; path=/; SameSite=Lax`;
            document.cookie = `_id=; path=/; SameSite=Lax`;
        }
    }
    static async setActualUser (){
        //console.log("setActualUser")
        let cookies={token:"",tokenId:"",id:""};
        document.cookie.split("; ").map(m => {
            const cook = m.split("=");
            cook[0] == "_t" && (cookies.token = cook[1]);
            cook[0] == "_tId" && (cookies.tokenId = cook[1]);
            cook[0] == "_id" && (cookies.id = cook[1]);
        })
        if (cookies.token){
            const axios = require('axios').default;
            await axios.post('/api/getUser/', cookies)
            .then((response:any) => {User.makeCookieToken(response)})
            .catch((error:any) => {
                console.log(error);
            });
        } else {User.connected = false}
    }
    
    static async logIn(name:string,psw:string){
        const axios = require('axios').default;
            await axios.post('/api/logIn', {name:name,psw:psw})
            .then((response:any) => {User.makeCookieToken(response)})
            .catch((error:any) => {  
                console.log(error); 
            });
    }

    public getName(){return this._name}

    public static async newUser (name:string, psw:string){
        const axios = require('axios').default;
        await axios.post('/api/newUser', {
        name: name,
        psw: psw 
        })
        .then((response:any) => {
            console.log(response);
          })
        .catch((error:any) => {
            console.log(error);
        });

    }
    public static buildToken (name:string, expirationOnMin = 20){
        return ({
        newToken : (Math.floor(Math.random()*100000000)).toString(),
        newTokenId : name+Math.floor(Math.random()*100),
        newDate : Date.now() + expirationOnMin*60000
        })
    }
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
