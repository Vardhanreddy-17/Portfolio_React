import React, { useState } from 'react';
import "./Content.css";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
const Content = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const submitHandler = async (event) => {
        event.preventDefault();
        
        
        const formData = {
            name,
            email,
            subject,
            message
        };
        
        console.log(formData); 

        try {
            const response = await axios.post('http://localhost:3000/api/v1/send', formData);

            if (response.status === 200) {
                toast.success("Message sent successfully");
            } else {
                toast.error("Failed to send message");
            }
        } catch (error) {
            console.log(error.message);
            console.error('Error sending message:', error);
            toast.error("There was an error sending your message");
        }

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');

    };

    return (
        <div className="content-form-section wrapper" id="contact me">
            <div className="container-section">
                <div></div>
                <h1 className="contactus-heading">Contact Me</h1>
                <h3 className="contactus-sub-heading">Question, thoughts, or just want to say hello?</h3>
                <div className="contactus-form-container">
                    <form className="form" onSubmit={submitHandler}>
                        <div className="formfield-container">
                            <input className="formfield"
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                id="name" />
                            <input className="formfield"
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="email" />
                            <input className="formfield"
                                type="text"
                                placeholder="Enter your subject"
                                name="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                id="subject" />
                            <textarea name="message"
                                id="message" cols="30" rows="10"
                                className="formfield formfield-textarea"
                                placeholder="Enter your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <div>
                            <button type="submit" className="btn-pink" id="submit-btn">
                                Send Message
                                <FontAwesomeIcon icon={faPaperPlane} className="icon"/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Content;
