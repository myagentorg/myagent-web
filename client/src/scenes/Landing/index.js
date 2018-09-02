import React, { Component } from 'react'

import { connect } from 'react-redux'
import { addNewField } from '../../redux/reducers/formReducer'

import MainForm from './components/MainForm'
import HowAppWorks from './components/HowAppWorks'
import PersuasiveInfo from './components/PersuasiveInfo'
// import Reviews from './components/Reviews'
import BottomForm from './components/BottomForm'
// import Footer from './components/Footer'

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            address: '',
            latLng: {
                lat: null,
                lng: null
            },
            validated: false,
            attemptFailed: false
        }
    }

    handleChange = address => {
        this.setState({ address, validated: false })
    }

    handleSelection = (address, latLng) => {
        this.setState({ address, validated: true, latLng })
    }

    handleClick = () => {
        if (!this.state.validated) {
            this.setState({
                attemptFailed: true
            })
        } else {
            const { latLng } = this.state
            this.props.addNewField('clientaddress', this.state.address)
            this.props.addNewField('clientlatitude', latLng.lat)
            this.props.addNewField('clientlongitude', latLng.lng)
        }
    }

    render() {
        return (
            <React.Fragment>
                <MainForm
                    handleSelection={this.handleSelection}
                    handleClick={this.handleClick}
                    handleChange={this.handleChange}
                    {...this.state}
                />
                <HowAppWorks />
                <PersuasiveInfo />
                <BottomForm
                    handleSelection={this.handleSelection}
                    handleClick={this.handleClick}
                    handleChange={this.handleChange}
                    {...this.state}
                />
                {/* <Reviews />
                <Footer /> */}
            </React.Fragment>
        )
    }
}

export default connect(
    null,
    { addNewField }
)(Landing)
