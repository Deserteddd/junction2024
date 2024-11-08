import React from 'react';
import TinderCard from 'react-tinder-card';
import './card.css';

const Card = ({ info, index }) => {
    console.log(info.name.fi);
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction);
        if (direction == 'right') {
            console.log('You liked: ' + info.name.fi);
            window.open(info.url.fi, '_blank');
        }
    };

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen');
    };

    return (
        <TinderCard
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen('fooBar')}
            preventSwipe={['up', 'down']}
        >
            <div
                className="card"
                style={{ zIndex: index }}
            >
                <h2>{info.name.fi}</h2>
            </div>
        </TinderCard>
    );
};

export default Card;