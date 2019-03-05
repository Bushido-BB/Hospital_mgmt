import React, {Component} from 'react'
import { callbackify } from 'util';

class Loader extends Component{
    loaderstyle={
        backgroundImage:`url("${this.props.image}")`,
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        width:"200px",
        minHeight:"200px",
        backgroundColor:'red'
    }
    
    render(){
        return (<div className='Loader' style={this.props.toggle=='enable'?this.loaderstyle:null}>
        </div>)
    }
}

export default Loader