import React from 'react';
import './style.css';

function CardButton(props) {
    return (
        <button onClick={props.onClick} className={`card-btn ${props["data-value"]}`} {...props} />
    );
}

export default CardButton;