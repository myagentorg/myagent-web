import React, { Component } from 'react'

import { connect } from 'react-redux'
import { postToDatabase } from '../../../redux/reducers/formReducer'

class Complete extends Component {
    componentDidMount() {
        this.props.postToDatabase(this.props.form)
    }

    render() {
        return (
            <div>
                <h2>Complete</h2>
            </div>
        )
    }
}

export default connect(
    state => ({ form: state.form }),
    { postToDatabase }
)(Complete)
