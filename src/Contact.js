import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './style.css';
const Contact = () => {
    return (
        <>
            <Navbar />
            <div>
                <div className="contact-form">
                    <h2 className='contact'>Contact Us</h2>
                    <form>
                        <label htmlFor="fullname">Full Name:</label>
                        <input type="text" id="fullname" name="name" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />

                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;
