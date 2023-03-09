
import { BrowserRouter, Route,Routes} from "react-router-dom"
import * as React from 'react'
import './App.css';

import Hi from './App1.js'
//import {Component} from 'react'
import Header from './Header.js'
import Home from './Home.js'
import Contact from './Contact.js'
import About from './About.js'
import Test1 from './test1.js'
import New1 from './New1.js'
import Home1 from './home1.js'
import './App.css'
import Biscuit from "./biscuit.js"
import Login from './login.js'
import Clothes from './shirt.js'
import Phone from './phone.js'
import Laptop from './laptop.js'
import Mobile from './mobile.js'
import Shoes from "./shoes.js"
const App = () =>(
//<div className="main1">
       
<BrowserRouter>
    <Header />
<Routes>
 
    <Route  exact path="/" element={<Home1/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/test" element={<Test1/>} />
    <Route path="/new1" element={<New1/>} />
    <Route path="/biscuit" element={<Biscuit/>} />
    <Route path="/clothes" element={<Clothes/>} />
    <Route path="/electronics" element={<Phone/>} />
    <Route path="/laptops" element={<Laptop/>} />
    <Route path="/mobile" element={<Mobile/>} />
    <Route path="/shoes" element={<Shoes/>} />
   <Route path="/login" element={<Login/>} />
    
    </Routes>
</BrowserRouter>

//</div> 
)
    
  


export default App

//<h2>Welcome</h2> 
//<button  type="button">submit</button>
//<Hi a1={a1} key={a1.rollno}/> 