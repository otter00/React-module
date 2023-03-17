/* eslint-disabled */

import React from 'react';
import './card.css';

function Card(props) {
        return (
            <div class='gallery__card'>
            <h2 class='card__name'>{props.name}</h2> 
            <form action="#">
            <h3>{props.universe}</h3>
            <span class='alterego'>{props.alterego}</span> 
            <span><p class='bold__text'>Специализация:</p>{props.occupation}</span>
            <span><p class='bold__text'>Союзники:</p>{props.friends}</span>
            <span><p class='bold__text'>Суперспособности:</p>{props.superpowers}</span> 
            <div><img src={props.url} /></div>
            <p>{props.info}</p>
            </form>
            </div>
        );
}

export default Card;