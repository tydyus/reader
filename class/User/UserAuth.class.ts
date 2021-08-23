
import {IUser} from "../User.class";

export class UserAuth{
    private static connected: IUser|false = false;

    public constructor(){
        
    }

    static is (){return UserAuth.connected}
    static makeCookieToken(response:any){
        if (response) {
            UserAuth.connected = response.data.user;
            document.cookie = `_t=${response.data.token}; path=/; SameSite=Strict`;
            document.cookie = `_tId=${response.data.tokenId}; path=/; SameSite=Strict`;
            document.cookie = `_id=${response.data.id}; path=/; SameSite=Strict`;
        } else {
            UserAuth.connected = false;
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
            .then((response:any) => {UserAuth.makeCookieToken(response)})
            .catch((error:any) => {
                console.log(error);
            });
        } else {UserAuth.connected = false}
    }
    
    static async logIn(name:string,psw:string){
        const axios = require('axios').default;
            await axios.post('/api/logIn', {name:name,psw:psw})
            .then((response:any) => {UserAuth.makeCookieToken(response)})
            .catch((error:any) => {  
                console.log(error); 
            });
    }

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


