import React from "react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.css";
import Spreadsheet from "react-spreadsheet";

registerAllModules();

export const Table = ({ rows, columns }) => {
  const data = new Array(parseInt(rows))
    .fill(0)
    .map(() => new Array(parseInt(columns)).fill(0));
  return (
    <div className="text-center">
      <h1 className=" m-4">Spreadsheet:</h1>
      <div>
        <Spreadsheet data={data} />
      </div>

    </div>
  );
};
