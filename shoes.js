import React from 'react'
import './biscuit.css'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import shoeimg from '/home/manoj/react1/frontend/src/shoeimg.jpg'
import shoead from '/home/manoj/react1/frontend/src/adidas.jpg'
import {Navigate, useLocation,useNavigate} from 'react-router-dom';
const Shoes = ()=>{
    const {state} = useLocation();

return (

<div>
<container>
<row>
<div className='bis1'>

  <div className='inn1'> 
  <img src={shoeimg} alt="biscuit" className='imgs12'/>
<div className='pro1'>
<h1 className='head1'>Big Fox Men's Loafer</h1>
<h1 className='span1'>Price:<span className='red1'>₹679.00 - ₹799.00</span></h1>
<p>Inclusive of all taxes</p>
<div className="dets1"><hr/>
<p>color	&nbsp;<span className='span1'>Sea Green</span></p> 
<p>Fit<span className='span1'>Free to size</span></p>
</div>
<hr />
<h3 className="hed1">About the Item</h3>
<ul>
<li>Sole: Polyvinyl Chloride</li>
<li>Closure: Pull On</li>
<li>Shoe Width: Medium</li>
<li>Material Type: Suede; Inner Material- Synthetic</li>
<li>Shoe Width: Medium; Closure: Slip On</li>
<li>Care Instructions - Don'T Use The Loafers In Water. The Loafers Are Very Easy To Maintain; No Need To Use Any Costly Polish Or Shiner. Just Use A Clean Cloth To Dust All The Dirt And Your Sandals Are Same As New- Its Simple!</li>
<li>Age Range Description: Adult; Pattern Type: Solid</li>
<li>Department Name: Mens</li>
</ul><hr />
</div>
</div>
</div>
<div>
    <h3 className='hed1'>Special offers and product promotions.</h3><br /><hr/>
    <ul className='hed1'>
        <li>Buy 2, Get 5% off & Buy 3, Get 10% off (Search any Big Fox Shoes, Loafers, Sneakers, Sandals and Slippers Buy Any 2 from them).<a href="#">Here's How</a></li>
        <li>10% Instant Discount up to INR 500 on SBI Credit Card Transactions. Min purchase value INR 2000.<a href="#">Here's How</a></li>
        <li>Prime Savings No cost EMI available on select cards. Please check 'EMI options' above for more details.<a href="#">Here's How</a></li>
        <li>No cost EMI available on select cards. Please check 'EMI options' above for more details.<a href="#">Here's How</a></li>
        <li>Get GST invoice and save up to 28% on business purchases.<a href="#">Signup for free</a></li>
    </ul>
</div>
<img src={shoead} alt="pic" className='w-100'/>
<div className='buycart'>
  <p className='para1'>
  ₹679.00 - ₹799.00 <br /><br />
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

export default Shoes