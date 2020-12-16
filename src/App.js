import './App.css';
// user react-router to switch to pages.
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

} from "react-router-dom";

// project component
import Project from './components/Project/project';
import About from './components/AboutMe'
import Home from './components/Home'



function createMarkup() {
    return { __html: <span>fsfsf</span> };
}

function App() {
    return (
        <div className="App" style={{
        width: '100%',
  maxWidth: '1070px',
  
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,


    }}>


     
       <Router>
      <div >
   

       <nav className = "nav"  style={{marginBottom:'40px'}}>
           <ul style={{margin:0,padding:'10px',display:''}} >


              <li style={{float:'left',
              background:"#ff6600",color:'white',
              borderRadius:'2px',cursor:'pointer',height:'px',padding:'20px 5px'}}>
              <Link to="/"><span style={{textAlign:'center'}}>Ml..log</span></Link>

              </li>

         </ul>

             {/*link nav*/}
        <div style={{display:'flex',flexDirection:'row',float:'right'}}>
                 <button  style={{margin:'10px',outline:'none',border:'none',padding:'5px 8px',background:'',color:'',fontWeight:600,border:'2px solid black',borderRadius:'4px'}}>
                 <Link to="/project">Projects</Link></button>
                 <button  style={{margin:'10px',outline:'none',border:'none',padding:'5px 8px',fontWeight:600,border:'2px solid black',borderRadius:'4px'}}>
                 <Link to ="/aboutme">About Me</Link></button>
              
                
             
         </div> 

         </nav>



        <Switch>
        
       
        
        {/* path available*/}
      
          <Route path="/aboutme" > <About/></Route>
          <Route path="/project"> <Project/> </Route>
            <Route path="/"> <Home/></Route>
        </Switch>
      </div>
    </Router>




    </div>
    );
}

export default App;