import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import { StateContext, DispatchContext } from './App';

const LolsButton = ({ onClick, disabled }) => {
    const { numberOfFailedAttempts } = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const [position, setPosition] = useState({ counter: 0 });
    const positionStyle = () => ({
        position: 'fixed',
        right: `${Math.floor(position.x * window.innerWidth)}px`,
        top: `${Math.floor(position.y * window.innerHeight)}px`
    });
    const onMouseEnter = () => {
        dispatch({ type: 'hoverLolsButton' });
        setPosition(prevPosition => ({
            x: Math.random()*0.8,
            y: Math.random()*0.8,
            counter: prevPosition ? prevPosition.counter+1 : 1
        }));
    };

    return (
        <Button
            style={ position && position.x && positionStyle() }
            onClick={ () => {
                onClick();
                setPosition(undefined);
            } }
            onMouseEnter={ onMouseEnter }
            variant="primary"
            size="lg"
            tabIndex={ numberOfFailedAttempts < 2 ? 0 : -1 }
            hidden={ disabled }
            disabled={ disabled }>
            { 'Prøv på nytt' }
        </Button>
    );
};

LolsButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

export default LolsButton;
