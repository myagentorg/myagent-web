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
        backgroundPosition: '70% 50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    const containerStyle = {}
    if (staticHeight) containerStyle.minHeight = 'auto'
    return (
        <div className="form-container" style={containerStyle}>
            <Nav />
            <div className="form-container__wrapper">
                <div className="form-container__background" style={style} />
                <div
                    className="form-container__card"
                    style={slim ? { maxWidth: '500px' } : null}
                >
                    {/* <div
                        className="for-container__card--before"
                        style={style}
                    /> */}
                    <div className="form-container__wrapper">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default FormContainer
