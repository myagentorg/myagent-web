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
            latLng: {}
        }
    }

    handleChange = address => {
        this.setState({ address })
    }

    handleSelection = (address, latLng) => {
        this.setState({ address, latLng })
    }

    render() {
        const { link, handleAddNewField, field } = this.props
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
                    <Link
                        to={link || 'loan'}
                        onClick={() =>
                            handleAddNewField(field, this.state.address)
                        }
                    >
                        <Button>Next</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Contact
