import React, { Component } from 'react'

import styled from 'styled-components'

const StyledButton = styled.button`
    background: dodgerblue;
    color: white;
    font-size: inherit;
    padding: 1em;
    margin-top: 1em;
    width: 100%;
    border-radius: 5px;
    transition: all 0.25s;
    &:hover,
    &:focus {
        background: royalblue;
    }
`

class Button extends Component {
    render() {
        return <StyledButton>{this.props.children}</StyledButton>
    }
}

export default Button
