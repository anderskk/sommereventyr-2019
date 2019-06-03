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

const FizzBuzzTask = ({ onComplete, onFail }) => {
    const [code, setCode] = useState(initCode);
    
    const evaluator = () => {
        try {
            const forbiddenKeywords = ['fetch'];
            forbiddenKeywords.forEach(kw => {
                if (code.includes(kw)) {
                    onFail();
                    return;
                }
            })
            const userFizzBuzz = myInt => eval(`var myFunc = ${code}
                myFunc('${myInt}');
            `);
            if (userFizzBuzz(21) && userFizzBuzz(35) && !userFizzBuzz(31) && !userFizzBuzz(79)) {
                console.log('klarte fizzBuzz!');
                onComplete();
            } else {
                console.log('feil svar')
                onFail();
            }
        } catch (e) {
            console.log('veldig feil svar');
            onFail();
        }
    };
    
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
                onClick={ evaluator }
                className="submit-answer-button"
            >
                { 'Sjekk løsning' }
            </Button>
        </>
    );
};

FizzBuzzTask.propTypes = {
    onComplete: PropTypes.func.isRequired,
    onFail: PropTypes.func.isRequired
};

export default FizzBuzzTask;
