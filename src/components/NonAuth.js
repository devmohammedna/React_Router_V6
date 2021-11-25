import React from "react";
import { Link } from "react-router-dom";

export default function NonAuth({ permation }) {
  return (
    <div>
      <h2>Sorry, You are not able to access this page</h2>
      <h3>
        Your permation is <u>{permation}</u> now
      </h3>
      <Link to="/">Back To Home Page</Link>
    </div>
  );
}