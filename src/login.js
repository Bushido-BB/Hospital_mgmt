import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component{
    constructor(props){
        super(props);
        console.log(props.history);
        this.state={
            email:'',
            password:'',
            emailMessage:'',
            passwordMessage:'',
            warn:0
        }
    }

    eventHandler=(e)=>{
        const fieldName=e.target.type;
        const value=e.target.value;

        console.log(fieldName);
        console.log(value);

       this.setState({
           [fieldName]:value
       },
       ()=>{
       this.validation(fieldName,value)
       }
       );
    }

    validation=(fieldName,value)=>{
        if(fieldName==="email")
        {
            if(/\S+@\S+\.\S+\S+/.test(value)===false) //concatenate itself and '+' doesn't allow the spaces
            {
                // console.log("Email is InValid");
                this.setState({
                    emailMessage:'Email is invalid',
                    warn:1                   //here we set warn=1 because there is an error message
                });
            }
            else{
                // console.log("Email is Valid");
                this.setState({
                    emailMessage:'',
                    warn:0
                })
            }
        }
        else
        {
            if(value.length>=6){
                // console.log("password Valid")
                this.setState({
                    passwordMessage:'',
                    warn:0
                });
            }
            else{
                // console.log("password Invalid")
                this.setState({
                    passwordMessage:'password Invalid',
                    warn:1
                })
            }
        }
    }

    postMethod=(e)=>{
        e.preventDefault()
        console.log("postMethod Working")
        fetch("http://192.168.1.22:3009/auth/login",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.password
            })
        })
            .then((response)=>{
                return response.json();
            })
            .then((response)=>{
                if(response.access_token!==undefined)
                {
                    toast.success("Success Notification !", {
                        position: toast.POSITION.TOP_CENTER
                      });
                      console.log(this.props.history);
                      console.log(response.access_token);
                    //   this.props.history.push('Header');
                    //   this.props.history.push('Sidebar');
                      this.props.history.push('Admin');
                }
                else{
                    toast.error("Username and Password don't match",{
                        position:toast.POSITION.TOP_LEFT
                       });
                }

            })
            .catch((err)=>{
                console.log(err);
            })
    }

    toaster=(msg)=>{
        if(this.state.warn===1)         //if warn=1  only then toaster will show an error notification
        {
            toast.error((msg), {
                position:toast.POSITION.TOP_LEFT
              });
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
                            <label>Email</label>
                            <input defaultValue={this.state.email} type="email" autoFocus="" className="form-control" onChange={(e)=>this.eventHandler(e)} onBlur={()=>this.toaster("Email Invalid")}/>
                            <ToastContainer/>
                            <span>{this.state.emailMessage}</span>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input defaultValue={this.state.password} type="password" className="form-control" onChange={(e)=>this.eventHandler(e)} onBlur={()=>this.toaster("Password is Invalid")}/>
                            <ToastContainer/>
                            <span>{this.state.passwordMessage}</span>
                        </div>
                        <div className="form-group text-right">
                            <Link to="/forgotpassword">Forgot your password?</Link>
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-primary account-btn" onClick={(e)=>this.postMethod(e)}>Login</button>
                        </div>
                    </form>
                </div>
			</div>
        </div>
    </div>
        );
    }
}

export default Login;