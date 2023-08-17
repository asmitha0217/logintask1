import React from 'react'
import nav from 'bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FcGoogle } from "react-icons/fc";
import { TiVendorApple } from "react-icons/ti";
import { FaFacebookSquare} from "react-icons/fa";

import './Login-Task.css';

function LoginTask() {
  return (
    <>
    <div>
      <div>
    <nav className="navbar navbar-dark bg-dark" aria-label="Dark offcanvas navbar">
    <div className="container-fluid">
      <a className="navSec navbar-brand" href="#">Uber</a>
      </div>
  </nav>
  </div>
  <div className="div-Sec container-fluid ">
  <form>
    <h1 class="h3 mb-3 fw-normal">what's is your Phone Number or<br/><span className='demo1'>email?</span></h1>
    <Form>
      <Form.Group className="firstForm mb-4" controlId="formBasicEmail">
        
        <Form.Control className="secondForm" type="email"  placeholder="Enter phone number or email" />
        
      </Form.Group>

      
      <Button className='button1' variant="dark" type="submit">
        continue
      </Button>
    </Form>

    <h6>or</h6>
    <Button className='button2' variant="secondary" type="submit">
    <FcGoogle className='FirstIcon'/>
       continue with Google
      </Button><br/><br/>
      <Button className='button3' variant="secondary" type="submit">
        <TiVendorApple className='SecondIcon'/>
        continue with Apple
      </Button><br/><br/>
      <Button className='button4' variant="secondary" type="submit">
      <FaFacebookSquare className='ThirdIcon'/>
        continue with Facebook
      </Button><br/><br/>
      <p className='FirstPara'>By Proceeding,you consent to get calls, WhatsApp or<br/>SMS messages, including by
      automated means,from<br/> Uber and its affiliates to the number provided .<br/>
      This site is protected by reCAPTCHA and the google <u className='FirstDemo'>privacy</u>,<br/><u className='FirstDemo'>Policy</u> and <u className='FirstDemo'>Terms of service</u> apply.
      </p>

    
  </form>
  </div>

      
        
        
      </div>
    
  
    </>
  );
}



export default LoginTask