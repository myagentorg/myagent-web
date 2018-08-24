import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ChooseBuyOrSell extends Component {
    render() {
        return (
            <div>
                <div>Buyer or Seller</div>
                <div>
                    <Link to="/buyer/property-type">Buyer</Link>
                    <Link to="/seller/property-type">Seller</Link>
                </div>
            </div>
        )
    }
}

export default ChooseBuyOrSell
