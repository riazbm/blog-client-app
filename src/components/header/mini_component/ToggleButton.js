import React from "react";


const ToggleButton = ({handleShow, show}) =>{
    return(
        <button onClick={handleShow} className={show? "menu-toggle is-open":"menu-toggle"}>
            Toggle Menu
        </button>
    )
}

export default ToggleButton