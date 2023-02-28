import React from "react";
import '../styles/Contador.scss';

function Contador({num}){
    return (
        <div className="container-contador">
            <span>{num}</span>
        </div>
    );
};

export default Contador;