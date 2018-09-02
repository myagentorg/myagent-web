import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { addNewField } from '../../redux/reducers/formReducer'

import Map from '../../components/Map'
import FormContainer from '../../components/FormContainer'
import Button from '../../components/Button'

import './index.css'

const ChooseMainPath = ({
    addNewField,
    form: { clientaddress, clientlatitude: lat, clientlongitude: lng }
}) => {
    return (
        <FormContainer>
            <h2>
                Are you looking to buy or sell in
                {` ${
                    clientaddress ? clientaddress.split(',')[0] : 'your city'
                }`}
                ?
            </h2>
            <div className="buy-or-sell__buttons">
                <Link
                    to="/buyer/property-type"
                    onClick={() => addNewField('clienttype', 'buyer')}
                    className="choose-path__link"
                >
                    <Button className="choose-path__button">Buy</Button>
                </Link>
                <Link
                    to="/seller/property-type"
                    onClick={() => addNewField('clienttype', 'seller')}
                    className="choose-path__link"
                >
                    <Button className="choose-path__button">Sell</Button>
                </Link>
                <Link
                    to="/buyer-and-seller/buyer/property-type"
                    onClick={() =>
                        addNewField('clienttype', 'buyer-and-seller')
                    }
                    className="choose-path__link"
                >
                    <Button className="choose-path__button">Both</Button>
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
                            borderRadius: '1px',
                            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.15)'
                        }}
                    />
                }
                mapElement={
                    <div style={{ height: `100%`, borderRadius: '1px' }} />
                }
            />
        </FormContainer>
    )
}

export default connect(
    state => ({ form: state.form }),
    { addNewField }
)(ChooseMainPath)
