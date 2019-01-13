import React from 'react'
import RichTextRenderer from '../../../../components/RichTextRenderer'

import illustration1 from '../../../../assets/landing-illustration-1.svg'
import illustration2 from '../../../../assets/landing-illustration-2.svg'
import illustration3 from '../../../../assets/landing-illustration-3.svg'

import './index.css'

const HowAppWorks = ({ cityData }) => {
  return (
    <div className="how-app-works">
      <div className="utility-wrapper">
        <div className="how-app-works__headline">
          {cityData.stepsHeadline}
          {/* <span className="color-emphasize">150,000</span> */}
        </div>
        <div className="how-app-works__steps">
          <div className="how-app-works__step">
            <img
              className="step__img"
              src={illustration1}
              alt="Laptop on MyAgent.io with a coffee cup"
            />
            <span className="step__number">1</span>
            {cityData.stepsStepOne && cityData.stepsStepOne.content ? (
              <RichTextRenderer richTextContent={cityData.stepsStepOne} />
            ) : (
              <div>
                Tell us about the property you’re selling or your dream home.
                Let us know the area, the type of property, your desired price
                or budget, and anything else that you think might help us to
                best <strong>match you with a top real estate agent</strong>.
              </div>
            )}
          </div>
          <div className="how-app-works__step">
            <img
              className="step__img"
              src={illustration2}
              alt="Laptop on MyAgent.io with a coffee cup"
            />
            <span className="step__number">2</span>
            {cityData.stepsStepTwo && cityData.stepsStepTwo.content ? (
              <RichTextRenderer richTextContent={cityData.stepsStepTwo} />
            ) : (
              <div>
                We analyze your information and compare it to our proprietary
                agent and broker database. In addition to area, property, and
                pricing info, we look at metrics like agent close rates,
                observational data, and consumer reviews to find{' '}
                <strong>the best agent for you</strong>.
              </div>
            )}
          </div>
          <div className="how-app-works__step">
            <img
              className="step__img"
              src={illustration3}
              alt="Laptop on MyAgent.io with a coffee cup"
            />
            <span className="step__number">3</span>
            {cityData.stepsStepThree && cityData.stepsStepThree.content ? (
              <RichTextRenderer richTextContent={cityData.stepsStepThree} />
            ) : (
              <div>
                Our agent specialists personally review every request and will
                reach out to you if we need additional info to find your perfect
                real estate agent. Once we have everything we need, we’ll{' '}
                <strong>introduce you to your agent match</strong>.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowAppWorks
