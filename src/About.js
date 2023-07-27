import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <Navbar />
            {/* Main Content */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* Left Side - Text */}
                <div style={{ flex: 1, padding: '20px', maxWidth: '600px', marginTop: '10rem' }}>
                    <h1>Welcome To About Page <br />
                        Thapa Techinal</h1>
                    <p>We are team of talented developer making wesite.</p>
                    <button className="btn-about" style={{
                        marginTop: '10px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: 'rgb(218,230,238)',
                        border: '2px solid rgb(124,160,182)',
                        borderRadius: '1rem',
                        cursor: 'pointer',
                    }}><Link to= '/Contact' style={{ color: 'rgb(141, 165, 190)', textDecoration: 'none' }}>Contact Here</Link></button>
                </div>

                {/* Right Side - Image */}
                <div className="image-container" style={{ flex: 1, padding: '20px', maxWidth: '600px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '6rem' }}>
                    <img src="https://thumbs.dreamstime.com/b/close-up-male-hand-pen-using-glowing-people-icons-hologram-creative-global-structure-networking-data-exchanges-274593319.jpg" alt="Image" style={{ width: '100%', height: 'auto', marginTop: '4rem' }} />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About
