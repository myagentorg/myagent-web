import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Button from '../../Button'

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
                <h2>{content[mode].title}</h2>
                <Link to={content[mode].link}>
                    <Button>Next</Button>
                </Link>
            </div>
        )
    }
}

export default Money
