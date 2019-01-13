import React, { Component } from 'react'

// import Helmet from 'react-helmet'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { addNewField } from '../../redux/reducers/formReducer'
import { getCity } from '../../redux/reducers/contentfulReducer'

import MainForm from './components/MainForm'
import HowAppWorks from './components/HowAppWorks'
import PersuasiveInfo from './components/PersuasiveInfo'
import Reviews from './components/Reviews'
import DetailedInfo from './components/DetailedInfo'
import BottomForm from './components/BottomForm'
import Footer from './components/Footer'

class Landing extends Component {
  state = {
    address: '',
    latLng: {
      lat: null,
      lng: null
    },
    validated: false,
    attemptFailed: false,
    startedCitySearch: false
  }

  componentDidMount() {
    if (this.props.match.path !== '/') {
      this.setState({ startedCitySearch: true })
      this.props.getCity(`/${this.props.match.params.city}`)
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
      this.setState({ attemptFailed: true })
    } else {
      const { latLng } = this.state
      this.props.addNewField('clientaddress', this.state.address)
      this.props.addNewField('clientlatitude', latLng.lat)
      this.props.addNewField('clientlongitude', latLng.lng)
    }
  }

  render() {
    const { cityData, loading } = this.props

    if (
      this.state.startedCitySearch &&
      !loading &&
      this.props.match.path !== '/' &&
      cityData.city.toLowerCase() === 'your city'
    ) {
      return <Redirect to="/" />
    }

    return (
      <React.Fragment>
        {/* {cityData.metaData && (
          <Helmet
          >
          </Helmet>
        )} */}
        <MainForm
          handleSelection={this.handleSelection}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          cityData={cityData}
          {...this.state}
        />
        <HowAppWorks cityData={cityData} />
        <PersuasiveInfo cityData={cityData} />
        <Reviews cityData={cityData} />
        <DetailedInfo cityData={cityData} />
        <BottomForm
          handleSelection={this.handleSelection}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          cityData={cityData}
          {...this.state}
        />
        <Footer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  cityData: state.contentful,
  loading: state.contentful.loading
})

export default connect(
  mapStateToProps,
  { addNewField, getCity }
)(Landing)
