import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
    }, [])

    if(loading){
        return <div>Loading...</div>;
    }

    return (
        <div className=' w-11/12 mx-auto lg:mt-[120px] mt-[130px]'>
            <div className='my-24'>
                <h2>Service: {services.length}</h2>
                <h2 className='lg:text-4xl text-2xl  mb-4 md:text-2xl font-bold bg-gradient-to-r from-[#17153B] via-[#222831] to-[#1E3E62] text-transparent bg-clip-text text-center'>Featured Services Section</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6  '>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;