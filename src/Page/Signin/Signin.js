import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Routes, useNavigate } from "react-router-dom";
import "./Signin.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useAuth } from "../../Component/Utils/Auth";

function Signin() {
  // const [isPasswordShow, setIsPasswordShow] = useState(false);
  const auth = useAuth();
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setErrorMessage] = useState("");
  let message;
  // const toggleIsPasswordShowValue = () => {
  //     setIsPasswordShow(!isPasswordShow);
  // };
  let navigate = useNavigate();
  let onchangeusernamehandler = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };
  let onchangepasswordhandler = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  const submithandler = (e) => {
    e.preventDefault();
    const Data = {
      username: username,
      password: password,
    };

    axios
      .post("http://localhost:8080/users/login", Data)
      .then((res) => {
        let { token } = res.data;

        localStorage.setItem("token", token);

        if (res.status === 200) {
          let roles = jwt_decode(localStorage.getItem("token")).roles;
          let name = jwt_decode(localStorage.getItem("token")).name;
          localStorage.setItem("roles", roles);
          localStorage.setItem("name", name);
          auth.login();
          message = (
            <Routes>
              {roles === "Training Executive"
                ? navigate("/requirement", { replace: true })
                : navigate("/TrainerSelector", { replace: true })}
            </Routes>
          );

          return message;
        }
      })
      .catch((error) => {
        console.log("error occured");
        console.log(error.data);
        setErrorMessage("Enter valid Username and Password");
      });
  };

  return (
    <>
      <Helmet>
        <style>{"body { background-color: #F5F8FB }"}</style>
      </Helmet>
      <div class="container">
        <div class="wrapper">
          <div class="title">
            <span>Sign in</span>
          </div>
          <form onSubmit={submithandler}>
            <div class="row">
              <i class="fas fa-user"></i>

              <input
                type="text"
                placeholder="User Name"
                onChange={onchangeusernamehandler}
                id="username"
                required
              />
            </div>
            <div class="row">
              <i class="fas fa-lock"></i>

              <input
                type="password"
                placeholder="Password"
                id="password"
                onChange={onchangepasswordhandler}
                required
              />
            </div>

            <div class="row button">
              <button type="submit">Login</button>
            </div>
          </form>
          <p>{error}</p>
        </div>
      </div>
    </>
  );
}

export default Signin;
