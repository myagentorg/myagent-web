import React, { Component } from 'react'

import styled from 'styled-components'

const StyledWarning = styled.div`
    color: red;
    text-align: left;
`

class Warning extends Component {
    render() {
        return <StyledWarning>{this.props.children}</StyledWarning>
    }
}

export default Warning
