import quotes, { welcomeText } from "../dagO2/quotes";

export default function reducer(state, action) {
    switch(action.type) {
        case ('startPlaying'): {
            return {
                ...state,
                isPlaying: true,
                currentTaskIndex: 0,
                dagO2Quote: quotes.isPlaying
            };
        }
        case ('timeout'): {
            return {
                ...state,
                isPlaying: false,
                currentTaskIndex: undefined,
                numberOfFailedAttempts: state.numberOfFailedAttempts + 1,
                dagO2Quote: welcomeText(state.numberOfFailedAttempts + 1)
            };
        }
        case ('taskComplete'): {
            return {
                ...state,
                currentTaskIndex: action.payload.currentTaskIndex + 1,
                failedLastTask: false,
                dagO2Quote: state.dagO2Quote === quotes.correctAnswer_1 ? quotes.correctAnswer_2 : quotes.correctAnswer_1
            };
        }
        case ('taskFail'): {
            return {
                ...state,
                failedLastTask: true,
                dagO2Quote: state.dagO2Quote === quotes.wrongAnswer_1 ? quotes.wrongAnswer_2 : quotes.wrongAnswer_1
            };
        }
        case ('allTasksComplete'): {
            return {
                ...state,
                isPlaying: false,
                completedAllTasks: true,
                currentTaskIndex: undefined,
                dagO2Quote: quotes.allTasksCompleted
            };
        }
        case ('secondLength'): {
            return {
                ...state,
                secondLength: action.payload
            };
        }
        case ('hoverLolsButton'): {
            return {
                ...state,
                lolsButtonCount: state.lolsButtonCount ? state.lolsButtonCount + 1 : 1,
                dagO2Quote: lolsButtonText(state)
            };
        }
        default: {
            return state;
        }
    }
}

const lolsButtonText = state => {
    const { lolsButtonCount, numberOfFailedAttempts } = state;
    if (lolsButtonCount === 4) {
        return quotes.buttonFailure_mock;
    } else if (lolsButtonCount === 14) {
        return quotes.buttonFailure_needHint;
    } else if (lolsButtonCount == 29) {
        return (quotes.buttonFailure_tabHint);
    } else if (lolsButtonCount === 44 && numberOfFailedAttempts > 1) {
        return quotes.buttonFailure_tabIndexHint;
    }
    return state.dagO2Quote;
};