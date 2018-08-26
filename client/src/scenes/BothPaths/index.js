import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import FormContainer from '../../components/FormContainer'
import PropertyType from '../../components/FormOptions/PropertyType'
import Money from '../../components/FormOptions/Money'
import Address from '../../components/FormOptions/Address'
import Loan from '../../components/FormOptions/Loan'
import Contact from '../../components/FormOptions/Contact'
import Complete from '../../components/FormOptions/Complete'

class BothPaths extends Component {
    render() {
        return (
            <Switch>
                <Route
                    path="/buyer-and-seller/buyer/property-type"
                    render={props => (
                        <FormContainer>
                            <PropertyType
                                {...props}
                                mode="buyer"
                                link="/buyer-and-seller/seller/property-type"
                            />
                        </FormContainer>
                    )}
                />
                <Route
                    path="/buyer-and-seller/seller/property-type"
                    render={props => (
                        <FormContainer>
                            <PropertyType
                                {...props}
                                mode="seller"
                                link="/buyer-and-seller/buyer/budget"
                            />
                        </FormContainer>
                    )}
                />
                <Route
                    path="/buyer-and-seller/buyer/budget"
                    render={props => (
                        <FormContainer>
                            <Money
                                {...props}
                                mode="buyer"
                                link="/buyer-and-seller/seller/price"
                            />
                        </FormContainer>
                    )}
                />
                <Route
                    path="/buyer-and-seller/seller/price"
                    render={props => (
                        <FormContainer>
                            <Money
                                {...props}
                                mode="seller"
                                link="/buyer-and-seller/seller/address"
                            />
                        </FormContainer>
                    )}
                />
                <Route
                    path="/buyer-and-seller/seller/address"
                    render={props => (
                        <FormContainer>
                            <Address {...props} link="/buyer-and-seller/loan" />
                        </FormContainer>
                    )}
                />
                <Route
                    path="/buyer-and-seller/loan"
                    render={props => (
                        <FormContainer>
                            <Loan {...props} link="/buyer-and-seller/contact" />
                        </FormContainer>
                    )}
                />
                <Route
                    path="/buyer-and-seller/contact"
                    render={props => (
                        <FormContainer>
                            <Contact
                                {...props}
                                link="/buyer-and-seller/complete"
                            />
                        </FormContainer>
                    )}
                />
                <Route
                    path="/buyer-and-seller/complete"
                    render={props => (
                        <FormContainer>
                            <Complete {...props} />
                        </FormContainer>
                    )}
                />
            </Switch>
        )
    }
}

export default BothPaths
