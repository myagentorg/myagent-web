import React from 'react'

import './index.css'

const Review = ({ author, review, rating, starRating }) => {
  return (
    <div className="review">
      <img
        className="review__stars"
        src={starRating(rating)}
        alt="Five stars."
      />
      <div className="review__author">{author}</div>
      <p className="review__review">“{review}”</p>
    </div>
  )
}

export default Review
