import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    console.log('from 4', cart);
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    } else {
        message = <div>
            <h1>Boroloxx</h1>
        </div>
    }
    return (
        <div>
            <h1 className={cart.length === 1 ? ' bg-red-500' : 'bg-blue-400'} >Orders Summary: {cart.length}</h1>
            {
                cart.length > 2 ? <span >Aro kino</span> : <span>fokira</span>
            }
            {message}
            {
                cart.map(tshirt => <p className='py-3'>

                    {tshirt.name}

                    <button onClick={() => { handleRemoveFromCart(tshirt._id) }} className=" w-8 h-8 btn-error rounded-full ml-2">X</button>
                </p>)
            }
            {
                cart.length === 2 && <p>ube ube</p>
            }
            {
                cart.length === 3 || <p>thinta  kino  </p>
            }
        </div>
    );
};

export default Cart;

/* CONDITIONAL RENDERING
1. if else
2. ternary
3. logical &&: prothom ta shotti hole 2nd tay jabe;
4. logical || : prothom ta vul hole 2nd tay jabe;
*/

/* 
CONDITIONAL CSS CLASS
*/