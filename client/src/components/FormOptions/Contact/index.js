import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Button from '../../Button'

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>Contact</h2>
                <Link to="complete">
                    <Button>Match Me with a Top Agent</Button>
                </Link>
            </div>
        )
    }
}

export default Contact
