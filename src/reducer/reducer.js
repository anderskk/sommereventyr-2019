export default function reducer(state, action) {
    switch(action.type) {
        case ('startPlaying'): {
            return {
                ...state,
                isPlaying: true,
                currentTaskIndex: 0
            };
        }
        case ('timeout'): {
            return {
                ...state,
                isPlaying: false,
                currentTaskIndex: undefined,
                numberOfFailedAttempts: state.numberOfFailedAttempts + 1
            };
        }
        case ('taskComplete'): {
            return {
                ...state,
                currentTaskIndex: action.payload.currentTaskIndex + 1,
                failedLastTask: false
            };
        }
        case ('taskFail'): {
            return {
                ...state,
                failedLastTask: true
            };
        }
        case ('allTasksComplete'): {
            return {
                ...state,
                isPlaying: false,
                completedAllTasks: true,
                currentTaskIndex: undefined
            };
        }
        case ('secondLength'): {
            return {
                ...state,
                secondLength: action.payload
            };
        }
        default: {
            return state;
        }
    }
}
  