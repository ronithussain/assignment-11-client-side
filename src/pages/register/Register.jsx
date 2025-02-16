import Lottie from 'lottie-react';
import registerImg from '../../assets/register.jpg'
import registerLottieImg from '../../assets/register.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import AuthContext from '../../context/AuthContext/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';




const Register = () => {
    const { handleRegister, handleUpdateProfile } = useContext(AuthContext);
    const [error, setError] = useState("")
    const location = useLocation();
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const [showsPassword, setShowsPassword] = useState(false);



    const handleCreateUser = (e) => {
        e.preventDefault();
        // setSuccess(false)
        setError("");
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must contain at least 6 characters!',
            });
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Password must contain at least one lowercase letter");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase letter");
            return;
        }

        // console.log(name, photoUrl, email, password)

        // handleRegisterWithEmailAndPassword
        handleRegister(email, password)
            .then(res => {
                handleUpdateProfile(name, photoUrl);
                setSuccess(true);
                toast.success('Registration Successful!');
                // console.log(res.user)
                form.reset();
                navigate(location?.state?.from || "/");
            })
            .catch(err => {
                setSuccess(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed!',
                    text: err.message,
                });
                // console.log(err.message)
            })


    }
    return (
        <div className="hero min-h-screen lg:mt-[105px] mt-[105px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* Lottie Animation */}
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={registerLottieImg} />
                </div>

                {/* Registration Card */}
                <div
                    className="relative card-body w-full max-w-lg shadow-2xl p-6 rounded-lg overflow-hidden"
                    style={{
                        backgroundImage: `url(${registerImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Blur Overlay */}
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-md"></div>

                    {/* Form Content */}
                    <div className="relative z-10">
                        <form
                            onSubmit={handleCreateUser}
                            className="fieldset space-y-4">
                            {/* Name */}
                            <label className="fieldset-label">Name</label>
                            <input type="text" name='name' className="input w-full" placeholder="Enter your name" />

                            {/* Photo URL */}
                            <label className="fieldset-label">Photo URL</label>
                            <input type="url" name='photoUrl' className="input w-full" placeholder="Enter your photo URL" />

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
                            <button className="btn w-full mt-4">Register</button>

                            {/* Login Link */}
                            <p className="text-xs sm:text-xl text-center">
                                Already have an account? <Link className="text-red-600" to="/login">Please Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;