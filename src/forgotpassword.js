import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class ForgotPassword extends Component{
    render(){
        return(
            <div className="main-wrapper account-wrapper">
                <div className="account-page">
                    <div className="account-center">
                        <div className="account-box">
                            <form className="form-signin" action="#">
                                <div className="account-logo">
                                    <Link to="index.html"><img src={require("./img/logo-dark.png")} alt=""/></Link>
                                </div>
                                <div className="form-group">
                                    <label>Enter Your Email</label>
                                    <input type="text" className="form-control" autofocus/>
                                </div>
                                <div className="form-group text-center">
                                    <button className="btn btn-primary account-btn" type="submit">Reset Password</button>
                                </div>
                                <div className="text-center register-link">
                                    <Link to="/">Back to Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ForgotPassword;