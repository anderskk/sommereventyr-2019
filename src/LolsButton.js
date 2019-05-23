import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

const randomNumber = max => Math.floor(Math.random() * max);
const LolsButton = ({ onClick }) => {

    const [position, setPosition] = useState();
    const positionStyle = () => {
        position: 'absolute'
    };

    return (
        <Button
            style={ position ?  }
            onClick={ () => {
                onClick();
                setPosition(undefined);
            } }
            onMouseEnter={ () => setPosition({ x: randomNumber(90), y: randomNumber(90) }) }
         />
    );
};

LolsButton.propTypes = {
    onClick: PropTypes.func.isRequired
};
