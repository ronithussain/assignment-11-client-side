import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import axios from 'axios';
import footerBg from '../assets/footer-bg.jpg'
import CountUp from 'react-countup';

const Service = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [countUp, setCountUp] = useState({ users: 0, reviews: 0, services: 0 });


    useEffect(() => {
        axios.get('http://localhost:8000/services')
            .then(response => {
                setServices(response.data);
                setCountUp(prev => ({ ...prev, services: response.data.length }));// countUp setStates data
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
                setLoading(false);
            });

        // ✅ ইউজার, রিভিউ, সার্ভিস সংখ্যা ফেচ করা
        axios.get('http://localhost:8000/stats')
            .then(response => {
                setCountUp(response.data);
            })
            .catch(error => {
                console.error('Error fetching stats:', error);
            });

    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className=' lg:mt-[120px] mt-[110px]  py-12' style={{
            backgroundImage: `url(${footerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className=' w-11/12 mx-auto'>
                <h2>Service: {services.length}</h2>
                <h2 className='lg:text-5xl text-2xl  md:text-3xl font-bold bg-gradient-to-r from-white via-white/70 to-[#1E3E62] text-transparent bg-clip-text text-center mb-6'>Featured Services Section</h2>

                {/* Search Input */}
                <div className="w-full max-w-lg mb-6 mx-auto">
                    <input
                        type="text"
                        placeholder="Search services..."
                        className="w-full p-2 rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 bordersC transition-all duration-300 ease-in-out text-gray-100"
                    />
                </div>
                {/* CountUp Section */}
                <div className='flex justify-center gap-10 text-center mb-12'>
                    <div>
                        <h3 className='text-4xl font-bold text-white'><CountUp end={countUp.users} duration={3} /></h3>
                        <p className='text-lg text-gray-300'>Total Users</p>
                    </div>
                    <div>
                        <h3 className='text-4xl font-bold text-white'><CountUp end={countUp.reviews} duration={3} /></h3>
                        <p className='text-lg text-gray-300'>Total Reviews</p>
                    </div>
                    <div>
                        <h3 className='text-4xl font-bold text-white'><CountUp end={countUp.services} duration={3} /></h3>
                        <p className='text-lg text-gray-300'>Total Services</p>
                    </div>
                </div>
                {/* Service Cards */}
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