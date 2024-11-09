import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './card.css';

const Card = ({ info, index }) => {
    const [clicked, setClicked] = useState(false);

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
                <h2>{info.name.fi}</h2>
                {clicked && (
                    <div className="card-info">
                        <p>{info.endDate}</p>
                        <p>Hei</p>
                    </div>
                )}
            </div>
        </TinderCard>
    );
};

export default Card;