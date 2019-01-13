import React from 'react'

import Review from './components/Review'

import stars5 from '../../../../assets/5-stars.svg'
import stars4 from '../../../../assets/4-stars.svg'
import stars3 from '../../../../assets/3-stars.svg'
import stars2 from '../../../../assets/2-stars.svg'
import stars1 from '../../../../assets/1-star.svg'

import './index.css'

const Reviews = ({ cityData }) => {
  const featuredReview = cityData.reviews[0].fields

  const reviews = cityData.reviews.map(review => ({
    rating: review.fields.rating,
    author: review.fields.author,
    review: review.fields.review
  }))

  const starRating = rating => {
    switch (rating) {
      case 5:
        return stars5
      case 4:
        return stars4
      case 3:
        return stars3
      case 2:
        return stars2
      case 1:
        return stars1
      default:
        return stars5
    }
  }

  const mappedReviews = reviews
    .slice(1)
    .map((review, i) => (
      <Review key={review.author} {...review} starRating={starRating} />
    ))

  return (
    <div className="utility-wrapper reviews">
      <h2 className="reviews__title">{cityData.reviewsHeadline}</h2>
      <div className="reviews__featured-review">
        <img
          className="featured-review__stars"
          src={starRating(featuredReview.rating)}
          alt="Five stars."
        />
        <p className="featured-review__review">
          “{featuredReview.review}”
          <span className="featured-review__credit">
            {' '}
            – <strong>{featuredReview.author}</strong>
          </span>
        </p>
      </div>
      <div className="reviews__shopper-approved">{cityData.reviewsSummary}</div>
      <div className="reviews__others">{mappedReviews}</div>
    </div>
  )
}

export default Reviews
