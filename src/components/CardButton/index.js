import React from 'react';
import './style.css';

function CardButton(props) {
    return (
        <button onClick={props.onClick} className={`card-btn ${props["data-value"]}`} {...props} />
    );
    // the object {...props} is a a shortcut that says the rest of the properties of this props object will be added to the button element. Will include any CSS
}

export default CardButton;