import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Button from '../../Button'

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>Address</h2>
                <Link to="also-buying">
                    <Button>Next</Button>
                </Link>
            </div>
        )
    }
}

export default Contact
