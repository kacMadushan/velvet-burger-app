import React from 'react';
import PropTypes from 'prop-types';
import { OptionRow, OptionLabel } from './Option.sc';

import Button from '../../../Button/Button';

const Option = ({ label, addIngredient, removeIngredient, disabled }) => (
    <OptionRow>
        <OptionLabel>{label}</OptionLabel>
        <Button as="option" view="less" onClick={removeIngredient} disabled={disabled}>Less</Button>
        <Button as="option" onClick={addIngredient}>More</Button>
    </OptionRow>
);

Option.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Option;