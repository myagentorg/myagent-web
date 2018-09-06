import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Button from '../../Button'

import SearchBox from '../../SearchBox'

import './index.css'

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            address: '',
            latLng: {
                lat: null,
                lng: null
            }
        }
    }

    handleClick = () => {
        const { address, latitude, longitude } = this.props.fields
        this.props.handleAddNewField(address, this.state.address)
        this.props.handleAddNewField(latitude, this.state.latLng.lat)
        this.props.handleAddNewField(longitude, this.state.latLng.lng)
    }

    handleChange = address => {
        this.setState({ address })
    }

    handleSelection = (address, latLng) => {
        this.setState({ address, latLng })
    }

    render() {
        const { link } = this.props
        return (
            <div>
                <h2>What is the address of the property you’re selling?</h2>
                <div className="address__input-n-button">
                    <SearchBox
                        placeholder="Search for your address..."
                        value={this.state.address}
                        handleChange={this.handleChange}
                        handleSelection={this.handleSelection}
                    />
                    <Link to={link || 'loan'} onClick={this.handleClick}>
                        <Button>Next</Button>
                    </Link>
                    <Link className="address__small-text" to={link || 'loan'}>
                        Skip
                    </Link>
                </div>
            </div>
        )
    }
}

export default Contact
