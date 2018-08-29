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
            address: '',
            latLng: {
                lat: null,
                lng: null
            },
            validated: false,
            attemptFailed: false
        }
    }

    handleChange = address => {
        this.setState({ address, validated: false })
    }

    handleSelection = (address, latLng) => {
        this.setState({ address, validated: true, latLng })
    }

    handleClick = () => {
        if (!this.state.validated) {
            this.setState({
                attemptFailed: true
            })
        } else {
            const { latLng } = this.state
            this.props.addNewField('clientAddress', this.state.address)
            this.props.addNewField('clientLatitude', latLng.lat)
            this.props.addNewField('clientLongitude', latLng.lng)
        }
    }

    render() {
        const {
            state: { address, validated, attemptFailed },
            handleChange,
            handleClick,
            handleSelection
        } = this
        return (
            <FormContainer>
                <h2>Find Top Real Estate Agents in Your City</h2>
                <p>
                    MyAgent.io is a free service that helps you find a
                    top-performing agent you can trust.
                </p>
                <p>
                    Get started today by entering a city or neighborhood below.
                </p>
                <div className="landing__input-n-form">
                    <SearchBox
                        placeholder="Enter a city or neighborhood..."
                        value={address}
                        handleChange={handleChange}
                        handleSelection={handleSelection}
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
