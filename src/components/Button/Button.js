import React from 'react';
import PropTypes from 'prop-types';
import { BtnOrder, BtnOption, BtnDefault } from './Button.sc';

const Button = ({ as, children, view, onClick, disabled, orderDisabled }) => {
    let showButton = null;
    if (as === 'order') {
        showButton = (
            <BtnOrder
                disabled={orderDisabled}
                data-toggle="modal"
                data-target="#orderModal"
            >
                {children}
            </BtnOrder>
        );
    } else if (as === 'option') {
        showButton = (
            <BtnOption
                less={view}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </BtnOption>
        );
    } else if (as === 'default') {
        showButton = (
            <BtnDefault onClick={onClick}>{children}</BtnDefault>
        );
    }
    return showButton;
};

Button.propTypes = {
    as: PropTypes.string.isRequired,
    children: PropTypes.node,
    view: PropTypes.string,
};

export default Button;