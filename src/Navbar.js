import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'transparent', color: 'black', boxShadow: 'none' }}>
                <Toolbar sx={{
                    display: 'flex', justifyContent: 'space-between', marginLeft: '40px', marginRight: '5rem',
                    '@media (max-width: 768px)': {
                        marginLeft: '10px', 
                        marginRight: '.3px',
                    }
                }}>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <h2>Thapa Technical</h2>  
                    </Typography>
                    <Button color="inherit">
                        <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
                    </Button>
                    <Button color="inherit">
                        <Link to='/Services' style={{ color: 'black', textDecoration: 'none' }}>Services</Link>
                    </Button>
                    <Button color="inherit">
                        <Link to='/About' style={{ color: 'black', textDecoration: 'none' }}>About</Link>
                    </Button>
                    <Button color="inherit">
                        <Link to='/Contact' style={{ color: 'black', textDecoration: 'none' }}>Contact</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
