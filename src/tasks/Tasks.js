import React, { useState } from 'react';
import Countdown from '../Countdown';
import MathTask from './MathTask';

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
    const [state, setState] = useState({ isPlaying: false, numberOfFailedAttempts: 0 });

    const onStart = () => setState({ ...state, isPlaying: true });
    const onTimeout = () => setState(prevState => ({ 
        ...prevState,
        isPlaying: false,
        numberOfFailedAttempts: prevState.numberOfFailedAttempts + 1
    }));
    console.log(state);

    return (
        <div className="tasks-container">
            <Countdown seconds={ 2 } 
                onStart={ onStart }
                onFinished={ () => {
                    onTimeout();
                    console.log('finished!') ;
                } 
            } />
            { state.isPlaying && <Tasks onAllComplete={ () => {} } /> }
        </div>
    );
};

export default TaskManager;
