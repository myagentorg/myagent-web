import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Landing extends Component {
    render() {
        return (
            <div>
                <div>Landing</div>
                <Link to="/buyer-or-seller">Buyer or seller</Link>
            </div>
        )
    }
}

export default Landing
