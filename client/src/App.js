import React, { Component } from 'react'

import Nav from './components/Nav'
import Landing from './scenes/Landing'
import BuyerOrSeller from './scenes/BuyerOrSeller'
import Buyer from './scenes/Buyer'
// import Seller from './scenes/Seller'

import { Switch, Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/buyer-or-seller" component={BuyerOrSeller} />
                    <Route path="/buyer" component={Buyer} />
                    {/* <Route path="/seller" component={Seller} /> */}
                </Switch>
            </div>
        )
    }
}

export default App
