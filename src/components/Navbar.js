import React, { useState } from 'react';

import { NavbarContainer, NavbarMenu, NavbarItem } from './Navbar.Styles';
import ShoppingCart from './ShoppingCart';

const sampleData = new Array(2).fill('item name');

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <NavbarContainer>
        <NavbarMenu>
          <NavbarItem onClick={onClick}>
            My Cart
            {open && <ShoppingCart data={sampleData} />}
          </NavbarItem>
        </NavbarMenu>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
