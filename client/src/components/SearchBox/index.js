import React, { Component } from 'react'

import PlacesAutocomplete, {
    getLatLng,
    geocodeByAddress
} from 'react-places-autocomplete'

import styled from 'styled-components'

import './index.css'

const StyledInput = styled.input`
    display: block;
    margin: auto;
    font-size: inherit;
    padding: 1em 1.618em;
    width: 100%;
    text-align: ${props => props.textAlign || 'center'};
    border-radius: 5px;
    border: ${props =>
        props.mode === 'red' ? '1px solid red' : '1px solid #aaa'};
    outline: none;
    transition: all 0.25s;
    &:focus {
        box-shadow: 0 0 5px
                ${props => (props.mode === 'red' ? 'red' : 'dodgerblue')},
            0 2px 3px rgba(0, 0, 0, 0.1);
    }
`

class SearchBox extends Component {
    innerSelectionFn = (address, cb) => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                cb(address, latLng)
                // console.log('Success', latLng)
            })
            .catch(error => console.error('Error', error))
    }

    render() {
        const { value, handleChange, handleSelection } = this.props
        return (
            <PlacesAutocomplete
                value={value}
                onChange={handleChange}
                onSelect={address => {
                    this.innerSelectionFn(address, handleSelection)
                }}
            >
                {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading
                }) => (
                    <div style={{ position: 'relative' }}>
                        <StyledInput
                            {...getInputProps({
                                placeholder: this.props.placeholder
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item suggestion-item--active'
                                    : 'suggestion-item'
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        )
    }
}

export default SearchBox
