import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { addNewField } from '../../redux/reducers/formReducer'

import FormContainer from '../../components/FormContainer'
import Button from '../../components/Button'
import Warning from '../../components/Warning'

import SearchBox from '../../components/SearchBox'

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

    handleChange = location => {
        this.setState({ location, validated: false })
    }

    validateSelection = location => {
        this.setState({ location, validated: true })
    }

    handleClick = () => {
        if (!this.state.validated) {
            this.setState({
                attemptFailed: true
            })
        } else {
            this.props.addNewField('location', this.state.location)
        }
    }

    render() {
        const {
            state: { location, validated, attemptFailed },
            handleChange,
            handleClick,
            validateSelection
        } = this
        return (
            <FormContainer>
                <h2>Find Top Real Estate Agents in Your City</h2>
                <p>
                    Agent Pronto is a free service that helps you find a
                    top-performing agent you can trust.
                </p>
                <p>
                    Get started today by entering a city or neighborhood below.
                </p>
                <div className="landing__input-n-form">
                    <SearchBox
                        placeholder="Enter a city or neighborhood..."
                        value={location}
                        handleChange={handleChange}
                        validateSelection={validateSelection}
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
            </FormContainer>
        )
    }
}

export default connect(
    null,
    { addNewField }
)(Landing)
