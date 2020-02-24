import React from 'react';
import PropTypes from 'prop-types';
import { DetailsContainer, Text, List, ListItem } from './OrderDetails.sc';

import Button from '../../Button/Button';

const OrderDetails = ({ price, ingredients, handleOrederContinue }) => {
    let ingredientDetails;
    if (ingredients) {
        ingredientDetails = Object.keys(ingredients)
            .map(ingKey => (
                <ListItem key={ingKey}>
                    <span>{ingKey}</span>: {ingredients[ingKey]}
                </ListItem>
            ));
    }
    return (
        <DetailsContainer>
            <Text>A delicious burger with the following ingrediens:</Text>
            <List>
                {ingredientDetails}
            </List>
            <Text><strong>Total Price: {price.toFixed(2)}</strong></Text>
            <Text>Continue to Checkout?</Text>
            <Button as="default" onClick={handleOrederContinue}>Continue</Button>
        </DetailsContainer>
    )
}

OrderDetails.propTypes = {
    price: PropTypes.number.isRequired,
};

export default OrderDetails;