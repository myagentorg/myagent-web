import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Contact extends Component {
    render() {
        return (
            <div>
                <div>Contact</div>
                <Link to="complete">Complete</Link>
            </div>
        )
    }
}

export default Contact
