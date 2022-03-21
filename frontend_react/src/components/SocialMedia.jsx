import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.facebook.com/poohmiphan.suebpa"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/poohmipun-suebpha-b39b68227/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://github.com/6210743073" target="_blank" rel="noreferrer">
        {" "}
        <FaGithub />
      </a>
    </div>
  </div>
);
export default SocialMedia;
