import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/erlang-dark.css';

const initCode = `function fizzBuzz(i) {
    //code
}`;

const FizzBuzzTask = ({ submit }) => {
    const [code, setCode] = useState(initCode);
    
    return (
        <>
            <p>
                { 'Skriv en funksjon, fizzBuzz, som tar inn et tall og returnerer true dersom tallet er delelig med 5 eller 3, ellers false.' }
            </p>
            <p>{ 'F.eks: fibuzz(10) = true, fizzBuzz(12) = true, og fizzBuzz(7) = false' }</p>
            <CodeMirror 
                value={ code }
                onChange={ (val) => setCode(val) }
                options={ {
                    mode: 'javascript',
                    lineNumbers: true,
                    theme: 'erlang-dark'
                } } />
            <Button
                onClick={ () => submit('fizzBuzz', code) }
                className="submit-answer-button"
            >
                { 'Sjekk løsning' }
            </Button>
        </>
    );
};

FizzBuzzTask.propTypes = {
    submit: PropTypes.func.isRequired
};

export default FizzBuzzTask;
