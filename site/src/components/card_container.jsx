import React, { useState } from 'react';
import Card from './card';
import './card_container.css';

const CardContainer = ({ cards, clicked, setClicked, resetComments }) => {

    const card_elements = cards.map((card, index) => (
        <Card resetComments={resetComments} clicked={clicked} setClicked={setClicked} key={index} info={card} index={cards.length - index} />
    ));

    return (
        <div className="card-container">
            {card_elements}
        </div>
    );
};

export default CardContainer;