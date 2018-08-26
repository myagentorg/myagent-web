import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import FormContainer from '../../components/FormContainer'
import Button from '../../components/Button'

import './index.css'

class ChooseMainPath extends Component {
    render() {
        return (
            <FormContainer>
                <h2>Are you looking to buy or sell in {`location`}?</h2>
                <div className="buy-or-sell__buttons">
                    <Link to="/buyer/property-type">
                        <Button>Buy</Button>
                    </Link>
                    <Link to="/seller/property-type">
                        <Button>Sell</Button>
                    </Link>
                    <Link to="/buyer-and-seller/buyer/property-type">
                        <Button>Both</Button>
                    </Link>
                </div>
            </FormContainer>
        )
    }
}

export default ChooseMainPath
