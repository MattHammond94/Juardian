import { useState } from "react";

const FooterForm = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const acceptableEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const sendEmail = async (e) => {
    e.preventDefault();
    
    // Acceptable email address?

    // I have temporarrilly uninstalled resend and react email packages.
    // Unable to bypass their cors policy if not using SS components
    // Will likely need a backend to store all users email address' 
    // This will potentially allow me to send automated emails to all stored email address'

    console.log(`send email to ${emailAddress}`)
    setEmailAddress("");
  }

  return (
    <section className="formSection">
      <div className="registerHeader">
        <div className="line"></div>
        <h2>Register</h2>
        <div className="line"></div>
      </div>
      <p>If you would like to receive regular news updates from The Juardian,<br /> submit your email address below:</p>
      <div className="inputContainer">
        <input type="text" placeholder="Your email" value={ emailAddress } onChange={ (e) => setEmailAddress(e.target.value) } />
        <p className="errorCheck" style={{ display: acceptableEmail.test(emailAddress) ? 'none' : 'block' }}>&#x2715;</p>
      </div>
      <button className="registerButton" onClick={ sendEmail }>Sign Up</button>
    </section>
  )
}

export default FooterForm