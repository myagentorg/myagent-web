import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Button from '../../Button'
import Slider from './components/Slider'

import './index.css'

class Money extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: 35,
            moneyNum: 0
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
        this.moneyValues = []
    }

    componentDidMount() {
        let v = 0
        let step = 5000
        let firstTime = true
        for (let i = 0; i < 121; i++) {
            if (firstTime) {
                this.moneyValues.push(v)
                firstTime = false
                continue
            }
            if (v >= 100000) step = 10000
            if (v >= 1000000) step = 100000
            this.moneyValues.push((v = v + step))
        }
        this.setState(prevState => ({
            moneyNum: this.moneyValues[prevState.inputVal]
        }))
    }

    formatCurrency = num => {
        num = num.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        return `$${num.slice(0, num.length - 2)}`
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: parseInt(value, 10),
            moneyNum: this.moneyValues[value]
        })
    }

    render() {
        const {
            props: { mode, link, handleAddNewField, field },
            state: { inputVal, moneyNum },
            content,
            handleChange
        } = this
        const moneyDisplay =
            moneyNum <= 0
                ? `I'm not sure...`
                : moneyNum < 2000000
                    ? this.formatCurrency(moneyNum)
                    : '$2,000,000+'
        return (
            <div>
                <h2>{content[mode].title}</h2>
                <h3 style={{ fontSize: '2em' }}>{moneyDisplay}</h3>
                <Slider inputVal={inputVal} handleChange={handleChange} />
                <Link
                    to={link || content[mode].link}
                    onClick={() => handleAddNewField(field, inputVal)}
                >
                    <Button>Next</Button>
                </Link>
            </div>
        )
    }
}

export default Money
