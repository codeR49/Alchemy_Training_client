import React, { useState, useEffect } from "react";
import "../Trainer/Trainer.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import DevelopmentUrl from "../../data/api";

function Trainer() {
  
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
      <p className="p-text">Trainer Selector</p>
      <div style={{ display: "flex" }}>
        <div className="row g-3 abc">
          <div style={{ display: "flex" }}>
            <h1 className="trainer-heading">
              Recommended Trainers Based On the Selections
            </h1>
            <Link
              to="/updaterequirement"
              state={{
                from: {
                  onedata,
                  url: "requirement/requpdate",
                },
              }}
            >
              <button class="buttonedit">Edit</button>
            </Link>
          </div>
          <div className="col-md-4">
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
          <div className="col-md-8">
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
          <div className="col-md-4">
            <div>
              <label
                for="Number"
                className="form-label"
                style={{ marginBottom: "30px", color: "#2E384D" }}
              >
                Trainer's Name
              </label>
            </div>

            <div>
              <input type="checkbox" />
              <label style={{ marginLeft: "20px" }}>Edwin Hoyles</label>
            </div>
            <div>
              <input type="checkbox" />
              <label style={{ marginLeft: "20px" }}>Britney Jimenez</label>
            </div>
            <div>
              <input type="checkbox" />
              <label style={{ marginLeft: "20px" }}>Leo Reese</label>
            </div>
            <div>
              <input type="checkbox" />
              <label style={{ marginLeft: "20px" }}>Baldwin Larson</label>
            </div>
            <div>
              <input type="checkbox" />
              <label style={{ marginLeft: "20px" }}>Philbert Dittman</label>
            </div>
          </div>
          <div className="col-md-8">
            <label
              for="Number"
              className="form-label"
              style={{ color: "#2E384D" }}
            >
              Email
            </label>

            <input
              type="email"
              className="form-control iptemailto"
              placeholder="To"
            />
            <input
              type="text"
              className="form-control iptemailto"
              placeholder="Subject"
            />
            <textarea className="form-control iptemailtext" placeholder="" />
            <input
              type="file"
              id="myfile"
              name="myfile"
              className=" iptfile iptemailto"
              placeholder="To"
            />
          </div>

          <div className="col-md-4">{/* just for seperation */}</div>
          <div className="col-md-8">
            <button className="buttonemilsubmit">Submit</button>

            <button className="buttonemilsubmit">Skip</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainer;
