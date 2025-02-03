import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import loginLottieImg from '../../assets/login.json.json'
import loginImg from '../../assets/login.jpg'
import login2 from '../../assets/login2.jpg'


const Login = () => {


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target; e;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

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
                <div className="text-center lg:text-left w-96">
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
                            <label className="fieldset-label">Password</label>
                            <input type="password" name='password' className="input w-full" placeholder="Enter your password" />

                            {/* Register Button */}
                            <button className="btn w-full mt-4">Login</button>

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