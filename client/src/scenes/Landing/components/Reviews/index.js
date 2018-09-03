import React from 'react'

import Review from './components/Review'

import fiveStars from '../../../../assets/5-stars.svg'

import './index.css'

const Reviews = () => {
    const reviews = [
        {
            name: 'Francine L.',
            review:
                'MyAgent.io connected me with a Realtor very quickly—within an hour of visiting their website—and the Realtor we had was second to none! We will recommend MyAgent.io to others and will use them again in the future.'
        },
        {
            name: 'Darah J.',
            review:
                'I was shocked by how quick all communication was. I was concerned about the quality I’d receive as I was looking for an out-of-city agent, but I don’t think I could have found a better agent for my situation. We now have the perfect house that fits our needs!'
        },
        {
            name: 'Tim D.',
            review:
                'The service was fast and effective! Within minutes, I was contacted by their representatives and put in contact with a very helpful agent. Great experience—wouldn’t hesitate to use MyAgent.io again in another city.'
        }
    ]
    const mappedReviews = reviews.map((review, i) => (
        <Review key={review.name + i} {...review} fiveStars={fiveStars} />
    ))
    return (
        <div className="utility-wrapper reviews">
            <h2 className="reviews__title">
                Home Buyers and Sellers Love MyAgent.io
            </h2>
            <div className="reviews__featured-review">
                <img
                    className="featured-review__stars"
                    src={fiveStars}
                    alt="Five stars."
                />
                <p className="featured-review__review">
                    “Buying and selling a house is a life altering process.
                    MyAgent.io allowed us to do both with very positive results
                    from a perfect real estate professional. We highly recommend
                    their services.”
                    <span className="featured-review__credit">
                        {' '}
                        – <strong>Randy & Sue H.</strong>
                    </span>
                </p>
            </div>
            <div className="reviews__shopper-approved">
                MyAgent.io has an overall satisfaction rating of 4.8 out of 5 on
                ShopperApproved.com.
            </div>
            <div className="reviews__others">{mappedReviews}</div>
        </div>
    )
}

export default Reviews
