// src/components/ErrorPage.js

import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = ({ message = "Something went wrong..." }) => {
  return (
    <div className="error">
      <FaExclamationTriangle size={80} style={{ marginBottom: "20px" }} />
      <h2>Error</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;
