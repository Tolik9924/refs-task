import React, {useState, useRef } from 'react';

import PropTypes from 'prop-types';

import style from './tooltip.module.css';
import classNames from 'classnames';

const Tooltip = ({
    content = 'Tooltip content',
    children,
    position='right'
}) => {

    const [visible, setVisible] = useState(false);
    const toolTipRef = useRef();

    const show = () => {
        setVisible(true);
    }

    const hide = () => {
        setVisible(false);
    }

    const classTooltip = classNames(style.tooltip, style[position]);

    return(
        <span className={style.tooltipWrapper} ref={toolTipRef}>
            {visible && <span className={classTooltip}>{content}</span>}
            <span className={style.targetElement}
                  onMouseEnter={show}
                  onMouseLeave={hide}>
                {children}
            </span>
        </span>
    );
}

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.string,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
}

export default Tooltip;
