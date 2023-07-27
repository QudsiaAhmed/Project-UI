import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
<footer style={{ position: 'fixed', bottom: '.5rem', left: 0, width: '100%', height: '30px', backgroundColor: '#E8E9EB', boxShadow: 'none' }}>
    <Typography variant="body1" sx={{ textAlign: 'center', lineHeight: '50px' }}>
        2020 ThapaTechnical. All Rights Reserved | Terms and Conditions
    </Typography>
</footer>
    );
};

export default Footer;
