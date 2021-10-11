import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    // Total Calculation
    let total = 0;
    for(const soldier of cart){
        total = total + parseFloat(soldier.balance);
    };

    return (
        <div className='cart-container'>
            <h2 className='cart-title'> -Cart- </h2>
            <hr className='width-150' />
                <div className='calculation-sec'>
                <h3>Soldiers Added : {props.cart.length} </h3>
                   <h3>Total: ${total.toFixed(2)}</h3>
                </div>
            <h4>Added Soldiers Info:</h4>
            <ul className='cart-soldier-info'>
                {
                    cart.map(person => <li className='added-people-cart'>{`${person.name}(${person.gender})`}</li>)
                }
            </ul>
        </div>

    );
};

export default Cart;