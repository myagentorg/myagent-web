import React from 'react'

import { Link } from 'react-router-dom'

import Button from '../../Button'

import './index.css'

const Loan = ({ handleAddNewField, field }) => {
    return (
        <div>
            <h2>Are you approved for a loan?</h2>
            <div className="loan__buttons">
                <Link
                    to="contact"
                    onClick={() => handleAddNewField(field, 'approved')}
                >
                    <Button>I'm approved</Button>
                </Link>
                <Link
                    to="contact"
                    onClick={() => handleAddNewField(field, 'need a lender')}
                >
                    <Button>I need a lender</Button>
                </Link>
            </div>
            <div>
                <Link
                    className="loan__small-text"
                    to="contact"
                    onClick={() => handleAddNewField(field, 'skip')}
                >
                    Skip
                </Link>
            </div>
        </div>
    )
}

export default Loan
