import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "./LogoImage";


const Logo = () =>{
    return(
        <Link className="Logo">
            <LogoImage/>
            Bloggify
        </Link>
    )
}

export default Logo
