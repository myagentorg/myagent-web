import React, { Component } from 'react'

import Nav from './components/Nav'
import Landing from './scenes/Landing'
import ChooseBuyOrSell from './scenes/ChooseBuyOrSell'
import BuyerOrSeller from './scenes/BuyerOrSeller'

import { Switch, Route } from 'react-router-dom'

import './App.css'

class App extends Component {
    render() {
        return (
            <div className="app__wrapper">
                <Nav />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route
                        path="/buyer-or-seller"
                        component={ChooseBuyOrSell}
                    />
                    <Route
                        path="/buyer"
                        render={props => <BuyerOrSeller mode="buyer" />}
                    />
                    <Route
                        path="/seller"
                        render={props => <BuyerOrSeller mode="seller" />}
                    />
                </Switch>
            </div>
        )
    }
}

export default App
