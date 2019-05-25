import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

const buttonText = counter => {
    if (!counter || counter === 0) {
        return  'Prøv på nytt';
    }
    if (counter < 8) {
        return  'Prøv på nytt' + '!'.repeat(counter);
    }
    if (counter < 15) {
        return 'Trenger du et hint?' + '?'.repeat(counter-7);
    }
    return 'Hørt om tab?' + '?'.repeat(counter-14);
};

const LolsButton = ({ onClick, disabled }) => {

    const [position, setPosition] = useState({ counter: 0 });
    const positionStyle = () => ({
        position: 'absolute',
        left: `${Math.floor(position.x * window.innerWidth)}px`,
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
