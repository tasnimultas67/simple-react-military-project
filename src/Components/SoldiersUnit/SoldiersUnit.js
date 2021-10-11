import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Soldier from '../Soldier/Soldier';
import './SoldiersUnit.css'

const SoldiersUnit = () => {

    // useState Here!
    const [soldiers, setSoldiers] = useState([])
    const [cart, setCart] = useState([])

    // useEffect Here!
    useEffect( () => {
        fetch("./fakedb.JSON")
        .then(res => res.json())
        .then(data => setSoldiers(data))
    }, [])

    // For Button 
    const handleAddToCart = soldier => {
        const newCart = [...cart, soldier];
        setCart(newCart)
    }
    return (
        <div className='soldier-container'>

            {/* This is for Soldiers Card Section */}
            <div className="soldiers-card-container">
                <h2 className='found-items'>{soldiers.length} Soldiers were found!</h2>
                <div className='soldiers-card'>
                {
                    soldiers.map(soldier => <Soldier 
                        key={soldier._id} 
                        soldier={soldier}
                        handleAddToCart={handleAddToCart}></Soldier>)
                }
                </div>
            </div>

                {/* This is Cart Section */}
            <div className="solder-cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default SoldiersUnit;