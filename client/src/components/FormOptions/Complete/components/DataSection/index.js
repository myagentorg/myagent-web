import React, { Component } from 'react'

import DataItem from './components/DataItem'
import Map from '../../../../Map'

import './index.css'

class DataSection extends Component {
    render() {
        const { form } = this.props
        let lat, lng
        if (form.clienttype === 'buyer') {
            lat = form.clientlatitude
            lng = form.clientlongitude
        } else {
            lat = form.sellinglatitude
            lng = form.sellinglongitude
        }
        const data = [
            {
                title: 'Property Type',
                value: form.propertytype || 'Condominium'
            },
            {
                title: 'Target Budget',
                value: form.bidget || 250000
            },
            {
                title: 'Target Price',
                value: form.price || 250000
            },
            {
                title: 'Buying Property Type',
                value: form.propertytypebuying || 'Condominium'
            },
            {
                title: 'Selling Property Type',
                value: form.propertytypeselling || 'Condominium'
            },
            {
                title: 'Address',
                value:
                    form.sellingaddress || form.clientaddress || 'Honolulu, Hi'
            },
            {
                title: 'Loan',
                value: form.loan || 250000
            }
        ]
        const filteredData = data.filter(item => {
            if (form.clienttype === 'seller') {
                return (
                    item.title !== 'Buying Property Type' &&
                    item.title !== 'Selling Property Type' &&
                    item.title !== 'Target Budget'
                )
            } else if (form.clienttype === 'buyer-and-seller') {
                return item.title !== 'Property Type'
            }
            return (
                item.title !== 'Buying Property Type' &&
                item.title !== 'Selling Property Type' &&
                item.title !== 'Target Price'
            )
        })
        const mappedData = filteredData.map((item, i) => (
            <DataItem
                key={item.title + i}
                title={item.title}
                value={item.value}
            />
        ))
        return (
            <div className="data-section">
                <div className="data-section__wrapper utility-wrapper">
                    <div className="data-section__data">{mappedData}</div>
                    <Map
                        lat={lat || false}
                        lng={lng || false}
                        containerElement={
                            <div
                                style={{
                                    height: `250px`,
                                    marginTop: '1em',
                                    borderRadius: '5px',
                                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        }
                        mapElement={
                            <div
                                style={{ height: `100%`, borderRadius: '5px' }}
                            />
                        }
                        isMarkerShown
                    />
                </div>
            </div>
        )
    }
}

export default DataSection
