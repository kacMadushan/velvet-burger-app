import {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    FETCH_INGREDIENTS_SUCCESS,
    FETCH_INGREDIENTS_FAILURE
} from '../actions/constants';

// Burger build reducer
const burgerBuildReducerDefaultState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const ingredientsPrice = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

export default (state = burgerBuildReducerDefaultState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.name]: state.ingredients[action.name] + 1
                },
                totalPrice: state.totalPrice + ingredientsPrice[action.name],
                building: true
            };
        case REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.name]: state.ingredients[action.name] - 1
                },
                totalPrice: state.totalPrice - ingredientsPrice[action.name],
                building: true
            };
        case FETCH_INGREDIENTS_SUCCESS:
            return {
                ...state,
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                totalPrice: 4,
                error: false,
                building: false
            };
        case FETCH_INGREDIENTS_FAILURE:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};