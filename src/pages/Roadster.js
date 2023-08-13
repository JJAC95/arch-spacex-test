import React from "react";
import DisplayData from "../components/shared/DisplayData";
import fetchElonsRoadster from "../repositories/roadsterRepository";

const Roadster = () => {
  const { status, data, error, isFetching } = fetchElonsRoadster();
  return (
    <div>
      {status === "loading" ? (
        <span>Loading...</span>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div style={{ margin: "auto", width: "60%" }}>
            <h1>All Roadsters</h1>
            <DisplayData data={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default Roadster;
