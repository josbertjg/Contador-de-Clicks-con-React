import React from "react";
import '../styles/Boton.scss';


function Boton({name, isClickedButton, clickHandler}){
    return (
        <button className={`${isClickedButton ? 'clickButton' : 'blankButton'}`} onClick={clickHandler}>
            {name}
        </button>
    );
};

export default Boton;