import React from "react";

function Footer(props) {
  return (
    <>
      {props.num.map((e, i) => (
        <h1
          style={{
            color: "#888",
            backgroundColor: "#000",
            textAlign: "center",
            width: "fit-content",
            margin: " 10px auto",
          }}
          key={i}
        >
          {e}
        </h1>
      ))}
    </>
  );
}
export default Footer;
