import React from 'react';
import FormControl from 'react-bootstrap/FormControl';

const MathTask = ({ onComplete, onFail }) => {
    
    return (
        <FormControl
            placeholder="heiehi"
            onKeyPress={ event => {
                if (event.key === "Enter") {
                    const inputValue = event.target.value;
                    console.log(inputValue);
                    onComplete();
                }
              } }
        />
    );
};

export default MathTask;
