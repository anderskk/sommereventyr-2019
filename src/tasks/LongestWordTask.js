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

const LongestWordTask = ({ submit }) => {
    const [code, setCode] = useState(initCode);

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
                onClick={ () => submit('longestWord', code) }
                className="submit-answer-button"
            >
                { 'Sjekk løsning' }
            </Button>
        </>
    );
};

LongestWordTask.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LongestWordTask;
