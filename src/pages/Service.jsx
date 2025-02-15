import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import axios from 'axios';
import footerBg from '../assets/footer-bg.jpg'
import CountUp from 'react-countup';
import LoadingSpinner from '../components/LoadingSpinner';

const Service = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [countUp, setCountUp] = useState({ users: 0, reviews: 0, services: 0 }); // react countup useState;
    // __________________________________________
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');


    useEffect(() => {
        // service all data fetch in this api
        axios.get(`http://localhost:8000/services?filter=${filter}&search=${search}`)
            .then(response => {
                setServices(response.data);
                setCountUp(prev => ({ ...prev, services: response.data.length }));// countUp setStates data
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
                setLoading(false);
            });

        // user reviews, service count fetching;
        axios.get('http://localhost:8000/stats')
            .then(response => {
                setCountUp(response.data);
            })
            .catch(error => {
                console.error('Error fetching stats:', error);
            });

    }, [filter,search]);
    console.log(filter);

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>;
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

                {/* Search Input and filter input section*/}
                <div className="w-full max-w-2xl mx-auto my-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                    {/* Search Input */}
                    <div className="w-full sm:w-1/2">
                        <input
                            type="text"
                            name='search'
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search services..."
                            className="w-full px-4 py-3 rounded-lg shadow-md text-gray-900 bg-white border border-gray-300 
                     focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
                        />
                    </div>

                    {/* Filter Input */}
                    <div className="w-full sm:w-1/2">
                        <select
                        name='category'
                        id='category'
                        onChange={e => setFilter(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg shadow-md bg-white border border-gray-300 text-gray-900 
                     focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
                        >
                            <option>All Categories</option>
                            <option>Web Development</option>
                            <option>Graphic Design</option>
                            <option>SEO</option>
                            <option>Marketing</option>
                            <option>App Development</option>
                            <option>Cyber Security</option>
                            <option>Cloud Computing</option>
                            <option>Video Editing</option>
                            <option>Business Consultancy</option>
                            <option>Photography</option>
                        </select>
                    </div>
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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  '>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;