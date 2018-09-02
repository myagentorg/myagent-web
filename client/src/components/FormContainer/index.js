import React from 'react'

import Nav from '../Nav'

import background from '../../assets/background.jpg'

import './index.css'

const FormContainer = ({ children, slim, staticHeight }) => {
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
            <div
                className="form-container"
                style={staticHeight ? { minHeight: 'auto' } : null}
            >
                <div className="form-container__background" style={style} />
                <div
                    className="form-container__card"
                    style={slim ? { maxWidth: '500px' } : null}
                >
                    <div className="form-container__wrapper">{children}</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FormContainer
