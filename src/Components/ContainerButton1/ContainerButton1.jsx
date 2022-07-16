import React, { useRef } from 'react';
import Button from '../Button/Button';

import style from './containerButton1.module.css';

const ContainerButton1 = () => {

    const containerRef = useRef();

    return (
        <div className={style.container} ref={containerRef}>
            <div className={style.row1}>
                <div className={style.buttonContainer1}>
                    <Button container={containerRef}>Button</Button>
                </div>
                <div className={style.buttonContainer2}>
                    <div className={style.button2}>
                        <Button container={containerRef}>Button</Button>
                    </div>
                </div>
                <div className={style.buttonContainer3}>
                    <div className={style.button3}>
                        <Button container={containerRef}>Button</Button>
                    </div>
                </div>
            </div>
            <div className={style.row2}>
                <div className={style.buttonContainer4}>
                    <div className={style.button4}>
                        <Button container={containerRef}>Button</Button>
                    </div>
                </div>
                <div className={style.buttonContainer5}>
                    <div className={style.button5}>
                        <Button container={containerRef}>Button</Button>
                    </div>
                </div>
                <div className={style.buttonContainer6}>
                    <div className={style.button6}>
                        <Button container={containerRef}>Button</Button>
                    </div>
                </div>
            </div>
            <div className={style.row3}>
                <div className={style.buttonContainer7}>
                    <div className={style.button7}>
                        <Button container={containerRef}>Button</Button>
                    </div>
                </div>
                <div className={style.buttonContainer8}>
                    <div className={style.button8}>
                        <Button container={containerRef}>Button</Button>
                    </div>
                </div>
                <div className={style.buttonContainer9}>
                    <div className={style.button9}>
                        <Button container={containerRef}>Button</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContainerButton1;
