import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Button from '../../Button'
import Input from '../../Input'

import './index.css'

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>What is the address of the property you’re selling?</h2>
                <div className="address__input-n-button">
                    <Input placeholder="Search for your address..." required />
                    <Link to="also-buying">
                        <Button>Next</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Contact
