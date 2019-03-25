import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class EmployeesList extends Component{
    render(){
        return(
            <div>
                <div className="main-wrapper">
        <div className="page-wrapper">

            <div className="content">
                <div className="row">
                    <div className="col-sm-4 col-3">
                        <h4 className="page-title">Employee</h4>
                    </div>
                    <div className="col-sm-8 col-9 text-right m-b-20">
                        <Link to="/admin/employees/employeeslist/addemployee" className="btn btn-primary float-right btn-rounded"><i className="fa fa-plus"></i>
                            Add
                            Employee</Link>
                    </div>
                </div>
                <div className="row filter-row">
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus">
                            <label className="focus-label">Employee ID</label>
                            <input type="text" className="form-control floating"/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus">
                            <label className="focus-label">Employee Name</label>
                            <input type="text" className="form-control floating"/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus select-focus">
                            <label className="focus-label">Role</label>
                            <select className="select floating">
                                <option>Select Role</option>
                                <option>Nurse</option>
                                <option>Pharmacist</option>
                                <option>Laboratorist</option>
                                <option>Accountant</option>
                                <option>Receptionist</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <Link to="#" className="btn btn-success btn-block"> Search </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table">
                                <thead>
                                    <tr>
                                        <th style={{minWidth:"200px"}}>Name</th>
                                        <th>Employee ID</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th style={{minWidth:"110px"}}>Join Date</th>
                                        <th>Role</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img width="28" height="28" src={"img/user.jpg"} className="rounded-circle"
                                                alt=""/>
                                            <h2>Albina Simonis</h2>
                                        </td>
                                        <td>NS-0001</td>
                                        <td>albinasimonis@example.com</td>
                                        <td>828-634-2744</td>
                                        <td>7 May 2015</td>
                                        <td>
                                            <span className="custom-badge status-green">Nurse</span>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown"
                                                    aria-expanded="false"><i className="fa fa-ellipsis-v"></i></Link>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <Link className="dropdown-item" to="edit-employee.html"><i className="fa fa-pencil m-r-5"></i>
                                                        Edit</Link>
                                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_employee"><i
                                                            className="fa fa-trash-o m-r-5"></i> Delete</Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img width="28" height="28" src={"img/user.jpg"} className="rounded-circle"
                                                alt=""/>
                                            <h2>Cristina Groves</h2>
                                        </td>
                                        <td>DR-0001</td>
                                        <td>cristinagroves@example.com</td>
                                        <td>928-344-5176</td>
                                        <td>1 Jan 2013</td>
                                        <td>
                                            <span className="custom-badge status-blue">Doctor</span>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown"
                                                    aria-expanded="false"><i className="fa fa-ellipsis-v"></i></Link>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <Link className="dropdown-item" to="edit-employee.html"><i className="fa fa-pencil m-r-5"></i>
                                                        Edit</Link>
                                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_employee"><i
                                                            className="fa fa-trash-o m-r-5"></i> Delete</Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img width="28" height="28" src={"img/user.jpg"} className="rounded-circle"
                                                alt=""/>
                                            <h2>Mary Mericle</h2>
                                        </td>
                                        <td>SF-0003</td>
                                        <td>marymericle@example.com</td>
                                        <td>603-831-4983</td>
                                        <td>27 Dec 2017</td>
                                        <td>
                                            <span className="custom-badge status-grey">Accountant</span>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown"
                                                    aria-expanded="false"><i className="fa fa-ellipsis-v"></i></Link>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <Link className="dropdown-item" to="edit-employee.html"><i className="fa fa-pencil m-r-5"></i>
                                                        Edit</Link>
                                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_employee"><i
                                                            className="fa fa-trash-o m-r-5"></i> Delete</Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img width="28" height="28" src={"img/user.jpg"} className="rounded-circle"
                                                alt=""/>
                                            <h2>Haylie Feeney</h2>
                                        </td>
                                        <td>SF-0002</td>
                                        <td>hayliefeeney@example.com</td>
                                        <td>616-774-4962</td>
                                        <td>21 Apr 2017</td>
                                        <td>
                                            <span className="custom-badge status-grey">Laboratorist</span>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown"
                                                    aria-expanded="false"><i className="fa fa-ellipsis-v"></i></Link>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <Link className="dropdown-item" to="edit-employee.html"><i className="fa fa-pencil m-r-5"></i>
                                                        Edit</Link>
                                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_employee"><i
                                                            className="fa fa-trash-o m-r-5"></i> Delete</Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img width="28" height="28" src={"img/user.jpg"} className="rounded-circle"
                                                alt=""/>
                                            <h2>Zoe Butler</h2>
                                        </td>
                                        <td>SF-0001</td>
                                        <td>zoebutler@example.com</td>
                                        <td>444-555-9999</td>
                                        <td>19 May 2012</td>
                                        <td>
                                            <span className="custom-badge status-grey">Pharmacist</span>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown"
                                                    aria-expanded="false"><i className="fa fa-ellipsis-v"></i></Link>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <Link className="dropdown-item" to="edit-employee.html"><i className="fa fa-pencil m-r-5"></i>
                                                        Edit</Link>
                                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_employee"><i
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

export default EmployeesList;