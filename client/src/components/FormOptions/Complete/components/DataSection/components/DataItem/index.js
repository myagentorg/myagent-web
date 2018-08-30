import React, { Component } from 'react'

class DataItem extends Component {
    formatCurrency = num => {
        num = num.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        return `$${num.slice(0, num.length - 2)}`
    }
    render() {
        const { title, style } = this.props
        let { value } = this.props
        const lowercaseTitle = title.toLowerCase()
        if (
            lowercaseTitle === 'property type' ||
            lowercaseTitle === 'buying property type' ||
            lowercaseTitle === 'selling property type' ||
            lowercaseTitle === 'loan'
        ) {
            value = value
                .split(' ')
                .map(x => x.slice(0, 1).toUpperCase() + x.slice(1))
                .join(' ')
        }
        if (
            lowercaseTitle === 'target budget' ||
            lowercaseTitle === 'target price'
        ) {
            value = this.formatCurrency(value)
        }
        return (
            <div style={style}>
                <div
                    style={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: '0.85em',
                        fontWeight: 500
                    }}
                >
                    {title.toUpperCase()}
                </div>
                <div style={{ fontSize: '1.333em', fontWeight: 500 }}>
                    {value}
                </div>
            </div>
        )
    }
}

export default DataItem
