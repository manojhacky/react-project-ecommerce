import React from 'react'
const Hi=(props)=>{
    const {a1} = props;

   return (

       <ul >
        
        {a1.map((each)=>(
            <li key ={each.rollno}>
            <p className='rot'>Rollno:{each.rollno}</p>
<p>Name:{each.name}</p>
<p>Age:{each.age}</p>
</li>
        ))}
           
        </ul>    
        
    )
}
export default Hi;