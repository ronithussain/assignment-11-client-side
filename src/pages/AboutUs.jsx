import aboutUsImg from '../assets/bgImg4.jpg'
import bgImg from '../assets/review.jpg'
import { motion } from "framer-motion";


const AboutUs = () => {
    return (
        <div className='lg:mt-[105px] mt-[105px]' style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className="container mx-auto px-4 py-8">
                <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-center text-gray-300 mb-10">About Us</h1>
                <div className="flex flex-col md:flex-row items-center justify-between sm:space-x-4 space-y-8 md:space-y-0">
                    <div className="w-full md:w-1/2">
                        <motion.img
                            src={aboutUsImg}
                            alt="About Us"
                            className="w-full h-auto rounded-lg shadow-xl"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            whileHover={{ scale: 1.05 }}
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="sm:text-3xl text-2xl font-semibold text-gray-300">What is Service Review System?</h2>
                        <p className="sm:text-lg text-base text-gray-400 leading-relaxed">
                            Our platform allows users to share and read reviews about various services. From booking a hotel to hiring a freelancer, we provide an open space to rate and review services, ensuring better decision-making for everyone. Whether you want to add a new service or review an existing one, our system allows you to manage your feedback in a secure and user-friendly way.
                        </p>
                        <h3 className="sm:text-3xl text-2xl font-semibold text-gray-300">Why Choose Us?</h3>
                        <ul className="list-disc list-inside text-lg text-gray-400">
                            <li>Easy-to-use platform for both service providers and users</li>
                            <li>Manage reviews and services with ease</li>
                            <li>Search and filter reviews to find the best services</li>
                            <li>Stay connected with partners and services</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;