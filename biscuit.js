import React from 'react'
import './biscuit.css'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import img2 from '/home/manoj/react1/frontend/src/859d1650-431c-4cfa-bf29-b1bc84cc89a6.__CR0,0,970,600_PT0_SX970_V1___.jpg'
import {Navigate, useLocation,useNavigate} from 'react-router-dom';
const Biscuit = (props)=>{
    const {state} = useLocation();

return (

<div>
<container>
<row>
<div className='bis1'>

  <div className='inn1'> 
  <img src='https://images.news18.com/ibnlive/uploads/2021/07/1627540526_britannia-1-1200x800.jpg?impolicy=website&width=510&height=356' alt="biscuit" className='imgs12'/>
<div className='pro1'>
<h1 className='head1'>Cadbury Oreo Original Chocolatey Sandwich (Vanilla Creme) Biscuit Family Pack, 300g</h1>
<h1 className='span1'><span className='red1'>-6%</span> ₹75.00 (₹25.00 /100 g)</h1>
<p>M.R.P.: <span className='mrp'>₹80.00</span></p>
<div className="dets1"><hr/>
<p>Flavour	&nbsp;<span className='span1'>Vanilla</span></p> 
<p>Brand	<span className='span1'>Oreo</span></p>
<p>Material <span className='span1'>Feature	Vegetarian</span></p>
<p>Weight	<span className='span1'>300 Grams</span></p>
<p>Specialty	Suitable for <span className='span1'>vegeterians</span></p>
<p>Item Dimensions LxWxH	<span className='span1'>13.7 x 22.1 x 3.8 Centimeters</span></p>
<p>Item Firmness Description	<span className='span1'>Hard</span></p>
<p>Package Weight	<span className='span1'>0.32 Kilograms</span></p>
<p>Package Type	<span className='span1'>Pouch</span></p>
</div>
<hr />
<h3 className="hed1">About the Item</h3>
<ul>
<li>This pack contains 300 g of Cadbury Oreo Original Vanilla Creme Biscuit.</li>
<li>This rich vanilla creme filling cookies contain 483 calories and 19.6g of fat and 0mg of cholesterol per 100g</li>
<li>Rich, smooth Vanilla crème sandwiched between two crunchy chocolate wafers</li>
<li>Oreo biscuits are perfect for snacking or enjoying as a treat at any time of the day</li>
<li>Twist, lick, dunk! Enjoy OREO with a fresh glass of milk or add them to your favourite desserts</li>
<li>The go- to pack for snacking at home or sharing with your family or friends</li>
</ul><hr />
</div>
</div>
</div>
<img src={img2} alt="pic" className='w-100'/>
<div className='buycart'>
  <p className='para1'>
  ₹75.00 (₹25.00 /100 g) <br /><br />
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

export default Biscuit