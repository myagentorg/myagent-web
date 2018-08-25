import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Button from '../../Button'

import './index.css'

class AlsoOtherOption extends Component {
    constructor(props) {
        super(props)
        this.content = {
            buyer: { title: 'Are you also selling a property?' },
            seller: { title: 'Are you also buying a home?' }
        }
    }
    render() {
        const {
            content,
            props: { mode }
        } = this
        return (
            <div>
                <h2>{content[mode].title}</h2>
                <div className="also-other-option__buttons">
                    <Link to="contact">
                        <Button>Yes</Button>
                    </Link>
                    <Link to="contact">
                        <Button>No</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default AlsoOtherOption
