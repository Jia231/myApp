import React from "react";

const InlineErrors = ({ error }) => {
  const divStyle = { color: "#ff5757" };
  return <div style={divStyle}>{error}</div>;
};

export default InlineErrors;
