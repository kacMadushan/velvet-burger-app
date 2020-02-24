import React from 'react';
import PropTypes from 'prop-types';
import {
    Bread,
    SeedsOne,
    SeedsTwo,
    Salad,
    Bacon,
    Cheese,
    Meat
} from './BurgerIngredient.sc';

const BurgerIngredient = ({ type }) => {
    let ingredient = null;
    switch (type) {
        case ('bread-bottom'):
            ingredient = <Bread bottom></Bread>;
            break;
        case ('bread-top'):
            ingredient = (
                <Bread>
                    <SeedsOne></SeedsOne>
                    <SeedsTwo></SeedsTwo>
                </Bread>
            );
            break;
        case ('meat'):
            ingredient = <Meat></Meat>;
            break;
        case ('salad'):
            ingredient = <Salad></Salad>;
            break;
        case ('cheese'):
            ingredient = <Cheese></Cheese>;
            break;
        case ('bacon'):
            ingredient = <Bacon></Bacon>;
            break;
        default:
            ingredient = null;
    }
    return ingredient
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
};

export default BurgerIngredient;