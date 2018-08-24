import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import BuyerForm from './components/BuyerForm'
import PropertyType from '../../components/PropertyType'
import Budget from '../../components/Budget'
import AlsoSelling from '../../components/AlsoSelling'
import Contact from '../../components/Contact'
import Complete from '../../components/Complete'

class Buyer extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route
                        path="/buyer/property-type"
                        render={props => (
                            <BuyerForm {...props}>
                                <PropertyType />
                            </BuyerForm>
                        )}
                    />
                    <Route
                        path="/buyer/budget"
                        render={props => (
                            <BuyerForm {...props}>
                                <Budget />
                            </BuyerForm>
                        )}
                    />
                    <Route
                        path="/buyer/also-selling"
                        render={props => (
                            <BuyerForm {...props}>
                                <AlsoSelling />
                            </BuyerForm>
                        )}
                    />
                    <Route
                        path="/buyer/contact"
                        render={props => (
                            <BuyerForm {...props}>
                                <Contact />
                            </BuyerForm>
                        )}
                    />
                    <Route
                        path="/buyer/complete"
                        render={props => (
                            <BuyerForm {...props}>
                                <Complete />
                            </BuyerForm>
                        )}
                    />
                </Switch>
            </div>
        )
    }
}

export default Buyer
