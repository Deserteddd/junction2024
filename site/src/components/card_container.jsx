import React, { useState } from 'react';
import Card from './card';
import './card_container.css';

const CardContainer = ({ cards }) => {

    const card_elements = cards.map((card, index) => (
        <Card key={index} info={card} index={cards.length - index} />
    ));

    return (
        <div className="card-container">
            {card_elements}
        </div>
    );
};

export default CardContainer;