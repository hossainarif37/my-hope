import { Link } from "react-router-dom";
import webLogo from '../assets/images/Web-logo-12_2_200x80.png'


const Navbar = () => {
    const menuItems = <>
        <li><Link to=''>About Us</Link></li>
        <li><Link to=''>Our Events</Link></li>
        <li><Link to=''>Gallery</Link></li>
        <li><Link to=''>Donations</Link></li>
        <li><Link to=''>Contact</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 px-20 items-center sticky top-0 z-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'>
                    <h1 className="text-4xl font-extrabold font-serif text-[#222]">HOPE</h1>
                    <small className="font-bold ">HOST OF THE PEACE ENVIRONMENT Inc.</small>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 font-semibold text-[#333]">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;