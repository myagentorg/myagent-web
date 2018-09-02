import React from 'react'

import image1 from '../../../../assets/info-section-1.jpg'
import image2 from '../../../../assets/info-section-2.jpg'

import './index.css'

const PersuasiveInfo = () => {
    const getStyle = image => ({
        height: '250px',
        width: '100%',
        background: `url(${image})`,
        backgroundSize: 'cover'
    })
    return (
        <div>
            <div>
                <div style={getStyle(image1)} />
                <div className="utility-wrapper persuasive__text-content">
                    <h3>You Deserve a Top Agent</h3>
                    <p>
                        With over 2 million Realtors® and real estate agents in
                        the U.S. & Canada, it’s not easy deciding who to trust
                        when buying or selling a home. A top real estate agent
                        will set and negotiate the best price for your property
                        and help you thoroughly understand the local real estate
                        market. They’ll quickly respond to your needs, help you
                        find listings before they’re public, mind every little
                        detail, and earn your respect for life. Whether you’re
                        selling your current property or buying your dream home,
                        we’ll help you find the top agent you need.
                    </p>
                </div>
            </div>
            <div>
                <div style={getStyle(image2)} />
                <div className="utility-wrapper persuasive__text-content">
                    <h3>We Partner With Agents From Over 3,000 Brokerages</h3>
                    <p>
                        Agent Pronto is an independent service that works with
                        agents across many different brokerages. Over 80% of
                        real estate firms are independent. We search local
                        neighborhood and boutique brokerages, as well as larger
                        firms like Century 21, RE/MAX, and Keller Williams, to
                        find the best agent for you. Regardless of the brokerage
                        or its size, we’re committed to finding you the perfect
                        local agent to assist in buying your next home or
                        selling your current one.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PersuasiveInfo
