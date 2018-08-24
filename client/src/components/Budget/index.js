import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Budget extends Component {
    render() {
        return (
            <div>
                <div>Budget</div>
                <Link to="also-selling">Also Selling</Link>
            </div>
        )
    }
}

export default Budget
