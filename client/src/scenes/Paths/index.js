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
                        <FormContainer>
                            <PropertyType mode={mode} {...props} />
                        </FormContainer>
                    )}
                />
                <Route
                    path={
                        mode === 'buyer' ? `/${mode}/budget` : `/${mode}/price`
                    }
                    render={props => (
                        <FormContainer>
                            <Money mode={mode} {...props} />
                        </FormContainer>
                    )}
                />
                <Route
                    path={`/${mode}/address`}
                    render={props => (
                        <FormContainer>
                            <Address {...props} />
                        </FormContainer>
                    )}
                />
                <Route
                    path={`/${mode}/loan`}
                    render={props => (
                        <FormContainer>
                            <Loan {...props} />
                        </FormContainer>
                    )}
                />
                <Route
                    path={`/${mode}/contact`}
                    render={props => (
                        <FormContainer>
                            <Contact {...props} />
                        </FormContainer>
                    )}
                />
                <Route
                    path={`/${mode}/complete`}
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

export default Paths
