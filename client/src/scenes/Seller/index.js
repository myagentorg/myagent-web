import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import FormContainer from '../../components/FormContainer'
import PropertyType from '../../components/FormOptions/PropertyType'
import Budget from '../../components/FormOptions/Budget'
import Address from '../../components/FormOptions/Address'
import AlsoSelling from '../../components/FormOptions/AlsoSelling'
import Contact from '../../components/FormOptions/Contact'
import Complete from '../../components/FormOptions/Complete'

class Seller extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route
                        path="/seller/property-type"
                        render={props => (
                            <FormContainer {...props}>
                                <PropertyType />
                            </FormContainer>
                        )}
                    />
                    <Route
                        path="/seller/budget"
                        render={props => (
                            <FormContainer {...props}>
                                <Budget />
                            </FormContainer>
                        )}
                    />
                    <Route
                        path="/seller/address"
                        render={props => (
                            <FormContainer {...props}>
                                <Address />
                            </FormContainer>
                        )}
                    />
                    <Route
                        path="/seller/also-selling"
                        render={props => (
                            <FormContainer {...props}>
                                <AlsoSelling />
                            </FormContainer>
                        )}
                    />
                    <Route
                        path="/seller/contact"
                        render={props => (
                            <FormContainer {...props}>
                                <Contact />
                            </FormContainer>
                        )}
                    />
                    <Route
                        path="/seller/complete"
                        render={props => (
                            <FormContainer {...props}>
                                <Complete />
                            </FormContainer>
                        )}
                    />
                </Switch>
            </div>
        )
    }
}

export default Seller
