import React from "react";
import RiseLoader from "react-spinners/RiseLoader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components.css";
export const LoadingScreen = ({ setLoading, setColumns, setRows }) => {
  return (
    <div className="text-center mt-5 container-fluid">
      <h1 className="mb-5">Welcome to Spreadsheet</h1>
      <RiseLoader color={"#198754"} size={30} />
      <div className="d-flex mb-3 mt-5 row justify-content-center align-items-center">
        <div className="form-width">
          <input
            type="text"
            className="form-control col-4 text-center mb-4"
            placeholder="Rows"
            onChange={(e) => setRows(e.target.value)}
          />
          <input
            type="text"
            className="form-control col-4 text-center"
            placeholder="Columns"
            onChange={(e) => setColumns(e.target.value)}
          />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => setLoading(false)}
      >
        Start
      </button>
    </div>
  );
};
