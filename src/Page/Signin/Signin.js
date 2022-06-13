import React, { useState } from 'react'
import {Helmet} from 'react-helmet';
import "./Signin.css";
import axios from 'axios';

function Signin() {
    // const [isPasswordShow, setIsPasswordShow] = useState(false);
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    
    // const toggleIsPasswordShowValue = () => {
    //     setIsPasswordShow(!isPasswordShow);
    // };
    let onchangeusernamehandler = (event) => {
        setUsername(event.target.value);
        console.log(event.target.value)
    }
    let onchangepasswordhandler = (event) => {
        setPassword(event.target.value);
        console.log(event.target.value)
    }
const submithandler = (e)=>{
e.preventDefault()
const Data = {
    username:username,
    password:password
}

axios.post("http://localhost:3000/users/login",Data)
.then((res)=>{
console.log(res)
})
}

    return (
       <>
        <Helmet>
                <style>{'body { background-color: #F5F8FB }'}</style>
            </Helmet>
        <div class="container">
            <div class="wrapper">
                <div class="title"><span>Sign in</span></div>
                <form onSubmit={submithandler}>
                    <div class="row">
                        <i class="fas fa-user"></i>

                        <input type="text" placeholder="User Name" onChange={onchangeusernamehandler} id='username' required />
                    </div>
                    <div class="row">

                        <i class="fas fa-lock"></i>   

                        <input type= 'password' placeholder="Password" id='password' onChange={onchangepasswordhandler} required />
                        
                    </div>
                   

                    <div class="row button">
                        <input type="submit" value="Login" />
                    </div>

                </form>
            </div>
        </div>
       
       </>
    )
}

export default Signin