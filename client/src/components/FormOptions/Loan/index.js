import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Button from '../../Button'

import './index.css'

class Loan extends Component {
    render() {
        return (
            <div>
                <h2>Are you approved for a loan?</h2>
                <div className="loan__buttons">
                    <Link to="contact">
                        <Button>I'm approved</Button>
                    </Link>
                    <Link to="contact">
                        <Button>I need a lender</Button>
                    </Link>
                </div>
                <div>
                    <Link to="contact">No thanks</Link>
                </div>
            </div>
        )
    }
}

export default Loan
