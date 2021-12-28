import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Login, Register } from '..'
import './mainhome.scss'

const MainHome = () => {
    return (
        <div className='main-page'>
            <div className='header-page'>
                Header
            </div>
            <div className='body-page'>
            <Router>
                <Switch >
                    <Route path='/register'>
                        <Register />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </Router>
            </div>
            <div className='footer-page'>
                footer
            </div>
        </div>
    )
}

export default MainHome
