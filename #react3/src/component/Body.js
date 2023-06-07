import React from "react";

const Body = (props) => {
  // console.log(props);
  return (
    <div>
      {props.name}의 {props.location}홈페이지입니다.
    </div>
  );
};

export default Body;
