import React from 'react';
import TinderCard from 'react-tinder-card';

const Card = ({ info }) => {
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction);
    };

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen');
    };

    return (
        <TinderCard
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen('fooBar')}
        >
            <div
                style={{
                    width: '300px',
                    height: '400px',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <h2>{info.title}</h2>
                <p>{info.description}</p>
            </div>
        </TinderCard>
    );
};

export default Card;