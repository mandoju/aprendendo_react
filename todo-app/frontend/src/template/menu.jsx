import React from 'react'
import {BrowserRouter as Router, Route, Link, BrowserRouter} from 'react-router-dom'


export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <Router>
                    <Link className='navbar-brand' to='/'>
                        <i className='fa fa-calendar-check-o'></i> TodoApp
                    </Link>
                </Router>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <Router>

                    <ul className="nav navbar-nav">
                        <li><Link to='/todos'>Todo</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </Router>
                </div>
        </div>
    </nav>

)