import React from 'react';
import './style.css'
import Navbar from './Navbar';
import Footer from './Footer';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const Services = () => {

    const cardsData = [
        {
            id: 1,
            title: 'Card 1',
            title: 'Web Development',
            image: 'https://www.rb.com.au/wp-content/uploads/Banner.jpg',
            content:
                "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.",
        }, {
            id: 2,
            title: 'Card 2',
            title: 'App Development',
            image: 'https://www.sudouae.com/wp-content/uploads/2020/06/Full-banner-min.jpg',
            content:
                "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.",
        }, {
            id: 3,
            title: 'Card 3',
            title: 'Software Development',
            image: 'https://bairesdev.mo.cloudinary.net/blog/2023/06/Is-Python-good-for-software-development.jpg?tx=w_3840,q_auto',
            content:
                "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.",
        }, {
            id: 4,
            title: 'Card 4',
            title: 'Digital Marketing',
            image: 'https://s40424.pcdn.co/in/wp-content/uploads/2022/07/digital-marketing-1.jpg.optimal.jpg',
            content:
                "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.",
        }, {
            id: 5,
            title: 'Card 5',
            title: 'Android Development',
            image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_an_Android_Developer.jpg',
            content:
                "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.",
        }, {
            id: 6,
            title: 'Card 6',
            title: 'Marketing',
            image: 'https://www.intandemcommunications.co.uk/wp-content/uploads/2019/08/What-is-marketing.jpg',
            content:
                "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.",
        },];

    return (
        <>
            <Navbar />
            <h2 className='services' style={{ display: 'flex', justifyContent: 'center' }}>Services</h2>
            <div style={{
                display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: '0 4rem 0 4rem'
            }}>
                {cardsData.map((card) => (
                    <Card key={card.id} style={{ flex: '0 0 calc(33.33% - 20px)', maxWidth: 'calc(33.33% - 20px)', margin: '10px' }}>
                        <CardMedia style={{ height: 200, objectFit: 'cover' }} image={card.image} title={card.title} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {card.content}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Check Now</Button>
                        </CardActions>
                    </Card>
                ))}
            </div>

            <Footer />
        </>
    );
};

export default Services;