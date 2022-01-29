import "./App.css";
import React, { useState, useEffect } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Table } from "./components/Table";

function App() {
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 60000000);
  // }, []);
  return (<div>{ loading ? <LoadingScreen setLoading={setLoading} /> : <Table /> }</div>)
}

export default App;
