import React from 'react'
import RichTextRenderer from '../../../../components/RichTextRenderer'

import './index.css'

const DetailedInfo = ({ cityData }) => {
  console.log(cityData)
  return (
    <section className="detailed-info">
      <div className="detailed-info__wrapper">
        {cityData.detailsText ? (
          <React.Fragment>
            {cityData.detailsText.map((detailedText, i) => {
              return (
                <React.Fragment key={detailedText.fields.title}>
                  <h3 className="detailed-info__heading">
                    {detailedText.fields.title} {i === 0 && cityData.city}
                  </h3>
                  <div className="detailed-info__content">
                    {
                      <RichTextRenderer
                        richTextContent={detailedText.fields.bodyText.content}
                      />
                    }
                  </div>
                </React.Fragment>
              )
            })}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3 className="detailed-info__heading">
              Find Top Real Estate Agents in {cityData.city}
            </h3>
            <div className="detailed-info__content">
              <p>
                MyAgent.io is a free service that helps you find a
                top-performing agent you can trust. Get started today by
                entering a city or neighborhood below.
              </p>
            </div>
            <h3 className="detailed-info__heading">
              Here’s how we help home buyers and sellers find the top real
              estate agents…
            </h3>
            <div className="detailed-info__content">
              <p>
                Start by telling us about the property you’re selling or your
                dream home. Let us know the area, property type, your budget or
                desired price, and anything else that you think might help us to
                best match you with top real estate agents in your area.
              </p>
              <p>
                Using your information, we then analyze it and compare it to our
                proprietary agent and broker database. We look at metrics like
                agent close rate, observational data, and consumer reviews to
                find the best agent match for you.
              </p>
              <p>
                Finally, our agent specialists personally review every request.
                If more information is needed, we will reach out to you to find
                your perfect agent. Once we have everything we need, we’ll
                introduce you to your agent match.
              </p>
            </div>
            <h3 className="detailed-info__heading">
              You Deserve an Agent You Can Trust
            </h3>
            <div className="detailed-info__content">
              <p>
                With over 1 million Realtors® and real estate agents in the
                U.S., it’s not easy deciding who to trust when buying or selling
                a home.
              </p>
              <p>
                A top real estate agent will set and negotiate the best price
                for your property and help you thoroughly understand the local
                real estate market.
              </p>
              <p>
                They’ll quickly respond to your needs, help you find listings
                before they’re public, mind every little detail, and earn your
                respect for life.
              </p>
              <p>
                Whether you’re selling your current property or buying your
                dream home, we’ll help you find the top agent you need.
              </p>
              <p>
                We Partner With Only the Top Real Estate Agents From the Top
                Brokerages Around the Country MyAgent.io is an independent
                service that works with top real estate agents across many
                different brokerages.
              </p>
              <p>
                Over 80% of real estate firms are independent. We search local
                neighborhood and boutique brokerages, as well as larger firms
                like Century 21, RE/MAX, and Keller Williams, to find the best
                agent for you.
              </p>
              <p>
                Regardless of the brokerage or its size, we’re committed to
                finding you the perfect local agent to assist in buying your
                next home or selling your current one.
              </p>
            </div>
            <h3 className="detailed-info__heading">
              MyAgent.io is Fast, Free, and Easy
            </h3>
            <div className="detailed-info__content">
              <p>
                Our service is 100% free to use for home buyers and sellers.
                MyAgent.io is the easiest and fastest way to find the best agent
                for you.
              </p>
            </div>
          </React.Fragment>
        )}
      </div>
    </section>
  )
}

export default DetailedInfo
