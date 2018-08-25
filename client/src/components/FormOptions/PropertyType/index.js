import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Button from '../../Button'

class PropertyType extends Component {
    render() {
        const { mode } = this.props
        const link = mode === 'buyer' ? 'budget' : 'price'
        return (
            <div>
                <h2>Property Type</h2>
                <Link to={link}>
                    <Button>Next</Button>
                </Link>
            </div>
        )
    }
}

export default PropertyType
