import React from 'react';
import { connect } from "react-redux";
import { updateSizeInfo, updateActionsInfo } from '../redux/actions';

class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = { size: "", actions: "" };
    }
  
    updateSize = size => {
      this.setState({ size });
    };

    updateActions = actions => {
        this.setState({ actions });
      };
  
    handleClick = () => {
      this.props.updateSizeInfo(this.state.size);
      this.props.updateActionsInfo(this.state.actions);
      this.setState({ size: "", actions: ""});
    };
  
    render() {
        console.log(this.props)
      return (

        <div className="bg-contact2">
		<div className="container-contact2">
			<div className="wrap-contact2">
				<div className="contact2-form validate-form">
					<span className="contact2-form-title">
						LawnMower
					</span>

					<div className="wrap-input2 validate-input" data-validate="Size is required">
                        <input 
                        className="input2"
                         type="text"
                         name="name"
                         onChange={e => this.updateSize(e.target.value)}
                         value={this.state.size}
                         />
						<span className="focus-input2" data-placeholder="Size"></span>
					</div>
					<div className="wrap-input2 validate-input" data-validate = "actions required">
						<textarea className="input2" name="message"></textarea>
						<span className="focus-input2" data-placeholder="Actions"></span>
					</div>

					<div className="container-contact2-form-btn">
						<div className="wrap-contact2-form-btn">
							<div className="contact2-form-bgbtn"></div>
							<button className="contact2-form-btn" onClick={this.handleClick} >
								Send To The Lawnmower
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
      );
    }
  }
  
  export default connect(
    null,
    { updateSizeInfo, updateActionsInfo }
  )(Input);
