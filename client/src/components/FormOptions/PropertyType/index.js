import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Button from '../../Button'

class PropertyType extends Component {
    render() {
        const { mode } = this.props
        return (
            <div>
                <h2>
                    What type of property are you
                    {mode === 'buyer' ? ' looking for' : ' selling'}?
                </h2>
                <Link to={mode === 'buyer' ? 'budget' : 'price'}>
                    <Button>Next</Button>
                </Link>
            </div>
        )
    }
}

export default PropertyType
