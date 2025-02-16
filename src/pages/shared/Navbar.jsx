import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import navImg from '../../assets/nav.jpg'
import navLogo from '../../assets/logo-nav.jpg'



const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  // console.log("User Data:", user);


  const handleLogOut = () => {
    signOutUser()
      .then(() => console.log('Successfully logged out'))
      .catch(err => console.error('Logout failed:', err.message));
  };

  const links = <>
    <NavLink className="mx-4 nav-link hover:scale-105 transition duration-300 hover:text-orange-500" to="/">Home</NavLink>
    <NavLink className="mx-4 nav-link hover:scale-105 transition duration-300 hover:text-orange-500" to="/service">Service</NavLink>
    {
      user && (
        <>
          <NavLink className="mx-4 nav-link hover:scale-105 transition duration-300 hover:text-orange-500" to="/add-service">Add Service</NavLink>
          <NavLink className="mx-4 nav-link hover:scale-105 transition duration-300 hover:text-orange-500" to="/my-reviews">My Reviews</NavLink>
          <NavLink className="mx-4 nav-link hover:scale-105 transition duration-300 hover:text-orange-500" to="/my-service">My-Service</NavLink>
        </>
      )
    }
  </>
  return (
    <div className="navbar bg-[#030304] shadow-sm fixed top-0 w-full z-50 py-3 px-0  sm:px-3" style={{
                        backgroundImage: `url(${navImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-400 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        <Link to='/' className=" items-center md:flex hidden">
          <img className="w-14" src={navLogo} alt="Logo" />
          <h3 className="font-medium  sm:text-2xl  mb-2 md:text-3xl bg-gradient-to-r from-white via-white/70 to-[#1E3E62] text-transparent bg-clip-text text-xl">Service Reviews</h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end flex gap-3">
        {user ? (
          <>
            <button
              onClick={handleLogOut}
              className="mx-2 nav-link hover:scale-105 transition duration-300 hover:text-orange-500"
            >
              LogOut
            </button>
            <div className="avatar avatar-online mr-2 sm:mr-0">
              <div className="w-12 rounded-full">
                <img
                  className="rounded-full sm:w-[60px] w-[50px] cursor-pointer transition duration-300 hover:scale-105"
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to='/register'>
              <button className="mx-2 nav-link hover:scale-105 transition duration-300 hover:text-orange-500">Register</button>
            </Link>
            <Link to='/login'>
              <button className="mx-2 nav-link hover:scale-105 transition duration-300 hover:text-orange-500">Login</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;