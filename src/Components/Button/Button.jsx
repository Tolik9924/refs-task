import React, { useRef, useEffect, useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';

import style from './button.module.css';

const Button = ({ children }) => {

    const buttonRef = useRef();
    const [position, setPosition] = useState('right');

    const handleClick = () => {
        console.log(buttonRef.current.getBoundingClientRect());
    }

    const changePosition = () => {
        const buttonPosition = buttonRef.current.getBoundingClientRect();
        if (window.innerHeight <= buttonPosition.top + buttonPosition.height &&
            window.innerWidth <= buttonPosition.right + buttonPosition.width) {
            setPosition('top');
        } else if( window.innerWidth <= buttonPosition.right + buttonPosition.width) {
            setPosition('bottom');
        } if(position !== 'right' && window.innerHeight <= buttonPosition.top + buttonPosition.height) {
            setPosition('top');
        }
    }

    useEffect(() => {
        changePosition();
    }, [position]);

    return (
        <Tooltip position={position}>
            <button className={style.button}
                ref={buttonRef}
                onClick={handleClick}>{children}</button>
        </Tooltip>
    );
};

export default Button;
