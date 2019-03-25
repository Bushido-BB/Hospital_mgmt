import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Appointments extends Component{
    render(){
        return(
            <div>
            <div className="main-wrapper">
        <div className="page-wrapper">

            <div className="content">
                <div className="row">
                    <div className="col-sm-4 col-3">
                        <h4 className="page-title">Appointments</h4>
                    </div>
                    <div className="col-sm-8 col-9 text-right m-b-20">
                        <Link to="/admin/appointments/addappointment" className="btn btn btn-primary btn-rounded float-right"><i className="fa fa-plus"></i>
                            Add Appointment</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table">
                                <thead>
                                    <tr>
                                        <th>Appointment ID</th>
                                        <th>Patient Name</th>
                                        <th>Age</th>
                                        <th>Doctor Name</th>
                                        <th>Department</th>
                                        <th>Appointment Date</th>
                                        <th>Appointment Time</th>
                                        <th>Status</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>APT0001</td>
                                        <td><img width="28" height="28" src={"img/user.jpg"} className="rounded-circle m-r-5"
                                                alt=""/>
                                            Denise Stevens</td>
                                        <td>35</td>
                                        <td>Henry Daniels</td>
                                        <td>Cardiology</td>
                                        <td>30 Dec 2018</td>
                                        <td>10:00am - 11:00am</td>
                                        <td><span className="custom-badge status-red">Inactive</span></td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown"
                                                    aria-expanded="false"><i className="fa fa-ellipsis-v"></i></Link>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <Link className="dropdown-item" to="edit-appointment.html"><i className="fa fa-pencil m-r-5"></i>
                                                        Edit</Link>
                                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_appointment"><i
                                                            className="fa fa-trash-o m-r-5"></i> Delete</Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>APT0002</td>
                                        <td><img width="28" height="28" src={"img/user.jpg"} className="rounded-circle m-r-5"
                                                alt=""/>
                                            Denise Stevens</td>
                                        <td>35</td>
                                        <td>Henry Daniels</td>
                                        <td>Cardiology</td>
                                        <td>30 Dec 2018</td>
                                        <td>10:00am - 11:00am</td>
                                        <td><span className="custom-badge status-green">Active</span></td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown"
                                                    aria-expanded="false"><i className="fa fa-ellipsis-v"></i></Link>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <Link className="dropdown-item" to="edit-appointment.html"><i className="fa fa-pencil m-r-5"></i>
                                                        Edit</Link>
                                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_appointment"><i
                                                            className="fa fa-trash-o m-r-5"></i> Delete</Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
    <div className="sidebar-overlay" data-reff=""></div>
    </div>
        );
    }
}

export default Appointments;