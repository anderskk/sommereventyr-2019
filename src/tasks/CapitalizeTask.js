import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/erlang-dark.css';
import Button from 'react-bootstrap/Button';

const initCode = `function capitalize(myString) {
    //code
}`;

const CapitalizeTask = ({ onComplete, onFail }) => {
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
            const testInput = randomString(8);
            const result = eval(`var myFunc = ${code}
                myFunc('${testInput}');
            `);
            if ((testInput.charAt(0).toUpperCase() + testInput.slice(1)) === result) {
                console.log('klarte capitalize!');
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
                { 'Skriv en funksjon, capitalize, som tar inn en string og returnerer stringen med stor forbokstav' }
            </p>
            <p>{ 'F.eks: capitalize(\'hei på deg\') = \'Hei på deg\'' }</p>
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

CapitalizeTask.propTypes = {
    onComplete: PropTypes.func.isRequired,
    onFail: PropTypes.func.isRequired
};

export default CapitalizeTask;

















function randomString(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }