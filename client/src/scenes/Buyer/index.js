import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import FormContainer from '../../components/FormContainer'
import PropertyType from '../../components/FormOptions/PropertyType'
import Budget from '../../components/FormOptions/Budget'
import AlsoSelling from '../../components/FormOptions/AlsoSelling'
import Contact from '../../components/FormOptions/Contact'
import Complete from '../../components/FormOptions/Complete'

class Buyer extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route
                        path="/buyer/property-type"
                        render={props => (
                            <FormContainer {...props}>
                                <PropertyType />
                            </FormContainer>
                        )}
                    />
                    <Route
                        path="/buyer/budget"
                        render={props => (
                            <FormContainer {...props}>
                                <Budget />
                            </FormContainer>
                        )}
                    />
                    <Route
                        path="/buyer/also-selling"
                        render={props => (
                            <FormContainer {...props}>
                                <AlsoSelling />
                            </FormContainer>
                        )}
                    />
                    <Route
                        path="/buyer/contact"
                        render={props => (
                            <FormContainer {...props}>
                                <Contact />
                            </FormContainer>
                        )}
                    />
                    <Route
                        path="/buyer/complete"
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

export default Buyer
