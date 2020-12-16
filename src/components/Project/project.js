
//list of projects



import React from 'react';
// display the projects
const Projects=()=>{


		return (

		<div style={{padding:'30px'}}> <h1 style={{textDecoration:'underline'}}>Projects</h1>

		

		   <ol style={{display:'block', marginTop:'50px'}}>
		   <div>
		   <h3>  <a style={{textDecoration:'underline',color:'blue'}} href="http://unybooks.herokuapp.com/">Unybooks</a></h3>


		  	   <p>Ebook library (with ads options) prototype (2019).</p>
		   </div>

		   <div style={{marginTop:'30px'}}>
		   <h3> <a style={{textDecoration:'underline',color:'blue'}} href="https://mathsolverwebsite.herokuapp.com/">Math Equation to Tree</a></h3>
		   <p>Display tree on given math Equation.</p>
		   </div>

		   <div style={{marginTop:'30px'}}>
		   <h3>  <a style={{textDecoration:'underline',color:'blue'}} href="https://worldpopulationdata.herokuapp.com/">World population map</a></h3>
		   <p>
		       <ul>
                 
		        </ul></p>
		   </div>

		     <div style={{marginTop:'30px'}}>
		   <h3> <a style={{textDecoration:'underline',color:'blue'}} href="https://www.scheduledroid.com/">Schedule Board</a></h3>
		   <p>Build this for my neighborhood store during quarintine. (working ssprototype)</p>
		   </div>


		   
		   
		  
		   </ol>
		</div>)
}



export default Projects;