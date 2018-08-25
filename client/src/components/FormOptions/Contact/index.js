import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import ContactForm from './components/ContactForm'
import Button from '../../Button'

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>Let's Find Your Perfect Agent!</h2>
                <ContactForm />
                <Link to="complete">
                    <Button>Match Me with a Top Agent</Button>
                </Link>
            </div>
        )
    }
}

export default Contact
