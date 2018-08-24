import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Contact extends Component {
    render() {
        return (
            <div>
                <div>Address</div>
                <Link to="also-buying">Also Buying</Link>
            </div>
        )
    }
}

export default Contact
