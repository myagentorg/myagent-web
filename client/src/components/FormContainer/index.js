import React, { Component } from 'react'

class FormContainer extends Component {
    render() {
        return (
            <div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default FormContainer