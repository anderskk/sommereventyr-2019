import React from 'react';
import background from './images/background.jpg';

const Background = () => {
    const style = {
        backgroundImage: `url(${background})`,
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        opacity: 0.15,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: -1000
    };
    return <div style={ style }></div>
};

export default Background;
