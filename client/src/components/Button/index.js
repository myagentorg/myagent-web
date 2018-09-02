import React from 'react'

import styled from 'styled-components'

const StyledButton = styled.button`
    background: linear-gradient(to right, #ff416c, #ff4b2b);
    color: white;
    font-size: 1.414rem;
    font-weight: 500;
    padding: 0.618em 1em;
    border-radius: 1px;
    transition: all 0.25s;
    min-width: 150px;
    cursor: pointer;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    border: none;
    &:hover,
    &:focus {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    }
    @media (min-width: 600px) {
        font-size: 1.618rem;
    }
`

const Button = ({ className, children }) => (
    <StyledButton className={className}>{children}</StyledButton>
)

export default Button
