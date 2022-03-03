import React from "react";
import NavBar from "./navBar";



function Layout(props) {

    return (
        <div>
            <NavBar />
            {props.children}

        </div>
    );
}



export default Layout;