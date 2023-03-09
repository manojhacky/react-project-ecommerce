import * as React from 'react'
import {Navigate, useLocation,useNavigate} from 'react-router-dom';
import './new1.css'
const New1 =(props)=>{
    const {state} = useLocation();
    const navigate = useNavigate();
    console.log(state.id)
    if(state.id===1){
        navigate("/contact")
    }
    return(
    <div>
    <ul>
      
    </ul>
        <h1 className="new">hello</h1>
    </div>
    )
}

export default New1
