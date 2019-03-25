import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component{
    render(){
        return(
            <div>
                <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="menu-title">Main</li>
                        <li className="active">
                            <Link to="/admin"><i className="fa fa-dashboard"></i> <span>Dashboard</span></Link>
                        </li>
						<li>
                            <Link to="/admin/doctors"><i className="fa fa-user-md"></i> <span>Doctors</span></Link>
                        </li>
                        <li>
                            <Link to="/admin/patients"><i className="fa fa-wheelchair"></i> <span>Patients</span></Link>
                        </li>
                        <li>
                            <Link to="/admin/appointments"><i className="fa fa-calendar"></i> <span>Appointments</span></Link>
                        </li>
                        <li>
                            <Link to="schedule.html"><i className="fa fa-calendar-check-o"></i> <span>Doctor Schedule</span></Link>
                        </li>
                        <li>
                            <Link to="departments.html"><i className="fa fa-hospital-o"></i> <span>Departments</span></Link>
                        </li>
						<li className="submenu">
							<Link to="#"><i className="fa fa-user"></i> <span> Employees </span> <span className="menu-arrow"></span></Link>
							<ul style={{display:"none"}}>
								<li><Link to="/admin/employees/employeeslist">Employees List</Link></li>
								<li><Link to="leaves.html">Leaves</Link></li>
								<li><Link to="holidays.html">Holidays</Link></li>
								<li><Link to="attendance.html">Attendance</Link></li>
							</ul>
						</li>
						<li className="submenu">
							<Link to="#"><i className="fa fa-money"></i> <span> Accounts </span> <span className="menu-arrow"></span></Link>
							<ul style={{display:"none"}}>
								<li><Link to="invoices.html">Invoices</Link></li>
								<li><Link to="payments.html">Payments</Link></li>
								<li><Link to="expenses.html">Expenses</Link></li>
								<li><Link to="taxes.html">Taxes</Link></li>
								<li><Link to="provident-fund.html">Provident Fund</Link></li>
							</ul>
						</li>
						<li className="submenu">
							<Link to="#"><i className="fa fa-book"></i> <span> Payroll </span> <span className="menu-arrow"></span></Link>
							<ul style={{display:"none"}}>
								<li><Link to="salary.html"> Employee Salary </Link></li>
								<li><Link to="salary-view.html"> Payslip </Link></li>
							</ul>
						</li>
                    </ul>
                </div>
            </div>
        </div>
            </div>
        );
    }
}

export default Sidebar;