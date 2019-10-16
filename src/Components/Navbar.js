import React, { Component } from 'react';
import '../Css/Navbar.css';
import logo from '../Images/logo.png'
class Navbar extends Component { 
  render() {
    return (
      <div className='nav_body'>
{/* -----------------------------------------------NAV BAR---------------------------------------------------------  */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#"><img className='logo' src={logo}/>HRportal</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  My Info
                </a>
                <div class="dropdown-menu row" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">PaySlips</a>
                  <a class="dropdown-item" href="#">Leave</a>
                  <a class="dropdown-item" href="#">Attendance</a>
                  <a class="dropdown-item" href="#">Salary</a>
                  <a class="dropdown-item" href="#">Miscellaneous</a>
                </div>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Actions
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Apply</a>
                  <a class="dropdown-item" href="#">Review</a>
                  {/* <div class="dropdown-divider"></div> */}
                  <a class="dropdown-item" href="#">Track</a>
                </div>
              </li>

            </ul>
            <form class="form-inline my-2 my-lg-0">
              {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Signout</button>
            </form>
          </div>
        </nav>
{/* -----------------------------------------------NAV ITEMS---------------------------------------------------------  */}
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active a" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><i class="fa fa-rss icn" aria-hidden="true"></i>Feeds</a>
            <a class="nav-item nav-link a" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><i class="fa fa-rupee icn"></i>Salary</a>
            <a class="nav-item nav-link a" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><i class="fa fa-motorcycle icn"></i>Leave</a>
            <a class="nav-item nav-link a" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><i class="fa fa-calendar icn" aria-hidden="true"></i>Attendance</a>
            <a class="nav-item nav-link a" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><i class="fa fa-book icn" aria-hidden="true"></i>Directory</a>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;