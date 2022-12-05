import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

const SellerPage = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleSubmit = event => {
        setLoading(true)
        event.preventDefault()
        const form = event.target;
        const car_name = form.car_name.value;
        const engine = form.engine.value;
        const location = form.location.value;
        const mileage = form.mileage.value;
        const transmission = form.engine.value;
        const price = form.price.value;
        const picture = form.picture.files[0];
        const formData = new FormData()
        formData.append('image', picture)
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`,{
            method:"POST",
            body: formData,
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                const carData = {
                    car_name,
                    location,
                    picture: data.data.display_url,
                    engine,
                    transmission,
                    price,
                    mileage
                }
                axios.put('http://localhost:5000/sellcar', carData)
                .then(res => {
                    toast.success('Product Added Successfully')
                    setLoading(false)
                    form.reset()
                    navigate('/')
                })
            }
        })
    }

    if(loading){
        return <div className='min-h-[80vh] flex justify-center items-center'><BounceLoader color="#FFA500" /></div>
    }

    return (
        <div className='container mx-auto mt-10'>
            <form onSubmit={handleSubmit} className='flex md:w-3/4 lg:w-1/2 mx-auto flex-col gap-3'>
                <div className='md:flex gap-3'>
                    <input name='car_name' required placeholder='Car Name' type="text" className='input border w-full pl-2' />
                </div>
                <div className='md:flex gap-3'>
                    <input name='mileage' required placeholder='Mileage' type="text" className='input border w-full pl-2' />
                    <input name='location' required placeholder='Location' type="text" className='input border w-full pl-2 mt-2 md:mt-0' />
                    <input name='engine' required placeholder='Engine' type="text" className='input border w-full pl-2 mt-2 md:mt-0' />
                </div>
                <div className='md:flex gap-3'>
                    <input name='transmission' required placeholder='Transmission' type="text" className='input border w-full pl-2' />
                    <input name='price' required placeholder='Price' type="text" className='input border w-full pl-2' />
                </div>
                <div className='md:flex gap-5'>
                    <input name='picture' type="file" className="file-input w-full file-input-error" />
                    <button type='submit' className='btn w-full md:w-40 mt-5 md:mt-0 bg-orange-600 bg-opacity-70 border-0 hover:bg-orange-400'>Advertise</button>
                </div>
            </form>
        </div>
    );
};

export default SellerPage;