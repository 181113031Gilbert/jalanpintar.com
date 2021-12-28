import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Login, Register } from '../pages'

const Router = () => {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <Home />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/register'>
                    <Register />
                </Route>
            </Switch>
        </Router>
    )
}

export default Router