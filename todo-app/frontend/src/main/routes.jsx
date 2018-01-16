import React, {Component} from 'react'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Todo from '../todo/todo'
import About from '../about/about'

export default class Routes extends Component {
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Todo}/>
                <Route path='/todos' component={Todo} />
                <Route path='/about' component={About} />
                <Redirect to='/' push/>
            </Switch>
        )
    }
}