import React, { Component } from 'react'

class DataItem extends Component {
    render() {
        const { title, value } = this.props
        return (
            <div>
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
