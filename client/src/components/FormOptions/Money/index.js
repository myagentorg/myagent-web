import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Money extends Component {
    constructor(props) {
        super(props)
        this.content = {
            buyer: {
                link: 'also-selling',
                linkText: 'Also Selling',
                title: 'Budget'
            },
            seller: {
                link: 'address',
                linkText: 'Address',
                title: 'Price'
            }
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
                <Link to={content[mode].link}>{content[mode].linkText}</Link>
            </div>
        )
    }
}

export default Money
