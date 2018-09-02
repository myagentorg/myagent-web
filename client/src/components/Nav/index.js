import React from 'react'

import { Link } from 'react-router-dom'

import './index.css'

import logo from '../../assets/logo.svg'

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__wrapper utility-wrapper">
                <Link to="/">
                    <img className="nav__logo" src={logo} alt="myagent.io" />
                </Link>
            </div>
        </nav>
    )
}

export default Nav
