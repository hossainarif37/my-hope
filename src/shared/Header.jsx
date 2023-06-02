import { Link } from "react-router-dom";
import bg from '../assets/images/counter_bg.jpg'
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Header = () => {
    return (
        <header style={{ backgroundImage: `url(${bg})` }} className="flex px-20 justify-between py-1 items-center border-b">
            <div className=" flex gap-5 font-bold text-[#ddd]">
                <span className="text-sm flex items-center gap-1"><FaPhoneAlt className="text-accent" /> +61-0403112456</span>
                <span className="text-sm flex items-center gap-1"><FaEnvelope className="text-accent" /> info@myhope.org.au</span>
            </div>
            <div className="flex gap-4">
                <Link className="btn btn-outline btn-sm btn-accent text-white" to='/qurbani'> Qurbani</Link>
                <Link className="btn btn-outline btn-sm btn-accent text-white" to=''>Join us</Link>
            </div>
        </header>
    );
};

export default Header;