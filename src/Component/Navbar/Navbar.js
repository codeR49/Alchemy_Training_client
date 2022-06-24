import React from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Utils/Auth';
function Navbar() {
  const auth = useAuth()
  let navigate = useNavigate();
  const logoutHnadler = (e) =>{
         auth.logout()
      //    localStorage.clear();
         
         navigate("/");
 }
  return (
    <div >


<nav class="navbar navbar-expand-lg navbar-light bg-light  fixed-top  " >

  <div class="container-fluid">

    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <Link class="navbar-brand mt-2 mt-lg-0" to="/inquiry">
        <img
          src="https://attachments.office.net/owa/mayank.singh%40alchemyinfotech.com/service.svc/s/GetAttachmentThumbnail?id=AAMkAGNhNjEyOWY3LTRhY2UtNGRjYi1hOWI4LWVkNmZkYzQ5NDkyOABGAAAAAAAOgJKSESCHTpReFO9hJfI9BwBQqZmfVQrsSZUV5OsGuWIyAAAAAAEMAABQqZmfVQrsSZUV5OsGuWIyAACJnXmmAAABEgAQAJNj1QS4h%2BhEohjdxQng6V8%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkZBRDY1NDI2MkM2QUYyOTYxQUExRThDQUI3OEZGMUIyNzBFNzA3RTkiLCJ0eXAiOiJKV1QiLCJ4NXQiOiItdFpVSml4cThwWWFvZWpLdDRfeHNuRG5CLWsifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsInVjIjoiNmMyYTg1ZTBiM2JlNGQ4ZDgwN2JkY2RmMmVkNjUxMGMiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA3NDMyN2Y2OS1kNzEwLTRhMWUtOGQxOC00NDhmMWVjOGJjZjIiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjExNTM4MDExMjAyMzA0MDA5MDJcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCJjNTY5YmI2Ni02ZTRhLTRlNTAtOWRkMi0zZTU5YTYyMTJmMTBcIixcInByaW1hcnlzaWRcIjpcIlMtMS01LTIxLTEyMjcwODQ0NC0zMTE0NDkzOTg3LTMyMzYyNzQ3NjktMjkxODg5NjdcIn0iLCJuYmYiOjE2NTU5ODM2ODksImV4cCI6MTY1NTk4NDI4OSwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDc0MzI3ZjY5LWQ3MTAtNGExZS04ZDE4LTQ0OGYxZWM4YmNmMiIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QDc0MzI3ZjY5LWQ3MTAtNGExZS04ZDE4LTQ0OGYxZWM4YmNmMiIsImhhcHAiOiJvd2EifQ.A6U-UlQ4ExO1CGCegmbR1rQipqZEFVgEVk2HcpUT_ZKrC6fgbeZcP9iyK648tavcOvkCbNw6qzNcGEfWhCHUj4P3wihWafCd0DQ_OZ7ZPSbZ1u8qyj2MPx3Szn7oncDLxmKf3bpW2vMiyRW80iVNzIV9eKEtqEe_L-NEv38TE08dSyb2JoWZAV5qBk3_GppKGtXAGSQr0LAxj7QyT7N0lDsM6V3c3NSvatfQ_N4yPAiCP1apnGUNQOljtHFL3K-B6Ok3dl9o61g8oPoT_fH0xYow3Y8KJb24PtEnCj1DduZA2jmjcBbvoiehHdiaiPi5bdL3PEtA4yJU4UG_-vI0yw&X-OWA-CANARY=ebmrG2IB_kSLyHdSizg7xVAUiIgLVdoYKIfFh2uMIGZ3w2res_FgA6Q_Jtxdh4JOmPbF0VPbuO8.&owa=outlook.office.com&scriptVer=20220603005.10&animation=true"
          height="30"
          width="100"
          alt="MDB Logo"
          loading="lazy"
        />
      </Link>
  
      {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
      </ul> */}

    </div>


    
    <div class="d-flex align-items-center">
     
      {/* <a class="text-reset me-3" href="#">
        <i class="fas fa-shopping-cart"></i>
      </a> */}
              <h6 style={{fontSize:"13px",color:"#2E384D",    fontfamily: 'Segoe UI'}}>{localStorage.getItem("name")}</h6>

{/* 
      <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-bell"></i>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div> */}

      <div class="dropdown">

        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://scontent.fblr22-1.fna.fbcdn.net/v/t1.6435-9/92576251_2650355771758271_3829620671948783616_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dCrfyLSXgsIAX-cQR1u&_nc_oc=AQn5rDWo9e6_uAU0XI178zwNa4C2iCcV0BQ0vfl0n3G3T5xkhh4HyU6X34FNLycIuXo&_nc_ht=scontent.fblr22-1.fna&oh=00_AT_v-nXFrwun9gxQxgdQ6ebTFHfnsgrgk-NwfwVl9pxAcA&oe=62CE8478" alt="profile_picture"
            class="rounded-circle"
            height="35"
         
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          {/* <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li> */}
          
          <li>
            {/* <a class="dropdown-item" href="#">Logout</a> */}
            <Link to="/" class="dropdown-item" onClick={logoutHnadler}>Logout</Link>
          </li>
        </ul>
      </div>
    </div>

  </div>
 
</nav>

    </div>
  )
}

export default Navbar