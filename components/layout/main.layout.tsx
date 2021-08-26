import React, { useEffect, useState } from "react";
import Head from 'next/head';
import Footer from "./footer.layout";
import Nav from "./nav.layout";
import {Fragment} from "react";
import {User, IUser} from "../../class/User.class"
import { useRouter } from "next/router";

type Props = {children: JSX.Element}

const Layout:React.FC<Props> = props =>{
    const router = useRouter();
    const updateUser = async (user:"token"|"end" = "token")=>{
        if(user == "token")
        {setUser(User.is())}
        else {setUser(false);User.makeCookieToken(false)}
        router.push("/");
    }

    const [user, setUser] = useState(User.is());
    useEffect(() => {
        User.setActualUser().then(_ => setUser(User.is()))
      }, []);
    

    return (
        <Fragment>
            <input type="checkbox" id="themeInput" />
            <span id="themeInputdeco"></span>
            <div id="root">
            <Nav user={{value:user,set:updateUser}}/>
            <Head>
                <title>Next App</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="css/global.css"/>
            </Head>
            
            <main>
                <div className="container">
                {props.children}
                </div>
            </main>

            <Footer />

            </div>
        </Fragment>
        
      
    )

}

export default Layout;