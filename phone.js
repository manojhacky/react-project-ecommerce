import React from 'react'
import './biscuit.css'
import { AiOutlinePercentage } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import imgheadph from '/home/manoj/react1/frontend/src/boatheadphone.jpg'
import boatad from "/home/manoj/react1/frontend/src/adboat.jpg"
import {Navigate, useLocation,useNavigate} from 'react-router-dom';
import videoad from '/home/manoj/react1/frontend/src/jbl-sound-that-fits-you.mp4'
const Phone= ()=>{
  //  const {state} = useLocation();
 // AiOutlinePercentage
return (

<div>
<container>
<row>
<div className='bis1'>
<video src={videoad} width="100%" height="400" muted controls="" autoplay="true" className="vid1" autoPlay loop type='video/mp4'
        />
  <div className='inn1'> 
  <img src={imgheadph} alt="biscuit" className='imgs12'/>
<div className='pro1'>
<h1 className='head1'><sapn></sapn><br/>boAt Rockerz 450 Bluetooth Wireless On Ear Headphones with Mic and Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions and Dual Modes (Aqua Blue)</h1>
<h1 className='span1'><span className='red1'>-65% </span>₹1,399.00</h1>
<p>M.R.P.: <span className='mrp'>₹3,990.00</span></p>


<p>	Inclusive of all taxes</p>
<p><span className='red1'><AiOutlinePercentage/> Save Extra</span> with 3 offers </p><hr/>
<p><span className='red1'>Bank Offer (2):</span>10% Instant Discount up to INR 1500 on SBI Credit Card Non-EMI Transactions. Min purchase value INR 5000 <span className='red1'>|</span><a href="#">Details</a> </p><hr/>
<a href="#" >See More +1</a>
 <div className="dets1"><hr/>
<p>Style name:	&nbsp;<span className='span1'>Rockerz 450</span></p> 
<p>Brand	<span className='span1'>BoAt</span></p>
<p>Ear Placement<span className='span1'>On Ear</span></p>
<p>Colour<span className='span1'>Aqua Blue</span></p>
<p>Connector Type<span className='span1'>Wireless</span></p>
<p>Model Name<span className='span1'>Rockerz 450</span></p>

</div> 
<hr />
<h5 className="hed1">About this item</h5>
<ul>
<li>Playback- It provides a massive battery backup of upto 15 hours for a superior playback time.</li>
<li>Drivers- Its 40mm dynamic drivers help pump out immersive HD audio all day long.</li>
<li>Earcushions- It has been ergonomically designed and structured as an on-ear headphone to provide the best user experience with its comfortable padded earcushions and lightweight design</li>
<li>Controls- You can control your music without hiccups using the easy access controls, communicate seamlessly using the built-in mic, access voice assistant and always stay in the zone</li>
<li>Dual Modes- One can connect to boAt Rockerz 450 via not one but two modes, Bluetooth as well as AUX</li>
{/* <li>Hand Wash/Dry clean. When you receive this British slim fit suit vest, the pocket is closed by some stitches. So after cutting stitches, you can use them.</li> */}
<li>1 year warranty from the date of purchase</li>
</ul><hr />
<ul>
<h3>Special offers and product promotions</h3>
<p><sapn>Size name: M  |  Color Name: Blue  |  Number of Items: 1      Promotions can vary depending on size name/color name/number of items.<a href='#'>here's how</a></sapn></p>
    <li>10% Instant Discount up to INR 500 on SBI Credit Card Transactions. Min purchase value INR 2000.<a href='#'>here's how</a></li>
<li>Prime Savings No cost EMI available on select cards. Please check 'EMI options' above for more details. <a href='#'>here's how</a></li>
<li>No cost EMI available on select cards. Please check 'EMI options' above for more details.<a href='http://localhost:3001/login'>Signup free to use</a></li>
<li>Get GST invoice and save up to 28% on business purchases.</li>


</ul>
</div>
</div>
</div>
{/* <div className="dets1"><hr/>
<h2>Product Details</h2>
<p>Product Dimensions : 	&nbsp;<span className='span1'>71.12 x 53.34 x 1.27 cm; 450 Grams</span></p> 
<p>Date First Available : <span className='span1'> 22 March 2022</span></p>
<p>ASIN :  <span className='span1'>B09W5JXBCQ</span></p>
<p>Item model number:<span className='span1'>Wt</span></p>
<p>Department :<span className='span1'>Mens</span></p>
<p>Item Weight :<span className='span1'>450 g</span></p>
<p>Item Dimensions LxWxH :<span className='span1'>71.1 x 53.3 x 1.3 Centimeters</span></p>
<p>Best Sellers Rank:<span className='span1'>#9,499 in Clothing & Accessories <a href="#" >(see top 100 in clothing and accessories)</a></span></p>

</div> */}
<h3 className='span1'>
What is in the box?</h3>
<ul>
    <li className='span1'>Rockerz 450, Charging Cable, User Manual, Warranty Card</li>
</ul>
<h4 className='span1'>
From the manufacturer</h4>
<img src={boatad} alt="pic" className='w-100'/>
<div className='buycart'>
  <p className='para1'>
  ₹1399 <br /><br />
₹63.00 delivery: June 22 - 25 <br /><br />
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

export default Phone;