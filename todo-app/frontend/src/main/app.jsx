import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../template/menu'
import Routes from './routes'
import { BrowserRouter, Route} from 'react-router-dom';

export default props => (
    <BrowserRouter>
        <div className='container'>
            <Menu />
            <Routes />
        </div>
    </BrowserRouter>
)