import axios from 'axios';
import {
    ORDER_BURGER_BEGIN,
    ORDER_BURGER_SUCCESS,
    ORDER_BURGER_FAILURE
} from './constants';

export const orderBurgerBegin = () => ({
    type: ORDER_BURGER_BEGIN
});

export const orderBurgerSuccess = (order = {}) => ({
    type: ORDER_BURGER_SUCCESS,
    order
});

export const orderBurgerFailure = () => ({
    type: ORDER_BURGER_FAILURE
});

export const orderBurger = (orderDetails) => {
    return dispatch => {
        dispatch(orderBurgerBegin());
        axios.post('FIREBASE_DATABASE_URL', orderDetails)
            .then(response => {
                dispatch(orderBurgerSuccess(response.data.name, orderDetails))
            })
            .catch(error => {
                dispatch(orderBurgerFailure(error))
            });
    };
};