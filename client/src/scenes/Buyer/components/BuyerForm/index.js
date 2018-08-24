import React, { Component } from 'react'

class BuyerForm extends Component {
    render() {
        return (
            <div>
                {/* Content */}
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default BuyerForm
