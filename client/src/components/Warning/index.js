import React from 'react'

import styled from 'styled-components'

const StyledWarning = styled.div`
    color: red;
    text-align: left;
`

const Warning = ({ children }) => (
    <StyledWarning>{this.props.children}</StyledWarning>
)

export default Warning
