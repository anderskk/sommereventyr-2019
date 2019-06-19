import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/erlang-dark.css';

const initCode = `function reverseNumber(i) {
    //code
}`;

const ReverseNumberTask = ({ onComplete, onFail }) => {
    const [code, setCode] = useState(initCode);
    
    const evaluator = () => {
        try {
            const forbiddenKeywords = ['fetch'];
            forbiddenKeywords.forEach(kw => {
                if (code.includes(kw)) {
                    onFail();
                    return;
                }
            });        
            const userCode = myInt => eval(`var myFunc = ${code}
                myFunc('${myInt}');
            `);

            if (userCode(456821) == 128654 && userCode(2541) == 1452 && userCode(745151) == 151547) {
                console.log('klarte reverse number!');
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
                { 'Skriv en funksjon, reverseNumber, som tar inn et tall og reverserer tallet.' }
            </p>
            <p>{ 'F.eks. så skal reverseNumber(123456) returnere 654321. Her godtas også "654321"' }</p>
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

ReverseNumberTask.propTypes = {
    onComplete: PropTypes.func.isRequired,
    onFail: PropTypes.func.isRequired
};

export default ReverseNumberTask;
