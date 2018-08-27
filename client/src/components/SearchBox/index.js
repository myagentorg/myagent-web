import React from 'react'

import Input from '../Input'

import { compose, withProps, lifecycle } from 'recompose'
import { withScriptjs } from 'react-google-maps'
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox'

const MySearchBox = compose(
    withProps({
        googleMapURL:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyDVRbJJDt-Ard7WL5oJGimjVLhOKHcYrWU&v=3.exp&libraries=places',
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: '400px' }} />
    }),
    lifecycle({
        componentWillMount() {
            const refs = {}

            this.setState({
                places: [],
                onSearchBoxMounted: ref => {
                    refs.searchBox = ref
                },
                onPlacesChanged: () => {
                    const places = refs.searchBox.getPlaces()

                    this.setState({
                        places
                    })
                }
            })
        }
    }),
    withScriptjs
)(props => {
    const { name, placeholder, handleChange, mode } = props
    let { value } = props
    if (props.places[0]) {
        value = props.places[0].formatted_address
        props.places[0].formatted_address = undefined
    }
    return (
        <div data-standalone-searchbox="">
            <StandaloneSearchBox
                ref={props.onSearchBoxMounted}
                bounds={props.bounds}
                onPlacesChanged={props.onPlacesChanged}
            >
                <Input
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    handleChange={handleChange}
                    mode={mode}
                />
            </StandaloneSearchBox>
        </div>
    )
})

export default MySearchBox
