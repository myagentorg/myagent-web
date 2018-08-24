import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class PropertyType extends Component {
    render() {
        return (
            <div>
                <div>PropertyType</div>
                <Link to="budget">Budget</Link>
            </div>
        )
    }
}

export default PropertyType
