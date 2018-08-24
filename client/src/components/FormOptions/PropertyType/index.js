import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class PropertyType extends Component {
    render() {
        const { mode } = this.props
        const link = mode === 'buyer' ? 'budget' : 'price'
        return (
            <div>
                <div>PropertyType</div>
                <Link to={link}>Money</Link>
            </div>
        )
    }
}

export default PropertyType
