import React, { useContext } from 'react';
import Countdown from '../Countdown';
import MathTask from './MathTask';
import { StateContext, DispatchContext } from '../App';
import JSFunctionTask from './JSFunctionTask';

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
        <JSFunctionTask onComplete={ onAllComplete } onFail={ onFail } />,
        // <MathTask onComplete={ onComplete } />,
        // <MathTask onComplete={ onAllComplete } />
    ];

    return (
        <div className="tasks-container">
            <Countdown seconds={ 60 } />
            { isPlaying && tasks[currentTaskIndex] }
        </div>
    );
};

export default Tasks;
