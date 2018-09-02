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
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    border: none;
    &:hover,
    &:focus {
        background: royalblue;
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
