import React from "react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export default function RouteError() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {isRouteErrorResponse(error) ? error.statusText : "Unknown error"}
        </i>
      </p>
      <Link to={`/`}>go back</Link>
    </div>
  );
}
