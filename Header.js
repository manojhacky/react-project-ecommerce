import {Link} from 'react-router-dom'
import * as React from 'react'
import './header.css'
import img1 from '/home/manoj/react1/frontend/src/8ce382c6-dbee-4b09-901f-90fe2d97532c.jpg'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
const Header =()=>{
    const navigate = useNavigate();
   return (
<div>
<marquee className="mar1">Big Sale 50% Offer</marquee>
 <Container>
 <row>
<div className='header1'>
<img src={img1} alt="logo" className="img11"/>
<input type='search' name="search"  placeholder="search here" className="inp1"></input>
<button className='buts1'>Signup</button>
<button className='buts1' onClick={()=>navigate("/login")}>Login</button>
</div>
</row>
<row>
    <ul className='nav1'>
    <li className='link1'>
        <Link to="/" className='link1'>Home</Link>
    </li>
    <li className='link1'>
        <Link to="/contact" className='link1'>Customer service</Link>
    </li>
    <li className='link1'>
        <Link to="/about" className='link1'>Your Account</Link>
    </li>
    
    <li className='link1'>
     {/* <Link to="/test" className='link1'>Test1</Link>  */}
       <a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer" className="link1">About Us</a>
    </li>
    </ul>
    </row>
    </Container>
    </div>

    
)

   }

export default Header