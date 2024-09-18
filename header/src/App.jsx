import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl" style={{backgroundColor:'cyan'}}>
    <Header />
    <div>Name: nav</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
