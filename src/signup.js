import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Signup extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            emailMessage:'',
            passwordMessage:''
        }
    }
    render(){
        return(
            <div className="main-wrapper account-wrapper">
            <div className="account-page">
                <div className="account-center">
                    <div className="account-box">
                        <form className="form-signin">
                            <div className="account-logo">
                                <Link to="/index.html"><img src={"./img/logo-dark.png/"} alt=""/></Link>
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input defaultValue={this.state.email} type="email" autoFocus="" className="form-control" onChange={(e)=>this.eventHandler(e)} onBlur={()=>this.toaster("Email Invalid")}/>
                                <ToastContainer/>
                            </div>
                            <div className="form-group">
                                <label>Age</label>
                                <input defaultValue={this.state.password} type="password" className="form-control" onChange={(e)=>this.eventHandler(e)} onBlur={()=>this.toaster("Password is Invalid")}/>
                                <ToastContainer/>
                            </div>
                            <div className="form-group gender-select">
                                        <label className="gen-label">Gender:</label>
                                        <div className="form-check-inline">
                                            <label className="form-check-label">
                                                <input type="radio" name="gender" className="form-check-input"/>Male
                                            </label>
                                        </div>
                                        <div className="form-check-inline">
                                            <label className="form-check-label">
                                                <input type="radio" name="gender" className="form-check-input"/>Female
                                            </label>
                                        </div>
                                    </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input defaultValue={this.state.password} type="password" className="form-control" onChange={(e)=>this.eventHandler(e)} onBlur={()=>this.toaster("Password is Invalid")}/>
                                <ToastContainer/>
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input defaultValue={this.state.password} type="password" className="form-control" onChange={(e)=>this.eventHandler(e)} onBlur={()=>this.toaster("Password is Invalid")}/>
                                <ToastContainer/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input defaultValue={this.state.password} type="password" className="form-control" onChange={(e)=>this.eventHandler(e)} onBlur={()=>this.toaster("Password is Invalid")}/>
                                <ToastContainer/>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input defaultValue={this.state.password} type="password" className="form-control" onChange={(e)=>this.eventHandler(e)} onBlur={()=>this.toaster("Password is Invalid")}/>
                                <ToastContainer/>
                            </div>
                            <div className="form-group text-right">
                                <Link to="/forgot-password.html">Forgot your password?</Link>
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="btn btn-primary account-btn" onClick={(e)=>this.postMethod(e)}>Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Signup;