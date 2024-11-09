import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './card.css';

const Card = ({ info, index, clicked, setClicked, onSwipe }) => {

    const handleSwipe = (direction) => {
        onSwipe(direction, info);

        if (direction === 'right') {
            window.open(info.url.fi, '_blank');
          }
        };

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen');
    };

    const handleClick = () => {
        setClicked(!clicked);
        console.log(clicked)
        
    };

    

    return (
        
        <TinderCard
            onSwipe={handleSwipe}
            onCardLeftScreen={() => onCardLeftScreen('fooBar')}
            preventSwipe={['up', 'down']}
        >
            <div
                className="card"
                style={{ zIndex: index }}
                onClick={handleClick}
            >
                <h2>{info.name.fi}</h2>
                {clicked && (
                    <div className="card-info">
                        <p>{info.description}</p>
                        <p>{info.endDate}</p>
                    </div>
                )}
            </div>
        </TinderCard>
    );
};

export default Card;