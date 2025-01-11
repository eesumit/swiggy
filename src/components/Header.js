import Logo from "../assets/img/zestyhub.png";
import {Link, useLocation} from 'react-router-dom'

import { useState,useEffect } from "react";
const Header = () => {
    const [login,setLogin] = useState("Login");
    const location = useLocation();
    const [color, setColor] = useState("pink")
    useEffect(() => {
        setColor(location.pathname == "/referral" ? "#551A8F" : "magenta");
    }, [location.pathname]);
    return(
        <>
            <div className="header"> 
            <img data-testid="logo" className="logo h-28 p-2" alt="logo" src={Logo} />
            <ul>
                <li><Link to="/" className={`link ${location.pathname === '/' ? 'activeLink' : ''}`}>Home</Link></li>
                <li><Link to="/contact" className={`link ${location.pathname === '/contact' ? 'activeLink' : ''}`}>Contact us</Link></li>
                <li><Link to="/about" className={`link ${location.pathname === '/about' ? 'activeLink' : ''}`}>About</Link></li>
                <li><Link to="/language" className={`link ${location.pathname === '/language' ? 'activeLink' : ''}`}>Language</Link> </li>
                <li><Link to="/help" className={`link ${location.pathname === '/help' ? 'activeLink' : ''}`}>Help</Link></li>
                <li onClick={()=>{
                    if(login==="Login") setLogin("Logout");
                    else setLogin("Login")
                }}><Link to="/login" className={`link ${location.pathname === '/login' ? 'activeLink' : ''}`}>{login}</Link></li>
                <li><Link to="/referral" className={`link ${location.pathname === '/referral' ? 'activeLink' : 'non-active'}`}>Refer&Earn</Link></li>
            </ul>
            </div>
        </>
    )
}

export default Header;