import React from 'react'
import './biscuit.css'
import 'bootstrap/dist/css/bootstrap.css';
import { AiOutlinePercentage } from "react-icons/ai";
import idetails from '/home/manoj/react1/frontend/src/idetails.jpg'
import Container from 'react-bootstrap/Container';
import img2 from '/home/manoj/react1/frontend/src/859d1650-431c-4cfa-bf29-b1bc84cc89a6.__CR0,0,970,600_PT0_SX970_V1___.jpg'
import {Navigate, useLocation,useNavigate} from 'react-router-dom';
import ilaptop from '/home/manoj/react1/frontend/src/ilaptop.jpg'

import idetails2 from '/home/manoj/react1/frontend/src/idetails2.jpg'
import idetails3 from '/home/manoj/react1/frontend/src/iproduct.jpg'
const Laptop = ()=>{
    const {state} = useLocation();

return (

<div>
<container>
<row>
<div className='bis1'>

  <div className='inn1'> 
  <img src={ilaptop} alt="biscuit" className='imgs12'/>
<div className='pro1'>

<h1 className='head1'>2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD) - Space Grey</h1>
<a href='https://www.apple.com/in/store' >Visit the Apple Store</a><hr />
<h1 className='span1'><span className='red1'>-12%</span> ₹1,25,990.00</h1>
<p>M.R.P.: <span className='mrp'>₹1,42,900.00</span></p>

<p>Inclusive of all taxes</p>
<p>EMI starts at ₹5,931. No Cost EMI available <a href='#' >EMI Options</a></p>
<p><span className='red1'><AiOutlinePercentage/> Save Extra</span> with 4 offers </p><hr/>
<p><span className='red1'>Bank Offer (2):</span>lat INR 7000 Instant Discount on HDFC Bank Credit Car…<span className='red1'>|</span><a href="#">Details</a> </p><hr/>
<a href="#" >See More +2</a>
<div className="dets1"><hr/>
<p>Size name: 	&nbsp;<span className='span1'>512 GB</span></p> 
<p>Style name: 	<span className='span1'>Apple M1</span></p>
<p>Colour:<span className='span1'>Space Grey</span></p>
<p>
Brand	<span className='span1'>Apple</span></p>
<p>Model Name <span className='span1'>MacBook Pro</span></p>
<p>Screen Size	<span className='span1'>	13 Inches</span></p>
<p>Hard Disk Size	<span className='span1'>8 GB</span></p>
<p>CPU Model	<span className='span1'>Core M Family</span></p>
<p>RAM Memory	<span className='span1'>8 GB</span></p>
<p>Operating System	<span className='span1'>MacOS 10.14 Mojave</span></p>

<p>Graphics Card Description	<span className='span1'>Integrated</span></p>

<p>Special Feature<span className='span1'>Anti reflective</span></p>

</div>
<hr />
<h3 className="hed1">About this Item</h3>
<ul>
<li>Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance</li>
<li>Get more done with up to 20 hours of battery life, the longest ever in a Mac</li>
<li>8-core CPU delivers up to 2.8x faster performance to fly through workflows quicker than ever</li>
<li>8-core GPU with up to 5x faster graphics for graphics-intensive apps and games</li>
<li>16-core Neural Engine for advanced machine learning</li>
<li>8GB of unified memory so everything you do is fast and fluid</li>
<li>Superfast SSD storage launches apps and opens files in an instant</li>
</ul><hr />
</div>
</div>
</div>
<img src={idetails} alt="pic" className='w-100'/>
<img src={idetails2} alt="pic" className='w-100'/>
<img src={idetails3} alt="pic" className='w-100'/>
<div className='buycart'>
  <p className='para1'>
  ₹1,25,990.00 with <span className='red1'>12% off </span><br /><br />
Free Delivery June 22 - 25 <br /><br />
Fastest delivery: June 18 - 22 <br /><br />
  </p><hr />
  <h4 className='h4'>IN STOCK</h4><br />
  <div className='ali1'>
    <p className='pa1'>Quantity: </p>
    <input type="number" className='num1'></input>
  </div>
  <button className='but12'>Buy Now</button>
<button className='but21'>Add to Cart</button><br/><br/><hr />
<button>Add To Wish List</button>
</div>
</row>
</container>
</div> 
)
}

export default Laptop;