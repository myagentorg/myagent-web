import React from 'react'

import DataItem from './components/DataItem'
import Map from '../../../../Map'

import './index.css'

const DataSection = ({ form }) => {
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
            value: form.budget || 250000
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
            value: form.sellingaddress || form.clientaddress || 'Honolulu, Hi'
        },
        {
            title: 'Loan',
            value: form.loan || 'need a lender'
        }
    ]
    const filteredData = data.filter(item => {
        if (form.clienttype === 'seller') {
            return (
                item.title !== 'Buying Property Type' &&
                item.title !== 'Selling Property Type' &&
                item.title !== 'Target Budget' &&
                item.value !== 'skip'
            )
        } else if (form.clienttype === 'buyer-and-seller') {
            return item.title !== 'Property Type' && item.value !== 'skip'
        }
        return (
            item.title !== 'Buying Property Type' &&
            item.title !== 'Selling Property Type' &&
            item.title !== 'Target Price' &&
            item.value !== 'skip'
        )
    })
    const mappedData = filteredData.map((item, i) => (
        <DataItem
            key={item.title + i}
            title={item.title}
            value={item.value}
            style={item.title === 'Address' ? { gridColumn: 'span 2' } : null}
        />
    ))
    return (
        <div className="data-section">
            <div className="data-section__wrapper utility-wrapper">
                <div className="data-section__data">{mappedData}</div>
                <Map
                    zoom={15}
                    lat={lat || false}
                    lng={lng || false}
                    containerElement={
                        <div
                            style={{
                                height: `250px`,
                                marginTop: '1em',
                                borderRadius: '1px',
                                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.15)'
                            }}
                        />
                    }
                    mapElement={
                        <div style={{ height: `100%`, borderRadius: '1px' }} />
                    }
                    isMarkerShown
                />
            </div>
        </div>
    )
}

export default DataSection
