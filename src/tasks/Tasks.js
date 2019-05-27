import React, { useState, useContext } from 'react';
import Countdown from '../Countdown';
import MathTask from './MathTask';
import { StateContext } from '../App';

const Tasks = ({ onAllComplete }) => {
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

    const onComplete = () => {
        console.log('Finished task number: ', currentTaskIndex);
        setCurrentTaskIndex(prevTaskIndex => prevTaskIndex + 1)
    };

    const tasks = [
        <MathTask onComplete={ onComplete } />,
        <MathTask onComplete={ () => console.log('woohooooo') } />
    ];

    return tasks[currentTaskIndex] ? tasks[currentTaskIndex] : null;
};

const TaskManager = () => {
    const state = useContext(StateContext);

    return (
        <div className="tasks-container">
            <Countdown seconds={ 2 } />
            { state.isPlaying && <Tasks onAllComplete={ () => {} } /> }
        </div>
    );
};

export default TaskManager;
