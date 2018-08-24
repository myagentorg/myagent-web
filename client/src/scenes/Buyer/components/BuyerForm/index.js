import React, { Component } from 'react'

class BuyerForm extends Component {
    render() {
        console.log('hello')
        console.log(this.props.children)
        return (
            <div>
                {/* Content */}
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default BuyerForm
