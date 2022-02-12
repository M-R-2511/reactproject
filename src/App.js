import React from "react";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header title= {["mohamed","Ahmed","Hesham"]} />
      <Content name = {[1,2,3,4,5]} />
      <Footer contactUs="any thing" />
    </>
  );
}

export default App;
