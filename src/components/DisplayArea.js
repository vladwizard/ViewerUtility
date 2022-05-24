import tshirt from "../tshirt.jpg";
import React from "react";
import imgObg from "./img";

function DispalayArea(props) {

    const userPref = {

        'top': (50 + +(props.posY)) + '%',
        'width': (325 * (+(props.size) / 100)) + `px`
    };
    return (
        <div className='displayArea'>

            <div className='TshirtArea'>
                <img className='Tshirt' alt='' src={tshirt}/>
                <div className='printArea'>
                    <img className='printImage' alt='' style={userPref}
                         src={imgObg[props.choosenImage]}/>
                </div>
            </div>
        </div>
    )
}
export default DispalayArea;