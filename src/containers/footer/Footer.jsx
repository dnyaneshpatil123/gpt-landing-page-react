import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others?</h1>
    </div>

    <div className="gpt3__footer-btn" >
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo" >
        <img src={gpt3Logo} alt="gpt3_logo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>OpenAI</p>
        <p>ChatGPT</p>
        <p>DALL·E 3</p>
        <p>Sora</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Leadership</p>
        <p>Investors</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Contact Us</h4>
        <p>usersupport@openai.com</p>
        <p>+01 1234567890</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright gradient__text">
      <p>@2023 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
