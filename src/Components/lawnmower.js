import React, {createRef, useEffect} from 'react';
import { connect } from "react-redux";

class Lawnmower extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = createRef(null);
    }

    // componentWillMount() {

    // }
    render() {
        const canvas = this.canvasRef.current
        let lmReady = false;
        let lmImg = new Image();
        lmImg.onload = () => {
            lmReady = true;
        }
        console.log(lmImg)
        lmImg.src = "../images/lm.png"
        console.log(lmReady)
        if(lmReady) {
            console.log('lm reeady >>>>>>Q>')
            const canvas = this.canvasRef.current
            const ctx = canvas.getContext('2d')
            ctx.drawImage(lmImg);
        }
        console.log(this.props)
        return (
            <div className="container-contact2 ">
                <canvas ref={this.canvasRef} id="canvas-container" width='300' height='300'/>
            </div>
        ) 
    }
};


const mapStateToProps = state => {
    const {updateActionsInfo} = state
    return { updateActionsInfo }
}


export default connect(mapStateToProps)(Lawnmower);
