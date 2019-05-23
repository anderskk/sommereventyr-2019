import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

const randomNumber = max => Math.floor(Math.random() * max);
const LolsButton = ({ onClick, disabled }) => {

    const [position, setPosition] = useState();
    const positionStyle = () => ({
        position: 'absolute',
        left: `${Math.floor(position.x * window.innerWidth)}px`,
        top: `${Math.floor(position.y * window.innerHeight)}px`
    });

    return (
        <Button
            style={ position && positionStyle() }
            onClick={ () => {
                onClick();
                setPosition(undefined);
            } }
            onMouseEnter={ () => setPosition({ x: Math.random(0.9), y: Math.random(0.9) }) }
            variant="outline-primary"
            size="lg"
            hidden={ disabled }
            disabled={ disabled }>
            { 'Start' }
        </Button>
    );
};

LolsButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default LolsButton;
