import React from 'react';
import Navbar from './Menu/Navbar';
import '../css/StartPage.css';

class StartPage extends React.Component { 
    render() {
       return ( 
          <div>        
         < Navbar />                            
             <h2>Welcome to react Website</h2>
             <center>
             <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/108383635/original/626f1fda69305efcb5076c8af2be5393c53ecda4/develop-and-fix-reactjs-web-application.png"
              alt="Italian Trulli"></img>
              </center>
                                
            </div>
         
       )
    }
 }
 export default StartPage;