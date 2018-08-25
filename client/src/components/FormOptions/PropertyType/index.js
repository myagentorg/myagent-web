import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Button from '../../Button'

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
                <form>
                    <div className="property-type__radio">
                        <label>
                            <input
                                name="type"
                                type="radio"
                                value="single family"
                                checked={type === 'single family'}
                                onChange={handleChange}
                            />
                            Single-Family
                        </label>
                    </div>
                    <div className="property-type__radio">
                        <label>
                            <input
                                name="type"
                                type="radio"
                                value="condominium"
                                checked={type === 'condominium'}
                                onChange={handleChange}
                            />
                            Condominium
                        </label>
                    </div>
                    <div className="property-type__radio">
                        <label>
                            <input
                                name="type"
                                type="radio"
                                value="townhouse"
                                checked={type === 'townhouse'}
                                onChange={handleChange}
                            />
                            Townhouse
                        </label>
                    </div>
                    <div className="property-type__radio">
                        <label>
                            <input
                                name="type"
                                type="radio"
                                value="vacant lot"
                                checked={type === 'vacant lot'}
                                onChange={handleChange}
                            />
                            Vacant Lot
                        </label>
                    </div>
                    <div className="property-type__radio">
                        <label>
                            <input
                                name="type"
                                type="radio"
                                value="commercial"
                                checked={type === 'commercial'}
                                onChange={handleChange}
                            />
                            Commercial
                        </label>
                    </div>
                    <div className="property-type__radio">
                        <label>
                            <input
                                name="type"
                                type="radio"
                                value="other"
                                checked={type === 'other'}
                                onChange={handleChange}
                            />
                            Other
                        </label>
                    </div>
                    <Link to={mode === 'buyer' ? 'budget' : 'price'}>
                        <Button>Next</Button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default PropertyType
