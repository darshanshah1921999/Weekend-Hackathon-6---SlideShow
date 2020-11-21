import React, { Component, useState } from "react";
import "../styles/App.css";
import Slide from "./Slide";

const App = (props) => {
  console.log("Hi");
  return (
    <>
      <Slide slides={props.slides} />
    </>
  );
};

export default App;
