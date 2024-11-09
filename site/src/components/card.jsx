import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './card.css';

const Card = ({ info, index }) => {
    const [clicked, setClicked] = useState(false);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    const imagePath = `/src/assets/images/${info.name.fi.split(/[\s/]/)[0]}.jpg`;
    console.log(imagePath);
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction);
        if (direction === 'right') {
            console.log('You liked: ' + info.name.fi);
            window.open(info.url.fi, '_blank');
        }
    };

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen');
    };

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <TinderCard
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen('fooBar')}
            preventSwipe={['up', 'down']}
        >
            <div
                className="card"
                style={{ 
                    zIndex: index,
                    backgroundImage: `url(${imagePath})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                onClick={handleClick}
            >
                {clicked && (
                    <div className='card-info-background'>
                        <div className="card-info">
                            <h2>{info.name.fi}</h2>
                            <p>Keräys käynnissä {formatDate(info.endDate)} asti</p>
                            <p>{info.totalSupportCount} / 50000 allekirjoitusta</p>
                        </div>
                    </div>
                )}
            </div>
        </TinderCard>
    );
};

export default Card;