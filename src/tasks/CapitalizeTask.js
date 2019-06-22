import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/erlang-dark.css';
import Button from 'react-bootstrap/Button';

const initCode = `function capitalize(str) {
    //code
}`;

const CapitalizeTask = ({ submit }) => {
    const [code, setCode] = useState(initCode);

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
                onClick={ () => submit('capitalize', code) }
                className="submit-answer-button"
            >
                { 'Sjekk løsning' }
            </Button>
        </>
    );
};

CapitalizeTask.propTypes = {
    submit: PropTypes.func.isRequired
};

export default CapitalizeTask;
