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

const ReverseNumberTask = ({ submit }) => {
    const [code, setCode] = useState(initCode);

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
                onClick={ () => submit('reverseNumber', code) }
                className="submit-answer-button"
            >
                { 'Sjekk løsning' }
            </Button>
        </>
    );
};

ReverseNumberTask.propTypes = {
    submit: PropTypes.func.isRequired
};

export default ReverseNumberTask;
