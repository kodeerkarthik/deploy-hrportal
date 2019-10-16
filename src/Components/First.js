import React, { Component } from 'react';
import '../Css/First.css';
import logo from '../Images/logo.png'
import { networkInterfaces } from 'os';
class First extends Component { 
  constructor( props ){
    super( props )
    this.state = { 
      wish:''
    };
  }
  componentDidMount(){
    var time=new Date().getHours();
    if(time>=0 && time<12){this.setState({wish:'GOOD MORNING'});}
    if(time>=12 && time<16){this.setState({wish:'GOOD AFTERNOON'});}
    if(time>=16 && time<19){this.setState({wish:'GOOD EVENING'});}
    if(time>=19 && time<24){this.setState({wish:'GOOD NIGHT'});}
  }
  render() {
    return (
      <div className='first_body'>
          <div className='row opacity'>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div><img className='mainlogo' src={logo}/></div>
              <div><h1 className='white'>Welcome to HRportal</h1><p className='wlcm'>Streamline, Save Time, Better Clime</p></div>
              <div className='white wish'>
                <i class="fa fa-adjust sun_icn"/><br/>
                {this.state.wish}
              </div><hr/>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <a href='/signup'>SIGN-UP</a>
            </div>
          </div>
      </div>
    );
  }
}
export default First;