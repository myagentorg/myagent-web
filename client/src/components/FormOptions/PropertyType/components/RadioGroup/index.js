import React, { Component } from 'react'

import './index.css'

class RadioGroup extends Component {
    render() {
        const { type, handleChange } = this.props
        return (
            <div className="radio-group">
                <div className="property-type__radio">
                    <label className="property-type__label">
                        <input
                            name="type"
                            type="radio"
                            value="single family"
                            checked={type === 'single family'}
                            onChange={handleChange}
                        />
                        <span className="property-type__checkmark" />
                        Single-Family
                    </label>
                </div>
                <div className="property-type__radio">
                    <label className="property-type__label">
                        <input
                            name="type"
                            type="radio"
                            value="condominium"
                            checked={type === 'condominium'}
                            onChange={handleChange}
                        />
                        <span className="property-type__checkmark" />
                        Condominium
                    </label>
                </div>
                <div className="property-type__radio">
                    <label className="property-type__label">
                        <input
                            name="type"
                            type="radio"
                            value="townhouse"
                            checked={type === 'townhouse'}
                            onChange={handleChange}
                        />
                        <span className="property-type__checkmark" />
                        Townhouse
                    </label>
                </div>
                <div className="property-type__radio">
                    <label className="property-type__label">
                        <input
                            name="type"
                            type="radio"
                            value="vacant lot"
                            checked={type === 'vacant lot'}
                            onChange={handleChange}
                        />
                        <span className="property-type__checkmark" />
                        Vacant Lot
                    </label>
                </div>
                <div className="property-type__radio">
                    <label className="property-type__label">
                        <input
                            name="type"
                            type="radio"
                            value="commercial"
                            checked={type === 'commercial'}
                            onChange={handleChange}
                        />
                        <span className="property-type__checkmark" />
                        Commercial
                    </label>
                </div>
                <div className="property-type__radio">
                    <label className="property-type__label">
                        <input
                            name="type"
                            type="radio"
                            value="other"
                            checked={type === 'other'}
                            onChange={handleChange}
                        />
                        <span className="property-type__checkmark" />
                        Other
                    </label>
                </div>
            </div>
        )
    }
}

export default RadioGroup
