import * as React from 'react'
import { Navigate} from "react-router-dom";
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import { Redirect } from 'react-router'
import './home.css'
import {Component} from 'react'
import New1 from './New1.js'
import { useNavigate } from "react-router-dom";
import Carousel1 from '/home/manoj/react1/frontend/src/maxresdefault.jpg'
import Carousel2 from '/home/manoj/react1/frontend/src/skin-care-product-ad-template-beauty-concept-simple-skincare-dropper-bottle-mock-up-set-minimal-yellow-background-193848663.jpg'
import Carousel3 from '/home/manoj/react1/frontend/src/1000_F_416478536_9A6YUCuACWa5X8fTGPupQ6JnW5YMkivk.jpg'

class Home extends Component{
  
    state = {a1:[],count:0}
  
    componentDidMount() {
      fetch('http://localhost:3000/gets1')
        .then((response) => {
          if(response.ok){
           
          return response.json()
         
        }
      })
        .then((data) => {
    
  this.setState({a1:data,count:0})
        })
    }
   //fun1(props){
    //  const buttonValue= this.props.value;
     // console.log(buttonValue)
  //}
  handleConfirmation = value => event =>  {
this.setState({count:value})
    
  }
 
  render(){
    
    
   /* const fun1=()=>{
      console.log("hi")
      return (
        <Navigate to="/test" />
      )
    }
*/
//const fun1=event=>{
 // this.setState({count:event.target.value})
 // console.log(count)
/* console.log(id)
 if(id===1){
   console.log(1)
 } */
   
    const {a1,count} = this.state
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
        
          
        {a1.map((each)=>(
       
            <li  className="list1"  key={each.id} onDoubleClick={this.handleConfirmation(each.id)}>
            
            <div className='div1' >
            <h1 className='rot'>{each.name}</h1>
<img src ={each.imageurl} alt="empty" className='img1'/>

<p>price:{each.cost}-/</p>
<div className='button1'>
<button className='but1' >Buy Now</button>
<button className='but1'>Add to Cart</button>
</div>
</div>
            
          
</li>
    
        ))}
       
        </div>   
        </ul>    
     
        </div>
        
        
    )
  }
        }
export default Home