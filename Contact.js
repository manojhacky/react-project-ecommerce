 import React from 'react'
 import './contact.css'
 import { FaBeer } from 'react-icons/fa';
 import { BsFillExclamationDiamondFill } from "react-icons/bs";
 import logo1 from "/home/manoj/react1/frontend/src/Box-t3.png"
 import logo2 from "/home/manoj/react1/frontend/src/returns-box-blue.png"
 import logo3 from "/home/manoj/react1/frontend/src/manage-address.png"
 import logo4 from "/home/manoj/react1/frontend/src/IN-your-account.png"
 import logo5 from "/home/manoj/react1/frontend/src/Payments_clear-bg-t3.png"
 import logo6 from "/home/manoj/react1/frontend/src/Prime_clear-bg.png"
 const Contact = ()=>(
<div>
    <h1 className='head1'>Customer Service</h1>
    <div className='ex1' >
    <h1 className='head1'><BsFillExclamationDiamondFill/></h1>
    <p>Enjoy the shopping experience in your language of preference by switching to your desired language (Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi and Bengali). To know more, visit this page.</p>
    </div>
    <h1 className='head1'>Hello. What can we help you with?</h1><hr /><br/>
    <h4 className='head1'>
Some things you can do here</h4><br/>
<div className='wholecards'>


    <div className="card1">
        <div className='ro1'>
        <img src={logo1} className="logos1"/>
        <div className="desc">
            <h3>Your Orders</h3>
            <p>Track packages</p>
            <p>edit or cancel orders</p>
        </div>
        </div>
    </div>


    <div className="card1">
        <div className='ro1'>
        <img src={logo2} className="logos1"/>
        <div className="desc">
            <h3>Retuens or Refund</h3>
            <p>Return or exchange items</p>
            <p>print return mailing labels</p>
        </div>
        </div>
    </div>



    <div className="card1">
        <div className='ro1'>
        <img src={logo3} className="logos1"/>
        <div className="desc">
            <h3>Manage Addresses</h3>
            <p>update your addresses</p>
            <p>Add address,landmark details</p>
        </div>
        </div>
    </div>


    <div className="card1">
        <div className='ro1'>
        <img src={logo4} className="logos1"/>
        <div className="desc">
            <h3>Account Settings</h3>
            <p>change your email or password</p>
            <p>update login information</p>
        </div>
        </div>
    </div>


    <div className="card1">
        <div className='ro1'>
        <img src={logo5} className="logos1"/>
        <div className="desc">
            <h3>Payment Settings</h3>
            <p>Add or edit payment methods</p>
            <p>change expired credit or debit card</p>
        </div>
        </div>
    </div>

    <div className="card1">
        <div className='ro1'>
        <img src={logo6} className="logos1"/>
        <div className="desc">
            <h3>Manage Prime</h3>
            <p>View your benefits</p>
            <p>Membership details</p>
        </div>
        </div>
    </div>



    </div>
</div>
)

export default Contact