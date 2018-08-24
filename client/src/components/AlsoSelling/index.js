import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class AlsoSelling extends Component {
    render() {
        return (
            <div>
                <div>AlsoSelling</div>
                <Link to="contact">Contact</Link>
            </div>
        )
    }
}

export default AlsoSelling
