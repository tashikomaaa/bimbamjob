import React from 'react';
import './App.css';
import Input from './Components/Input';
import Lawn from './Components/lawn';
import Lawnmower from './Components/lawnmower';
import {connect} from 'react-redux';
 
function App(props) {
  return (
    <div className="App">
      {/* {props.updateSizeInfo.size ? null : <Input />} */}
      <Input />
      {/* <Lawn /> */}
      <Lawnmower />
    </div>
  );
}

const mapStateToProps = state => {
  return state
}


export default connect(mapStateToProps)(App);
