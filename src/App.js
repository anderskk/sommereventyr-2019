import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import TaskManager from './tasks/Tasks';
import Background from './Background';
import dagO2 from './images/dago2.png';

const dagO2Style = {
  backgroundImage: `url(${dagO2})`,
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  height: '50%'
};

function App() {
  
  return (
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
            <div style={ { height: window.innerHeight, padding: '1em' } }>
              <p style={ { position: 'relative', top: '20%', fontSize: 'x-large' } }>
                { 'Velkommen til tempoetappen! Her handler det om tid - løs alle oppgavene innen 3 minutter og du er videre! Klarer du det ikke, kan du alltid prøve igjen. Eller..?' }
              </p>
              <div style={ dagO2Style } />
            </div>
          </Col>
          <Col md={9} lg={9} sm={9}>
            <TaskManager />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
