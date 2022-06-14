import React, { useState } from "react";
import { Helmet } from "react-helmet";
import VirtualizedSelect from "react-virtualized-select";
import axios from "axios";
import DevelopmentUrl from '../../data/api';
import "react-select/dist/react-select.css";
import "react-virtualized/styles.css";
import "react-virtualized-select/styles.css";
import "./index.css";

function Requirementgathering() {
  // const [itemtype, setItemtype] = useState(null)
  const token = localStorage.getItem("token");

  const [clientname, setClientname] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [startdate, setStartdate] = useState("");
  const [copax, setCopax] = useState("");
  const [technology, setTechnology] = useState("");
  const [techdescription, setTechdescription] = useState("");
  const [platform, setPlatform] = useState("");
  const [labsandbox, setLabsandbox] = useState("");
  const [mentor, setMentor] = useState("");
  const [labsupport, setLabsupport] = useState("");
  const [offlinesupport, setOfflinesupport] = useState("");
  const [addonsdescription, setAddonsdescription] = useState("");
  const [mcq, setMcq] = useState("");
  const [coding, setCoding] = useState("");
  const [project, setProject] = useState("");
  const [casestudy, setCasestudy] = useState("");
  const [proctor, setProctor] = useState("");
  const [dailyattendance, setDailyattendance] = useState("");
  const [weeklyattendance, setWeeklyattendance] = useState("");
  const [monthlyattendance, setMonthlyattendance] = useState("");
  const [weeklyperformance, setWeeklyperformance] = useState("");
  const [monthlyperformance, setMonthlyperformance] = useState("");
  const [consolidatedmonthlyreport, setConsolidatedmonthlyreport] = useState("");
  const [showmessage, setShowmessage] = useState("")
  const type = [
    { label: "React Js", value: "React Js" },
    { label: "Node Js", value: "Node Js" },
    { label: "Java", value: "Java"},
    { label: "AWS", value: "AWS" },
    { label: "Azure", value: "Azure" },
    { label: "Red Hat", value: "Red Hat" },
  ];

  const submitForm = (e) => {
    e.preventDefault();
    
    const data = {
      clientname: clientname,
      fullname: fullname,
      email: email,
      phone: phone,
      startdate: startdate,
      copax: copax,
      technology: technology,
      techdescription: techdescription,
      addons: {
        platform: platform,
        labsandbox: labsandbox,
        mentor: mentor,
        labsupport: labsupport,
        offlinesupport: offlinesupport
      },
      addonsdescription: addonsdescription,
      assessment: {
        mcq: mcq,
        coding: coding,
        project: project,
        casestudy: casestudy,
        proctor: proctor
      },
      reports: {
        dailyattendance: dailyattendance,
        weeklyattendance: weeklyattendance,
        monthlyattendance: monthlyattendance,
        weeklyperformance: weeklyperformance,
        monthlyperformance: monthlyperformance,
        consolidatedmonthlyreport: consolidatedmonthlyreport
      }

    }
    axios.post(`${DevelopmentUrl}/requirement`, data, {
      headers: {
        "Content-type": "application/json",
        "Authorization": `bearer ${token}`
      }
    })
      .then(res => {
        console.log(res);
        setShowmessage("Requirement submitted successfully");
      })
      .catch(err => {
        console.log(err);
       
      });

  }
  // const reset = () => {
  //   setClientname('');
  //   setFullname('');
  //   setEmail('');
  //   setPhone('');
  //   setStartdate('');
  //   setCopax('');
  //   setTechnology('');
  //   setPlatform('');
  //   setLabsandbox('');
  //   setLabsupport('');
  //   setOfflinesupport('');
  //   setMentor('');
  //   setTechdescription('');
  //   setAddonsdescription('');
  //   setMcq('');
  //   setCoding('');
  //   setProject('');
  //   setCasestudy('');
  //   setProctor('');
  //   setDailyattendance('');
  //   setWeeklyattendance('');
  //   setWeeklyperformance('');
  //   setMonthlyattendance('');
  //   setMonthlyperformance('');
  //   setConsolidatedmonthlyreport('');
  // }

  return (
    <div>
      <Helmet>
        <style>{"body { background-color: #F4F6FC }"}</style>
      </Helmet>
      <p>Requirement Gathering</p>
      <div style={{ display: "flex" }}>
        <form className="row g-3 abc" onSubmit={submitForm}>
          <div>
            <h5 className="heading">Customer Details </h5>
          </div>
          <div className="col-md-3">
            <label for="Number" className="form-label">
              Client Name
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Acme"
              onChange={(e) => {
                setClientname(e.target.value);
                console.log(e.target.value);
              }}
              required
            />
          </div>

          <div className="col-md-3">
            <label for="Number" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Abraham Zack"
              onChange={(e) => {
                setFullname(e.target.value);
                console.log(e.target.value);
              }}
              required
            />
          </div>
          <div className="col-md-3">
            <label for="Number" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="example@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(e.target.value);
              }}
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
                className="form-control"
                placeholder="2073247788"
                onChange={(e) => {
                  setPhone(e.target.value);
                  console.log(e.target.value);
                }}
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
              className="form-control"
              onChange={(e) => {
                setStartdate(e.target.value);
                console.log(e.target.value);
              }}
              required
            />
          </div>
          <div className="col-md-3">
            <label for="pax" className="form-label">
              No Of Pax
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="00"
              onChange={(e) => {
                setCopax(e.target.value);
                console.log(e.target.value);
              }}
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
                onChange={(value) => {setTechnology(value.value); console.log(value.value)}}
                value={technology}
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
                  onChange={(e) => {
                    setPlatform(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <label style={{ marginLeft: "20px" }}>Platform(LMS)</label>
              </div>
              <div style={{ marginLeft: "100px" }}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setLabsandbox(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <label style={{ marginLeft: "20px" }}>Lab Sandbox</label>
              </div>
              <div style={{ marginLeft: "100px" }}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setMentor(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <label style={{ marginLeft: "20px" }}>Mentor</label>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setLabsupport(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <label style={{ marginLeft: "20px" }}>Lab Support</label>
              </div>
              <div style={{ marginLeft: "115px" }}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setOfflinesupport(e.target.value);
                    console.log(e.target.value);
                  }}
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
              className="form-control"
              onChange={(e) => {
                setTechdescription(e.target.value);
                console.log(e.target.value);
              }}
              required
            />
          </div>

          <div className="col-md-6">
            <label for="pax" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              onChange={(e) => {
                setAddonsdescription(e.target.value);
                console.log(e.target.value);
              }}
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
                  onChange={(e) => {
                    setMcq(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <label style={{ marginLeft: "20px" }}>MCQ</label>
              </div>
              <div style={{ marginLeft: "85px" }}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setCoding(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <label style={{ marginLeft: "20px" }}>Coding</label>
              </div>
              <div style={{ marginLeft: "100px" }}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setProject(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <label style={{ marginLeft: "20px" }}>Project</label>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setCasestudy(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <label style={{ marginLeft: "20px" }}>Case Study</label>
              </div>
              <div style={{ marginLeft: "45px" }}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setProctor(e.target.value);
                    console.log(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setDailyattendance(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <label style={{ marginLeft: "10px" }}>
                  Daily Attendence Report
                </label>
              </div>
              <div className="col-md-6">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setWeeklyattendance(e.target.value);
                    console.log(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setWeeklyperformance(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <label style={{ marginLeft: "10px" }}>
                  Weekly Performance Report
                </label>
              </div>
              <div className="col-md-6">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setMonthlyattendance(e.target.value);
                    console.log(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setMonthlyperformance(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <label style={{ marginLeft: "10px" }}>
                  Monthly Performance Report
                </label>
              </div>
              <div className="col-md-6">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setConsolidatedmonthlyreport(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <label style={{ marginLeft: "10px" }}>
                  Consolidated Monthly Report
                </label>
              </div>
            </div>
          </div>
<hr/>
<p> {showmessage}</p>
          <div>
            <button class="button" type="submit">Submit</button>

            <button class="button" > Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Requirementgathering;
