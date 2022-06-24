import React, { useState, useEffect } from "react";
import "../Trainer/Trainer.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import DevelopmentUrl from "../../data/api";
import "./Enquiry.css";

function Enquiry() {
  const [proposal, setProposal] = useState([]);
  const token = localStorage.getItem("token");
 
  useEffect(() => {
    axios
      .get(DevelopmentUrl + "/requirement/allproposal", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        setProposal(res.data);
        
      })
      .catch((err) => console.error("YO YOU GOT AN ERROR IN AXIOS ", err));
  }, []);

  return (
    <div>
      <Helmet>
        <style>{"body { background-color: #F4F6FC }"}</style>
      </Helmet>
      {/* <p className="p-text">Trainer Selector</p> */}

      <div className="row g-3 inquiry">
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <h1 className="trainer-heading">Inquiries</h1>
          <Link to="/requirement">
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
            {proposal.map((inquiry) => {
              return (
                <tr>
                  <th scope="row">{inquiry.requirement.inquiry}</th>
                  <td>{inquiry.requirement.clientname}</td>
                  <td>{inquiry.requirement.fullname}</td>
                  <td>{inquiry.requirement.phone}</td>
                  <td>{inquiry.requirement.technology}</td>
                  <td>{inquiry.requirement.startdate}</td>
                  <td style={{textAlign:"center"}}>{inquiry.requirement.copax}</td>
                  {inquiry.trainerdetails.map((name)=> {
                    return(
                      <>
                      <td>
                      {name.name}
                      </td>
                      <td>{name.hasOwnProperty('Isverified') === false ? <p>Pending</p> : (name.Isverified === true? <p>Accepted</p> : <p>Rejected</p>)}</td>
                      </>
                      
                    )
                  })}

                  <td >
                    <Link to="/">View</Link>
                    <Link to="/">Edit</Link>
                    <Link to="/">Delete</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Enquiry;
