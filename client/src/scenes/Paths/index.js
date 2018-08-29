import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { addNewField } from '../../redux/reducers/formReducer'

import FormContainer from '../../components/FormContainer'
import PropertyType from '../../components/FormOptions/PropertyType'
import Money from '../../components/FormOptions/Money'
import Address from '../../components/FormOptions/Address'
import Loan from '../../components/FormOptions/Loan'
import Contact from '../../components/FormOptions/Contact'
import Complete from '../../components/FormOptions/Complete'

class Paths extends Component {
    handleAddNewField = (field, value) => {
        this.props.addNewField(field, value)
    }

    render() {
        const {
            props: { mode },
            handleAddNewField
        } = this
        return (
            <Switch>
                <Route
                    path={`/${mode}/property-type`}
                    render={props => (
                        <FormContainer>
                            <PropertyType
                                mode={mode}
                                {...props}
                                handleAddNewField={handleAddNewField}
                                field="propertyType"
                            />
                        </FormContainer>
                    )}
                />
                <Route
                    path={
                        mode === 'buyer' ? `/${mode}/budget` : `/${mode}/price`
                    }
                    render={props => (
                        <FormContainer>
                            <Money
                                mode={mode}
                                {...props}
                                handleAddNewField={handleAddNewField}
                                field={mode === 'buyer' ? `budget` : `price`}
                            />
                        </FormContainer>
                    )}
                />
                <Route
                    path={`/${mode}/address`}
                    render={props => (
                        <FormContainer>
                            <Address
                                {...props}
                                handleAddNewField={handleAddNewField}
                                field="address"
                            />
                        </FormContainer>
                    )}
                />
                <Route
                    path={`/${mode}/loan`}
                    render={props => (
                        <FormContainer>
                            <Loan
                                {...props}
                                handleAddNewField={handleAddNewField}
                                field="loan"
                            />
                        </FormContainer>
                    )}
                />
                <Route
                    path={`/${mode}/contact`}
                    render={props => (
                        <FormContainer slim>
                            <Contact
                                {...props}
                                handleAddNewField={handleAddNewField}
                                field="contact"
                            />
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

export default withRouter(
    connect(
        null,
        { addNewField }
    )(Paths)
)
