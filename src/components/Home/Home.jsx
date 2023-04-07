import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import { toast } from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    console.log(cart);

    const handleAddToCart = tshirt => {

        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            toast("You have added this t-shirt")

        } else {
            const newCart = [...cart, tshirt]
            setCart(newCart)
        }
    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);

        setCart(remaining)
    }
    return (

        <div className=' flex justify-between mt-10 mx-10'>
            <div className=' grid grid-cols-3 gap-10 '>
                {tshirts.map(tshirt => (
                    <TShirt
                        key={tshirt._id}
                        handleAddToCart={handleAddToCart}
                        tshirt={tshirt} />
                ))}
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;