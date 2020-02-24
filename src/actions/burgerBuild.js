import axios from 'axios';

import {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    FETCH_INGREDIENTS_SUCCESS,
    FETCH_INGREDIENTS_FAILURE
} from './constants';

// ADD_INGREDIENT
export const addIngredient = (name) => ({
    type: ADD_INGREDIENT,
    name
});

// REMOVE_INGREDIENT
export const removeIngredient = (name) => ({
    type: REMOVE_INGREDIENT,
    name
});

// FETCH_INGREDIENTS_SUCCESS
export const fetchIngredientsSuccess = (ingredients) => ({
    type: FETCH_INGREDIENTS_SUCCESS,
    ingredients
});

// FETCH_INGREDIENTS_FAILURE
export const fetchIngredientsFailure = () => ({
    type: FETCH_INGREDIENTS_FAILURE
});

export const fetchIngredients = () => {
    return dispatch => {
        axios.get('FIREBASE_DATABASE_URL')
            .then(response => {
                dispatch(fetchIngredientsSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchIngredientsFailure())
            })
    }
};