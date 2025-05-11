import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginLottieImg from '../../assets/login.json'
import loginImg from '../../assets/login.jpg'
import login2 from '../../assets/login2.jpg'
import AuthContext from '../../context/AuthContext/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import SocialLogin from '../shared/SocialLogin';


const Login = () => {
    const { handleLoginUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [showsPassword, setShowsPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        const from = location.state?.from?.pathname || '/';

        // signInWithEmailAndPassword functionality
        handleLoginUser(email, password)
            .then(result => {
                setSuccess(true)
                Swal.fire({
                    icon: 'success',
                    title: 'Login is Successful!',
                    text: 'Welcome to our service reviews website.',
                });
                form.reset();
                navigate(from);
                // console.log(result.user)
            })
            .catch(err => {
                setError(err.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                });
                // console.log(err.message)
            })

    }
    return (
        <div className="hero min-h-screen"
            style={{
                backgroundImage: `url(${login2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* Lottie Animation */}
                <div className="text-center lg:text-left w-[60%] lg:w-[90%]">
                    <Lottie animationData={loginLottieImg} />
                </div>

                {/* Registration Card */}
                <div
                    className="relative card-body w-full max-w-lg shadow-2xl p-6 rounded-lg overflow-hidden"
                    style={{
                        backgroundImage: `url(${loginImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Blur Overlay */}
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

                    {/* Form Content */}
                    <div className="relative z-10">
                        <form
                            onSubmit={handleLogin}
                            className="fieldset space-y-4">
                            {/* Email */}
                            <label className="fieldset-label">Email</label>
                            <input type="email" name='email' className="input w-full" placeholder="Enter your email" />

                            {/* Password */}
                            <div className='relative'>
                                <label className="fieldset-label">Password</label>
                                <input
                                    type={showsPassword ? "text" : "password"}
                                    name='password'
                                    className="input w-full"
                                    placeholder="Enter your password" />
                                <button
                                    type='button'
                                    onClick={() => setShowsPassword(!showsPassword)}
                                    className='btn-sm absolute top-8 right-4 text-base'>
                                    {showsPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>

                            {/* Register Button */}
                            <button className="btn w-full mt-4">Login</button>

                            <SocialLogin></SocialLogin>

                            {/* Login Link */}
                            <p className="text-xs sm:text-xl text-center">
                                Already have an account? <Link className="text-red-600" to="/register">Please register now</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;