import React, { Component } from 'react'

import Input from '../../../../Input'
import TextArea from '../../../../TextArea'

import './index.css'

class ContactForm extends Component {
    render() {
        return (
            <div className="contact-form">
                <div>
                    <label>
                        <span>Your Name</span>
                        <Input
                            placeholder="Enter your first and last name"
                            required
                            textAlign="left"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Email Address</span>
                        <Input required textAlign="left" />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Phone Number</span>
                        <Input
                            placeholder="(___) ___-___)"
                            required
                            textAlign="left"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <span>
                            Is there anything else we should know before
                            matching you with a top real estate agent?
                        </span>
                        <TextArea />
                    </label>
                </div>
            </div>
        )
    }
}

export default ContactForm
