import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import logo from '../../../../../assets/logo.svg'

import './index.css'

class TopSection extends Component {
    render() {
        const { fullname } = this.props
        return (
            <div className="top-section">
                <div className="top-section__wrapper utility-wrapper">
                    <div className="top-section__logo">
                        <Link to="/">
                            <img
                                className="nav__logo"
                                src={logo}
                                alt="myagent.io"
                            />
                        </Link>
                    </div>
                    <h1>
                        Thanks
                        {fullname ? ` ${fullname}` : ''},<br />
                        We'll Contact You Very Soon!
                    </h1>
                    <p>
                        MyAgent.io is reviewing your information now to find the
                        perfect agent to sell your property. To identify the
                        best match for you, we will look at agents with strong
                        past performance selling similar properties to yours,
                        neighborhood expertise in your area,and high customer
                        ratings.
                    </p>
                    <p>
                        We'll reach out to you soon if we have any further
                        questions—otherwise, be on the lookout for an email and
                        text message introducing you to your agent match.
                    </p>
                </div>
            </div>
        )
    }
}

export default TopSection
