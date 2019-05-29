import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import Button from 'react-bootstrap/Button';

const initCode = `function capitalize(myString) {
    //code
}`;

const JSFunctionTask = ({ onComplete, onFail }) => {
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
            <Editor 
                value={ code }
                onValueChange={ val => setCode(val) }
                highlight={ theCode => highlight(theCode, languages.js) }
                padding={10}
                style={ {
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                } }
            />
            <Button
                onClick={ evaluator }
            >
                { 'Sjekk løsning' }
            </Button>
        </>
    );
};

JSFunctionTask.propTypes = {
    onComplete: PropTypes.func.isRequired,
    onFail: PropTypes.func.isRequired
};

export default JSFunctionTask;

















function randomString(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }