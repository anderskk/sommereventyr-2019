import React, { useContext } from 'react';
import Countdown from '../Countdown';
import { StateContext, DispatchContext } from '../App';
import CapitalizeTask from './CapitalizeTask';
import FizzBuzzTask from './FizzBuzzTask';

const Tasks = () => {
    const { isPlaying, currentTaskIndex } = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const onComplete = () => {
        dispatch({ type: 'taskComplete', payload: { currentTaskIndex } });
        console.log('Finished task number: ', currentTaskIndex);
    };

    const onFail = () => {
        dispatch({ type: 'taskFail' });
    };

    const onAllComplete = () => {
        dispatch({ type: 'allTasksComplete' });
    };

    const tasks = [
        <FizzBuzzTask onComplete={ onComplete } onFail={ onFail } />,
        <CapitalizeTask onComplete={ onAllComplete } onFail={ onFail } />
    ];

    return (
        <div className="tasks-container">
            <Countdown seconds={ 60 } />
            { isPlaying && tasks[currentTaskIndex] }
        </div>
    );
};

export default Tasks;
