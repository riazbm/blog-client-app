import React from "react";


const ToggleButton = ({handleShow}) =>{
    return(
        <button onClick={handleShow} className="menu-toggle">
            Toggle Menu
        </button>
    )
}

export default ToggleButton