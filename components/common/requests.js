import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'

export const checkLogin = (url) => {
        var response = fetch(url,
            {
                method: 'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email:"admin@gmail.com",
                    password:"testing"
                })
            }
        )
        .then(res => {
                console.log(res)
                res.json()
            }
        )   
        .then(res => {
            if(res['msg']==='Login Successful'){
                toast.success(res['msg'],{position: toast.POSITION.TOP_LEFT})
            }
            else{
                toast.error(res['msg'],{position: toast.POSITION.TOP_LEFT})
            }
            /*access_token msg*/
        })
        .catch(err => {
            console.log("ERROR:" + err)
        })
        console.log(response)
        return response
}
export const testCheckLogin = (login_details,url,redirect_path)=>{
    var response={}
    console.log("testCheckLogin ",login_details)
    var serverhad={
        user:'admin',
        pass:'password'
    }
    if(serverhad['user']==login_details['username'] && serverhad['pass']==login_details['password'] ){
        toast.success("Hello "+login_details['username'],{position: toast.POSITION.TOP_LEFT})
        response['token']="34a32d42b2323f23e2e"
    }
    else{
        toast.error("Wrong User",{position: toast.POSITION.TOP_LEFT})
        response={}
    }
    return response
}

export default testCheckLogin

// checkLogin = (e) => {
//     e.preventDefault()
//     if (this.state.fieldValue === '' && this.state.fieldType === '') {
//         var res={
//             email:'admin@gmail.com',
//             password:'testing'
//         }

//         if(res.email===this.state.email && res.password===this.state.password){
            // this.context.router.push("/home")
        // }
    //      fetch("http://35.175.245.127/api/v1/login",
    //      fetch("http://192.168.1.22/auth/register",
    //      fetch("http://192.168.1.22/auth/login",  sandeep@gmail.com sandeep
    //         {
    //             method: 'POST',
    //             headers:{
    //                 'Accept':'application/json',
    //                 'Content-Type':'application/json'
    //             },
    //             body: JSON.stringify({
    //                 email: this.state.email, //'admin@gmail.com'
    //                 password: this.state.password, //'testing'
    //             })
    //         }
    //     )
    //     .then(res => 
    //         res.json()
    //     )   
    //     .then(res => {
    //         if(res['msg']==='Login Successful'){
    //             toast.success(res['msg'],{position: toast.POSITION.TOP_LEFT})
    //         }
    //         else{
    //             toast.error(res['msg'],{position: toast.POSITION.TOP_LEFT})
    //         }
    //         /*access_token msg*/
    //     })
    //     .catch(err => {
    //         console.log("ERROR:" + err)
    //     })
//     }
// }


//---------------------------------------------------------------------
    // validate = (e) => {
    //     console.log("Function called Validate")
    //     let msg = ''
    //     if (e.target.id === 'username' && e.target.value.trim() == '') {
    //         msg = 'Empty Username'
    //     }
    //     else if (e.target.id === "email") {
    //         var re = /\S+@\S+\.\S+\S+/;
    //         if (re.test(e.target.value) === false) { msg = 'Invalid Email' }
    //         console.log("Validate Email: ", msg)
    //     }
    //     else if (e.target.id === 'password' && e.target.value.trim() === '') {
    //         msg = 'Empty Password'
    //     }
    //     else if(e.target.id === 'phone' && e.target.value.trim()==''){
    //         msg = 'Empty'
    //     }
    //     else if(e.target.id === 'gender'){
    //         if(!['Male','Female'].includes(e.target.value)){
    //             msg='Please select a gender'
    //         }
    //     }
    //     // else if(e.target.id==='confirmpassword' && e.target.value!==)
    //     if (msg !== '') {
    //         this.setState({
    //             fieldType: e.target.id,
    //             fieldValue: msg,
    //         })
    //         // e.target.id.value=this.state.fieldValue
    //     }
    //     else {
    //         console.log("message:",msg)
    //         this.setState({
    //             fieldType: '',
    //             fieldValue: ''
    //         })
    //     }
    // }
//--------------------------------------------------------------------------------
    