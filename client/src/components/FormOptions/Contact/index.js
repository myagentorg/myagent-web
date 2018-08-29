import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import ContactForm from './components/ContactForm'
import Button from '../../Button'

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            fullname: '',
            email: '',
            phone: '',
            additionalinformation: ''
        }
    }

    handleClick = () => {
        const {
            fullname,
            email,
            phone,
            additionalinformation
        } = this.props.fields
        this.props.handleAddNewField(fullname, this.state.fullname)
        this.props.handleAddNewField(email, this.state.email)
        if (this.state.phone)
            this.props.handleAddNewField(phone, this.state.phone)
        if (this.state.additionalinformation)
            this.props.handleAddNewField(
                additionalinformation,
                this.state.additionalinformation
            )
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState(prevState => ({ ...prevState, [name]: value }))
    }

    render() {
        return (
            <div>
                <h2>Let's Find Your Perfect Agent!</h2>
                <ContactForm handleChange={this.handleChange} />
                <Link to="complete" onClick={this.handleClick}>
                    <Button>Match Me with a Top Agent</Button>
                </Link>
            </div>
        )
    }
}

export default Contact
