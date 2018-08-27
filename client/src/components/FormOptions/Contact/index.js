import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import ContactForm from './components/ContactForm'
import Button from '../../Button'

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            phone: '',
            additionalInfo: ''
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState(prevState => ({ ...prevState, [name]: value }))
    }

    render() {
        const { handleAddNewField, field } = this.props
        return (
            <div>
                <h2>Let's Find Your Perfect Agent!</h2>
                <ContactForm handleChange={this.handleChange} />
                <Link
                    to="complete"
                    onClick={() => handleAddNewField(field, this.state)}
                >
                    <Button>Match Me with a Top Agent</Button>
                </Link>
            </div>
        )
    }
}

export default Contact
