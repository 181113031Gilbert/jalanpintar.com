import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Login, MainHome, Register } from '../../pages'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <MainHome />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
