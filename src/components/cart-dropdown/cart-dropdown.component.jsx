import React from 'react';

import CustomButton from '../custom-buttons/custom-buttons.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className = 'cart-dropdown'>
        <div className = 'cart-items' />
        <CustomButton>GO TO CHEAKOUT</CustomButton>
    </div>
)

export default CartDropdown;