import React, { Component } from 'react';
import '../Css/Signin.css';
import First from './First';
import logo from '../Images/logo.png'
class Signin extends Component { 
  constructor( props ){
    super( props )
    this.state = { 
      
    };
  }
  
  render() {
    return (
        <div>
            <div className='row'>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <First/>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 Signin_body">
                    <div className='row signin_opacity'>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div><img className='mainlogo' src={logo}/></div>
                        <h1 className='form_name'>Login</h1>
                        <div className='textbox'>
                            <i class="fa fa-user left" aria-hidden="true"></i>
                            <input type='text' placeholder='Employee No' name="employeeNumber"/>
                        </div>
                        <div className='textbox'>
                            <i class="fa fa-lock left" aria-hidden="true"></i>
                            <input type='password' placeholder='Password' name="password"/>
                        </div>
                        <input className='button' type='button' value='Sign in'/>
                        <p className='forgot'>Forget Password ?</p>
                        <div>
                            <p className='social_text'>Or sign in with</p><br/>
                            <div className='social_body'>
                                <i class="fa fa-google social_icons" aria-hidden="true"></i>
                                <i class="fa fa-facebook social_icons" aria-hidden="true"></i>
                                <i class="fa fa-linkedin social_icons" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <a href='/signup'>SIGN-UP</a>
                        <a href='/'><i class="fa fa-home"></i></a>
                        <a href='nav'><i class="fa fa-arrows" aria-hidden="true"></i></a>
                    </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}
export default Signin;