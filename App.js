import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'


import Login from './components/login'
import Links from './components/Links'
import Loader from './components/common/loader'

class App extends Component {
  
  constructor(props){
    super(props)
    this.state={
      loaderval:"disable",
    }
  }
  
  initiate=()=>{
    this.setState({loaderval:"enable"})
    this.fetchData()
  }
  fetchData=()=>{  
    setInterval(()=>{
      console.log("Loaderval:",this.state.loaderval)
    },2000)
  }
  kill=()=>{
    this.setState({loaderval:"disable"})
  }
  render() {
    return (
      <div>
        <ToastContainer />
        <Links/>
        {/* <Loader toggle={this.state.loaderval} image={"./images/loader.gif"}/>
        <button onClick={this.initiate}>Fetch</button>
        <button onClick={this.kill}>Kill</button> */}
      </div>
    );
  }
}

export default App;
