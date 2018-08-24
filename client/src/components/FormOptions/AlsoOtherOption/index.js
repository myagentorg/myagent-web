import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class AlsoOtherOption extends Component {
    constructor(props) {
        super(props)
        this.content = {
            buyer: { title: 'Also Selling' },
            seller: { title: 'Also Buyings' }
        }
    }
    render() {
        const {
            content,
            props: { mode }
        } = this
        return (
            <div>
                <div>{content[mode].title}</div>
                <Link to="contact">Contact</Link>
            </div>
        )
    }
}

export default AlsoOtherOption
