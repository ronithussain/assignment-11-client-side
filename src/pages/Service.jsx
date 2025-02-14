import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import axios from 'axios';
import footerBg from '../assets/footer-bg.jpg'

const Service = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        axios.get('http://localhost:8000/services')
            .then(response => {
                setServices(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className=' lg:mt-[120px] mt-[130px]  py-12' style={{
            backgroundImage: `url(${footerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className=' w-11/12 mx-auto'>
                <h2>Service: {services.length}</h2>
                <h2 className='lg:text-5xl text-2xl  md:text-3xl font-bold bg-gradient-to-r from-white via-white/70 to-[#1E3E62] text-transparent bg-clip-text text-center mb-6'>Featured Services Section</h2>
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