import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Button from '../../Button'

import './index.css'

class Money extends Component {
    constructor(props) {
        super(props)
        this.state = {
            moneyRange: 250000
        }
        this.content = {
            buyer: {
                link: 'also-selling',
                linkText: 'Also Selling',
                title: 'What’s your approximate budget?'
            },
            seller: {
                link: 'address',
                linkText: 'Address',
                title: 'Roughly how much is your property worth?'
            }
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        const {
            props: { mode },
            state: { moneyRange },
            content,
            handleChange
        } = this
        const moneyDisplay =
            moneyRange <= 0
                ? `I'm not sure...`
                : moneyRange < 1000000
                    ? moneyRange
                    : '1000000+'
        return (
            <div>
                <h2>{content[mode].title}</h2>
                <h3 style={{ fontSize: '2em' }}>{moneyDisplay}</h3>
                <input
                    className="money__slider"
                    name="moneyRange"
                    type="range"
                    min="0"
                    max="1000000"
                    step="10000"
                    value={moneyRange}
                    onChange={handleChange}
                />
                <Link to={content[mode].link}>
                    <Button>Next</Button>
                </Link>
            </div>
        )
    }
}

export default Money
