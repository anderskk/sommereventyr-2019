import React, { useContext } from 'react';
import axios from 'axios';

import Countdown from '../Countdown';
import { StateContext, DispatchContext } from '../App';
import CapitalizeTask from './CapitalizeTask';
import FizzBuzzTask from './FizzBuzzTask';
import ReverseNumberTask from './ReverseNumberTask';
import LongestWordTask from './LongestWordTask';

const Tasks = () => {
    const { isPlaying, currentTaskIndex } = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const nextUrl = localStorage.getItem('nextUrl');

    if (nextUrl) {
        return (
            <a className="tasks-container" href={ nextUrl } target="_blank">{ nextUrl }</a>
        );
    }

    const submit = async (taskName, code) => {
        const result = await axios.post('https://tempoetappe-backend.herokuapp.com/api/checkanswer', { task: taskName, code });
        const { taskSuccess, nextUrl } = result.data;
        if (taskSuccess === true) {
            if (nextUrl) {
                localStorage.setItem('nextUrl', nextUrl);
                dispatch({ type: 'allTasksComplete' });
            }
            else {
                dispatch({ type: 'taskComplete', payload: { currentTaskIndex } });
            }
        } else {
            dispatch({ type: 'taskFail' });
        }
    };

    const tasks = [
        <CapitalizeTask submit={ submit } />,
        <FizzBuzzTask submit={ submit } />,
        <ReverseNumberTask submit={ submit } />,
        <LongestWordTask submit={ submit } />
    ];

    return (
        <div className="tasks-container">
            <Countdown seconds={ 60 } />
            { isPlaying && tasks[currentTaskIndex] }
        </div>
    );
};

export default Tasks;
