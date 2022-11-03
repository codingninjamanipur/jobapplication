import React from "react";
import Header from "../Shared/Header/Header";
import Button from "react-bootstrap/Button";
import Footer from '../Shared/Footer/Footer'
import Card from 'react-bootstrap/Card';
import "./Home.css";
import ReactSearchBox from "react-search-box";
function home() {
  
  return (
    
    <>

      <Header />
     
      <main><Card.Title>Find your dream jobs with us easily</Card.Title>
      <input id="input" type="search" placeholder="Search Jobs" />
    
      </main>
     
      <div className="container1">
      
        <b className="col-md-5 mx-auto text-center">Lets employers find you</b>
        

      {/* <Button className="mx-auto mt-3 mb-2">Upload your Resume</Button> */}
      </div>
      
      <Footer/>
    </>
  
  );
}

export default home;
