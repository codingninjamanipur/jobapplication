import React from "react";
import Header from "../Shared/Header/Header";
import Button from "react-bootstrap/Button";

// import Footer from '../Shared/Footer/Footer'
import "./Home.css";
function home() {
  return (
    <>
      <Header />
      <main></main>
      <div className="container1">

        <b className="col-md-5 mx-auto text-center">Lets employers find you</b>
        

      <Button className="mx-auto mt-3 mb-2">Upload your Resume</Button>
      </div>
      
    </>
  );
}

export default home;
