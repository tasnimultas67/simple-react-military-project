import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Soldier.css'

const Soldier = (props) => {

    const {name, gender, picture, balance, age, phone, email, address} = props.soldier
    const btnIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='soldier-card-container'>
            <img src={picture} className="soldier-img"/>
            <h2>{name}</h2>
            <p className='weight-500'>Age: {age}</p>
            <p className='weight-500'>Gender: {gender}</p>
            <p className='weight-500'>Phone: {phone}</p>
            <p className='weight-500'>Email: {email}</p>
            <p className='weight-500'>Address: {address}</p>
            <h3>Salary: ${balance}</h3>
            <div>
                {/* Card Button Here */}
            <button className='common-btn' 
                    onClick={() => props.handleAddToCart(props.soldier)}> {btnIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Soldier;