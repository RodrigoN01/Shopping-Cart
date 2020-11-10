import React, { useState } from 'react';

import { NavbarContainer, NavbarMenu, NavbarItem } from './Navbar.Styles';
import ShoppingCart from './ShoppingCart';

const sampleData = new Array(7).fill('Cart Item');

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <NavbarContainer>
        <NavbarMenu>
          <NavbarItem onClick={onClick}>My Cart</NavbarItem>
          {open && <ShoppingCart data={sampleData} />}
        </NavbarMenu>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
