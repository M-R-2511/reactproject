import React from "react";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header title={["mohamed", "Ahmed", "Hesham"]} />
      <h1>this is content section</h1>
      <Content name={[1, 2, 3, 4, 5]} />
      <Footer num = {[1,2,3,4,5]} />
    </>
  );
}

export default App;
