import './App.css';
import React, {useState} from 'react';
import PreferensArea from "./components/PregerensArea";
import DispalayArea from "./components/DisplayArea";

function App() {

    const [choosenImage, setChosenImage] = useState(0);
    const [posY, setPosY] = useState(0);
    const [size, setSize] = useState(100);

    return (
        <div className="viewerUtility">
            <PreferensArea
                setPosY={setPosY}
                posY={posY}
                setSize={setSize}
                size={size}
                chooseImage={setChosenImage}
            />
            <DispalayArea
                choosenImage={choosenImage}
                posY={posY}
                size={size}
            />
        </div>
    );
}

export default App;