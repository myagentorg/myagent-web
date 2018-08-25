import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import FormContainer from '../../components/FormContainer'
import PropertyType from '../../components/FormOptions/PropertyType'
import Money from '../../components/FormOptions/Money'
import Address from '../../components/FormOptions/Address'
import AlsoOtherOption from '../../components/FormOptions/AlsoOtherOption'
import Contact from '../../components/FormOptions/Contact'
import Complete from '../../components/FormOptions/Complete'

class BuyerOrSeller extends Component {
    render() {
        const { mode } = this.props
        return (
            <React.Fragment>
                <Switch>
                    <Route
                        path={`/${mode}/property-type`}
                        render={props => (
                            <FormContainer {...props}>
                                <PropertyType mode={mode} />
                            </FormContainer>
                        )}
                    />
                    <Route
                        path={
                            mode === 'buyer'
                                ? `/${mode}/budget`
                                : `/${mode}/price`
                        }
                        render={props => (
                            <FormContainer {...props}>
                                <Money mode={mode} />
                            </FormContainer>
                        )}
                    />
                    {/* Address is exclusive to seller mode */}
                    <Route
                        path={`/${mode}/address`}
                        render={props => (
                            <FormContainer {...props}>
                                <Address />
                            </FormContainer>
                        )}
                    />
                    <Route
                        path={
                            mode === 'buyer'
                                ? `/${mode}/also-selling`
                                : `/${mode}/also-buying`
                        }
                        render={props => (
                            <FormContainer {...props}>
                                <AlsoOtherOption mode={mode} />
                            </FormContainer>
                        )}
                    />
                    <Route
                        path={`/${mode}/contact`}
                        render={props => (
                            <FormContainer {...props}>
                                <Contact />
                            </FormContainer>
                        )}
                    />
                    <Route
                        path={`/${mode}/complete`}
                        render={props => (
                            <FormContainer {...props}>
                                <Complete />
                            </FormContainer>
                        )}
                    />
                </Switch>
            </React.Fragment>
        )
    }
}

export default BuyerOrSeller
