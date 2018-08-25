import React, { Component } from 'react'

import styled from 'styled-components'

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

class Input extends Component {
    render() {
        const {
            name,
            value,
            placeholder,
            handleChange,
            required,
            mode,
            textAlign
        } = this.props
        return (
            <StyledInput
                mode={mode}
                type="text"
                name={name}
                placeholder={placeholder}
                textAlign={textAlign}
                value={value}
                onChange={handleChange}
                required={required}
            />
        )
    }
}

export default Input
