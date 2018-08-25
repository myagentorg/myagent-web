import React, { Component } from 'react'

import RadioGroup from './components/RadioGroup'

class PropertyType extends Component {
    constructor(props) {
        super(props)
        this.state = { type: '' }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        const {
            props: { mode },
            state: { type },
            handleChange
        } = this
        return (
            <div>
                <h2>
                    What type of property are you
                    {mode === 'buyer' ? ' looking for' : ' selling'}?
                </h2>
                <RadioGroup
                    mode={mode}
                    type={type}
                    handleChange={handleChange}
                />
            </div>
        )
    }
}

export default PropertyType
