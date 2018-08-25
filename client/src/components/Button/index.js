import React, { Component } from 'react'

import styled from 'styled-components'

const StyledButton = styled.button`
    background: dodgerblue;
    color: white;
    font-size: 24px;
    padding: 0.75em 1em;
    border-radius: 5px;
    transition: all 0.25s;
    min-width: 150px;
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
