import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './card.css';
import ProgressBar from "@ramonak/react-progress-bar";

const Card = ({ info, index, clicked, setClicked, resetComments }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    const imagePath = `https://junction2024-zeta.vercel.app/images/${info.name.fi.split(/[\s/]/)[0]}.jpg`;

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction);
        resetComments();
        setClicked(true);
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
        console.log(clicked);
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
                onTouchEnd={handleClick}
            >
                {clicked && (
                    <div className='card-info-background'>
                        <div className="card-info">
                            <h2>{info.name.fi}</h2>
                            <p>Keräys käynnissä {formatDate(info.endDate)} asti</p>
                            <p>{info.totalSupportCount} / 50000 allekirjoitusta</p>
                            <ProgressBar completed={info.totalSupportCount / 500} customLabel=' '/>
                        </div>
                    </div>
                )}
            </div>
        </TinderCard>
    );
};

export default Card;
