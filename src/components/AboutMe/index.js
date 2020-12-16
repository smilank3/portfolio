
//About me page.
import React from 'react';



const About=(props)=>{

	return (

		<div style={{padding:'40px'}}> <h1 style={{textDecoration:'underline'}}>About</h1>

		  
		  <div style={{fontSize:'24px',marginTop:'30px'}}> 

            <p style={{fontSize:'18px',marginTop:'20px'}}>College</p>
               <ol style={{fontSize:'18px'}}>

               <li style={{display:'block'}}>Lehman college.</li>
                <li > Laguardia Community college </li>
               </ol>
		  
		  <p style={{fontSize:'18px',marginTop:'20px'}}>Major</p>
		   <ol style={{fontSize:'18px'}}>

               <li style={{display:'block'}}>computer science</li>
             
               </ol>
		 
 <p style={{fontSize:'18px',marginTop:'20px'}}>Email</p>
		   <ol style={{fontSize:'18px'}}>

               <li style={{display:'block'}}><a  style={{color:'blue'}} href= "mailto:milan.limbu@lc.cuny.edu"> milan.limbu@lc.cuny.edu</a></li>
             
               </ol>
		 



		   </div>
		</div>)
}


export default About;