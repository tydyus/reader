//firebase
import firebase from "firebase/app";
import "firebase/firestore";

export class Dbo{
    
    private static data: firebase.firestore.Firestore | false = false;
    private static conf = require("../config.json");
    private static firebaseConfig = Dbo.conf.firebase;
    
    private static collection:firebase.firestore.CollectionReference<firebase.firestore.DocumentData>|firebase.firestore.Query<firebase.firestore.DocumentData>|false= false;

    public static Init(){
        if( firebase.apps.length === 0){
            firebase.initializeApp(Dbo.firebaseConfig);
        }
        Dbo.data = firebase.firestore();
        
    }

    public static async connect(
        collectionName:string,
        action:Function, 
        where:false|{
            table:string,
            op:"=="|"!="|">"|">="|"<"|"<=",
            compar:string
            } = false)
    {
        where?
        Dbo.data && (Dbo.collection = Dbo.data.collection(collectionName).where(where.table,where.op,where.compar))
        :Dbo.data && (Dbo.collection = Dbo.data.collection(collectionName));
        try {
            action(Dbo.collection);
        } catch (error) {console.error(error)}
        
    }

    public static async get(){
        let objs:Array<{key:string,value:Object}> = [];
        try {
            Dbo.collection && await Dbo.collection.get()
            .then(result => result.docs.forEach(r => objs.push({key:r.id,value:r.data()})))
            .catch(err => {console.error(err)});
        } catch (error) {console.error(error)}
        return objs;
    }

    public static async add(newObj:Object){
        
        try {
            (Dbo.collection instanceof firebase.firestore.CollectionReference) && await Dbo.collection.add(newObj)
            .catch(err => {console.error(err)});
        } catch (error) {console.error(error)}
    }

    public static async replace(idTarget:string,newObj:Object){
        try {
            (Dbo.collection instanceof firebase.firestore.CollectionReference) && await Dbo.collection.doc(idTarget).set(newObj)
            .catch(err => {console.error(err)});
        } catch (error) {console.error(error)}
    }

    public static async update(idTarget:string,newObj:Object){
        try {
            (Dbo.collection instanceof firebase.firestore.CollectionReference) && await Dbo.collection.doc(idTarget).set(newObj, { merge: true })
            .catch(err => {console.error(err)});
        } catch (error) {console.error(error)}
    }


    public static async close(){}

}

