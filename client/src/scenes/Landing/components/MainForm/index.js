import React from 'react'

import { Link } from 'react-router-dom'

import FormContainer from '../../../../components/FormContainer'
import SearchBox from '../../../../components/SearchBox'
import Warning from '../../../../components/Warning'
import Button from '../../../../components/Button'

const MainForm = ({
    address,
    handleChange,
    handleSelection,
    attemptFailed,
    validated,
    handleClick
}) => {
    return (
        <FormContainer>
            <h2>Find Top Real Estate Agents in Your City</h2>
            <p>
                MyAgent.io is a free service that helps you find a
                top-performing agent you can trust.
            </p>
            <p>Get started today by entering a city or neighborhood below.</p>
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

export default MainForm
