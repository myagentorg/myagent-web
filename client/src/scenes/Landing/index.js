import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Input from '../../components/Input'
import Button from '../../components/Button'

import './index.css'

class Landing extends Component {
    constructor() {
        super()
        this.state = { location: '' }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        const {
            state: { location },
            handleChange
        } = this
        return (
            <div className="landing">
                <div className="landing__card">
                    <div className="landing__wrapper">
                        <h3>Find Top Real Estate Agents in Your City</h3>
                        <p>
                            Agent Pronto is a free service that helps you find a
                            top-performing agent you can trust.
                        </p>
                        <p>
                            Get started today by entering a city or neighborhood
                            below.
                        </p>
                        <Input
                            name="location"
                            placeholder="Enter a city or neighborhood..."
                            value={location}
                            handleChange={handleChange}
                        />
                        <Link to="/buyer-or-seller" tabIndex="-1">
                            <Button>Find Your Perfect Agent</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing
