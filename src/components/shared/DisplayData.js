import React from "react";
import Accordion from "react-bootstrap/Accordion";

const DataDisplay = ({ data }) => {
  const handleValueTypes = (value) => {
    if (typeof value === "string" || typeof value === "number") {
      return value;
    }
    if (typeof value === "boolean") {
      return String(value);
    }
    if (Array.isArray(value)) {
      return (
        <p style={{ marginLeft: "25px" }}>
          {value.map((val) => {
            return (
              <>
                {handleValueTypes(val)}
                <br />
              </>
            );
          })}
        </p>
      );
    }
    if (typeof value === "object") {
      {
        return Object.keys(value).map((valueKey, index) => {
          return (
            <>
              <span key={`${valueKey + index}`}>
                {valueKey}: {handleValueTypes(Object.values(value)[index])}
                <br />
              </span>
            </>
          );
        });
      }
    }
  };
  return (
    <div>
      {Array.isArray(data) ? (
        data.map((item) => {
          return (
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>{item.name}</Accordion.Header>
                <Accordion.Body>
                  {Object.keys(item).map((itemKey, index) => {
                    return (
                      <div key={`${itemKey + index}`}>
                        <span>
                          {itemKey}:{" "}
                          {handleValueTypes(Object.values(item)[index])}
                        </span>
                        <br />
                      </div>
                    );
                  })}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })
      ) : (
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>{data.name}</Accordion.Header>
            <Accordion.Body>
              {Object.keys(data).map((itemKey, index) => {
                return (
                  <div key={`${itemKey + index}`}>
                    <span>
                      {itemKey}: {handleValueTypes(Object.values(data)[index])}
                    </span>
                    <br />
                  </div>
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </div>
  );
};

export default DataDisplay;
