import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'

import Landing from './scenes/Landing'
import ChooseMainPath from './scenes/ChooseMainPath'
import Paths from './scenes/Paths'
import BothPaths from './scenes/BothPaths'

import './App.css'

class App extends Component {
    render() {
        return (
            <div className="app__wrapper">
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/buyer-or-seller" component={ChooseMainPath} />
                    <Route
                        path="/buyer"
                        render={props => <Paths mode="buyer" />}
                    />
                    <Route
                        path="/seller"
                        render={props => <Paths mode="seller" />}
                    />
                    <Route
                        path="/buyer-and-seller"
                        render={props => <BothPaths />}
                    />
                </Switch>
            </div>
        )
    }
}

export default App
