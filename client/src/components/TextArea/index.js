import React from 'react'

import styled from 'styled-components'

const StyledTextArea = styled.textarea`
    display: block;
    width: 100%;
    height: 150px;
    margin: auto;
    font-size: inherit;
    font-family: inherit;
    padding: 1em;
    border-radius: 1px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    border: 1px solid #aaa;
    resize: vertical;
    outline: none;
    transition: box-shadow 0.25s;
    &:focus {
        box-shadow: 0 0 5px dodgerblue, 0 2px 3px rgba(0, 0, 0, 0.1);
    }
`

const TextArea = ({ handleChange, name }) => (
    <StyledTextArea name={name} onChange={handleChange} />
)

export default TextArea
