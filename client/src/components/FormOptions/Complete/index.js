import React, { Component } from 'react'

import TopSection from './components/TopSection'
import DataSection from './components/DataSection'

import { connect } from 'react-redux'
import { postToDatabase } from '../../../redux/reducers/formReducer'

import './index.css'

class Complete extends Component {
    constructor(props) {
        super(props)
        this.state = { form: {} }
        this.initialState = this.state
    }

    componentDidMount() {
        this.setState({ form: this.props.form }, () =>
            this.props.postToDatabase(this.props.form)
        )
    }

    componentWillUnmount() {
        this.setState(this.initialState)
    }

    render() {
        const { form } = this.state
        let fullname
        if (form) ({ fullname } = form)
        return (
            <div className="complete">
                <div className="complete__wrapper">
                    <TopSection fullname={fullname} />
                    <DataSection form={form} />
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({ form: state.form }),
    { postToDatabase }
)(Complete)
