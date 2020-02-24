import {
    ORDER_BURGER_BEGIN,
    ORDER_BURGER_SUCCESS,
    ORDER_BURGER_FAILURE
} from '../actions/constants';

// Order reducer
const orderReducerDefaultState = {
    orders: [],
    loading: false,
    error: false
};

export default (state = orderReducerDefaultState, action) => {
    switch (action.type) {
        case ORDER_BURGER_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case ORDER_BURGER_SUCCESS:
            return {
                ...state,
                orders: state.orders.concat(action.order),
                loading: false,
                error: false
            }
        case ORDER_BURGER_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
};