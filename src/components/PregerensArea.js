import React from "react";
import ChooseImageTable from "./ChooseImageTable";

function PreferensArea(props) {
    function handlePosSliderChange(e) {
        props.setPosY(e.target.value);
    }

    function handleSizeSliderChange(e) {
        props.setSize(+(e.target.value) * 4);
    }

    return (
        <div className='preferensArea'>
            <div className='preferensSubArea'>
                <div className='preferensParagraph'>
                    <label className='preferensTitle'>Положение по вертикали</label>

                    <input type="range" className="slider" name="pos"
                           min="-45" max="45" value={props.posY}
                           onChange={handlePosSliderChange}
                    />
                </div>
                <div className='preferensParagraph'>
                    <label className='preferensTitle'>Размер изображения</label>

                    <input type="range" className="slider" name="pos"
                           min="1" max="50" value={+(props.size) / 4}
                           onChange={handleSizeSliderChange}
                    />
                </div>
            </div>
            <ChooseImageTable chooseImage={props.chooseImage}/>
        </div>
    )
}

export default PreferensArea;