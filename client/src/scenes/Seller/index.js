import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

class Seller extends Component {
    render() {
        return (
            <div>
                <div>Property Type</div>
                <div>
                    <Link to="/seller/budget">Seller</Link>
                </div>
            </div>
        )
    }
}

export default Seller
