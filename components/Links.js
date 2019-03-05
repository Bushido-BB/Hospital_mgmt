import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Login from './login'
import Home from './home'
import Dashboard from './dashboard'

class Links extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return <div>
            <ul style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/login'>Site-Map</Link>
                </li>
                <li>
                    <Link to='/login'>Content</Link>
                </li>
                <li>
                    <Link to='/login'>About</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
            <Route path='/login' component={Login} />
            <Route path='/home' component={Home} />
            <Route path='/dashboard' component={Dashboard} />
        </div>
    }
}

export default Links