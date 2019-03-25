import React, { Component } from 'react';
import './App.css';
import Admin from './admin';
import Header from './header';
import Doctors from './doctors';
import Patients from './patients';
import Appointments from './appointments';
import EmployeesList from './employeeslist';
import AddEmployee from './addemployee';
import AddPatient from './addpatient';
import Sidebar from './sidebar';
import AddAppointment from './addappointment';
import ForgotPassword from './forgotpassword';
//  import Login from './login';
// //  import Signup from './signup';
import {Route,Switch} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }
  
  render() {
    return (
      <div>
          <Header/>
          <Sidebar/>
          <Switch>
             {/* <Route exact path="/" component={App}></Route> */}
             <Route exact path="/admin" component={Admin}></Route>
             <Route exact path="/admin/doctors" component={Doctors}></Route>
             <Route exact path="/admin/patients" component={Patients}></Route>
             <Route exact path="/admin/appointments" component={Appointments}></Route>
             <Route exact path="/admin/employees/employeeslist" component={EmployeesList}></Route>
             <Route path="/admin/employees/employeeslist/addemployee" component={AddEmployee}></Route>
             <Route path="/admin/patients/addpatient" component={AddPatient}></Route>
             <Route path="/admin/appointments/addappointment" component={AddAppointment}></Route>
             <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
         </Switch>
      </div>
    );
  }
}

export default App;
