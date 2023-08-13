import React from "react";
import DisplayData from "../components/shared/DisplayData";
import fetchAllDragonsData from "../repositories/dragonsRepository";

const Dragons = () => {
  const { status, data, error, isFetching } = fetchAllDragonsData();
  return (
    <div>
      {status === "loading" ? (
        <span>Loading...</span>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div style={{ margin: "auto", width: "60%" }}>
            <h1>All Dragons</h1>
            <DisplayData data={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default Dragons;
