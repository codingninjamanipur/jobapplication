import React from "react";
import Header from "../Shared/Header/Header";
import Button from "react-bootstrap/Button";

import "./Home.css";
import Search from "./Component/Search/Search";
function home() {
  return (
    <>
      <Header />
      <main>
        <div  className='search-input'>
          <Search/>
        </div>
        

        
      </main>
      <div className="container1">

        <b className="col-md-5 mx-auto text-center">Lets employers find you</b>
        

      <Button className="mx-auto mt-3 mb-2">Upload your Resume</Button>
      </div>
      
    </>
  );
}

export default home;
