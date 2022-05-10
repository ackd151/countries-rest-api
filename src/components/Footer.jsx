import React from "react";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='what'>
        <a
          href='https://www.frontendmentor.io/home'
          target={"_blank"}
          rel={"noreferrer"}
        >
          Frontend Mentor
        </a>{" "}
        challenge{" "}
        <a
          href='https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca'
          target={"_blank"}
          rel={"noreferrer"}
        >
          Rest Countries API
        </a>
      </div>
      <div className='how'>
        Implemented using{" "}
        <a href='https://reactjs.org/' target={"_blank"} rel={"noreferrer"}>
          React
        </a>
      </div>
      <div className='who'>
        by{" "}
        <a
          href='https://github.com/ackd151'
          target={"_blank"}
          rel={"noreferrer"}
        >
          Dan Ackerman
        </a>{" "}
        &copy; 2022
      </div>
    </footer>
  );
};

export default Footer;
