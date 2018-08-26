import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import FormContainer from '../../components/FormContainer'
import PropertyType from '../../components/FormOptions/PropertyType'
import Money from '../../components/FormOptions/Money'
import Address from '../../components/FormOptions/Address'
import Loan from '../../components/FormOptions/Loan'
import Contact from '../../components/FormOptions/Contact'
import Complete from '../../components/FormOptions/Complete'

class Paths extends Component {
    render() {
        const { mode } = this.props
        return (
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
                        mode === 'buyer' ? `/${mode}/budget` : `/${mode}/price`
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
                            <Loan mode={mode} />
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
        )
    }
}

export default Paths
