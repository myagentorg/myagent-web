import React from 'react'

import styled from 'styled-components'

const StyledButton = styled.button`
    background: dodgerblue;
    color: white;
    font-size: 1.414rem;
    padding: 0.75em 1em;
    border-radius: 5px;
    transition: all 0.25s;
    min-width: 150px;
    cursor: pointer;
    &:hover,
    &:focus {
        background: royalblue;
    }
    @media (min-width: 600px) {
        font-size: 1.618rem;
    }
`

const Button = ({ className, children }) => (
    <StyledButton className={className}>{children}</StyledButton>
)

export default Button
