import React from 'react'

const Slider = ({ inputVal, handleChange }) => {
    return (
        <div className="money__slider--container">
            <input
                className="money__slider"
                name="inputVal"
                type="range"
                min="0"
                max="120"
                step="1"
                value={inputVal}
                onChange={handleChange}
            />
        </div>
    )
}

export default Slider
