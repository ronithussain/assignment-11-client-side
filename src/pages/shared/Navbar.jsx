import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
  const links = <>
    <NavLink className="mx-4 nav-link hover:scale-105 transition duration-300 hover:text-orange-500" to="/">Home</NavLink>
    <NavLink className="mx-4 nav-link hover:scale-105 transition duration-300 hover:text-orange-500" to="/service">Service</NavLink>
    <NavLink className="mx-4 nav-link hover:scale-105 transition duration-300 hover:text-orange-500" to="/add-service">Add Service</NavLink>
    <NavLink className="mx-4 nav-link hover:scale-105 transition duration-300 hover:text-orange-500" to="/my-reviews">My Reviews</NavLink>
    <NavLink className="mx-4 nav-link hover:scale-105 transition duration-300 hover:text-orange-500" to="/my-service">My-Service</NavLink>
  </>
  return (
    <div className="navbar bg-[#714B4E] shadow-sm fixed top-0 w-full z-50 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        <div className=" items-center md:flex hidden">
          <img className="w-14" src="/public/logo-nav.jpg" alt="Logo" />
          <h3 className="font-medium text-black">Service Reviews</h3>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-3">

        <Link to='/register'>
          <button className="mx-2 nav-link hover:scale-105 transition duration-300 hover:text-orange-500">Register</button>
        </Link>
        <Link to='/login'>
          <button className="mx-2 nav-link hover:scale-105 transition duration-300 hover:text-orange-500">Login</button>
        </Link>
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;