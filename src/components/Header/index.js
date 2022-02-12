import React from "react";

function Header(props) {
  return (
    <div className="bg-red-100 text-red-500 text-2xl">
      {props.title.map((e, k) => (
        <h2 key={k}>{e}</h2>
      ))}
    </div>
  );
}
export default Header;
