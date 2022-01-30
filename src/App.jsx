import React, { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Table } from "./components/Table";

function App() {
  const [loading, setLoading] = useState(true);
  // By default, a 10x10 matrix is made if the user does not enter the size
  const [rows, setRows] = useState(10);
  const [columns, setColumns] = useState(10);
  return (
    <div>
      {loading ? (
        <LoadingScreen
          setLoading={setLoading}
          setColumns={setColumns}
          setRows={setRows}
        />
      ) : (
        <Table rows={rows} columns={columns} />
      )}
    </div>
  );
}

export default App;
