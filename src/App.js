import './App.css';
import React from 'react';
import tshirt from './tshirt.jpg'
import img1 from './1.jpeg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
import img6 from './6.jpg'


class DispalayArea extends  React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const styyle = {

            'top': (50+ +(this.props.posY))+'%',
            'width': (325* (+(this.props.size)/100))+`px`
        };
        return (
            <div class='displayArea'>

            <div class ='TshirtArea'>
            <img class='Tshirt' src={tshirt}/>
        <div className='printArea' > <img className='printImage'style={styyle} src={imgObg[this.props.choosenImage]}/></div>


        </div>
        </div>
    )
    }
}

class PreferensArea extends React.Component{
    constructor(props){
        super(props);
        this.handlePosSliderChange = this.handlePosSliderChange.bind(this);
        this.handleSizeSliderChange = this.handleSizeSliderChange.bind(this);
    }
    handlePosSliderChange(e){
        this.props.posSliderChange(e.target.value);
    }
    handleSizeSliderChange(e){
        this.props.sizeSliderChange(+(e.target.value)*4);
    }
    render() {

        return (


        <div class='preferensArea'>
            <div class='preferensSubArea'>
                <div class='preferensParagraph'>
                    <label class='preferensTitle' >Положение по вертикали</label>

                    <input type="range" className="slider" name="pos"
                    min="-45" max="45" value={this.props.posY}
                    onChange={this.handlePosSliderChange}
                />
                </div>
                    <div className='preferensParagraph'>
                        <label className='preferensTitle'>Размер изображения</label>

                    <input type="range" className="slider" name="pos"
                    min="1" max="50" value={+(this.props.size)/4}
                    onChange={this.handleSizeSliderChange}
                />
            </div>
        </div>
        <ChooseImageTable chooseImage = {this.props.chooseImage}/>

        </div>
    )
    }

}

class ChooseImageTable extends  React.Component{
    constructor(props) {
        super(props);
        this.hasChosenChange= this.hasChosenChange.bind(this);
    }
    hasChosenChange(e){
        this.props.chooseImage(e.target.name);
    }
    render() {

        const listItems = imgObg.map((x,index) =>

            <button class = 'cellImageTable' onClick={this.hasChosenChange} name={index} style={{"backgroundImage": "url("+x+")"}}
    >

    </button >
    )
        return (
            <div class='chooseImageArea'>
            {listItems}

            </div>

    );
    }
}

const imgObg = [img1,img2,img3,img4,img5,img6];



class ViewerUtility extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            choosenImage:0,
            posY:0,
            size:100
        };
        this.posSliderChange = this.posSliderChange.bind(this);
        this.chooseImage = this.chooseImage.bind(this);
        this. sizeSliderChange = this.sizeSliderChange.bind(this);
    }
    chooseImage(value){
        this.setState({choosenImage:value});
    }
    posSliderChange(value){

        this.setState({posY:value});
    }
    sizeSliderChange(value){

        this.setState({size:value});
    }
    render() {

        return (

            < div  className="viewerUtility">
            <PreferensArea
        posSliderChange = {this.posSliderChange}
        posY = {this.state.posY}
        sizeSliderChange = {this.sizeSliderChange}
        size = {this.state.size}
        chooseImage = {this.chooseImage}

        />
        <DispalayArea
        choosenImage = {this.state.choosenImage}
        posY = {this.state.posY}
        size = {this.state.size}
        />
        < /div>
    );
    }
}



export default ViewerUtility;
