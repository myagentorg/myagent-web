import React, { Component } from 'react'

class DataItem extends Component {
    render() {
        const { title, value, style } = this.props
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
