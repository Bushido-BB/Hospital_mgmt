import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Header from './header';
// import Admin from './admin';
// import Doctors from './doctors';
// import Patients from './patients';
// import Appointments from './appointments';
// import EmployeesList from './employeeslist';
// import AddEmployee from './addemployee';
// import AddPatient from './addpatient';
// import Sidebar from './sidebar';
// import AddAppointment from './addappointment';
import ForgotPassword from './forgotpassword';
import Login from './login';
// import Signup from './signup';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>  
        <div>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/forgotpassword" component={ForgotPassword}/>
        <Route path="/admin" component={App}/>
        {/* <Route exact path="/" component={App}/> */}
        </div>       
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
