import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { addNewField } from '../../redux/reducers/formReducer'

import FormContainer from '../../components/FormContainer'
import Button from '../../components/Button'

import './index.css'

class ChooseMainPath extends Component {
    render() {
        const { addNewField } = this.props
        return (
            <FormContainer>
                <h2>Are you looking to buy or sell in {`location`}?</h2>
                <div className="buy-or-sell__buttons">
                    <Link
                        to="/buyer/property-type"
                        onClick={() => addNewField('path', 'buyer')}
                    >
                        <Button>Buy</Button>
                    </Link>
                    <Link
                        to="/seller/property-type"
                        onClick={() => addNewField('path', 'seller')}
                    >
                        <Button>Sell</Button>
                    </Link>
                    <Link
                        to="/buyer-and-seller/buyer/property-type"
                        onClick={() => addNewField('path', 'buyer-and-seller')}
                    >
                        <Button>Both</Button>
                    </Link>
                </div>
            </FormContainer>
        )
    }
}

export default connect(
    null,
    { addNewField }
)(ChooseMainPath)
