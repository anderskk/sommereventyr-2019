import React, { useReducer } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import TaskManager from './tasks/Tasks';
import Background from './Background';
import reducer from './reducer/reducer';
import MrDO2 from './dagO2/MrDO2';
import quotes from './dagO2/quotes';


const initState = () => {
  try {
    return {
        isPlaying: false,
        numberOfFailedAttempts: window.localStorage.getItem('numberOfFailedAttempts'),
        secondLength: 1000,
        dagO2Quote: quotes.welcome
      };
  } catch (e) {
    return {
      isPlaying: false,
      numberOfFailedAttempts: 0,
      secondLength: 1000,
      dagO2Quote: quotes.welcome
    };
  }
}


export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initState());
  const { numberOfFailedAttempts } = state;
  window.localStorage.setItem('numberOfFailedAttempts', numberOfFailedAttempts);
  //TODO: obfuscate denne
  window.brukTidsdoping = () => dispatch({ type: 'secondLength', payload: 10000 });

  return (
    <StateContext.Provider value={ state }>
      <DispatchContext.Provider value={ dispatch }>
        <div className="App">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
          <Background />
          <Container>
            <Row>
              <Col md={3} lg={3} sm={3}>
                <MrDO2 />
              </Col>
              <Col md={9} lg={9} sm={9}>
                <TaskManager />
              </Col>
            </Row>
          </Container>
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
