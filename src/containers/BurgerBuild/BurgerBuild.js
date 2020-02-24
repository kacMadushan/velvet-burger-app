import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchIngredients } from '../../actions/burgerBuild';
import { orderBurger } from '../../actions/order';

import MainContainer from '../../components/MainContainer/MainContainer';
import Burger from '../../components/Burger/Burger';
import BuildOptions from '../../components/Burger/BuildOptions/BuildOptions';
import OrderDetails from '../../components/Burger/OrderDetails/OrderDetails';
import Modal from '../../components/Modal/Modal';
import Spinner from '../../components/Spinner/Spinner';

class BurgerBuild extends Component {

    componentDidMount() {
        this.props.fetchIngredients()
    };

    handleOrederContinue = () => {
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
        };
        this.props.orderBurger(order);
        window.location.reload()
    };

    render() {
        const { price, error, ingredients } = this.props;

        const disabledOption = {
            ...ingredients
        };

        for (let key in disabledOption) {
            disabledOption[key] = disabledOption[key] <= 0
        };

        // render burger component
        let burger = error ? <p>Ingredients cannot be loaded</p> : <Spinner />;
        if (ingredients) {
            burger = (
                <>
                    <MainContainer col="col-lg-6 offset-lg-3">
                        <Burger
                            ingredients={ingredients}
                        />
                    </MainContainer>
                    <BuildOptions
                        price={price}
                        disabled={disabledOption}
                    />
                </>
            );
        }

        return (
            <Fragment>
                {burger}
                <Modal title="Order Details">
                    <OrderDetails
                        price={price}
                        ingredients={ingredients}
                        handleOrederContinue={this.handleOrederContinue}
                    />
                </Modal>
            </Fragment>
        );
    }
};

const mapStateToProps = (state) => ({
    price: state.burger.totalPrice,
    error: state.burger.error,
    ingredients: state.burger.ingredients
});

const mapDispatchToProps = (dispatch) => ({
    fetchIngredients: () => dispatch(fetchIngredients()),
    orderBurger: (order) => dispatch(orderBurger(order))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BurgerBuild));