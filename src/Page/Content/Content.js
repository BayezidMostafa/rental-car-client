import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Card from './Card';
import { BounceLoader } from 'react-spinners';

const Content = () => {

    const {data: cardata = [], isLoading} = useQuery({
        queryKey: ['cardata'],
        queryFn: async() => {
            const res = await axios.get('http://localhost:5000/cars')
            return res.data
        }
    })

    if(isLoading){
        return <div className='min-h-[80vh] flex justify-center items-center'><BounceLoader color="#FFA500" /></div>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto my-10'>
            {
                cardata.map(data => <Card key={data._id} data={data}/>)
            }
        </div>
    );
};

export default Content;