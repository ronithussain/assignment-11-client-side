import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8000/services/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log("Fetched Service Data:", data); 
                setService(data);
                setLoading(false);
            })
    }, [id]);

    if (loading) {
        return <p className="text-center text-xl">Loading...</p>;
    }


    return (
        <div className="lg:mt-[130px] mt-[130px] w-11/12 mx-auto my-10 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
            <img 
                src={service.image} 
                alt={service.title} 
                className="w-full md:w-1/2 rounded-lg mx-auto"
            />
            <p className="text-lg my-4">{service.company}</p>
            <p className="text-gray-400">{service.description}</p>
            <a 
                href={service.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block mt-4 text-blue-400 underline"
            >
                Visit Website
            </a>
        </div>
    );
};

export default ServiceDetails;
