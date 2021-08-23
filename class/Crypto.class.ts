export class Crypto{
    static encrypt(key:string,){
        let psw = "";
        let x = 0;
        let y = 0;
        for (let i = 0; i < Math.floor(key.length/2); i++) {
            x += key.charCodeAt(i)  
        }
        for (let i = 0; i < key.length-Math.floor(key.length/2); i++) {
            y += key.charCodeAt(i)  
        }
        psw = ((x*x/y)*(x*y*y/2)*((2*x*y)/(3*x))*((x*y)/(x*x))).toString()
        return psw;
    }
    static isGood(key:string,crypt:string){
        if (this.encrypt(key) == crypt) return true;
        return false;
    }
}