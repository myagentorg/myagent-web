import React from 'react'

import './index.css'

const Review = ({ name, review, fiveStars }) => {
    return (
        <div className="review">
            <img className="review__stars" src={fiveStars} alt="Five stars." />
            <div className="review__author">{name}</div>
            <p className="review__review">“{review}”</p>
        </div>
    )
}

export default Review
