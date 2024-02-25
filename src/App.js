//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './compoents/About';
import Navbar from './compoents/Navbar';
import TextForm from './compoents/TextForm';
import Alert from './compoents/Alert';
// import {BrowserRouter,Route,Routes} from  "react-router-dom";


function App() {
 const [Mode,setMode]=useState('light');
 
 const [alert,setAlert]=useState(null);
 const setalert= (message,type)=>{
       setAlert({
        msg:message,
        type:type
       })
       setTimeout(()=>{setAlert(null)},1200);
 }
 const toggleMode=()=>{
  if(Mode === 'light'){
    setMode('dark');
    document.body.style.background='#212529';
    setalert("Dark Mode has been enabled","success")
   // document.title='TextUtils:DarkMode'
   
  }
  else if(Mode==='dark'){
    setMode('light');
    document.body.style.background='white';
    setalert("Lightmode has been enabled","success");
   // document.title='TextUtils:LightMode'
  }
 }
  return (
    <>   
   {/* <BrowserRouter>
    
<Navbar title="TextUtils" aboutText="About TextUtils" mode={Mode} togglemode={toggleMode}/>
<Alert alert={alert}/>


<Routes>
  <Route path="/About" element={<About/>}/>
  <Route path="/" element={<div className="container my-3"><TextForm heading="Enter Text to analyze below " mode={Mode} setalert={setalert}/></div>}>
  
  </Route>

</Routes>


</BrowserRouter> */}
<Navbar title="TextUtils" aboutText="About TextUtils" mode={Mode} togglemode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3"><TextForm heading="Enter Text to analyze below " mode={Mode} setalert={setalert}/></div>

    </>
    );
}

export default App;
