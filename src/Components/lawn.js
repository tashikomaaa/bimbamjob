import React, {createRef} from 'react';
import { connect } from "react-redux";
// import lawnmower from './lawnmower';

class Lawn extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = createRef(null);
    }

    componentDidUpdate() {
        this.size = this.props.updateSizeInfo.size.split(',')
        const canvas = this.canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = "green";
        ctx.beginPath();    
        for (var x = 0, i = 0; i < this.size[0]; x+=44, i++) {
            for (var y = 0, j=0; j < this.size[1]; y+=44, j++) {            
                ctx.rect (x, y, 40, 40);
            }
        }
        ctx.fill();
        ctx.closePath();
    }
    render() {
        return (
            <div className="container-contact2 ">
                <canvas ref={this.canvasRef} id="canvas-container" width='300' height='300'/>
            </div>
        ) 
    }
};

const mapStateToProps = state => {
    const {updateSizeInfo} = state
    return { updateSizeInfo }
}


export default connect(mapStateToProps)(Lawn);
