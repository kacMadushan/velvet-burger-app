import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addIngredient, removeIngredient } from '../../../actions/burgerBuild';
import { options } from '../../../data/options';
import { OptionsSection, TotalPrice } from './BuildOptions.sc';

import MainContainer from '../../MainContainer/MainContainer';
import Option from './Option/Option';
import Button from '../../Button/Button';

const BuildOptions = ({ price, disabled, addIngredient, removeIngredient }) => (
    <OptionsSection>
        <MainContainer col="col-lg-4 offset-lg-4">
            <TotalPrice>Current Price: <strong>{price.toFixed(2)}</strong></TotalPrice>
            {
                options.map(({ label, type }) => (
                    <Option
                        key={label}
                        label={label}
                        addIngredient={() => addIngredient(type)}
                        removeIngredient={() => removeIngredient(type)}
                        disabled={disabled[type]}
                    />
                ))
            }
            <Button
                as="order"
                orderDisabled={price <= 4}
            >
                Order now
            </Button>
        </MainContainer>
    </OptionsSection>
);

BuildOptions.propTypes = {
    price: PropTypes.number.isRequired,
    disabled: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
    addIngredient: (name) => dispatch(addIngredient(name)),
    removeIngredient: (name) => dispatch(removeIngredient(name)),
});

export default connect(undefined, mapDispatchToProps)(BuildOptions);