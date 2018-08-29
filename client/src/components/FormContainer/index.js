import React, { Component } from 'react'

import Nav from '../Nav'

import background from '../../assets/background.jpg'

import './index.css'

class FormContainer extends Component {
    render() {
        const style = {
            background: `
                linear-gradient(
                    rgba(255, 230, 230, 0.25),
                    rgba(255, 230, 230, 0.25)
                ),
                url(${background})`,
            backgroundPosition: 'right 50% center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            // filter: 'blur(3px)'
        }
        return (
            <React.Fragment>
                <Nav />
                <div className="form-container">
                    <div className="form-container__background" style={style} />
                    <div
                        className="form-container__card"
                        style={this.props.slim ? { maxWidth: '500px' } : null}
                    >
                        <div className="form-container__wrapper">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FormContainer
