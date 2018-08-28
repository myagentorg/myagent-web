import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { addNewField } from '../../redux/reducers/formReducer'

import Map from '../../components/Map'
import FormContainer from '../../components/FormContainer'
import Button from '../../components/Button'

import './index.css'

class ChooseMainPath extends Component {
    render() {
        const {
            addNewField,
            form: { location }
        } = this.props
        let lat, lng
        if (location) ({ lat, lng } = location)
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
                <Map
                    lat={lat}
                    lng={lng}
                    containerElement={
                        <div
                            style={{
                                height: `200px`,
                                marginTop: '1em',
                                borderRadius: '5px',
                                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                            }}
                        />
                    }
                    mapElement={
                        <div style={{ height: `100%`, borderRadius: '5px' }} />
                    }
                />
            </FormContainer>
        )
    }
}

export default connect(
    state => ({ form: state.form }),
    { addNewField }
)(ChooseMainPath)
