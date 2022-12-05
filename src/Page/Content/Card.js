import React from 'react';

const Card = ({ data }) => {
    console.log(data);
    const { car_name, engine, location, milage:mileage, picture, price, transmission } = data;
    return (
        <div className="card shadow-md bg-white rounded">
            <div className='flex justify-between p-8'>
                <p className='text-2xl font-bold'>{car_name}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-orange-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
            </div>
            <img src={picture} alt="Shoes" className="px-8" />
            <div className="px-8 my-5">
                <div className='flex justify-between items-center'>
                    <p>Mileage: {mileage} KM</p>
                    <p>Location: {location}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Engine: {engine}</p>
                    <p>Transmission: {transmission}</p>
                </div>
                <div className='flex justify-between items-center mt-5'>
                    <p className='text-2xl font-bold'>{price}$</p>
                    <button className='btn bg-orange-600 bg-opacity-70 border-0 hover:bg-orange-400'>More Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;