import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div>
                <div className="header">
			<div className="header-left">
                <Link to="index.html" className="logo">
                    <img src={require("./img/logo.png")} width="35" height="35" alt=""/> <span>Preclinic</span>
                </Link>
			</div>
			<Link id="toggle_btn" to="/javascript:void(0);"><i className="fa fa-bars"></i></Link>
            <Link id="mobile_btn" className="mobile_btn float-left" to="#sidebar"><i className="fa fa-bars"></i></Link>
            <ul className="nav user-menu float-right">
                <li className="nav-item dropdown d-none d-sm-block">
                    <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown"><i className="fa fa-bell-o"></i> <span className="badge badge-pill bg-danger float-right">3</span></Link>
                    <div className="dropdown-menu notifications">
                        <div className="topnav-dropdown-header">
                            <span>Notifications</span>
                        </div>
                        <div className="drop-scroll">
                            <ul className="notification-list">
                                <li className="notification-message">
                                    <Link to="activities.html">
                                        <div className="media">
											<span className="avatar">
												<img alt="John Doe" src={require("./img/user.jpg")} className="img-fluid"/>
											</span>
											<div className="media-body">
												<p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
												<p className="noti-time"><span className="notification-time">4 mins ago</span></p>
											</div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="notification-message">
                                    <Link to="activities.html">
                                        <div className="media">
											<span className="avatar">V</span>
											<div className="media-body">
												<p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
												<p className="noti-time"><span className="notification-time">6 mins ago</span></p>
											</div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="notification-message">
                                    <Link to="activities.html">
                                        <div className="media">
											<span className="avatar">L</span>
											<div className="media-body">
												<p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
												<p className="noti-time"><span className="notification-time">8 mins ago</span></p>
											</div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="notification-message">
                                    <Link to="activities.html">
                                        <div className="media">
											<span className="avatar">G</span>
											<div className="media-body">
												<p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
												<p className="noti-time"><span className="notification-time">12 mins ago</span></p>
											</div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="notification-message">
                                    <Link to="activities.html">
                                        <div className="media">
											<span className="avatar">V</span>
											<div className="media-body">
												<p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
												<p className="noti-time"><span className="notification-time">2 days ago</span></p>
											</div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="topnav-dropdown-footer">
                            <Link to="activities.html">View all Notifications</Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown d-none d-sm-block">
                    <Link to="/javascript:void(0);" id="open_msg_box" className="hasnotifications nav-link"><i className="fa fa-comment-o"></i> <span className="badge badge-pill bg-danger float-right">8</span></Link>
                </li>
                <li className="nav-item dropdown has-arrow">
                    <Link to="#" className="dropdown-toggle nav-link user-link" data-toggle="dropdown">
                        <span className="user-img">
							<img className="rounded-circle" src={require("./img/user.jpg")} width="24" alt="Admin"/>
							<span className="status online"></span>
						</span>
						<span>Admin</span>
                    </Link>
					<div className="dropdown-menu">
						<Link className="dropdown-item" to="profile.html">My Profile</Link>
						<Link className="dropdown-item" to="edit-profile.html">Edit Profile</Link>
						<Link className="dropdown-item" to="settings.html">Settings</Link>
						<Link className="dropdown-item" to="login.html">Logout</Link>
					</div>
                </li>
            </ul>
            <div className="dropdown mobile-user-menu float-right">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></Link>
                <div className="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="profile.html">My Profile</Link>
                    <Link className="dropdown-item" to="edit-profile.html">Edit Profile</Link>
                    <Link className="dropdown-item" to="settings.html">Settings</Link>
                    <Link className="dropdown-item" to="login.html">Logout</Link>
                </div>
            </div>
        </div>
            </div>
        );
    }
}

export default Header;
