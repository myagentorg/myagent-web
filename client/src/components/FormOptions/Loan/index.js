import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Button from '../../Button'

import './index.css'

class Loan extends Component {
    render() {
        const { handleAddNewField, field } = this.props
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
                        onClick={() =>
                            handleAddNewField(field, 'need a lender')
                        }
                    >
                        <Button>I need a lender</Button>
                    </Link>
                </div>
                <div>
                    <Link
                        to="contact"
                        onClick={() => handleAddNewField(field, 'no thanks')}
                    >
                        No thanks
                    </Link>
                </div>
            </div>
        )
    }
}

export default Loan
