import React from 'react'

import background from '../../../../../../assets/neighborhood-background.jpg'

import './index.css'

const CustomFormContainer = ({ children, slim, staticHeight }) => {
    const style = {
        background: `
                linear-gradient(
                    rgba(255, 230, 230, 0.25),
                    rgba(255, 230, 230, 0.25)
                ),
                url(${background})`,
        backgroundPosition: '70% 100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    const containerStyle = {}
    if (staticHeight) containerStyle.minHeight = 'auto'
    return (
        <div className="custom-form-container" style={containerStyle}>
            <div className="custom-form-container__wrapper">
                <div
                    className="custom-form-container__background"
                    style={style}
                />
                <div
                    className="custom-form-container__card"
                    style={slim ? { maxWidth: '500px' } : null}
                >
                    <div className="custom-form-container__wrapper">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomFormContainer
