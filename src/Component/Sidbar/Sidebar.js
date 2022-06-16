import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
// import avtar from "../../image/default-avatar-profile-icon-vector-18942381.png"
// import { Redirect,Switch } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Utils/Auth';
function Sidebar() {
    const auth = useAuth()
    let navigate = useNavigate();
    const logoutHnadler = (e) =>{
           auth.logout()
        //    localStorage.clear();
           
           navigate("/");
   }
  return (
    <div className="sidebar">
    
    <div class="profile">
                {/* <img src="https://www.w3schools.com/howto/img_avatar.png" alt="profile_picture"/> */}
                <img src="https://scontent.fblr22-1.fna.fbcdn.net/v/t1.6435-9/92576251_2650355771758271_3829620671948783616_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dCrfyLSXgsIAX-cQR1u&_nc_oc=AQn5rDWo9e6_uAU0XI178zwNa4C2iCcV0BQ0vfl0n3G3T5xkhh4HyU6X34FNLycIuXo&_nc_ht=scontent.fblr22-1.fna&oh=00_AT_v-nXFrwun9gxQxgdQ6ebTFHfnsgrgk-NwfwVl9pxAcA&oe=62CE8478" alt="profile_picture"/>
                
                <h3>{localStorage.getItem("name")}</h3>
                {/* <p>{localStorage.getItem("designation")}</p> */}
                <p>My Profile</p>
            </div>
    <div className="sidebar-center">
        <ul className="list">
           
           <Link to="#" className='Link'> <li className="list-item">
                <i className="list-item-icon fas fa-comments"></i>
                
                
                <span className="list-item-text">Inquiries</span>
            </li></Link>
            <Link to="#" className='Link'> <li className="list-item">
                <i className="list-item-icon fas fa-sticky-note"></i>
                
                <span className="list-item-text">Proposals</span>
            </li></Link>

            <Link to="/" className='Link'>
       <li className="list-item">
            
            <i className="list-item-icon fas fa-sign-out-alt"></i>
                <span className="list-item-text" onClick={logoutHnadler}>logout</span>
         
            </li>
            </Link>
            
        </ul>
    </div>
    {/* <div className="sidebar-bottom">
       <ul className='list'>
       <Link to="/" className='Link'>
       <li className="list-item">
            
            <i className="list-item-icon fas fa-sign-out-alt"></i>
                <span className="list-item-text" onClick={logoutHnadler}>logout</span>
         
            </li>
            </Link>
       </ul>
    </div> */}
</div>
  )
}

export default Sidebar