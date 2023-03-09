import React from 'react'
import './biscuit.css'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import imgshirt from '/home/manoj/react1/frontend/src/416izVjCCcL.jpg'
import shirtad from "/home/manoj/react1/frontend/src/blazer.jpg"
import {Navigate, useLocation,useNavigate} from 'react-router-dom';
const Clothes= ()=>{
  //  const {state} = useLocation();

return (

<div>
<container>
<row>
<div className='bis1'>

  <div className='inn1'> 
  <img src={imgshirt} alt="biscuit" className='imgs12'/>
<div className='pro1'>
<h1 className='head1'><sapn>Brand: Generic</sapn><br/>Men's Business Suit Vest Slim Fit Dress Vest Wedding Waistcoat</h1>
<h1 className='span1'><span className='red1'>Price:</span>	₹899.00 - ₹999.00</h1>
<p>	Inclusive of all taxes</p>
<p>Fit: True to size. Order usual size. </p>
{/* <div className="dets1"><hr/>
<p>Flavour	&nbsp;<span className='span1'>Vanilla</span></p> 
<p>Brand	<span className='span1'>Oreo</span></p>
<p>Material <span className='span1'>Feature	Vegetarian</span></p>
<p>Weight	<span className='span1'>300 Grams</span></p>
<p>Specialty	Suitable for <span className='span1'>vegeterians</span></p>
<p>Item Dimensions LxWxH	<span className='span1'>13.7 x 22.1 x 3.8 Centimeters</span></p>
<p>Item Firmness Description	<span className='span1'>Hard</span></p>
<p>Package Weight	<span className='span1'>0.32 Kilograms</span></p>
<p>Package Type	<span className='span1'>Pouch</span></p>
</div> */}
<hr />
<h5 className="hed1">number of items: 1</h5>
<ul>
<li>Care Instructions: Hand Wash Only.</li>
<li>Fit Type: Slim Fit</li>
<li>90%Polyester fibre+2%Spandex+8%Others The dress vest is well made with solid and neat stitching, soft and decent material looks as great as it feels -a sentiment confirmed by excellent customer ratings. No fading, no distortion and anti-wrinkle</li>
<li>V neck look at the front of the slim waistcoat, two real contrast color side pockets, five button vest and adjustable back buckle;Unique and classic design; No matter how much fashion changes, the waistcoat is neutral</li>
<li>The vest that was liberated from the three-piece suit has an incredible "magic power". Like a shirt, it is one of the essential items for men. Its sense of popularity is simply handy, and you can combine your elegance and gentlemanly temperament with a casual combination. Tie is the most important clothing accessory for men to reflect their taste, temperament, position, identity and economic ability. In the pursuit of men's beauty, the tie is an important manifestation of its taste.</li>
<li>Hand Wash/Dry clean. When you receive this British slim fit suit vest, the pocket is closed by some stitches. So after cutting stitches, you can use them.</li>
<li>Men's fashionable suit vest for formal or casual occasions,wedding,party,graduation, proms,dinner,dating,office</li>
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
<div className="dets1"><hr/>
<h2>Product Details</h2>
<p>Product Dimensions : 	&nbsp;<span className='span1'>71.12 x 53.34 x 1.27 cm; 450 Grams</span></p> 
<p>Date First Available : <span className='span1'> 22 March 2022</span></p>
<p>ASIN :  <span className='span1'>B09W5JXBCQ</span></p>
<p>Item model number:<span className='span1'>Wt</span></p>
<p>Department :<span className='span1'>Mens</span></p>
<p>Item Weight :<span className='span1'>450 g</span></p>
<p>Item Dimensions LxWxH :<span className='span1'>71.1 x 53.3 x 1.3 Centimeters</span></p>
<p>Best Sellers Rank:<span className='span1'>#9,499 in Clothing & Accessories <a href="#" >(see top 100 in clothing and accessories)</a></span></p>

</div>
<img src={shirtad} alt="pic" className='w-100'/>
<div className='buycart'>
  <p className='para1'>
  ₹899.00- ₹999.00 <br /><br />
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

export default Clothes