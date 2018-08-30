import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const Map = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={props.zoom || 11}
        defaultCenter={{
            lat: props.lat || 39.7392,
            lng: props.lng || -104.9903
        }}
    >
        {props.isMarkerShown && (
            <Marker
                position={{
                    lat: props.lat || 39.7392,
                    lng: props.lng || -104.9903
                }}
            />
        )}
    </GoogleMap>
))

export default Map
