import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Input from '../../components/Input'
import Button from '../../components/Button'
import Warning from '../../components/Warning'

import background from '../../assets/background.jpg'

import './index.css'

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            location: '',
            validated: false,
            attemptFailed: false
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value }, () => {
            this.setState({ validated: this.state.location.length > 0 })
        })
    }

    handleClick = () => {
        if (!this.state.validated) {
            this.setState({
                attemptFailed: true
            })
        }
    }

    render() {
        const {
            state: { location, validated, attemptFailed },
            handleChange,
            handleClick
        } = this
        const style = {
            background: `
                linear-gradient(
                    rgba(255, 230, 230, 0.25),
                    rgba(255, 230, 230, 0.25)
                ),
                url(${background})`,
            backgroundPosition: 'right 50% center',
            backgroundSize: 'cover',
            filter: 'blur(3px)'
        }
        return (
            <div className="landing">
                <div className="landing__background" style={style} />
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
                            mode={attemptFailed ? 'red' : null}
                        />
                        {attemptFailed ? (
                            <Warning>This field is required</Warning>
                        ) : null}
                        <Link
                            to={validated ? '/buyer-or-seller' : ''}
                            tabIndex="-1"
                            onClick={handleClick}
                        >
                            <Button>Find Your Perfect Agent</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing
