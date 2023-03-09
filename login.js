import { useNavigate } from "react-router-dom";
import * as React from 'react';
import './login.css';
const Login =()=>{
    const navigate = useNavigate();

    return (
        <div className="op1">
<div className="login">
<form onSubmit="" action="" className="form1">
<label for="email1" >Email</label><br/>
<input type="email" placeholder="xyz@gmail.com" name="email1" /><br/>
<label for="password" >Password</label><br/>
<input type="password" placeholder="" name="password" /><br/>

</form>
</div>
</div>
    )
}

export default Login;