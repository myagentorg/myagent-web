import React from 'react'

import Input from '../../../../Input'
import TextArea from '../../../../TextArea'

import './index.css'

const ContactForm = ({ handleChange }) => {
    return (
        <div className="contact-form">
            <div>
                <label>
                    <span>Your Name</span>
                    <Input
                        name="fullname"
                        placeholder="Enter your first and last name"
                        required
                        textAlign="left"
                        handleChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Email Address</span>
                    <Input
                        name="email"
                        required
                        textAlign="left"
                        handleChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Phone Number</span>
                    <Input
                        name="phone"
                        required
                        textAlign="left"
                        handleChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>
                        Is there anything else we should know before matching
                        you with a top real estate agent?
                    </span>
                    <TextArea
                        name="additionalinformation"
                        handleChange={handleChange}
                    />
                </label>
            </div>
        </div>
    )
}

export default ContactForm
