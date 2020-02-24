import React from 'react';
import { connect } from 'react-redux';
import { BurgerContainer } from './Burger.sc';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ({ ingredients }) => {
    let addIngredientsLayers = Object.keys(ingredients)
        .map(ingredientKey => {
            return [...Array(ingredients[ingredientKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
                });
        })
        .reduce((arr, ele) => {
            return arr.concat(ele);
        }, []);

    if (addIngredientsLayers.length === 0) {
        addIngredientsLayers = <p>Please start adding ingredients!</p>;
    }

    return (
        <BurgerContainer>
            <BurgerIngredient type='bread-top' />
            {addIngredientsLayers}
            <BurgerIngredient type='bread-bottom' />
        </BurgerContainer>
    );
};

const mapStateToProps = (state) => ({
    ingredients: state.burger.ingredients
});

export default connect(mapStateToProps)(Burger);