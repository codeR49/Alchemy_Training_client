import React from "react";
import "./Proposal.css";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";

function Proposal() {
  const location = useLocation();
  const { state } = location;

  let sentProposalTrainer = state.filterTrainer;
  let name = localStorage.getItem('name');


  let filterTrainerWithName = sentProposalTrainer.filter(function (el) {
    
    return state.trainername.map((i)=> {
      return(
        el.name.indexOf(i) !== -1
      )
    })
  });
  
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
                Client <span>:</span> {state.clientname + " "}
              </span>
            </p>
            <p>
              <span>
                Full Name <span>:</span> {state.fullname}
              </span>
            </p>
            <p>
              <span>
                Email ID <span>:</span> {state.email}
              </span>
            </p>
            <p>
              <span>
                Phone number <span>:</span>{"+91"+ state.phone} 
              </span>
            </p>
            <p>
              <span>
                Training start date <span>:</span> {state.startdate}
              </span>
            </p>
          </div>
          <div className="col-md-7">
            <p>
              <span>
                Technology <span>:</span> {state.technology}
              </span>
            </p>
            <p>
              <span>
                Add Ons <span>: </span> 
                     {state.platform === true ? "Platform " : ''}
                     {state.labsandbox === true ? "Lab Sandbox " : ''} 
                     {state.mentor === true ? "Mentor " : ''}
                     {state.labsupport === true ? "Lab Support " : ''}
                     {state.offlinesupport === true ? "Offline Support " : ''}
                
              </span>
            </p>
            <p>
              <span>
                 Assessment <span>: </span> 
                     {state.mcq === true ? "MCQ " : ''} 
                    {state.coding === true ? "Coding " : ''}
                    {state.project === true ? "Project " : ''} 
                    {state.casestudy === true ? "Case Study " : ''} 
                    {state.proctor === true ? "Proctoring " : ''}  
                 
                
              </span>
            </p>
            <p>
              <span>
                Reports <span>: </span> 
                    {state.dailyattendance === true ? "Daily attendance " : ''}
                     {state.weeklyattendance === true ? "Weekly attendance " : ''}
                     {state.monthlyattendance === true ? "Monthly attendance " : ''}
                     {state.weeklyperformance === true ? "Weekly performance " : ''}
                     {state.monthlyperformance === true? "Monthly performance " : ''}
                     {state.consolidatedmonthlyreport === true ? "Consolidated Monthly Report " : ''}
                
                
              </span>
            </p>
            <p>
              <span>
                Number of Pax <span>:</span> {state.copax}
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
            {filterTrainerWithName.map((proposolTrainer)=> {
              return(
                <>
                <p>
              <span>
                Name <span>:</span> {proposolTrainer.name}
                </span>
            </p>
            
            <p>
              <span>
                YOE <span>:</span> {proposolTrainer.yop}
              </span>
            </p>
            <p>
              <span>
                Technology <span>:</span> {proposolTrainer.language.map((technology)=> {
                  return(
                    <>
                    {`${technology}, ` }
                    </>
                  )
                })}
              </span>
            </p>
            <p>
              <span>
              Skills <span>:</span> {proposolTrainer.language.map((skill)=> {
                  return(
                    <>
                    {`${skill}, ` }
                    </>
                  )
                })}
              </span>
            </p>
            <p>
              <span>
                Language <span>:</span> {proposolTrainer.language.map((language)=> {
                  return(
                    <>
                    {`${language}, ` }
                    </>
                  )
                })}
              </span>
            </p>
            <p>
              <span>
                Corporate Client <span>:</span> {proposolTrainer.corporateclient}
              </span>
            </p>
            <p>
              <span>
                Hourly Rate <span>:</span> {proposolTrainer.hourlyrates}
              </span>
            </p>
                </>
              )
            })}
            
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
           {name} <br/>
           {state.subject} <br/>
           {state.mailbody}

            </h6><hr/>
          
          </div>

          <div className="col-md-4">{/* just for seperation */}</div>
          <div className="col-md-8">
           <Link to="/inquiry"> <button className="buttonemilsubmit">Exit</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proposal;
