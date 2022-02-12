import React from "react";

function Header(props) {
  return (
    <>
      {props.title.map((e, k) => (
        <h2 key={k}>{e}</h2>
      ))}
    </>
  );
}
export default Header;
