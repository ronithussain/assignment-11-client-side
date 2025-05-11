import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import footerBg from '../../assets/footer-bg.jpg'
import footerLogo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div style={{
            backgroundImage: `url(${footerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>

            {/* Footer Section */}
            <footer className=" text-gray-300 py-14 px-3">
                <div className="max-w-screen-xl mx-auto ">
                    {/* Logo and Description */}
                    <div data-aos="fade-up"
                        className='flex flex-col sm:gap-0 gap-y-2 sm:flex-row justify-between sm:items-center'>
                        <div className="flex items-center -ml-3">
                            <img className="w-16" src={footerLogo} alt="Logo" />
                            <h3 className="font-medium lg:text-2xl md:text-xl text-xl">Service Reviews</h3>
                        </div>
                        <div>
                            <div className="flex items-center space-x-6">
                                <a href="https://x.com/ZainHussai99859" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="text-blue-500 hover:text-white sm:text-2xl" />
                                </a>
                                <a className="" href="https://www.facebook.com/zain.hussain.317274?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF className='text-blue-500 hover:text-white sm:text-2xl' />
                                </a>
                                <a href="https://www.instagram.com/invites/contact/?igsh=ehc5d06duq73&utm_content=dwbztt4 " target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-orange-400 hover:text-white sm:text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='border-b sm:mt-2 mt-4 border-[#F54900]'></div>
                    {/* ___________________________________________ */}

                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-12 gap-8'>
                        {/* Additional Links */}
                        <div className=''>
                            <h4 className="text-white font-semibold border-b-2 border-orange-600 pb-2 inline-block">
                                About Us
                            </h4>
                            <ul className="sm:mt-3 mt-2 space-y-2">
                                <p>It is a long established fact that a reader will be distracted by the readable counter of a page.</p>
                            </ul>
                        </div>
                        {/* Movies Links */}
                        <div className=''>
                            <h4 className="text-white font-semibold border-b-2 border-orange-600 pb-2 inline-block">
                                SERVICE
                            </h4>
                            <ul className="sm:mt-3 mt-2 space-y-2 flex flex-col">
                                <Link to='/about-us' className="link link-hover hover:text-white">About Us</Link>
                                <Link to='/terms-and-policy' className="link link-hover hover:text-white">Terms & Policy</Link>
                            </ul>
                        </div>

                        {/* Additional Links */}
                        <div className=''>
                            <h4 className="text-white font-semibold border-b-2 border-orange-600 pb-2 inline-block">
                                ADDITIONAL
                            </h4>
                            <ul className="sm:mt-3 mt-2 space-y-2">
                                <Link to='/contact-us' className="link link-hover hover:text-white">Contact Us</Link>
                            </ul>
                        </div>

                        {/* Newsletter and Social Media */}
                        <div className=''>
                            <h4 className="text-white font-semibold border-b-2 border-orange-600 pb-2 inline-block">
                                NEWSLETTER
                            </h4>
                            <form className="sm:mt-3 mt-2">
                                <input
                                    type="email"
                                    placeholder="Newsletter Sign Up"
                                    className="w-full bg-gray-800 text-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 mt-2"
                                />
                            </form>
                        </div>
                    </div>

                    <p className="mt-2 text-center text-gray-400">Copyright © 2024. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;