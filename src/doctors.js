import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Doctors extends Component{
    render(){
        return(
            <div>
                <div className="main-wrapper">
        <div className="page-wrapper">

            <div className="content">
                <div className="row">
                    <div className="col-sm-4 col-3">
                        <h4 className="page-title">Doctors</h4>
                    </div>
                    <div className="col-sm-8 col-9 text-right m-b-20">
                        <Link to="add-doctor.html" className="btn btn-primary btn-rounded float-right"><i className="fa fa-plus"></i>
                            Add
                            Doctor</Link>
                    </div>
                </div>
                <div className="row doctor-grid">
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <Link className="avatar" to="profile.html"><img alt="" src={require("./img/doctor-thumb-03.jpg")}/></Link>
                            </div>
                            <div className="dropdown profile-action">
                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                        className="fa fa-ellipsis-v"></i></Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="edit-doctor.html"><i className="fa fa-pencil m-r-5"></i>
                                        Edit</Link>
                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_doctor"><i
                                            className="fa fa-trash-o m-r-5"></i>
                                        Delete</Link>
                                </div>
                            </div>
                            <h4 className="doctor-name text-ellipsis"><Link to="profile.html">Cristina Groves</Link></h4>
                            <div className="doc-prof">Gynecologist</div>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> United States, San Francisco
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <Link className="avatar" to="profile.html"><img alt="" src={require("./img/doctor-thumb-07.jpg")}/></Link>
                            </div>
                            <div className="dropdown profile-action">
                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                        className="fa fa-ellipsis-v"></i></Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="edit-doctor.html"><i className="fa fa-pencil m-r-5"></i>
                                        Edit</Link>
                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_doctor"><i
                                            className="fa fa-trash-o m-r-5"></i>
                                        Delete</Link>
                                </div>
                            </div>
                            <h4 className="doctor-name text-ellipsis"><Link to="profile.html">Marie Wells</Link></h4>
                            <div className="doc-prof">Psychiatrist</div>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> United States, San Francisco
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <Link className="avatar" to="profile.html"><img alt="" src={require("./img/doctor-thumb-04.jpg")}/></Link>
                            </div>
                            <div className="dropdown profile-action">
                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                        className="fa fa-ellipsis-v"></i></Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="edit-doctor.html"><i className="fa fa-pencil m-r-5"></i>
                                        Edit</Link>
                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_doctor"><i
                                            className="fa fa-trash-o m-r-5"></i>
                                        Delete</Link>
                                </div>
                            </div>
                            <h4 className="doctor-name text-ellipsis"><Link to="profile.html">Henry Daniels</Link></h4>
                            <div className="doc-prof">Cardiologist</div>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> United States, San Francisco
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <Link className="avatar" to="profile.html"><img alt="" src={require("./img/doctor-thumb-11.jpg")}/></Link>
                            </div>
                            <div className="dropdown profile-action">
                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                        className="fa fa-ellipsis-v"></i></Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="edit-doctor.html"><i className="fa fa-pencil m-r-5"></i>
                                        Edit</Link>
                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_doctor"><i
                                            className="fa fa-trash-o m-r-5"></i>
                                        Delete</Link>
                                </div>
                            </div>
                            <h4 className="doctor-name text-ellipsis"><Link to="profile.html">Mark Hunter</Link></h4>
                            <div className="doc-prof">Urologist</div>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> United States, San Francisco
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <Link className="avatar" to="#"><img alt="" src={require("./img/doctor-thumb-12.jpg")}/></Link>
                            </div>
                            <div className="dropdown profile-action">
                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                        className="fa fa-ellipsis-v"></i></Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="edit-doctor.html"><i className="fa fa-pencil m-r-5"></i>
                                        Edit</Link>
                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_doctor"><i
                                            className="fa fa-trash-o m-r-5"></i>
                                        Delete</Link>
                                </div>
                            </div>
                            <h4 className="doctor-name text-ellipsis"><Link to="profile.html">Michael Sullivan</Link></h4>
                            <div className="doc-prof">Ophthalmologist</div>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> United States, San Francisco
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <Link className="avatar" to="profile.html"><img alt="" src={require("./img/doctor-thumb-02.jpg")}/></Link>
                            </div>
                            <div className="dropdown profile-action">
                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                        className="fa fa-ellipsis-v"></i></Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="edit-doctor.html"><i className="fa fa-pencil m-r-5"></i>
                                        Edit</Link>
                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_doctor"><i
                                            className="fa fa-trash-o m-r-5"></i>
                                        Delete</Link>
                                </div>
                            </div>
                            <h4 className="doctor-name text-ellipsis"><Link to="profile.html">Linda Barrett</Link></h4>
                            <div className="doc-prof">Dentist</div>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> United States, San Francisco
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <Link className="avatar" to="profile.html"><img alt="" src={require("./img/doctor-thumb-09.jpg")}/></Link>
                            </div>
                            <div className="dropdown profile-action">
                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                        className="fa fa-ellipsis-v"></i></Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="edit-doctor.html"><i className="fa fa-pencil m-r-5"></i>
                                        Edit</Link>
                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_doctor"><i
                                            className="fa fa-trash-o m-r-5"></i>
                                        Delete</Link>
                                </div>
                            </div>
                            <h4 className="doctor-name text-ellipsis"><Link to="profile.html">Ronald Jacobs</Link></h4>
                            <div className="doc-prof">Oncologist</div>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> United States, San Francisco
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <Link className="avatar" to="profile.html"><img alt="" src={require("./img/doctor-thumb-01.jpg")}/></Link>
                            </div>
                            <div className="dropdown profile-action">
                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                        className="fa fa-ellipsis-v"></i></Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="edit-doctor.html"><i className="fa fa-pencil m-r-5"></i>
                                        Edit</Link>
                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_doctor"><i
                                            className="fa fa-trash-o m-r-5"></i>
                                        Delete</Link>
                                </div>
                            </div>
                            <h4 className="doctor-name text-ellipsis"><Link to="profile.html">Albert Sandoval</Link></h4>
                            <div className="doc-prof">Neurologist</div>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> United States, San Francisco
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <Link className="avatar" to="profile.html"><img alt="" src={require("./img/doctor-thumb-05.jpg")}/></Link>
                            </div>
                            <div className="dropdown profile-action">
                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                        className="fa fa-ellipsis-v"></i></Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="edit-doctor.html"><i className="fa fa-pencil m-r-5"></i>
                                        Edit</Link>
                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_doctor"><i
                                            className="fa fa-trash-o m-r-5"></i>
                                        Delete</Link>
                                </div>
                            </div>
                            <h4 className="doctor-name text-ellipsis"><Link to="profile.html">Diana Bailey</Link></h4>
                            <div className="doc-prof">General Surgery</div>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> United States, San Francisco
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <Link className="avatar" to="profile.html"><img alt="" src={require("./img/doctor-thumb-10.jpg")}/></Link>
                            </div>
                            <div className="dropdown profile-action">
                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                        className="fa fa-ellipsis-v"></i></Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="edit-doctor.html"><i className="fa fa-pencil m-r-5"></i>
                                        Edit</Link>
                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_doctor"><i
                                            className="fa fa-trash-o m-r-5"></i>
                                        Delete</Link>
                                </div>
                            </div>
                            <h4 className="doctor-name text-ellipsis"><Link to="profile.html">Shirley Willis</Link></h4>
                            <div className="doc-prof">Radiologist</div>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> United States, San Francisco
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <Link className="avatar" to="profile.html"><img alt="" src={require("./img/doctor-thumb-08.jpg")}/></Link>
                            </div>
                            <div className="dropdown profile-action">
                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                        className="fa fa-ellipsis-v"></i></Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="edit-doctor.html"><i className="fa fa-pencil m-r-5"></i>
                                        Edit</Link>
                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_doctor"><i
                                            className="fa fa-trash-o m-r-5"></i>
                                        Delete</Link>
                                </div>
                            </div>
                            <h4 className="doctor-name text-ellipsis"><Link to="profile.html">Pamela Curtis</Link></h4>
                            <div className="doc-prof">Pediatrics</div>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> United States, San Francisco
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <Link className="avatar" to="profile.html"><img alt="" src={require("./img/doctor-thumb-06.jpg")}/></Link>
                            </div>
                            <div className="dropdown profile-action">
                                <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                        className="fa fa-ellipsis-v"></i></Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="edit-doctor.html"><i className="fa fa-pencil m-r-5"></i>
                                        Edit</Link>
                                    <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#delete_doctor"><i
                                            className="fa fa-trash-o m-r-5"></i>
                                        Delete</Link>
                                </div>
                            </div>
                            <h4 className="doctor-name text-ellipsis"><Link to="profile.html">Justin Parker</Link></h4>
                            <div className="doc-prof">Physical Therapist</div>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> United States, San Francisco
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="see-all">
                            <Link className="see-all-btn" to="/javascript:void(0);">Load More</Link>
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

export default Doctors;
