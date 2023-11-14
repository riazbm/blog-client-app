import React,{useState} from "react";
import ToggleButton from "./ToggleButton";
import Dropdown from "./Dropdown";


const Menu = () =>{
    const [show, setShow]  = useState(false)

    const handleShow = (e) =>{
        setShow(!show)
        
        
    }

    return(
        <nav className="menu">
            
            <ToggleButton show={show} handleShow={handleShow}/>
            <Dropdown/>
        </nav>
    )
}
export default Menu