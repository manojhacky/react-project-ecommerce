import React, {useState,useEffect} from 'react'
//import { Navigate} from "react-router-dom";
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import { Redirect } from 'react-router'
import './home.css'
import {Component} from 'react'
import New1 from './New1.js'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import Carousel1 from '/home/manoj/react1/frontend/src/maxresdefault.jpg'
import Carousel2 from '/home/manoj/react1/frontend/src/skin-care-product-ad-template-beauty-concept-simple-skincare-dropper-bottle-mock-up-set-minimal-yellow-background-193848663.jpg'
import Carousel3 from '/home/manoj/react1/frontend/src/1000_F_416478536_9A6YUCuACWa5X8fTGPupQ6JnW5YMkivk.jpg'
import video1 from '/home/manoj/react1/frontend/src/applead.mp4'
const Home1 =()=>{
  
  const [state, setstate] = useState([])
  const [count,usecount] = useState(0)
  
  useEffect(()=>{
  fetch('http://localhost:3000/gets1')
        .then((response) => {
          if(response.ok){
           
          return response.json()
         
        }
      })
        .then((data) => {
    setstate(data)
    usecount(0)
  //this.setState({a1:data,count:0})
        })
     });
   //fun1(props){
    //  const buttonValue= this.props.value;
     // console.log(buttonValue)
  //}
const navigate = useNavigate();

  const handleConfirmation = value => event =>  {
usecount(value)
if(value === 1){
navigate("/biscuit",{state:{id:value,datas:state}})

}
else if(value === 2) {
  navigate("/clothes")
}
else if(value === 3) {
  navigate("/electronics")
}
else if(value === 4) {
  navigate("/laptops")
}
else if(value === 5) {
  navigate("/mobile")
}
 
else if(value === 6) {
  navigate("/shoes")
}
 
  }
 
 
    
    
  //  const fun1=()=>{
  //     console.log("hi")
  //     return (
  //       <Navigate to="/new1" />
  //     )
  //   }

//const fun1=event=>{
 // this.setState({count:event.target.value})
 // console.log(count)
/* console.log(id)
 if(id===1){
   console.log(1)
 } */
   
    console.log(state)
    console.log(count)
  
    //{a1.map((each1)=>console.log(each1.id))}
  return (  
    
<div >

<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Carousel1}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Carousel2}
      alt="Second slide"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Carousel3}
      alt="Third slide"
    />
   
  </Carousel.Item>
</Carousel>
      
         <ul /*onClick={fun1}*/>
        <div className='maindiv'>
        
          
        {state.map((each)=>(
       
            <li  className="list1"  key={each.id} onClick={handleConfirmation(each.id)}>
            
            <div className='div1' >
            <h1 className='rot'>{each.name}</h1>
<img src ={each.imageurl} alt="empty" className='img1'/>

<p>price:{each.cost}-/</p>
<div className='button1'>
<button className='but1'>Buy Now</button>
<button className='but2'>Add to Cart</button>
</div>
</div>
            
          
</li>
    
        ))}
       
        </div>   
        </ul>   
        <div>
        <video src={video1} width="100%" height="400" muted controls="" autoplay="true" className="vid1" autoPlay loop type='video/mp4'
        />
        </div> 
     
<div className='mainfooter' id="services">
  <div className="footer1">
    <h3>Get to Know Us</h3><br />
    <a href="#">About Us</a><br />
    <a href="#">Careers</a><br />
    <a href="#">Press Releases</a><br />
    <a href="#">Gift a Smile</a><br />
    <a href="#">Amazon Cares</a><br />
    <a href="#">Amazon Science</a><br />

  </div>

  <div className='footer1'>
    <h3>Connect with Us</h3><br />
    <a href="#">Facebook</a><br />
     <a href="#">Twitter</a><br />
      <a href="#">Instagram</a><br />
  </div>

  <div className='footer1'>
    <h3>Make Money with Us</h3><br />
    <a href="#">Sell on Amazon</a><br />
     <a href="#">Sell under Amazon Accelerator</a><br />
      <a href="#">Become an Affiliate</a><br />
      <a href="#">Amazon Global Selling</a><br />
      <a href="#">Fulfilment by Amazon</a><br />
      <a href="#">Advertise Your Products</a><br />
      <a href="#">Amazon Pay on Merchants</a><br />
      
  </div>

  <div className='footer1'>
    <h3>	
Let Us Help You</h3><br />
    <a href="#">COVID-19 and Amazon</a><br />
     <a href="#">Your Account</a><br />
      <a href="#">Returns Centre</a><br />
      <a href="#">100% Purchase Protection</a><br />
      <a href="#">Amazon App Download</a><br />
      <a href="#">Amazon Assistant Download</a><br />
      <a href="#">Help</a><br />
      
  </div>
  

</div>

        </div>
        
        
    )
  }
    
export default Home1