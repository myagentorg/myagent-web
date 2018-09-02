import React from 'react'

import { Link } from 'react-router-dom'

import CustomFormContainer from './components/CustomFormContainer'
import SearchBox from '../../../../components/SearchBox'
import Warning from '../../../../components/Warning'
import Button from '../../../../components/Button'

const BottomForm = ({
    address,
    handleChange,
    handleSelection,
    attemptFailed,
    validated,
    handleClick
}) => {
    return (
        <CustomFormContainer staticHeight noNav>
            <h2>MyAgent.io is Fast, Free, and Easy</h2>
            <p>
                Our service is 100% free to use for home buyers and sellers.
                MyAgent.io is the easiest and fastest way to find the best agent
                for you.
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
        </CustomFormContainer>
    )
}

export default BottomForm
