import React from 'react';
import Bike from './bike.js';
import './App.css';
import Countdown from './Countdown';

function App() {
  return (
    <div className="App">
      <Countdown seconds={ 5*60 } 
        onStart={ () => console.log('start') }
        onFinished={ () => console.log('finished!') } />
    </div>
  );
}

export default App;
