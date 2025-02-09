import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                navigate('/');
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <>
            <div className="flex justify-center items-center mb-4">

                <button
                    onClick={handleGoogleLogin}
                    className="btn w-full flex items-center justify-center gap-2 px-4 py-2 rounded transition "
                >
                    Sign in with Google
                </button>
            </div>
        </>
    );
};

export default SocialLogin;