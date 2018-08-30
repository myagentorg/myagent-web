import React, { Component } from 'react'

class DataItem extends Component {
    render() {
        const { title, style } = this.props
        let { value } = this.props
        const lowercaseTitle = title.toLowerCase()
        if (
            lowercaseTitle === 'property type' ||
            lowercaseTitle === 'buying property type' ||
            lowercaseTitle === 'selling property type'
        ) {
            value = value
                .split(' ')
                .map(x => x.slice(0, 1).toUpperCase() + x.slice(1))
                .join(' ')
        }
        return (
            <div style={style}>
                <div style={{ color: 'black', fontSize: '0.9em' }}>
                    {title.toUpperCase()}
                </div>
                <div style={{ fontSize: '1.25em', fontWeight: 500 }}>
                    {value}
                </div>
            </div>
        )
    }
}

export default DataItem
