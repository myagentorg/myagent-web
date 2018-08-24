import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav__wrapper">
                    <Link to="/">myagent.io</Link>
                    <a href="tel:787878787">(878) 981 099</a>
                </div>
            </div>
        )
    }
}

export default Nav
