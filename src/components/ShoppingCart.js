import React from 'react';

import {
  CartContainer,
  CartItemsContainer,
  CartItems,
} from './ShoppingCart.Styles';

function ShoppingCart({ data = [] }) {
  return (
    <>
      <CartContainer>
        <CartItemsContainer>
          {data.map((item, i) => (
            <CartItems key={i}>{item}</CartItems>
          ))}
        </CartItemsContainer>
      </CartContainer>
    </>
  );
}

export default ShoppingCart;
