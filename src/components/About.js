import Profile from "./Profile1";
import { Outlet } from "react-router-dom"
import {Link} from "react-router-dom"
 const About = () =>{
    return(
        <>
            <h1>About us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, iste, expedita beatae dicta, porro quasi nihil minima iusto modi esse nobis obcaecati laborum sint sapiente? Fuga minus molestias earum id?</p>
            <p>sunoooo.............thanku</p>
            <Link to="/about/profile">Profile</Link>
            <br />
            <Link to="/about/classProfile">classProfile</Link>
            <br/>
            <Link to="/referral">Refer to your friend</Link>
            <Outlet/>
        </>
    )
}
export default About;