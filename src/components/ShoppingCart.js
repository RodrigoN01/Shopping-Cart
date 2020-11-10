import React from 'react';

import { CartContainer, CartItems } from './ShoppingCart.Styles';

function ShoppingCart({ data = [] }) {
  return (
    <>
      <CartContainer>
        {data.map((item, i) => (
          <CartItems key={i}>{item}</CartItems>
        ))}
      </CartContainer>
    </>
  );
}

export default ShoppingCart;
