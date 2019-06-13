import React, { useContext } from 'react';
import dagO2 from '../images/dago2.png';
import { StateContext } from '../App';
import quotes from './quotes';


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

const MrDO2 = () => {
    const { dagO2Quote } = useContext(StateContext);

    return (
        <div style={ { height: window.innerHeight, padding: '1em' } }>
            <p style={ { position: 'relative', top: '20%', fontSize: 'x-large' } }>
                { dagO2Quote || quotes.welcome }
            </p>
            <div style={ dagO2Style } />
        </div>
    );
};

export default MrDO2;
