import React, { useState, useEffect } from "react";
import "../Trainer/Trainer.css";
import { Helmet } from "react-helmet";
import { useLocation,  useNavigate} from "react-router-dom";
import axios from "axios";
import DevelopmentUrl from "../../data/api";

function Trainer() {

  const location = useLocation();
  const { state } = location;
  
  let proposal = state;
  let navigate = useNavigate();
  const token = localStorage.getItem("token");

  let [trainer, setTrainer] = useState([]);
  const [trainername, setTrainername] = useState([]);
  const [trainerdetails, setTrainerdetails] = useState([]);
  const [tomail, setTomail] = useState([]);
  const [subject, setSubject] = useState("");
  const [mailbody, setMailbody] = useState("");
  const [emailtoken, setEmailtoken] = useState([]);
  const [isverified, setIsverified] = useState([]);
  const [showmessage, setShowmessage] = useState('')
 
  const handleChangeToMail = (e) => {

    let { name, value, checked } = e.target;
  
    name = name.split(',');
    let sendToMailArray = [...tomail];
    let trainerDetailsArray = [...trainerdetails];
    let trainerNameArray = [...trainername];
    let tokenArray = [...emailtoken];
    let IsverifiedArray = [...isverified];

    if (checked === true) {

      sendToMailArray.push(name[0]);
      trainerDetailsArray.push(value);
      trainerNameArray.push(name[1]);
      tokenArray.push(name[2]);
      IsverifiedArray.push(name[3])
    } else {
      const indexMailId = sendToMailArray.indexOf(name[0]);
      const trainerId = trainerDetailsArray.indexOf(value);
      const tname = trainerNameArray.indexOf(name[1]);
      const token = tokenArray.indexOf(name[2]);
      const status = IsverifiedArray.indexOf(name[3]);
      if (indexMailId > -1) {
        sendToMailArray.splice(indexMailId, 1); // 2nd parameter means remove one item only
      }
      if (trainerId > -1) {
        trainerDetailsArray.splice(trainerId, 1); // 2nd parameter means remove one item only
      }
      if(tname > -1){
        trainerNameArray.splice(tname, 1);
      }
      if(token > -1){
        tokenArray.splice(token, 1);
      }
      if(status > -1){
        IsverifiedArray.splice(status, 1);
      }
    }

    setTomail(sendToMailArray);
    setTrainerdetails(trainerDetailsArray);
    setTrainername(trainerNameArray);
    setEmailtoken(tokenArray);
    setIsverified(IsverifiedArray);
  };

  useEffect(() => {
    axios
      .get(DevelopmentUrl + "/trainer", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        setTrainer(res.data);
      })
      .catch((err) => console.error("YO YOU GOT AN ERROR IN AXIOS ", err));
  }, []);

  let filterTrainer = trainer.filter(function (el) {
    
    return el.technologyoverview.indexOf(state.technology) !== -1;
  });

  const submitForm = (e) => {
    e.preventDefault();

    const data = {
      trainerdetails: trainerdetails,
      sentmail: {
        to: tomail,
        subject: subject,
        mailbody: mailbody
      },
      requirement: state,
      emailToken: emailtoken,
      Isverified:isverified
     
    };
    axios
      .post(`${DevelopmentUrl}/requirement/proposal`, data, {
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setShowmessage("Email sent successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  proposal.filterTrainer = filterTrainer;
  proposal.trainername = trainername;
  proposal.subject = subject;
  proposal.mailbody = mailbody;

  const skipToInquiry = () => {
    if (window.confirm("Are you sure to skip this form? \n Note: Skipping this page will not email invite")) {
      navigate(`/proposal`, { state: proposal });
    }
  }
  
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
            
          </div>
          <div className="col-md-4">
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
                Phone number <span>:</span>
                {"+91" + state.phone}
              </span>
            </p>
            <p>
              <span>
                Training start date <span>:</span> {state.startdate}
              </span>
            </p>
          </div>
          <div className="col-md-8">
            <p>
              <span>
                Technology <span>:</span> {state.technology}
              </span>
            </p>
            <p>
              <span>
                Add Ons <span>: </span>
                {state.platform === true ? "Platform " : ""}
                {state.labsandbox === true ? "Lab Sandbox " : ""}
                {state.mentor === true ? "Mentor " : ""}
                {state.labsupport === true ? "Lab Support " : ""}
                {state.offlinesupport === true ? "Offline Support " : ""}
              </span>
            </p>
            <p>
              <span>
                Assessment <span>: </span>
                {state.mcq === true ? "MCQ " : ""}
                {state.coding === true ? "Coding " : ""}
                {state.project === true ? "Project " : ""}
                {state.casestudy === true ? "Case Study " : ""}
                {state.proctor === true ? "Proctoring " : ""}
              </span>
            </p>
            <p>
              <span>
                Reports <span>: </span>
                {state.dailyattendance === true ? "Daily attendance " : ""}
                {state.weeklyattendance === true ? "Weekly attendance " : ""}
                {state.monthlyattendance === true ? "Monthly attendance " : ""}
                {state.weeklyperformance === true ? "Weekly performance " : ""}
                {state.monthlyperformance === true ? "Monthly performance " : ""}
                {state.consolidatedmonthlyreport === true
                  ? "Consolidated Monthly Report "
                  : ""}
              </span>
            </p>
            <p>
              <span>
                Number of Pax <span>:</span> {state.copax}
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
            {
              filterTrainer.map((list, key) => {
              
                return (
                  <div>
                    <input
                      type="checkbox"
                      name={[list.email, list.name, list.emailToken, list.Isverified]}
                      value={list._id}
                      onChange={handleChangeToMail}
                    />
                    <label key={list.toString()} style={{ marginLeft: "20px" }}>
                      {`${list.name} (${list.hourlyrates})`}
                    </label>
                  </div>
                );
              })
              
            }
            
          </div>
          <div className="col-md-8">
            <label
              for="Number"
              className="form-label"
              style={{ color: "#2E384D" }}
              readonly
            >
              Email
            </label>

            <input
              type="email"
              className="form-control iptemailto"
              placeholder="To"
              value={trainername}
            />
            <input
              type="text"
              className="form-control iptemailto"
              placeholder="Subject"
              value={subject}
              onChange={(e) => { setSubject(e.target.value); console.log(e.target.value)}}
            />
            <textarea className="form-control iptemailtext" 
            value={mailbody}
            onChange={(e) => { setMailbody(e.target.value); console.log(e.target.value)}} />
            <input
              type="file"
              id="myfile"
              name="myfile"
              className=" iptfile iptemailto"
            />
          </div>

          <div className="col-md-4">{/* just for seperation */}</div>
          <div className="col-md-8">
            <button className="buttonemilsubmit" onClick={submitForm}>Submit</button>

            <button className="buttonemilsubmit" onClick={skipToInquiry}>Skip</button>
          </div>
        </div>
        <p>{showmessage}</p>
      </div>
    </div>
  );
}

export default Trainer;
