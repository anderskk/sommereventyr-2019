import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

const buttonText = counter => {
    if (!counter || counter === 0) {
        return  'Prøv på nytt';
    }
    if (counter < 15) {
        return  'Prøv på nytt' + '!'.repeat(counter);
    }
    if (counter < 30) {
        return 'Trenger du et hint?' + '?'.repeat(counter-15);
    }
    if (counter < 45) {
        return 'Kanskje Tab funker?' + '?'.repeat(counter-30);
    }
    return 'Hva er det som forhindrer tabbing?' +'?'.repeat(counter-45);
};

const LolsButton = ({ onClick, disabled }) => {

    const [position, setPosition] = useState({ counter: 0 });
    const positionStyle = () => ({
        position: 'fixed',
        right: `${Math.floor(position.x * window.innerWidth)}px`,
        top: `${Math.floor(position.y * window.innerHeight)}px`
    });

    return (
        <Button
            style={ position && position.x && positionStyle() }
            onClick={ () => {
                onClick();
                setPosition(undefined);
            } }
            onMouseEnter={ () => setPosition(prevPosition => ({ x: Math.random()*0.8, y: Math.random()*0.8, counter: prevPosition ? prevPosition.counter+1 : 1 })) }
            variant="primary"
            size="lg"
            tabIndex="-1"
            hidden={ disabled }
            disabled={ disabled }>
            { buttonText(position && position.counter) }
        </Button>
    );
};

LolsButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

export default LolsButton;
