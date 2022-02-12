import React from "react";
function Content(props) {
  return (
    <>
      {props.name.map((e, i) => {
        return <h1 key={i}>{e}</h1>;
      })}
    </>
  );
}
export default Content;
