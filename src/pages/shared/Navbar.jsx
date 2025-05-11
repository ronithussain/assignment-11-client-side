// import { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import AuthContext from "../../context/AuthContext/AuthContext";
// import navImg from '../../assets/nav.jpg'
// import navLogo from '../../assets/logo-nav.jpg'



// const Navbar = () => {
//   const { user, signOutUser } = useContext(AuthContext);
//   // console.log("User Data:", user);


//   const handleLogOut = () => {
//     signOutUser()
//       .then(() => console.log('Successfully logged out'))
//       .catch(err => console.error('Logout failed:', err.message));
//   };

//   const links = <>
//     <NavLink className="mx-4 nav-link hover:scale-105 transition duration-300 hover:text-orange-500" to="/">Home</NavLink>
//     <NavLink className="mx-4 nav-link hover:scale-105 transition duration-300 hover:text-orange-500" to="/service">Service</NavLink>
//     {
//       user && (
//         <>
//           <NavLink className="mx-4 nav-link hover:scale-105 transition duration-300 hover:text-orange-500" to="/add-service">Add Service</NavLink>
//           <NavLink className="mx-4 nav-link hover:scale-105 transition duration-300 hover:text-orange-500" to="/my-reviews">My Reviews</NavLink>
//           <NavLink className="mx-4 nav-link hover:scale-105 transition duration-300 hover:text-orange-500" to="/my-service">My-Service</NavLink>
//         </>
//       )
//     }
//   </>
//   return (
//     <div className="navbar bg-[#030304] shadow-sm fixed top-0 w-full z-50 py-3 px-0  sm:px-3" style={{
//                         backgroundImage: `url(${navImg})`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                     }}>
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-gray-400 rounded-box z-1 mt-3 w-52 p-2 shadow">
//             {links}
//           </ul>
//         </div>

//         <Link to='/' className=" items-center md:flex hidden">
//           <img className="w-14" src={navLogo} alt="Logo" />
//           <h3 className="font-medium  sm:text-2xl  mb-2 md:text-3xl bg-gradient-to-r from-white via-white/70 to-[#1E3E62] text-transparent bg-clip-text text-xl">Service Reviews</h3>
//         </Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           {links}
//         </ul>
//       </div>

//       <div className="navbar-end flex gap-3">
//         {user ? (
//           <>
//             <button
//               onClick={handleLogOut}
//               className="mx-2 nav-link hover:scale-105 transition duration-300 hover:text-orange-500"
//             >
//               LogOut
//             </button>
//             <div className="avatar avatar-online mr-2 sm:mr-0">
//               <div className="w-12 rounded-full">
//                 <img
//                   className="rounded-full sm:w-[60px] w-[50px] cursor-pointer transition duration-300 hover:scale-105"
//                   referrerPolicy="no-referrer"
//                   src={user?.photoURL}
//                   alt=""
//                 />
//               </div>
//             </div>
//           </>
//         ) : (
//           <>
//             <Link to='/register'>
//               <button className="mx-2 nav-link hover:scale-105 transition duration-300 hover:text-orange-500">Register</button>
//             </Link>
//             <Link to='/login'>
//               <button className="mx-2 nav-link hover:scale-105 transition duration-300 hover:text-orange-500">Login</button>
//             </Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// _____________________________________



import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';
import { RxCross1 } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import navLogo from '../../assets/logo-nav.png'



const Navbar = () => {
  const { user,signOutUser } = UseAuth();

  const handleLogout = () => {
    signOutUser()
      .then(() => { })
      .catch(error => {
        console.log(error)
      })
  }

  const navOptions = <>
    <li><NavLink className="nav-link hover:text-[#FF6900] hover:scale-105 transition duration-300 font-medium" to="/">HOME</NavLink></li>
    <li><NavLink className="nav-link hover:text-[#FF6900] hover:scale-105 transition duration-300 font-medium" to="/aboutUs">ABOUT US</NavLink></li>
    <li><NavLink className="nav-link hover:text-[#FF6900] hover:scale-105 transition duration-300 font-medium" to="/service">SERVICE</NavLink></li>
    <li><NavLink className="nav-link hover:text-[#FF6900] hover:scale-105 transition duration-300 font-medium" to="/worker">WORKER</NavLink></li>
    <li><NavLink className="nav-link hover:text-[#FF6900] hover:scale-105 transition duration-300 font-medium" to="/blog">BLOG</NavLink></li>
    <li><NavLink className="nav-link hover:text-[#FF6900] hover:scale-105 transition duration-300 font-medium" to="/contact">CONTACTS</NavLink></li>
  </>;

  return (
    <div className='sticky top-0 z-50 bg-opacity-80 bg-white  w-[100%] shadow-sm '>
      <div className="max-w-screen-xl mx-auto navbar flex items-center justify-between px-0 md:px-0 ">

        {/* Logo Section */}
        <div className="">
          <Link to='/' className="flex items-center">
            <img className="w-16" src={navLogo} alt="Logo" />
            <h3 className="font-medium  sm:text-2xl  md:text-3xl  text-xl">Service <span className='text-[#FF6900]'>R</span>eviews</h3>
          </Link>
        </div>

        {/* Drawer for Mobile */}
        <div className="lg:hidden">
          <label htmlFor="my-drawer-4" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
        </div>

        {/* Navigation Links (Desktop View) */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal space-x-5">
            {navOptions}
          </ul>
        </div>

        {/* Contact & Buttons */}
        <div className='hidden md:block'>
          <div className="flex items-center gap-2 md:gap-4 ">
            <div className='hidden lg:flex items-center text-xl'>
              <button className='flex items-center gap-x-1'>
                <LuPhoneCall />
                <p>+000153779</p>
              </button>
            </div>

            {/* conditional */}
            {
              user?.email ?
                <>
                  <button onClick={handleLogout} className="animated-button px-4 py-2 text-white bg-[#F15A29] transition-all duration-500">
                    <span>Sign Out</span>
                  </button>
                </> :
                <>
                  <Link to="login" className="animated-button px-4 py-2 text-black hover:text-white bg-[#FFF9F9] transition-all duration-500 border border-orange-100">
                    <span>Sign In</span>
                  </Link>
                </>
            }

            <Link to="register" className="animated-button px-4 py-2 text-white bg-[#F15A29] transition-all duration-500">
              <span>Sign Up</span>
            </Link>

          </div>
        </div>

        {/* Drawer Sidebar */}
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle hidden" />
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full md:w-[50%] p-4">
            <div className='flex justify-end pt-2 pr-2'>
              {/* Close Button */}
              <button onClick={() => document.getElementById("my-drawer-4").checked = false}
                className="md:text-2xl text-xl  text-gray-600 hover:text-black transition duration-300">
                <RxCross1 />
              </button>
            </div>
            {/* Drawer Header */}
            <div className=" mb-4 mt-4">
            <Link to='/' className="flex items-center">
            <img className="w-16" src={navLogo} alt="Logo" />
            <h3 className="font-medium  sm:text-2xl  md:text-3xl  text-xl">Service <span className='text-[#FF6900]'>R</span>eviews</h3>
          </Link>
            </div>

            {/* Navigation Links */}
            <div className='space-y-4 ml-3'>
              {navOptions}
            </div>

            {/* Social Icons */}
            <div className='flex justify-center mt-10'>
              <div className="flex items-center space-x-6 text-[26px]">
                <a href="https://x.com/ZainHussai99859" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-blue-500 hover:text-white" />
                </a>
                <a href="https://www.facebook.com/zain.hussain.317274" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className='text-blue-500 hover:text-white' />
                </a>
                <a href="https://www.instagram.com/invites/contact/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-orange-400 hover:text-white" />
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
