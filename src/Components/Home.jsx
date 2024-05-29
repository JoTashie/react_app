import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import Footer from './Footer';

const Home = () => {
    return (
      <div className="container mt-5">
        <div className="bg-image">
            <h1>Welcome to the Home Page</h1>
            <p>This is Roomie.</p>
               
               <Footer/>
           </div>
        </div>
       );
   }

   export default Home;