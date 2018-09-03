import React from 'react'

import logo from '../../../../assets/logo-blk-wht.svg'

import './index.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="utility-wrapper">
                <img className="footer__logo" src={logo} alt="MyAgent.io" />
                <p>© 2018 MyAgent.io</p>
            </div>
        </footer>
    )
}

export default Footer
