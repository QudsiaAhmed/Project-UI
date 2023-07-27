import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navbar />
            {/* Main Content */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* Left Side - Text */}
                <div style={{ flex: 1, padding: '20px', maxWidth: '600px' }}>
                    <h1>Grow Your buisness with<br />
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
                        color: 'rgb(141,165,190)'
                    }}><Link to= '/Services' style={{ color: 'rgb(141, 165, 190)', textDecoration: 'none' }}>Get Started</Link></button>
                </div>

                {/* Right Side - Image */}
                <div className="image-container" style={{ flex: 1, padding: '20px', maxWidth: '600px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <img src="https://storage.prompt-hunt.workers.dev/clh3vagj20007mf08qw9kzf37_1" alt="Image" style={{ width: '100%', height: 'auto', marginTop: '4rem' }} />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home
