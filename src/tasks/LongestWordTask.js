import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/erlang-dark.css';

const initCode = `function longestWord(sentence) {
    //code
}`;

const LongestWordTask = ({ onComplete, onFail }) => {
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
            const longestWord = sentence => eval(`var myFunc = ${code}
                myFunc('${sentence}');
            `);
            const test1 = longestWord('tagf sgsvgs  shgsgsvsg sgsvsg a.') === 'shgsgsvsg';
            const test2 = longestWord('dnhb dhdb dgggvdgdv d gvgvgdv') === 'dgggvdgdv';
            const test3 = longestWord('hei løk') === 'hei';
            const test4 = longestWord('jaså ja, dere jukser') === 'jukser';

            if (test1 && test2 && test3 && test4) {
                console.log('klarte longest word!');
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
                { 'Skriv en funksjon, longestWord, som tar inn en string og finner det lengste ordet i stringen.' }
            </p>
            <p>{ 'Ved lik lengde på ord, skal det første lengste ordet returneres.' }</p>
            <p>{ 'F.eks. så skal longestWord(\'hei på deg\') returnere \'hei\'.' }</p>
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

LongestWordTask.propTypes = {
    onComplete: PropTypes.func.isRequired,
    onFail: PropTypes.func.isRequired
};

export default LongestWordTask;
