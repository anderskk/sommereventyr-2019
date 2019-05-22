import React, { useState } from 'react';
import PropTypes from 'prop-types';

const formatSeconds = seconds => {
    const wholeMinutes = Math.floor(seconds / 60);
    const leftoverSeconds = seconds % 60;

    return wholeMinutes > 0
        ? `${wholeMinutes}m ${leftoverSeconds}s`
        : `${leftoverSeconds}s`
};

const Countdown = ({ seconds, onFinished, onStart }) => {
    const [timer, setTimer] = useState({ timeLeft: seconds });
    const { timeLeft, intervalId } = timer;

    if (timeLeft === 0) {
        clearInterval(intervalId);
        onFinished && onFinished();
    }
    const decreaseTime = () => setTimer(prevTimer => ({ ...prevTimer, timeLeft: prevTimer.timeLeft - 1 }));
    const countdown = () => {
        onStart && onStart();
        const id = setInterval(decreaseTime, 1000);
        setTimer(prevTimer => ({ ...prevTimer, intervalId: id }));
    };


    return (
        <div>
            <span>
                { formatSeconds(timeLeft) }
            </span>
            <button
                onClick={ countdown }
                disabled={ intervalId }>
                { 'Start' }
            </button>
        </div>
    );
};

Countdown.propTypes = {
    seconds: PropTypes.number.isRequired,
    onFinished: PropTypes.func,
    onStart: PropTypes.func
};

export default Countdown;
