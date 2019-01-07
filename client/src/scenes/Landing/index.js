import React, { Component } from 'react'

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
  constructor() {
    super()
    this.state = {
      address: '',
      latLng: {
        lat: null,
        lng: null
      },
      validated: false,
      attemptFailed: false,
      startedCitySearch: false
    }
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
    const { city, loading, cityImage } = this.props

    if (
      this.state.startedCitySearch &&
      !loading &&
      this.props.match.path !== '/' &&
      city.toLowerCase() === 'your city'
    ) {
      return <Redirect to="/" />
    }

    return (
      <React.Fragment>
        <MainForm
          handleSelection={this.handleSelection}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          {...this.state}
          city={city}
          cityImage={cityImage}
        />
        <HowAppWorks />
        <PersuasiveInfo />
        <Reviews />
        <DetailedInfo city={city} />
        <BottomForm
          handleSelection={this.handleSelection}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          {...this.state}
        />
        <Footer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  city: state.contentful.city,
  loading: state.contentful.loading,
  cityImage: state.contentful.mainImage
})

export default connect(
  mapStateToProps,
  { addNewField, getCity }
)(Landing)
