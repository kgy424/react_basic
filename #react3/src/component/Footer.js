import React from "react";

const Footer = (props) => {
  const {name, location} = props;
  return(
    <div>
    {name}의 고향은 {location}입니다.
  </div>
  )
  
};

export default Footer;
