import React from "react";
import Spreadsheet from "react-spreadsheet";
import { ExampleImages } from "./ExampleImages";
import add from "../images/add.png";
import sub from "../images/sub.png";
import finalResult from "../images/finalResult.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components.css";
export const Table = ({ rows, columns }) => {
  const data = new Array(parseInt(rows))
    .fill(0)
    .map(() => new Array(parseInt(columns)).fill(0));
  return (
    <div className="text-center">
      <h1 className=" m-4 title-color">Spreadsheet</h1>
      <div>
        <Spreadsheet data={data} />
      </div>
      <h1 className="m-4 title-color">How To use:</h1>
      <div className="row d-flex justify-content-center">
        <div className=" col-3">
          <ExampleImages img={add} text={"Addition Case"} />
        </div>
        <div className=" col-3">
          <ExampleImages img={sub} text={"Subtraction Case"} />
        </div>
        <div className=" col-3">
          <ExampleImages img={finalResult} text={"Final result"} />
        </div>
      </div>
    </div>
  );
};
