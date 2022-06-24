import React, { useState } from "react";
import { Helmet } from "react-helmet";
import VirtualizedSelect from "react-virtualized-select";
import "./index.css";
import "react-select/dist/react-select.css";
import "react-virtualized/styles.css";
import "react-virtualized-select/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom";

function Requirementgathering() {
 
  const dateNow = new Date();
  let hours = dateNow.getHours();
  let minutes = dateNow.getMinutes();
  hours = hours < 10 ? "0" : hours;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  const inquiry = "22" + hours + minutes;

  const [technology, setTechnology] = useState("");
  const [requirement, setRequirement] = useState({
    clientname: "",
    fullname: "",
    email: "",
    phone: "",
    startdate: "",
    copax: "",
    techdescription: "",
    addons: {
      platform: null,
      labsandbox: null,
      mentor: null,
      labsupport: null,
      offlinesupport: null,
    },
    addonsdescription: "",
    assessment: {
      mcq: null,
      coding: null,
      project: null,
      casestudy: null,
      proctor: null,
    },
    reports: {
      dailyattendance: null,
      weeklyattendance: null,
      monthlyattendance: null,
      weeklyperformance: null,
      monthlyperformance: null,
      consolidatedmonthlyreport: null,
    },
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
  
    if (
      name !== "clientname" &&
      name !== "fullname" &&
      name !== "email" &&
      name !== "phone" &&
      name !== "startdate" &&
      name !== "copax" &&
      name !== "techdescription" &&
      name !== "addonsdescription"
    ) {
      setRequirement((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setRequirement((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  
  const type = [
    { label: "React Js", value: "React Js" },
    { label: "Node Js", value: "Node Js" },
    { label: "Java", value: "Java" },
    { label: "AWS", value: "AWS" },
    { label: "Azure", value: "Azure" },
    { label: "Red Hat", value: "Red Hat" },
  ];
  requirement.technology = technology;
  requirement.inquiry = inquiry;
  
  const reset = () => {
    setRequirement({
      clientname: "",
      fullname: "",
      email: "",
      phone: "",
      startdate: "",
      copax: "",
      techdescription: "",
      addons: {
        platform: false,
        labsandbox: false,
        mentor: false,
        labsupport: false,
        offlinesupport: false,
      },
      addonsdescription: "",
      assessment: {
        mcq: false,
        coding: false,
        project: false,
        casestudy: false,
        proctor: false,
      },
      reports: {
        dailyattendance: false,
        weeklyattendance: false,
        monthlyattendance: false,
        weeklyperformance: false,
        monthlyperformance: false,
        consolidatedmonthlyreport: false,
      },
    });
    setTechnology("");
   
  };

  let navigate = useNavigate();
  const routeChange = () => {
    const confirm = window.confirm("Are you sure you to proceed to next page?");
      if (confirm === true) {
        navigate(`/TrainerSelector`, { state: requirement });
      } else{
        navigate(`/requirement`);
      }
    }
    
  return (
    <div>
      <Helmet>
        <style>{"body { background-color: #F4F6FC }"}</style>
      </Helmet>
      <p className="p-text">Requirement Gathering</p>
      <div style={{ display: "flex" }}>
        <form className="row g-3 reqgathering">
          <div >
            <h5 className="heading">Customer Details </h5>
  
          </div>
         
       
          <div className="col-md-3">
            <label for="Number" className="form-label">
              Client Name
            </label>

            <input
              type="text"
              name="clientname"
              value={requirement.clientname}
              className="form-control"
              placeholder="Acme"
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-3">
            <label for="Number" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              // value={requirement.fullname}
              className="form-control"
              placeholder="Abraham Zack"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label for="Number" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={requirement.email}
              className="form-control"
              placeholder="example@gmail.com"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label for="Number" className="form-label">
              Phone No
            </label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <div class="input-group-text">+91</div>
              </div>
              <input
                type="text"
                name="phone"
                value={requirement.phone}
                className="form-control"
                placeholder="2073247788"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-3">
            <label for="FromDate" className="form-label">
              Training Start Date
            </label>
            <input
              type="Date"
              name="startdate"
              value={requirement.startdate}
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label for="pax" className="form-label">
              No Of Pax
            </label>
            <input
              type="text"
              name="copax"
              value={requirement.copax}
              className="form-control"
              placeholder="00"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6"></div>

          <div className="col-md-6">
            <div>
              <h5 className="heading">Technology </h5>
            </div>
            {/* <label for="pax" className="form-label">Technology</label> */}

            <div className="col-md-6">
              <label for="Type" className="form-label">
                Choose a Technology
              </label>

              <VirtualizedSelect
                options={type}
                value={technology}
                onChange={(value) => {
                  setTechnology(value.value);
                  console.log(value.value);
                }}
                placeholder="Choose one"
                style={{ boxShadow: "5px 5px 5px #00000029" }}
                required
              />
            </div>
          </div>

          <div className="col-md-6">
            <label for="pax" className="form-label">
              Adds On
            </label>

            <div style={{ display: "flex" }}>
              <div>
                <input
                  type="checkbox"
                  name="platform"
                  // checked={requirement.addons.platform}
                  onChange={handleChange}
                />
                <label style={{ marginLeft: "20px" }}>Platform(LMS)</label>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <input
                  type="checkbox"
                  name="labsandbox"
                  // checked={requirement.addons.labsandbox}
                  onChange={handleChange}
                />
                <label style={{ marginLeft: "20px" }}>Lab Sandbox</label>
              </div>
              <div style={{ marginLeft: "100px" }}>
                <input
                  type="checkbox"
                  name="mentor"
                  // checked={requirement.addons.mentor}
                  onChange={handleChange}
                />
                <label style={{ marginLeft: "20px" }}>Mentor</label>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <input
                  type="checkbox"
                  name="labsupport"
                  // checked={requirement.addons.labsupport}
                  onChange={handleChange}
                />
                <label style={{ marginLeft: "20px" }}>Lab Support</label>
              </div>
              <div style={{ marginLeft: "35px" }}>
                <input
                  type="checkbox"
                  name="offlinesupport"
                  // checked={requirement.addons.offlinesupport}
                  onChange={handleChange}
                />
                <label style={{ marginLeft: "20px" }}>Offline Support</label>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <label for="pax" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              name="techdescription"
              value={requirement.techdescription}
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label for="pax" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              name="addonsdescription"
              value={requirement.addonsdescription}
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label for="pax" className="form-label">
              Assessments
            </label>
            <div style={{ display: "flex" }}>
              <div>
                <input
                  type="checkbox"
                  name="mcq"
                  // checked={requirement.assessment.mcq}
                  onChange={handleChange}
                />
                <label style={{ marginLeft: "20px" }}>MCQ</label>
              </div>
              <div style={{ marginLeft: "85px" }}>
                <input
                  type="checkbox"
                  name="coding"
                  // checked={requirement.assessment.coding}
                  onChange={handleChange}
                />
                <label style={{ marginLeft: "20px" }}>Coding</label>
              </div>
              <div style={{ marginLeft: "100px" }}>
                <input
                  type="checkbox"
                  name="project"
                  // checked={requirement.assessment.project}
                  onChange={handleChange}
                />
                <label style={{ marginLeft: "20px" }}>Project</label>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <input
                  type="checkbox"
                  name="casestudy"
                  // checked={requirement.assessment.casestudy}
                  onChange={handleChange}
                />
                <label style={{ marginLeft: "20px" }}>Case Study</label>
              </div>
              <div style={{ marginLeft: "45px" }}>
                <input
                  type="checkbox"
                  name="proctor"
                  // checked={requirement.assessment.proctor}
                  onChange={handleChange}
                />
                <label style={{ marginLeft: "20px" }}>Proctoring</label>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <label for="pax" className="form-label">
              Reports
            </label>
            <div style={{ display: "flex" }}>
              <div className="col-md-6">
                <input
                  type="checkbox"
                  name="dailyattendance"
                  // checked={requirement.reports.dailyattendance}
                  onChange={handleChange}
                />
                <label style={{ marginLeft: "10px" }}>
                  Daily Attendence Report
                </label>
              </div>
              <div className="col-md-6">
                <input
                  type="checkbox"
                  name="weeklyattendance"
                  // checked={requirement.reports.weeklyattendance}
                  onChange={handleChange}
                />
                <label style={{ marginLeft: "10px" }}>
                  Weekly Attendence Report
                </label>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="col-md-6">
                <input
                  type="checkbox"
                  name="weeklyperformance"
                  // checked={requirement.reports.weeklyperformance}
                  onChange={handleChange}
                />
                <label style={{ marginLeft: "10px" }}>
                  Weekly Performance Report
                </label>
              </div>
              <div className="col-md-6">
                <input
                  type="checkbox"
                  name="monthlyattendance"
                  // checked={requirement.reports.monthlyattendance}
                  onChange={handleChange}
                />
                <label style={{ marginLeft: "10px" }}>
                  Monthly Attendence Report
                </label>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="col-md-6">
                <input
                  type="checkbox"
                  name="monthlyperformance"
                  // checked={requirement.reports.monthlyperformance}
                  onChange={handleChange}
                />
                <label style={{ marginLeft: "10px" }}>
                  Monthly Performance Report
                </label>
              </div>
              <div className="col-md-6">
                <input
                  type="checkbox"
                  name="consolidatedmonthlyreport"
                  // checked={requirement.reports.consolidatedmonthlyreport}
                  onChange={handleChange}
                />
                <label style={{ marginLeft: "10px" }}>
                  Consolidated Monthly Report
                </label>
              </div>
            </div>
          </div>
          <hr />
          {/* <p className="p-text"> {showmessage}</p> */}
          <div>
            <button type="submit" onClick={routeChange} class="buttons">
              Next
            </button>

            <button
              class="buttons"
              type="reset"
              onClick={() => {
                if (window.confirm("Are you sure to reset this form?")) {
                  reset();
                }
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Requirementgathering;
