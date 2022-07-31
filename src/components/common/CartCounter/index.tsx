import React from 'react';
import { ReactComponent as CartIcon } from 'assets/icons/shopping_cart.svg';
import { useAppSelector } from 'redux/hooks';
import { selectCount } from 'redux/features/cart/selectors';
import { CartCounterContainer, Count } from './styles';

const CartCounter = () => {
    const cartCount = useAppSelector(selectCount);

    return (
        <CartCounterContainer>
            <CartIcon />
            <Count>
                {cartCount}
            </Count>
        </CartCounterContainer>
    );
};

export default CartCounter;
