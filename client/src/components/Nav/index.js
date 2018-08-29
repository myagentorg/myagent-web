import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './index.css'

import logo from '../../assets/logo.svg'

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav__wrapper utility-wrapper">
                    <Link to="/">
                        <img
                            className="nav__logo"
                            src={logo}
                            alt="myagent.io"
                        />
                    </Link>
                </div>
            </div>
        )
    }
}

export default Nav
