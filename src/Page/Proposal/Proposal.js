
import React, { useState, useEffect } from "react";
import "./Proposal.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import DevelopmentUrl from "../../data/api";

function Proposal() {
  
  const token = localStorage.getItem("token");  
  const [onedata, setOnedata] = useState({});
  const [addons, setAddons] = useState({});
  const [assessment, setAssessment] = useState({});
  const [reports, setReports] = useState({});

  useEffect(() => {
    axios.get(DevelopmentUrl + '/requirement/reqone', {
      headers: {

        "Authorization": `bearer ${token}`
      }
    })
      .then(res => {
        setOnedata(res.data);
        setAddons(res.data.addons);
        setAssessment(res.data.assessment);
        setReports(res.data.reports);
      
      })
      .catch(err => console.error("YO YOU GOT AN ERROR IN AXIOS ", err))

  }, [])

  // console.log(addons);
  // console.log(assessment);
  // console.log(reports);

  return (
    <div>
      <Helmet>
        <style>{"body { background-color: #F4F6FC }"}</style>
      </Helmet>
      <p className="p-text">Proposal Details</p>
      <div style={{ display: "flex" }}>
        <div className="row g-3 proposal">
          <div style={{ display: "flex" }}>
            <h1 className="trainer-heading">
           Proposal Summary
            </h1>
           
          </div>
          <div className="col-md-5">
            <p>
              <span>
                Client <span>:</span> {onedata.clientname + " "}
              </span>
            </p>
            <p>
              <span>
                Full Name <span>:</span> {onedata.fullname}
              </span>
            </p>
            <p>
              <span>
                Email ID <span>:</span> {onedata.email}
              </span>
            </p>
            <p>
              <span>
                Phone number <span>:</span>{"+91"+ onedata.phone} 
              </span>
            </p>
            <p>
              <span>
                Training start date <span>:</span> {onedata.startdate}
              </span>
            </p>
          </div>
          <div className="col-md-7">
            <p>
              <span>
                Technology <span>:</span> {onedata.technology}
              </span>
            </p>
            <p>
              <span>
                Add Ons <span>: </span> 
                     {addons.platform === "on" ? "Platform " : ''}
                     {addons.labsandbox === "on" ? "Lab Sandbox " : ''} 
                     {addons.mentor === "on" ? "Mentor " : ''}
                     {addons.labsupport === "on" ? "Lab Support " : ''}
                     {addons.offlinesupport === "on" ? "Offline Support " : ''}
                
              </span>
            </p>
            <p>
              <span>
                 Assessment <span>: </span> 
                     {assessment.mcq === "on" ? "MCQ " : ''} 
                    {assessment.coding === "on" ? "Coding " : ''}
                    {assessment.project === "on" ? "Project " : ''} 
                    {assessment.casestudy === "on" ? "Case Study " : ''} 
                    {assessment.proctor === "on" ? "Proctoring " : ''}  
                 
                
              </span>
            </p>
            <p>
              <span>
                Reports <span>: </span> 
                    {reports.dailyattendance === "on" ? "Daily attendance " : ''}
                     {reports.weeklyattendance === "on" ? "Weekly attendance " : ''}
                     {reports.monthlyattendance === "on" ? "Monthly attendance " : ''}
                     {reports.weeklyperformance === "on" ? "Weekly performance " : ''}
                     {reports.monthlyperformance === "on" ? "Monthly performance " : ''}
                     {reports.consolidatedmonthlyreport === "on" ? "Consolidated Monthly Report " : ''}
                
                
              </span>
            </p>
            <p>
              <span>
                Number of Pax <span>:</span> {onedata.copax}
              </span>
            </p>
          </div>
          <hr />
          <div className="col-md-5">
            <div>
              <label
                for="Number"
                className="form-label"
                style={{ marginBottom: "30px", color: "#2E384D" }}
              >
                Trainer's Details
              </label>
          
            <p>
              <span>
                Name <span>:</span> Evin
              </span>
            </p>
            <p>
              <span>
                YOE <span>:</span> 10 yrs
              </span>
            </p>
            <p>
              <span>
                Technology <span>:</span> Java React HTML
              </span>
            </p>
            <p>
              <span>
              Skils <span>:</span> Java React HTML
              </span>
            </p>
            <p>
              <span>
                Language <span>:</span> Java
              </span>
            </p>
            <p>
              <span>
                Corporate Client <span>:</span> TCS Infosys
              </span>
            </p>
            <p>
              <span>
                Hourly Rate <span>:</span> 5000 INR /Hour
              </span>
            </p>
          </div>
           
          </div>
          <div className="col-md-7">
            <label
              for="Number"
              className="form-label"
              style={{ color: "#2E384D" }}
            >
              Message
            </label>
<hr/>
<h6 >
           Alex <br/>
           Java Trainer <br/>
           Hi alex ,

            </h6><hr/>
          
          </div>

          <div className="col-md-4">{/* just for seperation */}</div>
          <div className="col-md-8">
           <Link to="/inquiry"> <button className="buttonemilsubmit">Exit</button></Link>

            {/* <button className="buttonemilsubmit">Skip</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proposal;
