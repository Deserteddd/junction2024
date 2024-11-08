import React from 'react';
import Card from './card';
import './card_container.css';

const CardContainer = ({ cards }) => {
    return (
        <div className="card-container">
            {cards.map((card, index) => (
                <Card key={index} info={card} index={cards.length - index} />
            ))}
        </div>
    );
};

export default CardContainer;