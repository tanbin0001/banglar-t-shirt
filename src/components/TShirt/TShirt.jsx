import React from 'react';

const TShirt = ({ tshirt, handleAddToCart }) => {
    // console.log(tshirt);
    const { picture, name, price, _id } = tshirt;
    return (
        <div className="card card-compact w-64 bg-base-100 shadow-xl">
            <figure className='w-[250px]'><img src={picture} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price} </p>
                <div className="card-actions ">
                    <button onClick={() => { handleAddToCart(tshirt) }} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default TShirt;