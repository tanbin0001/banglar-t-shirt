import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const Grandpa = () => {
    return (
        <div className='text-center'>
            <h1>Grandpa</h1>
            <section className='flex '>
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;