import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LolsButton from './LolsButton';
import { StateContext, DispatchContext } from './App';


const formatSeconds = seconds => {
    const wholeMinutes = Math.floor(seconds / 60);
    const leftoverSeconds = seconds % 60;

    return wholeMinutes > 0
        ? `${wholeMinutes}m ${leftoverSeconds}s`
        : `${leftoverSeconds}s`
};

const Countdown = ({ seconds }) => {
    const [timer, setTimer] = useState({ timeLeft: seconds });
    const { timeLeft, intervalId } = timer;
    const { numberOfFailedAttempts, secondLength, isPlaying } = useContext(StateContext);
    const showLolsButton = numberOfFailedAttempts > 0;
    const dispatch = useContext(DispatchContext);

    if (timeLeft === 0 && intervalId) {
        clearInterval(intervalId);
        setTimer({ ...timer, intervalId: undefined, timeLeft: seconds });
        dispatch({ type: 'timeout' });
    }
    const decreaseTime = () => setTimer(prevTimer => ({ ...prevTimer, timeLeft: prevTimer.timeLeft - 1 }));
    const countdown = () => {
        dispatch({ type: 'startPlaying' });
        debugger
        const id = setInterval(decreaseTime, secondLength);
        setTimer(prevTimer => ({ ...prevTimer, intervalId: id }));
    };

    return (
        <Container>
            <Row className="justify-content-md-center timer-container">
                { isPlaying &&
                <span className="timer">
                    { timeLeft }
                </span> }
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
    seconds: PropTypes.number.isRequired
};

export default Countdown;
