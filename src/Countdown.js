import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LolsButton from './LolsButton';


const formatSeconds = seconds => {
    const wholeMinutes = Math.floor(seconds / 60);
    const leftoverSeconds = seconds % 60;

    return wholeMinutes > 0
        ? `${wholeMinutes}m ${leftoverSeconds}s`
        : `${leftoverSeconds}s`
};

const Countdown = ({ seconds, onFinished, onStart, showLolsButton }) => {
    const [timer, setTimer] = useState({ timeLeft: seconds });
    const { timeLeft, intervalId } = timer;

    if (timeLeft === 0 && intervalId) {
        clearInterval(intervalId);
        setTimer({ ...timer, intervalId: undefined, timeLeft: seconds });
        onFinished && onFinished();
    }
    const decreaseTime = () => setTimer(prevTimer => ({ ...prevTimer, timeLeft: prevTimer.timeLeft - 1 }));
    const countdown = () => {
        onStart && onStart();
        const id = setInterval(decreaseTime, 1000);
        setTimer(prevTimer => ({ ...prevTimer, intervalId: id }));
    };

    return (
        <Container>
            <Row className="justify-content-md-center timer-container">
                <span className="timer">
                    { formatSeconds(timeLeft) }
                </span>
                { !showLolsButton ? <Button
                    onClick={ countdown }
                    variant="primary"
                    size="lg"
                    hidden={ intervalId }
                    disabled={ intervalId }>
                    { 'Start' }
                </Button> :
                <LolsButton 
                    onClick={ countdown }
                    disabled={ !!intervalId }
                />
                }
            </Row>
        </Container>
    );
};

Countdown.propTypes = {
    seconds: PropTypes.number.isRequired,
    onFinished: PropTypes.func,
    onStart: PropTypes.func
};

export default Countdown;
