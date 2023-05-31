import React from "react";

const Header=function({num,color}){
console.log(num)
    return(
        <div>I am no.{num}, and I'm {color} head</div>
    );
}

export default Header;