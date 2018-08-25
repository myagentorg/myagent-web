import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import FormContainer from '../../components/FormContainer'

class ChooseBuyOrSell extends Component {
    render() {
        return (
            <FormContainer>
                <div>Buyer or Seller</div>
                <div>
                    <Link to="/buyer/property-type">Buyer</Link>
                    <Link to="/seller/property-type">Seller</Link>
                </div>
            </FormContainer>
        )
    }
}

export default ChooseBuyOrSell
