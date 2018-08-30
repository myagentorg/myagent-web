import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Button from '../../Button'

import './index.css'

class Money extends Component {
    constructor(props) {
        super(props)
        this.state = {
            moneyNum: 250000
        }
        this.content = {
            buyer: {
                link: 'loan',
                title: 'What’s your approximate budget?'
            },
            seller: {
                link: 'address',
                title: 'Roughly how much is your property worth?'
            }
        }
    }

    formatCurrency = num => {
        num = num.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        return `$${num.slice(0, num.length - 2)}`
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: parseInt(value, 10) })
    }

    render() {
        const {
            props: { mode, link, handleAddNewField, field },
            state: { moneyNum },
            content,
            handleChange
        } = this
        const moneyDisplay =
            moneyNum <= 0
                ? `I'm not sure...`
                : moneyNum < 1000000
                    ? this.formatCurrency(moneyNum)
                    : '$1,000,000+'
        return (
            <div>
                <h2>{content[mode].title}</h2>
                <h3 style={{ fontSize: '2em' }}>{moneyDisplay}</h3>
                <div className="money__slider--container">
                    <input
                        className="money__slider"
                        name="moneyNum"
                        type="range"
                        min="0"
                        max="1000000"
                        step="10000"
                        value={moneyNum}
                        onChange={handleChange}
                    />
                </div>
                <Link
                    to={link || content[mode].link}
                    onClick={() => handleAddNewField(field, moneyNum)}
                >
                    <Button>Next</Button>
                </Link>
            </div>
        )
    }
}

export default Money
