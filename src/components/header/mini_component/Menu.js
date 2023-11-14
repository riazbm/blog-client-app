import React from "react";
import ToggleButton from "./ToggleButton";
import Dropdown from "./Dropdown";


const Menu = () =>{
    return(
        <nav className="menu">
            
            <ToggleButton/>
            <Dropdown/>
        </nav>
    )
}
export default Menu