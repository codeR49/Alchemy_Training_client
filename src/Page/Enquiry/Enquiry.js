
import React, { useState, useEffect } from "react";
import "../Trainer/Trainer.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import DevelopmentUrl from "../../data/api";
import "./Enquiry.css"

function Enquiry() {
  
    const [onedata, setOnedata] = useState({});
    const [addons, setAddons] = useState({});
    const [assessment, setAssessment] = useState({});
    const [reports, setReports] = useState({});



  return (
    <div>
      <Helmet>
        <style>{"body { background-color: #F4F6FC }"}</style>
      </Helmet>
      {/* <p className="p-text">Trainer Selector</p> */}
     
        <div className="row g-3 inquiry">
          <div style={{ display: "flex" , alignItems:"baseline" }}>
            <h1 className="trainer-heading">
             Inquiries
            </h1>
            <Link
              to="/requirement"
             
            >
              <button className="buttoninquiry">New Inquiry</button>
            </Link>
          </div>
        
        
         
         
         
          <table class="table">
  <thead>
    <tr>
      <th scope="col">Inquiry #</th>
      <th scope="col">Client Name</th>
      <th scope="col">Full Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Technology</th>
      <th scope="col">Start Date</th>
      <th scope="col">Number Of Pax</th>
      <th scope="col">Trainer</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1234567</th>
      <td>Acme</td>
      <td>Abraham Zack</td>
      <td>7766065881</td>
      <td>Java</td>
      <td>25/10/2022</td>
      <td>25</td>
      <td>Ediyon Holes</td>
      <td>Accepted</td>
      <td>
        <Link to="#">View</Link>
        <Link to="#">Edit</Link>
        <Link to="#">Delete</Link>
      </td>
    </tr>
    <tr>
      <th scope="row">1234567</th>
      <td>Acme</td>
      <td>Abraham Zack</td>
      <td>7766065881</td>
      <td>Java</td>
      <td>25/10/2022</td>
      <td>25</td>
      <td>Ediyon Holes</td>
      <td>Accepted</td>
      <td>
        <Link to="#">View</Link>
        <Link to="#">Edit</Link>
        <Link to="#">Delete</Link>
      </td>
    </tr>
    <tr>
      <th scope="row">1234568</th>
      <td>Acme</td>
      <td>Abraham Zack</td>
      <td>7766065881</td>
      <td>Java</td>
      <td>25/10/2022</td>
      <td>25</td>
      <td>Ediyon Holes</td>
      <td>Accepted</td>
      <td>
        <Link to="#">View</Link>
        <Link to="#">Edit</Link>
        <Link to="#">Delete</Link>
      </td>
    </tr>
  </tbody>
</table>

          
        </div>
    
    </div>
  );
}

export default Enquiry;

